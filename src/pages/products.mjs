// Product pages: the collections hub, 16 collection pages, colour finder, units, handles,
// construction, panels and mouldings, sample kitchen, bathroom vanities and the catalogue.
import { picture, tile, btn, t, amp, esc, breadcrumbSchema, faqSchema, ctaBand, photoUrl, tileUrl, preload, waBtn, slug, CHECK } from "../lib/html.mjs";
import { doorTile, collectionCard, ticks, faqList, section, head, certs } from "../lib/parts.mjs";
import { COLLECTIONS, TIERS, TIER_ROWS, CAT, COMPLIANCE, KEY_DIMS, HARDWARE, SPECTRUM_PROFILES, totalDoors } from "../data/collections.mjs";
import { catalogueForm } from "../lib/forms.mjs";

const cabinet = COLLECTIONS.filter(c => c.group === "cabinet"), ranges = COLLECTIONS.filter(c => c.group === "range");
const sizesLine = m => t(m, { uk: "UK modular widths from 150 to 1200 mm", ae: "Metric modular widths from 150 to 1200 mm" });

function hub(m) {
  const trail = [["Kitchen cabinets"]];
  const body = `
${section("", `${head("Cabinet collections", "Seven <b>cabinet collections</b>", "Six face-frame collections with solid-wood frames and five-piece doors, and Prism, our frameless European collection. The door you choose also fixes the construction behind it.")}
<div class="cgrid">${cabinet.map(collectionCard).join("")}</div>`)}
${section("cream", `${head("Signature door ranges", "Nine <b>signature ranges</b>", "Slab, gloss, shaker, oak-effect and designer doors, all supplied on our 18 mm plywood Frameless carcass with soft-close hinges and runners.")}
<div class="cgrid">${ranges.map(collectionCard).join("")}</div>`)}
${section("", `<div class="split"><div>
<p class="kicker">Choose with confidence</p><h2>Every door has <b>an order code</b></h2>
<p class="lede mt1">${totalDoors()} door and colour combinations, each with a short code that fixes the range, profile and colour. Build a schedule from the codes and we return an itemised quotation.</p>
${ticks(["Seven cabinet collections and nine signature ranges", "Five constructions, from Contract to Prestige", sizesLine(m), "Sample doors for sign-off before production", "Panels, plinth, cornice and fillers made in the door finish"])}
<div class="btns">${btn("/colours/", "Open the colour finder")}${btn("/construction/", "Compare constructions", "btn")}</div>
</div><div class="ph">${picture("b26-cover", { alt: "Two-tone kitchen with dark shaker wall units and an oak island", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`)}
${section("sand", `${head("Construction", "Five constructions, <b>one per budget</b>", "From premium dovetailed drawers for show homes to a value carcass for volume rental schemes.")}
<div class="grid g3">${TIERS.map(x => `<div class="card"><span class="num">${x.name.toUpperCase()}</span><h3>${x.carcass}</h3><p>${x.summary}</p><p class="mt1 small"><b>Used for:</b> ${x.for}</p></div>`).join("")}
<a class="card" href="/construction/" style="text-decoration:none;background:var(--brown);color:var(--cream)"><span class="num" style="color:var(--gold)">SPECIFICATION</span><h3 style="color:var(--cream)">Full construction table</h3><p style="color:rgba(243,236,228,.8)">Face frame, carcass, drawer box, runners, hinges, interior and shelves for every tier.</p></a></div>`)}
${ctaBand(m)}`;
  return {
    id: "kitchens", path: "/kitchen-cabinets/", nav: "kitchens",
    title: t(m, { uk: "Kitchen Cabinets: 16 Trade Collections, Factory-Direct", ae: "Kitchen Cabinets UAE: 16 Collections, Factory-Direct" }),
    description: t(m, {
      uk: "16 kitchen cabinet collections and 300 door and colour options, made in our own factory and supplied to UK and Irish housebuilders, contractors and retailers.",
      ae: "Explore 16 kitchen cabinet collections and 300 door and colour options, made in our own factories and supplied to UAE developers, contractors and showrooms.",
    }),
    hero: { kicker: "Kitchen cabinets", h1: "Sixteen collections. <b>300 doors.</b> One factory.", lede: t(m, { uk: "From value slab for build-to-rent to solid-wood shaker for show homes: every collection made in our own factory, in UK modular sizes, with an order code for every door.", ae: "From high-gloss European slab for city apartments to solid-wood shaker and raised panel for villas: every collection made in our own factories and designed in-house for your project." }), trail, img: "sy-white-u", pos: "center 55%" },
    preload: preload("sy-white-u"),
    pageType: "CollectionPage",
    schema: [breadcrumbSchema(m, [["Kitchen cabinets", "/kitchen-cabinets/"]]), { "@type": "ItemList", name: "Sanyang kitchen cabinet collections", itemListElement: COLLECTIONS.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: `${c.name} ${c.sub}`, url: `${m.url}/kitchen-cabinets/${c.slug}/` })) }],
    body,
  };
}

