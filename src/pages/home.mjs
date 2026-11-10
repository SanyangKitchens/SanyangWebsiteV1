import { strip, picture, btn, waBtn, t, preload, ctaBand, faqSchema, photoUrl } from "../lib/html.mjs";
import { collectionCard, ticks, statsBand, certs, steps, section, head, faqList, postCard } from "../lib/parts.mjs";
import { COLLECTIONS } from "../data/collections.mjs";
import { SECTORS } from "../data/sectors.mjs";

export function pages(m, ctx) {
  const featured = ["meridian", "halcyon", "prism", "spectrum", "dusk", "lustre", "dapple", "daylight"].map(s => COLLECTIONS.find(c => c.slug === s));
  const sectors = SECTORS[m.key];
  const faq = t(m, {
    uk: [
      ["Do you supply the trade only?", "Yes. We supply housebuilders, developers, contractors, housing providers, kitchen retailers and distributors across the UK and Ireland. We do not sell to the public."],
      ["Where are your cabinets made?", "In our own factories in China, Vietnam and Thailand, which together cover 85,000 m² and ship more than 500 containers a month to the United States. Our UK range is made to UK modular sizes."],
      ["Is there a minimum order?", "There is no fixed minimum. Order size is agreed with each project, and you can mix collections and finishes across house types and containers."],
      ["How are kitchens delivered?", "Flat-packed, each cabinet in its own labelled carton, loaded to plan in 20ft or 40ft containers and delivered to your UK port, warehouse or site under EXW, FOB, CIF or DDP terms."],
      ["What warranty do you give?", "Every Sanyang cabinet carries a 10-year warranty against defects in materials and workmanship. Terms are confirmed in writing with each order."],
    ],
    ae: [
      ["Who do you work with in the UAE?", "Property developers, fit-out and joinery contractors, main contractors, interior designers, villa owners and building-material merchants across Dubai, Abu Dhabi, Sharjah and the wider UAE."],
      ["Do you design the kitchen for us?", "Yes. Our in-house designers handle site measurement, layouts, 3D visuals and shop drawings, then we manufacture and deliver to site."],
      ["Where are your kitchens made?", "In our own factories in China, Vietnam and Thailand, which together cover 85,000 m² and ship more than 500 containers a month to the United States."],
      ["What payment terms do you offer?", "Payment terms are very flexible and are structured around your project milestones and cash flow. We agree them in writing with each proposal."],
      ["What warranty do you give?", "Every Sanyang cabinet carries a 10-year warranty against defects in materials and workmanship."],
    ],
  });
  const hero = t(m, {
    uk: { k: "Trade and wholesale · UK and Ireland", h: "Kitchens made at source. <b>Supplied at scale.</b>", l: "Kitchen and bathroom cabinetry made in our own factories for housebuilders, developers, contractors and the kitchen trade. 300 door and colour options in UK modular sizes, factory-direct.", img: "sy-hero-kitchen" },
    ae: { k: "Kitchens · Wardrobes · Vanities · Doors", h: "Designed in-house. <b>Made in our own factories.</b>", l: "The manufacturer behind more than 500 containers of cabinetry a month to the United States, now designing and supplying kitchens, wardrobes and joinery for developers and contractors across the UAE.", img: "b26-cover" },
  });
  const body = `
<section class="hero">${picture(hero.img, { alt: strip(hero.h), eager: true, sizes: "100vw", cls: "bgimg", pos: "center 55%" })}<div class="wrap">
<p class="kicker">${hero.k}</p><h1>${hero.h}</h1><p class="lede">${hero.l}</p>
<div class="btns">${btn("/contact/", t(m, { uk: "Request a quotation", ae: "Request a proposal" }), "btn gold")}${btn("/kitchen-cabinets/", "Explore the collections", "btn")}</div>
</div></section>
${statsBand(m)}
${section("", `<div class="split"><div>
<p class="kicker">${t(m, { uk: "About Sanyang", ae: "Why Sanyang" })}</p><h2>A manufacturer <b>first</b></h2>
<p class="lede mt1">${t(m, {
    uk: "We make what we sell. Board is cut, edged, finished, assembled and packed in our own factories, so quality, cost and timing are controlled from raw board to the finished cabinet. One point of contact runs your project from the first sample to the final delivery.",
    ae: "We are not a trader. Our own factories cut, edge, finish, assemble and pack every cabinet, and our in-house designers take your project from site measurement to installation-ready delivery, with one point of contact throughout.",
  })}</p>
${ticks(t(m, {
    uk: ["Factory-direct pricing, with no distributor margin", "Whole-site packages: kitchens, vanities, wardrobes and doors", "UK modular sizes and an order code for every item", "Plot-labelled cartons and phased container loading", `${m.proof.warrantyYears}-year warranty on every cabinet`],
    ae: ["Results first: 500+ containers a month to the US, projects across the UK and Ireland", "In-house designers: measurement, 3D visuals and shop drawings", "Very flexible payment terms, structured around your milestones", "Kitchens, wardrobes, vanities and internal doors from one factory", `${m.proof.warrantyYears}-year warranty on every cabinet`],
  }))}
<div class="btns">${btn("/about/", "Our story", "btn")}${btn("/our-factories/", "Inside our factories", "btn")}</div>
</div><div class="ph">${picture("sy-factory", { alt: "Aerial view of a Sanyang cabinet factory", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`)}
${section("cream", `${head("The range", `${m.proof.collections} collections. <b>${m.proof.finishes} finishes.</b>`, "Seven cabinet collections with solid-wood frames or European frameless construction, and nine signature door ranges in slab, gloss, shaker, oak and designer finishes.", btn("/kitchen-cabinets/", "All collections", "btn"))}
<div class="cgrid">${featured.map(collectionCard).join("")}</div>`)}
${section("", `${head("Who we supply", t(m, { uk: "Built for the way <b>UK projects buy</b>", ae: "Built for the way <b>UAE projects deliver</b>" }), "")}
<div class="grid g3">${sectors.slice(0, 6).map(s => `<a class="icard" href="/who-we-supply/${s.slug}/"><div class="ph">${picture(s.img, { alt: `Kitchen for ${s.short.toLowerCase()}`, sizes: "(max-width:620px) 100vw, 33vw" })}</div><div class="tx"><h3>${s.short}</h3><p>${s.lede}</p><span class="tlink">Find out more →</span></div></a>`).join("")}</div>`)}
${section("dark", `${head("How it works", t(m, { uk: "From plans <b>to site</b>", ae: "From idea <b>to handover</b>" }), "", btn("/how-it-works/", "The full process", "btn light"))}${steps(m)}`)}
${section("", `<div class="split r"><div class="ph tall">${picture("b26-close-drawer", { alt: "Dovetailed solid-wood drawer with soft-close runner", sizes: "(max-width:860px) 100vw, 50vw" })}</div><div>
<p class="kicker">Quality</p><h2>Built like <b>furniture</b></h2><p class="lede mt1">Plywood carcasses instead of chipboard. Solid-wood face frames. Dovetailed solid-wood drawers on soft-close undermount runners. Six-way adjustable soft-close hinges. Every order inspected before it is packed.</p>
${certs()}
<div class="btns">${btn("/construction/", "Construction details", "btn")}${btn("/quality/", "Quality and certifications", "btn")}</div></div></div>`)}
${m.key === "ae" ? section("sand", `<div class="split"><div><p class="kicker">Design service</p><h2>Our designers, <b>your project</b></h2><p class="lede mt1">Send a floor plan, a BOQ or just an idea. Our in-house team measures the site, draws every layout and produces 3D visuals and shop drawings for your approval, before anything is made.</p>${ticks(["Site measurement in Dubai, Abu Dhabi and across the UAE", "Layouts and 3D visuals for every unit type", "Shop drawings and material submittals for consultants", "Samples approved before production"])}<div class="btns">${btn("/design-service/", "About the design service")}${waBtn(m)}</div></div><div class="ph">${picture("sy-hero", { alt: "Designed kitchen with island and pendant lights", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`) :
    section("sand", `<div class="split"><div><p class="kicker">Specify</p><h2>A sample kitchen, <b>by code</b></h2><p class="lede mt1">See how a typical twelve-cabinet new-build kitchen is specified from our catalogue, unit by unit, then send us your house types for an itemised quotation.</p><div class="btns">${btn("/sample-kitchen/", "See the sample kitchen")}${btn("/catalogue/", "Get the trade catalogue", "btn")}</div></div><div class="ph">${picture("b26-p3", { alt: "Shaker kitchen with island", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`)}
${section("", `<p class="kicker">${t(m, { uk: "Our footprint", ae: "Global footprint" })}</p><p class="quote">More than <b>500 containers a month</b> to the United States. Projects across the <b>UK and Ireland</b>. ${t(m, { uk: "Now with a dedicated UK programme, in UK sizes, for UK buyers.", ae: "Now designing and supplying projects across the <b>UAE</b>." })}</p>
<div class="mapgrid mt2">${m.factories.map(f => `<div class="card"><span class="num">${f.country.toUpperCase()}</span><h3>${f.place}</h3><p>${f.role}</p></div>`).join("")}</div>`)}
${ctx.posts.length ? section("cream", `${head("Journal", "Guides for <b>buyers and specifiers</b>", "", btn("/journal/", "All articles", "btn"))}<div class="posts">${ctx.posts.slice(0, 3).map(postCard).join("")}</div>`) : ""}
${section("", `<div class="split" style="align-items:start"><div><p class="kicker">FAQ</p><h2>Common <b>questions</b></h2><div class="btns">${btn("/faq/", "All questions", "btn")}</div></div>${faqList(faq)}</div>`)}
${ctaBand(m, { img: "sy-white-shaker" })}`;
  return [{
    id: "home", path: "/", nav: "home",
    fullTitle: t(m, { uk: "Kitchen Cabinet Manufacturer & Trade Supplier UK | Sanyang", ae: "Kitchen Cabinet Manufacturer in Dubai & the UAE | Sanyang" }),
    title: "Home",
    description: t(m, {
      uk: "Kitchen cabinet manufacturer supplying UK and Irish housebuilders, developers, contractors and retailers factory-direct. 300 doors, 25+ years, 10-year warranty.",
      ae: "Kitchen cabinet and joinery manufacturer for UAE developers and contractors: in-house design, our own factories, flexible payment terms and a 10-year warranty.",
    }),
    preload: preload(hero.img),
    ogImage: photoUrl(hero.img, 1200, m),
    schema: [faqSchema(faq)],
    body,
  }];
}
