// Cloudflare Pages Function: receives the website forms at POST /api/submit, checks them and passes them
// to the Google Apps Script in apps-script/Code.gs, which saves them to a Google Sheet and emails the team.
//
// Settings (Cloudflare dashboard > each Pages project > Settings > Variables and secrets):
//   FORM_WEBHOOK_URL  the Apps Script web app URL, ending in /exec
//   FORM_SECRET       a long random string, the same one set in the Apps Script
//   TURNSTILE_SECRET  optional: the secret key of a Cloudflare Turnstile widget. When set, every form must
//                     pass the Turnstile check. Set TURNSTILE_SITE_KEY (a build variable) at the same time,
//                     so the pages show the widget, then redeploy.
// Both sites (UK and UAE) can use the same Apps Script: the "site" field says which one sent the form.

const FORMS = {
  enquiry: { fields: ["site", "page", "name", "company", "email", "phone", "buyer_type", "quantity", "location", "timing", "products", "message", "marketing"], required: ["name", "company", "email", "buyer_type", "message"] },
  catalogue: { fields: ["site", "page", "name", "company", "email", "buyer_type", "marketing"], required: ["name", "company", "email"] },
};
const MULTI = new Set(["products"]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LINK = /(https?:\/\/|www\.|\b[a-z0-9-]+\.(?:com|net|org|info|xyz|top|site|online|ru|io|biz)\b\/?)/gi;
// Pitches that kitchen buyers never send. Matched as whole words, case-insensitive.
const SPAM_WORDS = /\b(seo|backlinks?|guest posts?|link building|first page of google|rank(ing)? (higher )?on google|website traffic|web ?design services|app development services|lead generation services|bitcoin|forex|casino|viagra|cialis|payday loans?|porn)\b/i;

// Returns why a submission looks automated or like a sales pitch, or "" when it looks like a real buyer.
function spamReason(record, data) {
  if (data.get("website")) return "honeypot filled";
  const opened = Number(data.get("_t"));
  if (opened && Date.now() - opened < 3000) return "sent within 3 seconds of loading";
  const short = [record.name, record.location, record.phone].join(" ");
  if ((short.match(LINK) || []).length) return "link in name, location or phone";
  if (((record.message || "").match(LINK) || []).length >= 2) return "two or more links in the message";
  if (SPAM_WORDS.test(record.message || "") || SPAM_WORDS.test(record.company || "")) return "sales-pitch words";
  return "";
}

async function turnstileOk(env, data, request) {
  if (!env.TURNSTILE_SECRET) return true;  // not set up yet
  const token = String(data.get("cf-turnstile-response") || "");
  if (!token) return false;
  const body = new FormData();
  body.append("secret", env.TURNSTILE_SECRET);
  body.append("response", token);
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) body.append("remoteip", ip);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
    const out = await res.json();
    return !!out.success;
  } catch (err) {
    console.error("Turnstile check failed to run:", err.message);
    return true;  // never lose a real lead because the check itself is down
  }
}

export async function onRequestPost({ request, env }) {
  const wantsJson = (request.headers.get("Accept") || "").includes("application/json");
  const fallback = new URL(request.url).hostname.endsWith(".ae") ? "sales@sanyang.ae" : "sales@sanyang.co.uk";
  const reply = (status, error) => {
    if (wantsJson) return Response.json(error ? { ok: false, error } : { ok: true }, { status });
    const body = error ? `<h1>Your form was not sent</h1><p>${error}</p><p><a href="javascript:history.back()">Go back and try again</a></p>` : `<h1>Thank you</h1><p>We have your details and will reply within one working day.</p><p><a href="/">Back to the website</a></p>`;
    return new Response(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${error ? "Form not sent" : "Thank you"}</title><body style="font:18px/1.6 system-ui,sans-serif;max-width:36em;margin:10vh auto;padding:0 16px">${body}`, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
  };
  let data;
  try { data = await request.formData(); } catch { return reply(400, "We could not read the form. Please try again."); }
  const type = String(data.get("form") || "");
  const spec = FORMS[type];
  if (!spec) return reply(400, "Unknown form.");
  const record = { form: type, submitted_at: new Date().toISOString() };
  for (const f of spec.fields) {
    const values = MULTI.has(f) ? data.getAll(f) : [data.get(f) ?? ""];
    record[f] = values.map(v => String(v).trim().slice(0, 4000)).filter(Boolean).join(", ");
  }
  if (spec.required.some(f => !record[f])) return reply(400, "Please fill in every required field.");
  if (!EMAIL.test(record.email)) return reply(400, "Please check your email address.");
  // Spam gets a normal-looking success, so bots learn nothing, and nothing is saved or emailed.
  // Each one is logged (Cloudflare > the Pages project > Functions > Real-time logs).
  // No page-load time means the form did not come from our page with JavaScript on. A real person in that
  // situation sees a message with our email address; a bot posting straight to /api/submit gets nowhere.
  if (!Number(data.get("_t"))) {
    console.log(`No page-load time: ${record.site} ${record.form} from ${record.email}`);
    return reply(400, `Please send the form from our website with JavaScript switched on, or email ${fallback}.`);
  }
  const reason = spamReason(record, data);
  if (reason) {
    console.log(`Spam dropped (${reason}): ${record.site} ${record.form} from ${record.email}`);
    return reply(200);
  }
  if (!(await turnstileOk(env, data, request))) {
    console.log(`Turnstile failed: ${record.site} ${record.form} from ${record.email}`);
    return reply(400, `Please tick the "I am human" check above the button and send again. If it keeps failing, email ${fallback}.`);
  }
  if (!env.FORM_WEBHOOK_URL || !env.FORM_SECRET) {
    console.error("FORM_WEBHOOK_URL or FORM_SECRET is not set");
    return reply(500, `Our form is not connected yet. Please email ${fallback}.`);
  }
  try {
    const res = await fetch(env.FORM_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ secret: env.FORM_SECRET, record }), redirect: "follow" });
    const out = await res.json();
    if (!out.ok) throw new Error(out.error || "Apps Script refused the form");
  } catch (err) {
    console.error("Form forwarding failed:", err.message);
    return reply(502, `Something went wrong on our side. Please try again in a minute, or email ${fallback}.`);
  }
  return reply(200);
}