function collectionFaq(m, c) {
  const x = c.tierObj;
  return [
    [`What is the ${c.name} door made of?`, `${c.material}. The finish is ${c.finish.toLowerCase()}.`],
    [`What carcass is ${c.name} supplied on?`, `${c.name} is supplied on our ${x.name} construction: ${x.carcass} carcass, ${x.frame === "None, full access" ? "no face frame (full access)" : `${x.frame} face frame`}, ${x.drawer.toLowerCase()} drawer box, ${x.hinges.toLowerCase()} hinges and ${x.runners.toLowerCase()} runners.`],
    [`How many finishes does ${c.name} come in?`, c.code === "SPC" ? `Spectrum comes in ${c.tiles.length} colours, and every colour is made in all four profiles: Broad Rail, Broad Seamless, Fine Rail and Fine Seamless.` : `${c.name} comes in ${c.tiles.length} finishes, each with its own order code from ${c.tiles[0].code} to ${c.tiles.at(-1).code}.`],
    [`Can I get a sample ${c.name} door?`, `Yes. Order a full-size sample door (code SD) in any finish, or a sample door kit (SDK) of up to six doors plus handle samples for client presentations.`],
    [`Which cabinet sizes are available in ${c.name}?`, `Base, wall, tall and vanity units in ${sizesLine(m).toLowerCase()}, plus matching end panels, fillers, plinth, cornice and mouldings. See the full list on our cabinet units page.`],
  ];
}

