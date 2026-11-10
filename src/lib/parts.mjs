// Reusable page sections.
import { esc, amp, tile, picture, btn, t, CHECK, strip } from "./html.mjs";

export const doorTile = (d, { fr = false, eager = false } = {}) =>
  `<figure class="dt${fr ? " fr" : ""}"><div class="im">${tile(d.img, `${d.name} door${d.code ? `, code ${d.code}` : ""}`, { eager })}</div><figcaption>${d.code ? `<span class="cd">${d.code}</span>` : ""}<span class="nm">${amp(d.name)}</span>${d.style ? `<span class="st">${d.style}</span>` : ""}</figcaption></figure>`;

export function collectionCard(c) {
  const pick = c.tiles.length >= 3 ? [c.tiles[0], c.tiles[Math.floor(c.tiles.length / 2)], c.tiles[c.tiles.length - 1]] : c.tiles;
  const n = c.code === "SPC" ? `${c.tiles.length} colours × 4 profiles` : `${c.tiles.length} ${c.tiles.length === 1 ? "finish" : "finishes"}`;
  return `<a class="ccard" href="/kitchen-cabinets/${c.slug}/"><div class="doors">${pick.map(d => tile(d.img, `${c.name} ${strip(d.name)} kitchen door`)).join("")}</div>
<div class="tx"><span class="code">${c.code} · ${c.group === "cabinet" ? "Cabinet collection" : "Signature range"}</span><h3>${c.name}</h3><p>${c.sub}</p><div class="meta"><span>${n}</span><span>${c.tierObj.name}</span></div></div></a>`;
}

export const ticks = items => `<ul class="ticks">${items.map(i => `<li>${CHECK}<span>${i}</span></li>`).join("")}</ul>`;

export const faqList = list => `<div class="faq">${list.map(([q, a]) => `<details><summary>${q}</summary><div class="a">${a.startsWith("<") ? a : `<p>${a}</p>`}</div></details>`).join("")}</div>`;

export function statsBand(m) {
  const p = m.proof;
  return `<section class="stats" aria-label="Sanyang in numbers"><div class="wrap"><ul>
<li><b><em>${p.years}</em></b><span>years of cabinet manufacturing</span></li>
<li><b><em>${p.containers}</em></b><span>containers shipped to the US every month</span></li>
<li><b><em>${p.area}</em></b><span>m² of our own manufacturing facilities</span></li>
<li><b><em>${p.finishes}</em></b><span>door and colour options in ${p.collections} collections</span></li>
</ul></div></section>`;
}

export const certs = () => `<div class="certs">
<div><b>ISO 9001</b><span>Quality management system (ISO 9001:2015)</span></div>
<div><b>FSC</b><span>FSC-certified timber available, with chain-of-custody documents</span></div>
<div><b>E1 · CARB P2</b><span>Low-formaldehyde boards for the UK, EU, Gulf and US</span></div>
<div><b>KCMA</b><span>Framed cabinetry tested to KCMA performance standards</span></div>
</div>`;

export function steps(m) {
  const S = t(m, {
    uk: [["Send your plans", "Drawings or a unit schedule for each house type, or a description of the project."], ["Receive a quotation", "Itemised by order code, on the delivery basis you choose: EXW, FOB, CIF or DDP."], ["Approve samples", "Sample doors and handles for you and your client to sign off colour and finish."], ["Manufacture", "Boards are cut, edged, finished and assembled in our own factory, to the approved samples."], ["Inspection", "Every order is checked before packing: sizes, finish, hardware and carton labels. Your inspector is welcome."], ["Delivered ready to fit", "Loaded to plan in 20ft or 40ft containers, to your UK port, warehouse or site."]],
    ae: [["Tell us about the project", "Drawings, a BOQ, a floor plan or simply an idea. WhatsApp, email or a call."], ["Site measurement and design", "Our in-house designers measure, draw the layouts and prepare 3D visuals and shop drawings."], ["Proposal and samples", "An itemised proposal with sample doors and finishes for you, your consultant and your client to approve."], ["Manufacture", "Made in our own factories to the approved drawings and samples, on flexible payment terms."], ["Inspection", "Every order is checked before packing. Your own inspector or consultant is welcome."], ["Delivered to site", "Packed by building, floor and unit, and delivered to your site or warehouse, ready for installation."]],
  });
  return `<ol class="steps">${S.map(([h, p]) => `<li><h3>${h}</h3><p>${p}</p></li>`).join("")}</ol>`;
}

export const section = (cls, inner) => `<section class="sec${cls ? " " + cls : ""}"><div class="wrap">${inner}</div></section>`;
export const head = (kicker, h2, lede = "", right = "") => `<div class="sec-head"><div>${kicker ? `<p class="kicker">${kicker}</p>` : ""}<h2>${h2}</h2>${lede ? `<p class="lede">${lede}</p>` : ""}</div>${right}</div>`;

export function postCard(p) {
  return `<a class="post-card" href="${p.path}"><div class="ph">${picture(p.img, { alt: strip(p.title), sizes: "(max-width:620px) 100vw, 33vw" })}</div><span class="cat">${p.category}</span><h3>${amp(p.title)}</h3><p>${esc(p.excerpt)}</p></a>`;
}
export { strip };
