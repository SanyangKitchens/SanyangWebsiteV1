// Cloudflare Pages Function: receives the website forms at POST /api/submit, checks them and passes them
// to the Google Apps Script in apps-script/Code.gs, which saves them to a Google Sheet and emails the team.
//
// Settings (Cloudflare dashboard > each Pages project > Settings > Variables and secrets):
//   FORM_WEBHOOK_URL  the Apps Script web app URL, ending in /exec
//   FORM_SECRET       a long random string, the same one set in the Apps Script
// Both sites (UK and UAE) can use the same Apps Script: the "site" field says which one sent the form.

const FORMS = {
  enquiry: { fields: ["site", "page", "name", "company", "email", "phone", "buyer_type", "quantity", "location", "timing", "products", "message", "marketing"], required: ["name", "company", "email", "buyer_type", "message"] },
  catalogue: { fields: ["site", "page", "name", "company", "email", "buyer_type", "marketing"], required: ["name", "company", "email"] },
};
const MULTI = new Set(["products"]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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
  // Bots fill the hidden "website" field or submit within moments of loading the page. They get a
  // normal-looking success, and nothing is saved.
  const opened = Number(data.get("_t"));
  if (data.get("website") || (opened && Date.now() - opened < 2500)) return reply(200);
  const record = { form: type, submitted_at: new Date().toISOString() };
  for (const f of spec.fields) {
    const values = MULTI.has(f) ? data.getAll(f) : [data.get(f) ?? ""];
    record[f] = values.map(v => String(v).trim().slice(0, 4000)).filter(Boolean).join(", ");
  }
  if (spec.required.some(f => !record[f])) return reply(400, "Please fill in every required field.");
  if (!EMAIL.test(record.email)) return reply(400, "Please check your email address.");
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