function collectionPage(m, c) {
  const x = c.tierObj;
  const trail = [["Kitchen cabinets", "/kitchen-cabinets/"], [c.name]];
  const isCDL = c.code === "CDL" || c.code === "GHR";
  let doors;
  if (c.code === "SPC") {
    doors = `<h3 class="mb0">Four profiles</h3><p class="muted small">Every colour is made in all four. Order code = SPC + profile + colour number, e.g. SPC-BS04.</p>
<div class="tiles mt1" style="margin-bottom:46px">${SPECTRUM_PROFILES.map(p => doorTile({ code: p.code, name: p.label, img: p.img })).join("")}</div>
<h3 class="mb0">${c.tiles.length} colours</h3><p class="muted small">Shown in the Broad Rail profile. Plain and woodgrain finishes.</p>
<div class="tiles mt1">${c.tiles.map(d => doorTile({ ...d, code: d.code.replace("SPC-B", "") })).join("")}</div>`;
  } else if (isCDL) {
    const styles = [...new Set(c.tiles.map(d => d.style))];
    doors = `<div class="filter" data-filter="#tiles-${c.slug}" role="group" aria-label="Filter by door style"><button type="button" aria-pressed="true" data-v="">All styles</button>${styles.map(s => `<button type="button" aria-pressed="false" data-v="${esc(s)}">${s}</button>`).join("")}</div>
<div class="tiles" id="tiles-${c.slug}">${c.tiles.map(d => doorTile({ code: d.code, name: d.colour, style: d.style, img: d.img }).replace('<figure class="dt"', `<figure class="dt" data-k="${esc(d.style)}"`)).join("")}</div>`;
  } else {
    doors = `<div class="tiles">${c.tiles.map(d => doorTile(d, { fr: c.group === "cabinet" })).join("")}</div>`;
  }
  const related = COLLECTIONS.filter(o => o !== c && (o.group === c.group || o.tier === c.tier)).slice(0, 4);
  const faq = collectionFaq(m, c);
  const body = `
${section("", `<div class="split" style="align-items:start"><div class="prose">
<p class="kicker">${c.code} · ${c.group === "cabinet" ? "Cabinet collection" : "Signature range"}</p>
<h2 class="mt0">${c.name}: <b>${c.sub.toLowerCase()}</b></h2>
${c.long.map(p => `<p>${p}</p>`).join("")}
<h3>Best for</h3>${ticks(c.best)}
<div class="btns">${btn("/contact/", t(m, { uk: `Quote ${c.name} for a project`, ae: `Get a ${c.name} proposal` }))}${btn("#finishes", "See all finishes", "btn")}</div>
</div><div>
<table class="spec"><caption class="kicker" style="text-align:left">At a glance</caption><tbody>
<tr><th>Door</th><td>${c.material}</td></tr>
<tr><th>Finish</th><td>${c.finish}</td></tr>
<tr><th>Construction</th><td><a href="/construction/#${x.key}">${x.name}</a></td></tr>
<tr><th>Carcass</th><td>${x.carcass}</td></tr>
<tr><th>Face frame</th><td>${x.frame}</td></tr>
<tr><th>Drawer box</th><td>${x.drawer}</td></tr>
<tr><th>Hinges</th><td>${x.hinges}</td></tr>
<tr><th>Runners</th><td>${x.runners}</td></tr>
<tr><th>Finishes</th><td>${c.code === "SPC" ? `${c.tiles.length} colours × 4 profiles` : c.tiles.length}</td></tr>
<tr><th>Order codes</th><td>${c.code === "SPC" ? "SPC-B, BS, F or FS + colour 01–" + c.tiles.length : `${c.tiles[0].code} to ${c.tiles.at(-1).code}`}</td></tr>
<tr><th>Sizes</th><td>${sizesLine(m)}</td></tr>
<tr><th>Boards</th><td>E1 / CARB Phase 2</td></tr>
</tbody></table>
<div class="ph mt2">${picture(c.hero, { alt: `${c.name} ${c.sub.toLowerCase()} kitchen doors`, sizes: "(max-width:860px) 100vw, 45vw" })}</div>
</div></div>`)}
${section("cream", `<div id="finishes">${head("Finishes", `${c.name} <b>${c.code === "SPC" ? "profiles and colours" : "finishes"}</b>`, `Every finish has its own order code. Colours on screen are a guide: approve colour from a sample door before ordering.`)}${doors}</div>`)}
${section("", `<div class="split"><div class="ph">${picture(x.key === "frameless" ? "cab-frameless" : x.key === "contract" ? "cab-builder" : x.key === "flex" ? "cab-universal" : x.key === "slimline" ? "cab-slim" : "cab-premium", { alt: `${x.name} cabinet construction`, sizes: "(max-width:860px) 100vw, 50vw" })}</div><div>
<p class="kicker">Construction</p><h2>Built on <b>${x.name}</b></h2><p class="lede mt1">${x.summary}</p>
${ticks([`${x.carcass} carcass`, x.frame === "None, full access" ? "Frameless, full-access cabinet" : `${x.frame} face frame`, `${x.drawer} drawer box`, `${x.hinges} hinges`, `${x.runners} runners`, `Ships as: ${x.ship.toLowerCase()}`])}
<div class="btns">${btn("/construction/", "Compare all five constructions", "btn")}</div></div></div>`)}
${section("sand", `${head("Questions", `${c.name} <b>FAQ</b>`)}${faqList(faq)}`)}
${section("", `${head("Related", "You may also <b>consider</b>", "", btn("/kitchen-cabinets/", "All collections", "btn"))}<div class="cgrid">${related.map(collectionCard).join("")}</div>`)}
${ctaBand(m, { img: c.hero })}`;
  const kw = { meridian: "Shaker", equinox: "Shaker", halcyon: "Shaker", filament: "Slim Shaker", lantern: "Raised Panel", prism: "Frameless", daylight: "Shaker", ember: "Woodgrain", dusk: "Matt", lustre: "Gloss", spectrum: "Shaker", candela: "Traditional", "golden-hour": "Wood-Effect", dapple: "Oak", dawn: "Slab", eclipse: "Designer" }[c.slug];
  return {
    id: `col-${c.slug}`, path: `/kitchen-cabinets/${c.slug}/`, nav: "kitchens",
    title: `${c.name} ${kw} Kitchen Cabinets${m.key === "ae" ? " in the UAE" : ""}`,
    fullTitle: `${c.name} ${c.sub} Kitchen Cabinets | ${m.key === "ae" ? "Sanyang UAE" : "Sanyang"}`,
    description: `${c.name} ${c.sub.toLowerCase()} kitchen cabinets: ${c.code === "SPC" ? "35 colours in 4 profiles" : `${c.tiles.length} finishes`} on ${x.name} construction (${x.carcass}). Factory-direct for ${t(m, { uk: "UK trade and projects", ae: "UAE projects and trade" })}.`.slice(0, 160),
    hero: { kicker: `${c.code} · ${c.group === "cabinet" ? "Cabinet collection" : "Signature range"}`, h1: `${c.name} <b>${c.sub.toLowerCase()}</b> kitchens`, lede: c.desc, trail, img: c.hero,
      after: `<div class="pills"><span class="pill g">${x.name} construction</span><span class="pill">${c.code === "SPC" ? "35 colours × 4 profiles" : `${c.tiles.length} finishes`}</span><span class="pill">${c.finish}</span></div>` },
    preload: preload(c.hero),
    ogImage: photoUrl(c.hero, 1200, m),
    schema: [breadcrumbSchema(m, [["Kitchen cabinets", "/kitchen-cabinets/"], [c.name, `/kitchen-cabinets/${c.slug}/`]]), faqSchema(faq),
      { "@type": "ItemList", name: `${c.name} door finishes`, numberOfItems: c.tiles.length, itemListElement: c.tiles.slice(0, 60).map((d, i) => ({ "@type": "ListItem", position: i + 1, name: `${d.code} ${d.name || d.colour}`, image: tileUrl(d.img, m) })) }],
    body,
  };
}

