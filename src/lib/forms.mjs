// Enquiry and catalogue forms. They post to /api/submit (functions/api/submit.js on Cloudflare
// Pages), which checks them and forwards them to the Google Apps Script in apps-script/Code.gs.
import { t, esc } from "./html.mjs";

const field = (label, name, { type = "text", req = false, full = false, ph = "", auto = "" } = {}) =>
  `<div${full ? ' class="full"' : ""}><label for="f-${name}">${label}${req ? "" : " <small>(optional)</small>"}</label><input id="f-${name}" name="${name}" type="${type}"${req ? " required" : ""}${ph ? ` placeholder="${esc(ph)}"` : ""}${auto ? ` autocomplete="${auto}"` : ""}></div>`;
const select = (label, name, opts, { req = true, full = false } = {}) =>
  `<div${full ? ' class="full"' : ""}><label for="f-${name}">${label}</label><select id="f-${name}" name="${name}"${req ? " required" : ""}><option value="">Choose one</option>${opts.map(o => `<option>${esc(o)}</option>`).join("")}</select></div>`;
const hidden = (m, form) => `<input type="hidden" name="form" value="${form}"><input type="hidden" name="site" value="${m.key}"><input type="hidden" name="page" value=""><input type="hidden" name="_t" value=""><div class="hp" aria-hidden="true"><label for="f-website-${form}">Leave this empty</label><input id="f-website-${form}" name="website" tabindex="-1" autocomplete="off"></div>`;

// Cloudflare Turnstile (a privacy-friendly "I am human" check). Shown only when the build has
// TURNSTILE_SITE_KEY; the matching TURNSTILE_SECRET goes on the Pages Function (see functions/api/submit.js).
const TURNSTILE_SITE_KEY = (process.env.TURNSTILE_SITE_KEY || "").trim();
const human = () => TURNSTILE_SITE_KEY ? `<div class="full"><div class="cf-turnstile" data-sitekey="${esc(TURNSTILE_SITE_KEY)}" data-size="flexible" data-theme="light"></div></div>\n` : "";

const buyerTypes = m => t(m, {
  uk: ["Housebuilder or developer", "Build-to-rent or student operator", "Housing association or registered provider", "Main contractor or fit-out", "Kitchen retailer or studio", "Distributor or merchant", "Architect or designer", "Other"],
  ae: ["Property developer", "Fit-out or joinery contractor", "Main contractor", "Interior designer or architect", "Villa or residence owner", "Building-material merchant or showroom", "Hospitality or serviced apartments", "Other"],
});

export function enquiryForm(m) {
  return `<form class="form" method="post" action="/api/submit" data-ajax data-ok="Thank you. We have your enquiry and will reply within one working day. To send drawings, reply to our confirmation email or WhatsApp them to ${m.whatsappDisplay}.">
${hidden(m, "enquiry")}
${field("Your name", "name", { req: true, auto: "name" })}
${field("Company", "company", { req: true, auto: "organization" })}
${field("Email", "email", { type: "email", req: true, auto: "email" })}
${field(t(m, { uk: "Phone", ae: "Phone or WhatsApp" }), "phone", { type: "tel", auto: "tel", ph: t(m, { uk: "+44", ae: "+971" }) })}
${select("You are a", "buyer_type", buyerTypes(m))}
${select(t(m, { uk: "Project size", ae: "Project size" }), "quantity", t(m, { uk: ["Under 20 kitchens", "20 to 50 kitchens", "50 to 200 kitchens", "200+ kitchens", "Ongoing supply (retail or distribution)", "Not sure yet"], ae: ["A single villa or residence", "Under 20 units", "20 to 100 units", "100 to 500 units", "500+ units", "Ongoing supply (showroom or merchant)", "Not sure yet"] }))}
${field(t(m, { uk: "Project location (town or postcode)", ae: "Project location (emirate or community)" }), "location", {})}
${select("Timing", "timing", ["Ready to order", "Within 3 months", "3 to 6 months", "6 to 12 months", "Just researching"], { req: false })}
<div class="full"><label>Interested in <small>(optional)</small></label><div class="checks">${["Kitchens", "Bathroom vanities", "Wardrobes", "Internal doors", t(m, { uk: "Sample doors", ae: "Design service" })].map(x => `<label><input type="checkbox" name="products" value="${x}"> ${x}</label>`).join("")}</div></div>
<div class="full"><label for="f-message">Tell us about the project</label><textarea id="f-message" name="message" required placeholder="${t(m, { uk: "House types, number of plots, preferred collections, delivery dates…", ae: "Unit types, number of units, style you have in mind, handover dates…" })}"></textarea></div>
<div class="full checks"><label><input type="checkbox" name="marketing" value="yes"> Send me occasional product and project news. You can unsubscribe at any time.</label></div>
${human()}<div class="full"><button class="btn primary" type="submit">Send enquiry</button> <p class="form-note mt1">We use your details only to reply to this enquiry. See our <a href="/privacy/">privacy notice</a>.</p></div>
</form><div class="form-status" role="status" aria-live="polite"></div>`;
}

export function catalogueForm(m) {
  return `<form class="form" method="post" action="/api/submit" data-ajax data-ok="Thank you. We will email the catalogue to you shortly.">
${hidden(m, "catalogue")}
${field("Your name", "name", { req: true, auto: "name", full: true })}
${field("Company", "company", { req: true, auto: "organization", full: true })}
${field("Work email", "email", { type: "email", req: true, auto: "email", full: true })}
${select("You are a", "buyer_type", buyerTypes(m), { full: true })}
<div class="full checks"><label><input type="checkbox" name="marketing" value="yes"> Send me occasional product and project news.</label></div>
${human()}<div class="full"><button class="btn primary" type="submit">Send me the catalogue</button></div>
</form><div class="form-status" role="status" aria-live="polite"></div>`;
}
