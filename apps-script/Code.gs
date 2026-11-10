/**
 * Sanyang website forms (sanyang.co.uk and sanyang.ae): saves each form to a tab of this Google Sheet,
 * emails the sales inbox for that site and sends the enquirer a confirmation.
 *
 * Set up (about 10 minutes):
 * 1. In the sales@ Google account, create a Google Sheet called "Sanyang website enquiries".
 *    Extensions > Apps Script. Replace the code with this file.
 * 2. Project Settings > Script properties. Add:
 *      FORM_SECRET   a long random string (the same one you give Cloudflare)
 *      NOTIFY_UK     sales@sanyang.co.uk
 *      NOTIFY_AE     sales@sanyang.ae
 * 3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone. Copy the /exec URL.
 * After editing this file: Deploy > Manage deployments > Edit > Version: New version > Deploy.
 */
const TABS = {
  enquiry: { name: "Enquiries", columns: ["submitted_at", "site", "name", "company", "email", "phone", "buyer_type", "quantity", "location", "timing", "products", "message", "marketing", "page"] },
  catalogue: { name: "Catalogue requests", columns: ["submitted_at", "site", "name", "company", "email", "buyer_type", "marketing", "page"] },
};
const SITE = { uk: { name: "Sanyang Cabinetry", url: "sanyang.co.uk", phone: "+44 7955 170009" }, ae: { name: "Sanyang Cabinetry UAE", url: "sanyang.ae", phone: "+44 7955 170009" } };

function doPost(e) {
  const props = PropertiesService.getScriptProperties();
  let payload;
  try { payload = JSON.parse(e.postData.contents); } catch (err) { return reply({ ok: false, error: "Bad request" }); }
  if (!payload.secret || payload.secret !== props.getProperty("FORM_SECRET")) return reply({ ok: false, error: "Not allowed" });
  const r = payload.record || {};
  const tab = TABS[r.form];
  if (!tab) return reply({ ok: false, error: "Unknown form" });
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try { getTab(tab).appendRow(tab.columns.map(c => clean(r[c]))); } finally { lock.releaseLock(); }

  const site = SITE[r.site] || SITE.uk;
  const notify = props.getProperty(r.site === "ae" ? "NOTIFY_AE" : "NOTIFY_UK");
  const subject = r.form === "catalogue" ? `Catalogue request: ${r.name}, ${r.company} (${site.url})` : `New enquiry: ${r.company} (${r.buyer_type}, ${r.quantity || "size not given"}) via ${site.url}`;
  const lines = Object.keys(r).filter(k => r[k] && k !== "form").map(k => `${k.replace(/_/g, " ")}: ${r[k]}`);
  if (notify) MailApp.sendEmail({ to: notify, replyTo: r.email, subject, body: lines.join("\n") + `\n\nSheet: ${SpreadsheetApp.getActive().getUrl()}` });
  const confirm = r.form === "catalogue"
    ? `Dear ${r.name},\n\nThank you for requesting our trade catalogue. A member of the team will email it to you shortly.\n\nSanyang Sales Team\n${site.url}\nWhatsApp / call: ${site.phone}`
    : `Dear ${r.name},\n\nThank you for your enquiry. We will reply within one working day.\n\nIf you have drawings, a unit schedule or a BOQ, just reply to this email with them attached.\n\nSanyang Sales Team\n${site.url}\nWhatsApp / call: ${site.phone}`;
  MailApp.sendEmail({ to: r.email, subject: r.form === "catalogue" ? "Your Sanyang catalogue request" : "We have your enquiry", body: confirm, name: "Sanyang Sales Team", replyTo: notify || undefined });
  return reply({ ok: true });
}
function getTab(tab) {
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(tab.name);
  if (!sheet) { sheet = ss.insertSheet(tab.name); sheet.appendRow(tab.columns.map(c => c.replace(/_/g, " "))); sheet.setFrozenRows(1); sheet.getRange(1, 1, 1, tab.columns.length).setFontWeight("bold"); }
  return sheet;
}
// Stops a cell from being read as a formula if someone types "=" at the start of a field.
function clean(v) { const s = v == null ? "" : String(v); return /^[=+\-@]/.test(s) ? "'" + s : s; }
function reply(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