function colours(m) {
  const fams = CAT.colours;
  const total = Object.values(fams).reduce((n, v) => n + v.length, 0);
  const byCode = Object.fromEntries(COLLECTIONS.map(c => [c.code, c]));
  const where = codes => [...new Set(codes.map(cd => cd.split("-")[0]))].map(p => byCode[p] ? `<a href="/kitchen-cabinets/${byCode[p].slug}/">${byCode[p].name}</a>` : p).join(", ");
  const body = section("", `<div class="search"><label class="hp" for="csearch">Search colours</label><input id="csearch" type="search" placeholder="Search a colour, e.g. green, oak or Lichen" data-search=".chip"></div>
${Object.entries(fams).filter(([, v]) => v.length).map(([f, v]) => `<div class="fam" id="${slug(f)}"><h3>${amp(f)} <small>${v.length} colours</small></h3><div class="chips">${v.map(e => `<div class="chip" data-k="${esc((e.name + " " + f + " " + e.codes.join(" ")).toLowerCase())}">${tile(e.img, `${e.name} kitchen door colour`)}<span><b>${e.name}</b><small>${e.codes.slice(0, 3).join(" · ")}${e.codes.length > 3 ? ` +${e.codes.length - 3}` : ""}</small><small>${where(e.codes)}</small></span></div>`).join("")}</div></div>`).join("")}
<p class="muted small">Colours are reproduced as accurately as a screen allows. Always approve colour from a sample door before ordering.</p>`) + ctaBand(m);
  return {
    id: "colours", path: "/colours/", nav: "kitchens",
    title: t(m, { uk: "Kitchen Door Colour Finder: 119 Colours", ae: "Kitchen Door Colour Finder: 119 Colours, UAE" }),
    description: `Find a kitchen door colour across all 16 Sanyang collections: ${total} colours grouped by family, from whites and greys to greens, blues and oak, with order codes.`,
    hero: { kicker: "Colour finder", h1: `${total} colours, <b>every collection</b>`, lede: "Every colour we make, grouped by colour family, with the order codes that show which collections carry it.", trail: [["Kitchen cabinets", "/kitchen-cabinets/"], ["Colour finder"]] },
    schema: [breadcrumbSchema(m, [["Kitchen cabinets", "/kitchen-cabinets/"], ["Colour finder", "/colours/"]])],
    body,
  };
}

function units(m) {
  const U = CAT.units;
  const grp = (k, title, intro, tall = false) => `<div class="mt3" id="${k}"><h2>${title}</h2><p class="lede mt1">${intro}</p><div class="ugrid mt2">${U[k].map(u => `<div class="ucard${tall ? " tall" : ""}"><div class="dw" role="img" aria-label="${esc(u.name)} front elevation">${u.svg.replace(/width="[^"]+mm" height="[^"]+mm"/, "")}</div><span class="uc">${u.code}</span><span class="un">${u.name}</span><span class="uw"><span>W</span>${u.widths.join(" · ")}</span><span class="ux">${u.note}</span></div>`).join("")}</div></div>`;
  const body = section("", `<div class="split" style="align-items:start"><div>
<p class="kicker">Dimensions</p><h2>${t(m, { uk: "Made to <b>UK modular sizes</b>", ae: "Made to <b>metric modular sizes</b>" })}</h2>
<p class="lede mt1">${t(m, { uk: "Our cabinets are made to UK modular sizes, not converted from inches, so they work with UK worktops, appliances and fitting practice.", ae: "Our cabinets are made to metric modular sizes that work with standard 600 mm worktops and European built-in appliances used across the UAE." })} All dimensions are in millimetres.</p></div>
<table class="spec"><tbody>${KEY_DIMS.map(([a, b]) => `<tr><th>${a}</th><td>${b}</td></tr>`).join("")}</tbody></table></div>
${grp("base", "Base units", "H720 × D560 carcass, 870 mm on 150 mm adjustable legs. Soft-close as standard on every construction except Contract.")}
${grp("wall", "Wall units", "H720 standard, H900 tall and H360 bridging. D300 carcass. Two adjustable shelves in standard units.")}
${grp("tall", "Tall units", "H1970 (2120 on legs) lines up with H720 wall units; H2150 (2300 on legs) with H900 walls. Housings take standard 600 mm built-in appliances.", true)}
${grp("vanity", "Bathroom vanity units", "The same construction and hardware as our kitchen cabinets, in every door collection.")}
<p class="muted small mt2">Add -L or -R to single-door units for the hinge side. Belfast and corner sink bases are made to suit the sink: send us the model.</p>
<div class="btns">${btn("/panels-and-mouldings/", "Panels, mouldings and accessories")}${btn("/sample-kitchen/", "See a sample kitchen specification", "btn")}</div>`) + ctaBand(m);
  const n = Object.values(U).reduce((a, v) => a + v.length, 0);
  return {
    id: "units", path: "/cabinet-units/", nav: "kitchens",
    title: t(m, { uk: "Kitchen Cabinet Sizes and Unit Types (UK Modular)", ae: "Kitchen Cabinet Sizes and Unit Types, UAE" }),
    description: `${n} base, wall, tall and vanity unit types with front elevations and widths in millimetres. Base H720 × D560, wall H720/H900/H360 × D300, tall H1970/H2150.`,
    hero: { kicker: "Cabinet units", h1: `${n} unit types, <b>drawn to scale</b>`, lede: "Base, wall, tall and vanity units, each with its order code and widths in millimetres.", trail: [["Kitchen cabinets", "/kitchen-cabinets/"], ["Cabinet units"]] },
    schema: [breadcrumbSchema(m, [["Kitchen cabinets", "/kitchen-cabinets/"], ["Cabinet units", "/cabinet-units/"]])],
    body,
  };
}

function handles(m) {
  const H = CAT.handles;
  const body = section("", `<div class="callout" style="background:var(--cream);padding:22px 26px;border-left:3px solid var(--brown);margin-bottom:40px"><p class="mb0"><b>Partner-made, subject to availability.</b> Sanyang does not manufacture handles. They are made by our partner factories and packed by Sanyang with each kitchen, so every model, finish and size is confirmed with your quotation.</p></div>
${H.map(f => `<div class="hfam" id="${f.code.toLowerCase()}"><div class="hd"><span class="code">${f.code}</span><h3>${f.name}</h3><p>${f.desc}</p><p><b>${f.mat}</b></p><p class="small">${f.note ? f.note : f.sizes.length ? `Lengths ${f.sizes.map(s => s[0]).join(", ")} mm · centres ${f.sizes.map(s => s[1]).join(", ")} mm` : ""}</p></div>
<div class="hrow">${f.items.map(i => `<figure>${tile(i.img, `${f.name} handle in ${i.finname}`)}<figcaption><b>${i.sku}</b>${i.finname}</figcaption></figure>`).join("")}</div></div>`).join("")}
<div class="split mt3"><div><h2>Sizing and <b>positioning</b></h2><p class="lede mt1">Doors take a vertical handle on the opening side: near the top corner on base units and near the bottom corner on wall units. Drawer handles are centred and lined up across the run.</p><p>Order code = family + finish + length, e.g. HKB-BG-160 is a Knurl Bar in Brushed Gold, 160 mm long. Handles are supplied with M4 fixing screws, and we can pre-drill doors and drawer fronts to your template.</p></div>
<table class="spec"><thead><tr><th>Door or drawer width</th><th>Handle length</th><th>Note</th></tr></thead><tbody><tr><td>Up to 400</td><td>100–160</td><td>Knob or T-bar also suits</td></tr><tr><td>450–600</td><td>160–250</td><td></td></tr><tr><td>800–1000 drawers</td><td>280–320</td><td>Or two shorter handles</td></tr><tr><td>Tall and larder doors</td><td>300–600</td><td>Tall pull or 760 rail</td></tr></tbody></table></div>`) + ctaBand(m);
  const n = H.reduce((a, f) => a + f.items.length, 0);
  return {
    id: "handles", path: "/handles/", nav: "kitchens",
    title: "Kitchen Handles: 19 Families, 74 Finishes",
    description: `${H.length} kitchen handle families in ${n} finishes: knurled, reeded, fluted, hex and colour bars, T-bars, rails and crescent pulls, packed with every Sanyang kitchen.`,
    hero: { kicker: "Handles", h1: `${H.length} families. <b>${n} finishes.</b>`, lede: "From knurled solid brass to powder-coated colour, every handle listed with its order code, lengths and hole centres in millimetres.", trail: [["Kitchen cabinets", "/kitchen-cabinets/"], ["Handles"]], img: "b26-close-cream", pos: "center 40%" },
    schema: [breadcrumbSchema(m, [["Kitchen cabinets", "/kitchen-cabinets/"], ["Handles", "/handles/"]])],
    body,
  };
}

function construction(m) {
  const body = section("", `<p class="lede">Five carcass constructions cover every budget, from volume housing to premium homes. All boards meet E1 and CARB Phase 2 formaldehyde limits.</p>
<div class="tscroll mt2"><table class="spec"><thead><tr><th></th>${TIERS.map(x => `<th id="${x.key}">${x.name}</th>`).join("")}</tr></thead><tbody>${TIER_ROWS.map(([l, k]) => `<tr><th>${l}</th>${TIERS.map(x => `<td>${x[k]}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
<p class="muted small mt1">Flex boxes are natural plywood outside: exposed ends need matching end panels. Door and drawer fronts on framed collections are full-overlay, five-piece solid wood with an MDF centre panel. Signature range doors are supplied on our Frameless carcass.</p>
<div class="grid g3 mt3">${TIERS.map(x => `<div class="icard"><div class="ph">${picture({ prestige: "cab-premium", slimline: "cab-slim", flex: "cab-universal", frameless: "cab-frameless", contract: "cab-builder" }[x.key], { alt: `${x.name} cabinet`, sizes: "(max-width:620px) 100vw, 33vw" })}</div><div class="tx"><h3>${x.name}</h3><p>${x.summary}</p><p class="small"><b>Collections:</b> ${x.for}</p></div></div>`).join("")}</div>
<div class="split mt3"><div><p class="kicker">Hardware</p><h2>Fitted to <b>every cabinet</b></h2><p class="lede mt1">Handles are ordered by code. Everything else comes fitted or packed with the cabinet.</p></div><table class="spec"><tbody>${HARDWARE.map(([a, b]) => `<tr><th>${a}</th><td>${b}</td></tr>`).join("")}</tbody></table></div>
<div class="mt3"><p class="kicker">Compliance</p><h2>Standards and <b>documents</b></h2><div class="grid g3 mt2">${COMPLIANCE.map(([a, b]) => `<div class="card"><h3>${a}</h3><p>${b}</p></div>`).join("")}</div></div>
<div class="callout mt2" style="background:var(--cream);padding:22px 26px;border-left:3px solid var(--brown)"><p class="mb0"><b>Customs classification.</b> Kitchen cabinets: HS 9403 40 (wooden kitchen furniture). Bathroom vanities: HS 9403 60. Certificates and test reports are available on request.</p></div>`) + ctaBand(m);
  return {
    id: "construction", path: "/construction/", nav: "kitchens",
    title: "Cabinet Construction: Plywood Carcass Specifications",
    description: "Compare our five cabinet constructions: Prestige, Slimline, Flex, Frameless and Contract. Plywood carcasses, solid-wood frames, dovetailed drawers, soft-close.",
    hero: { kicker: "Construction and materials", h1: "Five constructions, <b>one per budget</b>", lede: "Plywood carcasses, solid-wood face frames, dovetailed drawers and soft-close hardware, specified tier by tier.", trail: [["Kitchen cabinets", "/kitchen-cabinets/"], ["Construction"]], img: "b26-close-drawer" },
    schema: [breadcrumbSchema(m, [["Kitchen cabinets", "/kitchen-cabinets/"], ["Construction", "/construction/"]])],
    body,
  };
}

function panels(m) {
  const body = section("", `<p class="lede">The details that make a kitchen look built in. All are made in the door finish: add the door code to order, e.g. CNC-MRD-01 is cove cornice in Cotton White. Mouldings come in 2440 mm lengths.</p>
<h2 class="mt3">Mouldings</h2><table class="spec mt1"><thead><tr><th>Code</th><th>Moulding</th><th>Use</th></tr></thead><tbody>${CAT.mouldings.map(x => `<tr><td><b>${x.code}</b></td><td>${x.name}</td><td>${x.note}</td></tr>`).join("")}</tbody></table>
<h2 class="mt3">Panels and fillers</h2><table class="spec mt1"><thead><tr><th>Type</th><th>Code</th><th>Panel</th><th>Size (mm)</th></tr></thead><tbody>${CAT.panels.map(x => `<tr><td>${x.group}</td><td><b>${x.code}</b></td><td>${x.name}</td><td>${x.size}</td></tr>`).join("")}</tbody></table>
<h2 class="mt3">Accessories</h2><table class="spec mt1"><thead><tr><th>Code</th><th>Accessory</th><th>Detail</th></tr></thead><tbody>${CAT.accessories.map(x => `<tr><td><b>${x.code}</b></td><td>${x.name}</td><td>${x.note}</td></tr>`).join("")}</tbody></table>
<p class="muted small mt1">Accessories in the door finish take the door code, e.g. CB-HLC-03 is a pair of corbels in Admiral Blue.</p>`) + ctaBand(m);
  return {
    id: "panels", path: "/panels-and-mouldings/", nav: "kitchens",
    title: "Kitchen Panels, Cornice, Plinth and Accessories",
    description: "End panels, fillers, plinth, cornice, light pelmet, mouldings, corbels and accessories made in the door finish, with order codes for every piece.",
    hero: { kicker: "Finishing the room", h1: "Panels, mouldings <b>and accessories</b>", lede: "Plinth, cornice, pelmet, end panels, fillers and mouldings to match every door.", trail: [["Kitchen cabinets", "/kitchen-cabinets/"], ["Panels and mouldings"]] },
    schema: [breadcrumbSchema(m, [["Kitchen cabinets", "/kitchen-cabinets/"], ["Panels and mouldings", "/panels-and-mouldings/"]])],
    body,
  };
}

function sampleKitchen(m) {
  const bom = [["Base and tall units", [["BBC-1000", "Blind corner base, 1000", 1], ["BSP-300", "Spice and bottle pull-out, 300", 1], ["B3D-600", "Three-drawer pan base, 600 (hob)", 1], ["BS-400", "Single door base, 400", 1], ["TOH-600", "Single oven housing, 600", 1], ["BSK-800", "Sink base, 800", 1], ["BWB-300", "Waste-bin pull-out, 300", 1]]],
    ["Wall units", [["WDC-600", "Diagonal corner wall, 600 × 600", 1], ["WD-800", "Double door wall, 800", 2], ["WB-600", "Bridging wall over extractor, 600", 1], ["WS-400", "Single door wall, 400", 1]]],
    ["Finishing", [["IDD-600", "Integrated dishwasher door", 1], ["FB-75", "Base filler at the corner", 1], ["BEP / TEP", "Base and tall end panels", 2], ["WEP", "Wall end panel", 1], ["PL", "Plinth, 2440 lengths", 3], ["CNA", "Angled cornice, 2440 lengths", 3], ["LP", "Light pelmet, 2440 lengths", 2]]],
    ["Handles", [["HKB-BG-160", "Knurl Bar, doors and pull-outs", 16], ["HKB-BG-320", "Knurl Bar, pan drawers", 5]]]];
  const body = section("", `<div class="split" style="align-items:start"><div class="prose"><h2 class="mt0">A typical <b>twelve-cabinet</b> L-shaped kitchen</h2>
<p>This is a new-build family kitchen with 3.0 m and 2.4 m runs, specified entirely from our catalogue codes. On the 2.4 m run a window sits over the sink and a WD-800 over the dishwasher. Use it as a template for your own house types.</p>
<p>${t(m, { uk: "Send your house types and we return an itemised quotation using the same codes.", ae: "Send your unit types and floor plans and our designers return a full proposal using the same codes." })}</p>
<div class="btns">${btn("/contact/", t(m, { uk: "Quote my house types", ae: "Get a proposal for my units" }))}</div></div>
<div>${bom.map(([g, rows]) => `<h3 class="mt2">${g}</h3><table class="spec"><tbody>${rows.map(([c, n, q]) => `<tr><td style="width:28%"><b>${c}</b></td><td>${n}</td><td style="width:10%">× ${q}</td></tr>`).join("")}</tbody></table>`).join("")}</div></div>`) +
    section("cream", `<div class="split"><div class="ph">${picture("b26-p3", { alt: "Shaker kitchen with island and tall housings", sizes: "(max-width:860px) 100vw, 50vw" })}</div><div><p class="kicker">How the codes work</p><h2>One code, <b>one exact item</b></h2><p class="lede mt1">Door finish codes fix the range, profile and colour. Unit codes fix the type and width. Panels, plinth, cornice and fillers take the door finish code, so they match.</p>${ticks(["Example door: SPC-F12 = Spectrum, Fine Rail Shaker, colour 12", "Example unit: B3D-600 = three-drawer pan base, 600 mm wide", "Add -L or -R for the hinge side on single-door units", "Example moulding: CNC-MRD-01 = cove cornice in Cotton White"])}</div></div>`) + ctaBand(m);
  return {
    id: "sample-kitchen", path: "/sample-kitchen/", nav: "kitchens",
    title: "Sample Kitchen Specification: 12-Cabinet L-Shape",
    description: "A complete twelve-cabinet L-shaped new-build kitchen specified by order code: base, wall and tall units, panels, plinth, cornice and handles. Use it as a template.",
    hero: { kicker: "Sample kitchen", h1: "A kitchen, <b>specified by code</b>", lede: "Every unit, panel and handle in a typical new-build kitchen, so you can see exactly how a Sanyang specification is built.", trail: [["Kitchen cabinets", "/kitchen-cabinets/"], ["Sample kitchen"]] },
    schema: [breadcrumbSchema(m, [["Kitchen cabinets", "/kitchen-cabinets/"], ["Sample kitchen", "/sample-kitchen/"]])],
    body,
  };
}

function bathrooms(m) {
  const gal = [["sy-va1", "Dark shaker double vanity"], ["sy-va7", "White vanity with marble"], ["sy-va10", "Natural oak vanity"], ["sy-va4", "Charcoal vanity with oval basin"], ["sy-va6", "Dark vanity with brass detail"], ["sy-va13", "Green shaker vanity"], ["vanity-va2", "Black vanity set"], ["vanity-va9", "White marble vanity"], ["sy-bath", "Freestanding bath and vanity"]];
  const body = section("", `<div class="split"><div><p class="kicker">Bathroom vanities</p><h2>One look from <b>kitchen to en-suite</b></h2>
<p class="lede mt1">Every door collection is available for the bathroom too, so a development can carry one look from kitchen to en-suite. Vanity units use the same construction and hardware as our kitchen cabinets.</p>
${ticks(["Vanity sink bases 600, 750, 900 and 1200 wide", "Drawer bases, combination units and knee drawers", "Soft-close hinges and full-extension runners", "Plywood carcasses for humid rooms", "Matching tall units, wall cabinets and panels"])}
<div class="btns">${btn("/contact/", t(m, { uk: "Quote vanities for a scheme", ae: "Get a vanity proposal" }))}${btn("/cabinet-units/#vanity", "See vanity unit sizes", "btn")}</div></div>
<div class="ph tall">${picture("sy-va13", { alt: "Green shaker bathroom vanity with brass handles", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`) +
    section("cream", `${head("Gallery", "Vanities in <b>our finishes</b>")}<div class="gal">${gal.map(([p, a]) => `<figure>${picture(p, { alt: a, sizes: "(max-width:700px) 100vw, 33vw" })}<figcaption>${a}</figcaption></figure>`).join("")}</div>`) +
    section("", `${head("Vanity units", "Four types, <b>every finish</b>")}<div class="ugrid">${CAT.units.vanity.map(u => `<div class="ucard"><div class="dw" role="img" aria-label="${esc(u.name)}">${u.svg.replace(/width="[^"]+mm" height="[^"]+mm"/, "")}</div><span class="uc">${u.code}</span><span class="un">${u.name}</span><span class="uw"><span>W</span>${u.widths.join(" · ")}</span><span class="ux">${u.note}</span></div>`).join("")}</div>`) + ctaBand(m, { img: "sy-bath" });
  return {
    id: "bathrooms", path: "/bathroom-vanities/", nav: "bathrooms",
    title: t(m, { uk: "Bathroom Vanity Units, Trade and Wholesale", ae: "Bathroom Vanity Units in the UAE" }),
    description: t(m, { uk: "Bathroom vanity units in every Sanyang door collection, made in our own factory for UK developers, contractors and retailers. Sink, drawer and combination units.", ae: "Bathroom vanity units in every Sanyang door collection, made in our own factories for UAE villas, apartments, hotels and fit-out contractors." }),
    hero: { kicker: "Bathroom vanities", h1: "Bathroom vanities, <b>made to match</b>", lede: "Vanity units in every door collection, built like our kitchens.", trail: [["Bathroom vanities"]], img: "sy-va7", pos: "center 60%" },
    preload: preload("sy-va7"),
    schema: [breadcrumbSchema(m, [["Bathroom vanities", "/bathroom-vanities/"]])],
    body,
  };
}

function catalogue(m) {
  const body = section("", `<div class="split" style="align-items:start"><div>
<p class="kicker">${t(m, { uk: "UK Trade Catalogue 2026", ae: "Trade Catalogue 2026" })}</p><h2>44 pages. <b>Every code.</b></h2>
<p class="lede mt1">The complete programme: every door, colour, handle and cabinet with its order code, dimensioned unit drawings, the construction table, a sample kitchen specification, packing and container guides and a project specification form.</p>
${ticks(["Seven cabinet collections and nine signature ranges", "Colour finder: 119 colours by family", "19 handle families with sizes and hole centres", "42 unit types drawn to scale", "Construction, compliance and logistics"])}
<div class="ph mt2">${picture("b26-cover", { alt: "Trade catalogue cover kitchen", sizes: "(max-width:860px) 100vw, 45vw" })}</div></div>
<div class="card" style="padding:clamp(24px,3vw,40px)"><h3>Get the catalogue</h3><p class="mb0" style="margin-bottom:22px">Tell us where to send it. We usually reply within one working day.</p>${catalogueForm(m)}</div></div>`);
  return {
    id: "catalogue", path: "/catalogue/", nav: "kitchens",
    title: t(m, { uk: "Download the UK Trade Catalogue 2026", ae: "Download the Trade Catalogue 2026, UAE" }),
    description: "Request the 44-page Sanyang trade catalogue: every door, colour, handle and cabinet with order codes, unit drawings, construction and logistics guides.",
    hero: { kicker: "Catalogue", h1: "The trade <b>catalogue</b>", lede: "Everything your designers and buyers need to specify a Sanyang kitchen, in one document.", trail: [["Catalogue"]] },
    schema: [breadcrumbSchema(m, [["Catalogue", "/catalogue/"]])],
    body,
  };
}

export const pages = (m) => [hub(m), ...COLLECTIONS.map(c => collectionPage(m, c)), colours(m), units(m), handles(m), construction(m), panels(m), sampleKitchen(m), bathrooms(m), catalogue(m)];
