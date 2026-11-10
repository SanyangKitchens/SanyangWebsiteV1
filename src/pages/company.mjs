// Company, process, sector, location, contact and legal pages.
import { picture, btn, waBtn, waLink, t, ctaBand, breadcrumbSchema, faqSchema, preload, photoUrl, MAIL, PHONE, WA, amp } from "../lib/html.mjs";
import { collectionCard, ticks, statsBand, certs, steps, section, head, faqList } from "../lib/parts.mjs";
import { COLLECTIONS, COMPLIANCE } from "../data/collections.mjs";
import { SECTORS } from "../data/sectors.mjs";
import { FAQ } from "../data/faq.mjs";
import { enquiryForm } from "../lib/forms.mjs";

const bc = (m, items) => breadcrumbSchema(m, items);

function sectorsHub(m) {
  const S = SECTORS[m.key];
  return {
    id: "sectors", path: "/who-we-supply/", nav: "sectors",
    title: t(m, { uk: "Who We Supply: Developers, Contractors and the Trade", ae: "Who We Supply in the UAE: Developers and Contractors" }),
    description: t(m, { uk: "Factory-direct kitchens for UK housebuilders, build-to-rent and student operators, housing providers, contractors, retailers and distributors.", ae: "Kitchens and joinery for UAE property developers, fit-out contractors, villa projects, interior designers and building-material merchants." }),
    hero: { kicker: "Who we supply", h1: t(m, { uk: "One factory, <b>every kind of project</b>", ae: "From one villa to <b>a whole community</b>" }), lede: t(m, { uk: "Specifications, packing and delivery set up for the way each part of the UK market buys kitchens.", ae: "Design, manufacture and delivery set up for the way UAE projects are built and handed over." }), trail: [["Who we supply"]], img: "sy-white-u" },
    schema: [bc(m, [["Who we supply", "/who-we-supply/"]])],
    body: section("", `<div class="grid g3">${S.map(s => `<a class="icard" href="/who-we-supply/${s.slug}/"><div class="ph">${picture(s.img, { alt: "", sizes: "(max-width:620px) 100vw, 33vw" })}</div><div class="tx"><h3>${s.short}</h3><p>${s.lede}</p><span class="tlink">Find out more →</span></div></a>`).join("")}</div>`) + ctaBand(m),
  };
}

function sectorPage(m, s) {
  const cols = s.collections.map(x => COLLECTIONS.find(c => c.slug === x));
  const others = SECTORS[m.key].filter(o => o !== s);
  return {
    id: `sector-${m.key}-${s.slug}`, path: `/who-we-supply/${s.slug}/`, nav: "sectors",
    title: s.title, description: s.description,
    hero: { kicker: "Who we supply", h1: s.h1, lede: s.lede, trail: [["Who we supply", "/who-we-supply/"], [s.short]], img: s.img },
    preload: preload(s.img), ogImage: photoUrl(s.img, 1200, m),
    schema: [bc(m, [["Who we supply", "/who-we-supply/"], [s.short, `/who-we-supply/${s.slug}/`]]), faqSchema(s.faq),
      { "@type": "Service", name: s.title, serviceType: "Kitchen cabinet manufacturing and supply", provider: { "@id": `${m.url}/#organization` }, areaServed: m.areaServed, audience: { "@type": "BusinessAudience", name: s.short } }],
    body: `${section("", `${head("What matters to you", "Solved at <b>the factory</b>")}<div class="grid g4">${s.pains.map(([h, p], i) => `<div class="card"><span class="num">0${i + 1}</span><h3>${h}</h3><p>${p}</p></div>`).join("")}</div>`)}
${section("cream", `<div class="split"><div><p class="kicker">What you get</p><h2>Our <b>offer</b></h2>${ticks(s.offer)}<div class="btns">${btn("/contact/", t(m, { uk: "Discuss your project", ae: "Discuss your project" }))}${waBtn(m)}</div></div><div class="ph">${picture(s.img === "b26-p18" ? "b26-p2" : "b26-p18", { alt: "", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`)}
${section("", `${head("Recommended", "Collections <b>to start with</b>", "", btn("/kitchen-cabinets/", "All 16 collections", "btn"))}<div class="cgrid">${cols.map(collectionCard).join("")}</div>`)}
${section("dark", `${head("How it works", "The <b>process</b>")}${steps(m)}`)}
${section("", `<div class="split" style="align-items:start"><div><p class="kicker">FAQ</p><h2>Questions from <b>${s.short.toLowerCase()}</b></h2></div>${faqList(s.faq)}</div>`)}
${section("sand", `${head("Also", "Other <b>sectors</b>")}<div class="grid g4">${others.map(o => `<a class="card" style="text-decoration:none" href="/who-we-supply/${o.slug}/"><h3>${o.short}</h3><p>${o.menu}</p></a>`).join("")}</div>`)}
${ctaBand(m, { img: s.img })}`,
  };
}

function about(m) {
  const gal = ["sy-fac1", "sy-fac2", "sy-fac3", "sy-fac4", "sy-fac5", "sy-fac6", "sy-fac7", "sy-fac8"];
  return {
    id: "about", path: "/about/", nav: "about",
    title: t(m, { uk: "About Sanyang: Kitchen Cabinet Manufacturer for 25+ Years", ae: "About Sanyang: 25+ Years of Kitchen Manufacturing" }),
    description: "Sanyang has made kitchen and bathroom cabinetry for more than 25 years and ships 500+ containers a month to the US. Our story, our factories and our values.",
    hero: { kicker: "About Sanyang", h1: "We make <b>what we sell</b>", lede: `For more than 25 years Sanyang has manufactured kitchen and bathroom cabinetry for builders, developers and retailers. Today we ship more than 500 containers a month to the United States, and supply projects across the UK and Ireland${m.key === "ae" ? " and the UAE" : ""}.`, trail: [["About"]], img: "sy-fac2" },
    preload: preload("sy-fac2"),
    schema: [bc(m, [["About", "/about/"]]), { "@type": "AboutPage" }],
    body: `${statsBand(m)}
${section("", `<div class="split"><div class="prose"><p class="kicker">Our story</p><h2 class="mt0">From the US market to <b>${t(m, { uk: "UK homes", ae: "the Gulf" })}</b></h2>
<p>Sanyang began with American-style solid-wood cabinetry and built its reputation in the most demanding cabinet market in the world: the United States. Builders, distributors and retailers there now take more than 500 containers of our cabinetry every month.</p>
<p>That scale is what makes us different. We control the whole process inside our own factories: board is cut, edged, finished, assembled and packed by our own teams, so we decide the quality, the cost and the timing ourselves.</p>
<p>${t(m, { uk: "Our UK programme brings the same manufacturing to UK homes, re-engineered in UK modular sizes, with UK terms and an order code for every door, colour, handle and cabinet. Contract work is where we are strongest: whole-site packages, packed and labelled the way your site team needs them.", ae: "In the UAE we add what projects here need most: in-house designers who measure and draw every unit, a single factory for kitchens, wardrobes, vanities and doors, and payment terms flexible enough to fit a project's cash flow." })}</p></div>
<div class="ph tall">${picture("sy-factory", { alt: "Aerial view of a Sanyang factory campus", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`)}
${section("cream", `${head("The Sanyang difference", "What we <b>stand for</b>")}<div class="grid g3">
<div class="card"><span class="num">01</span><h3>Quality first</h3><p>From raw timber to final polish, every stage is controlled to meet and exceed international standards, and every order is inspected before packing.</p></div>
<div class="card"><span class="num">02</span><h3>End-to-end manufacturing</h3><p>Modern factories and an integrated supply chain give us reliability, efficiency and quality control at every step.</p></div>
<div class="card"><span class="num">03</span><h3>A partner in trade</h3><p>Proven designs, negotiable order sizes and one point of contact for builders, contractors and the trade.</p></div></div>`)}
${section("", `${head("Inside our factories", "State-of-the-art <b>facilities</b>", "", btn("/our-factories/", "Our factories", "btn"))}<div class="grid g4">${gal.map(g => `<div class="ph">${picture(g, { alt: "Sanyang cabinet production line", sizes: "(max-width:620px) 100vw, 25vw" })}</div>`).join("")}</div>`)}
${section("sand", `${head("Certified", "Quality you can <b>document</b>")}${certs()}`)}
${ctaBand(m)}`,
  };
}

function factories(m) {
  return {
    id: "factories", path: "/our-factories/", nav: "about",
    title: "Our Cabinet Factories: China, Vietnam and Thailand",
    description: "Inside Sanyang's 85,000 m² of cabinet factories in China, Vietnam and Thailand: CNC cutting, edge banding, finishing, assembly, inspection and container loading.",
    hero: { kicker: "Our factories", h1: "85,000 m² of <b>our own production</b>", lede: "Three manufacturing countries, 2,700+ skilled people and more than 500 containers a month.", trail: [["About", "/about/"], ["Our factories"]], img: "sy-fac7" },
    schema: [bc(m, [["About", "/about/"], ["Our factories", "/our-factories/"]])],
    body: `${section("", `<div class="mapgrid">${m.factories.map(f => `<div class="card"><span class="num">${f.country.toUpperCase()}</span><h3>${f.place}</h3><p>${f.role}</p></div>`).join("")}</div>`)}
${section("cream", `${head("From board to box", "How a Sanyang <b>cabinet is made</b>")}<ol class="steps">
<li><h3>Board and timber</h3><p>Plywood, solid wood and MDF from certified sources, with FSC-certified material available. Every board meets E1 and CARB Phase 2 formaldehyde limits.</p></li>
<li><h3>Cutting and machining</h3><p>CNC panel saws and machining centres cut, drill and groove every part to the millimetre.</p></li>
<li><h3>Edging and finishing</h3><p>Edge banding, sanding, painting, UV lacquer and thermofoil wrapping, in dust-controlled finishing lines.</p></li>
<li><h3>Doors and frames</h3><p>Five-piece solid-wood doors and face frames are jointed, sanded and painted in-house.</p></li>
<li><h3>Assembly and hardware</h3><p>Dovetailed drawers, soft-close runners and six-way hinges are fitted and adjusted.</p></li>
<li><h3>Inspection and packing</h3><p>Sizes, finish, hardware and labels are checked; each cabinet goes into its own labelled export carton.</p></li></ol>`)}
${section("", `<div class="grid g3">${["sy-fac1", "sy-fac3", "sy-fac4", "sy-fac5", "sy-fac6", "sy-fac8", "factory-display1", "factory-display3", "factory-display5"].map(g => `<div class="ph">${picture(g, { alt: "Sanyang factory", sizes: "(max-width:620px) 100vw, 33vw" })}</div>`).join("")}</div>
<div class="callout mt2" style="background:var(--cream);padding:22px 26px;border-left:3px solid var(--brown)"><p class="mb0"><b>Visit or inspect.</b> Factory visits can be arranged for serious project partners, and independent pre-shipment inspection by your nominated agent is always welcome.</p></div>`)}
${ctaBand(m)}`,
  };
}

function howItWorks(m) {
  const faq = FAQ.filter(f => f.cat === "Ordering").map(f => [f.q, t(m, f.a)]);
  return {
    id: "how", path: "/how-it-works/", nav: "how",
    title: t(m, { uk: "How It Works: From Drawings to Delivery", ae: "How It Works: From Design to Handover" }),
    description: t(m, { uk: "How ordering from Sanyang works: send plans, receive an itemised quotation, approve samples, manufacture, inspection and delivery to your UK port, warehouse or site.", ae: "How working with Sanyang works in the UAE: site measurement, in-house design, proposal and samples, manufacture, inspection and delivery to site." }),
    hero: { kicker: "How it works", h1: t(m, { uk: "From plans <b>to site</b>", ae: "From idea <b>to handover</b>" }), lede: "Six steps, one point of contact, and samples approved before anything is made.", trail: [["How it works"]], img: "sy-fac8" },
    schema: [bc(m, [["How it works", "/how-it-works/"]]), faqSchema(faq), {
      "@type": "HowTo", name: t(m, { uk: "How to order trade kitchens from Sanyang", ae: "How to order kitchens from Sanyang in the UAE" }),
      step: (t(m, { uk: ["Send your plans", "Receive a quotation", "Approve samples", "Manufacture", "Inspection", "Delivery"], ae: ["Tell us about the project", "Site measurement and design", "Proposal and samples", "Manufacture", "Inspection", "Delivery to site"] })).map((n, i) => ({ "@type": "HowToStep", position: i + 1, name: n })),
    }],
    body: `${section("", steps(m))}
${section("cream", `<div class="split"><div><p class="kicker">Quotations</p><h2>What your <b>${t(m, { uk: "quotation", ae: "proposal" })}</b> includes</h2>${ticks(["Itemised by order code and quantity, for each house or unit type", "Handles from our partner factories, with models and finishes confirmed", "Your choice of delivery basis: EXW, FOB, CIF or DDP", t(m, { uk: "Prices, lead times, payment and warranty terms agreed in writing", ae: "Flexible payment terms structured around your project milestones" }), "Sample doors and handles for sign-off"])}</div><div class="ph">${picture("b26-p2", { alt: "", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`)}
${section("", `<div class="split" style="align-items:start"><div><p class="kicker">FAQ</p><h2>Ordering <b>questions</b></h2></div>${faqList(faq)}</div>`)}
${ctaBand(m)}`,
  };
}

function design(m) {
  return {
    id: "design", path: "/design-service/", nav: "how",
    title: t(m, { uk: "Kitchen Design and Specification Service for the Trade", ae: "Kitchen Design Service in Dubai and the UAE" }),
    description: t(m, { uk: "Our in-house team turns your drawings or house types into kitchen layouts, unit schedules and itemised quotations by order code, with sample doors for sign-off.", ae: "In-house kitchen and joinery designers in the UAE: site measurement, layouts, 3D visuals, shop drawings and material submittals before production." }),
    hero: { kicker: "Design service", h1: t(m, { uk: "Your drawings, <b>our specification</b>", ae: "Measured, drawn and <b>designed in-house</b>" }), lede: t(m, { uk: "Send architect's drawings or house types. We plan each kitchen, schedule every unit by code and return an itemised quotation.", ae: "Our designers measure your site, draw every layout and produce 3D visuals and shop drawings, so you see the kitchen before it is made." }), trail: [["How it works", "/how-it-works/"], ["Design service"]], img: "sy-hero" },
    schema: [bc(m, [["How it works", "/how-it-works/"], ["Design service", "/design-service/"]]), { "@type": "Service", name: "Kitchen design and specification", provider: { "@id": `${m.url}/#organization` }, areaServed: m.areaServed }],
    body: `${section("", `<div class="grid g4">${t(m, {
      uk: [["Layouts", "Kitchen layouts for every house type, from your architect's plans."], ["Unit schedules", "Every unit, panel and handle listed by order code and quantity."], ["Appliance checks", "Apertures checked against your appliance schedule."], ["Sample kits", "Sample doors and handles for sales suites and client sign-off."]],
      ae: [["Site measurement", "Our team measures every unit type on site, in Dubai, Abu Dhabi and across the UAE."], ["Layouts and 3D", "Layouts and 3D visuals so you and your client see the result first."], ["Shop drawings", "Production-ready drawings and material submittals for consultants."], ["Samples", "Sample doors, finishes and handles for approval before production."]],
    }).map(([h, p], i) => `<div class="card"><span class="num">0${i + 1}</span><h3>${h}</h3><p>${p}</p></div>`).join("")}</div>`)}
${section("cream", `<div class="split"><div class="ph">${picture("sy-oakwhite", { alt: "", sizes: "(max-width:860px) 100vw, 50vw" })}</div><div><p class="kicker">What to send</p><h2>Getting <b>started</b></h2>${ticks(t(m, { uk: ["Architect's floor plans or kitchen drawings", "A schedule of house types and plot numbers", "Your appliance schedule", "Preferred collections, colours and handles", "Programme and delivery dates"], ae: ["Floor plans, drawings or a BOQ", "Number of each unit type", "Style ideas or mood boards", "Appliance preferences", "Handover dates"] }))}<div class="btns">${btn("/contact/", "Send your project")}${waBtn(m)}</div></div></div>`)}
${ctaBand(m)}`,
  };
}

function shipping(m) {
  return {
    id: "shipping", path: "/shipping-and-delivery/", nav: "how",
    title: t(m, { uk: "Shipping, Containers and Delivery to the UK and Ireland", ae: "Shipping and Delivery to Dubai and the UAE" }),
    description: "How Sanyang packs and ships kitchens: labelled export cartons, 20ft and 40ft high-cube container loads, and EXW, FOB, CIF or DDP delivery terms.",
    hero: { kicker: "Shipping and delivery", h1: "Packed by plot. <b>Loaded to plan.</b>", lede: t(m, { uk: "Each cabinet in its own labelled carton, loaded so each kitchen comes off the truck together, at your UK port, warehouse or site.", ae: "Each cabinet in its own labelled carton, loaded by building, floor and unit, and delivered to Jebel Ali, your warehouse or your site." }), trail: [["How it works", "/how-it-works/"], ["Shipping and delivery"]], img: "sy-fac8" },
    schema: [bc(m, [["How it works", "/how-it-works/"], ["Shipping and delivery", "/shipping-and-delivery/"]])],
    body: `${section("", `<div class="split" style="align-items:start"><div><p class="kicker">Containers</p><h2>How much fits <b>in a container</b></h2><p class="lede mt1">Based on mixed flat-packed carcasses and about 14 cartons per kitchen. Assembled framed cabinets take more space. We plan every load and confirm the count with your quotation.</p></div>
<table class="spec"><thead><tr><th>Container</th><th>Volume</th><th>Cabinets</th><th>Kitchens</th></tr></thead><tbody><tr><td><b>20ft standard</b></td><td>about 33 m³</td><td>about 500</td><td>about 35</td></tr><tr><td><b>40ft high-cube</b></td><td>about 76 m³</td><td>about 1,150</td><td>about 80</td></tr></tbody></table></div>`)}
${section("cream", `${head("Incoterms", "Delivered <b>your way</b>")}<div class="grid g4">${[["EXW", "Ex works", "Our standard quotation basis. Goods are packed and ready at our factory; you arrange collection and shipping."], ["FOB", "Free on board", "We deliver the goods onto your vessel at the port of origin, export cleared."], ["CIF", "Cost, insurance and freight", t(m, { uk: "We book and insure the sea freight to your chosen UK or Irish port.", ae: "We book and insure the sea freight to Jebel Ali or your chosen port." })], ["DDP", "Delivered duty paid", t(m, { uk: "We deliver to your UK warehouse or site, with import duty and clearance included.", ae: "We deliver to your UAE warehouse or site, with import duty and clearance included." })]].map(([c, n, p]) => `<div class="card"><span class="num">${c}</span><h3>${n}</h3><p>${p}</p></div>`).join("")}</div>`)}
${section("", `<div class="split"><div><p class="kicker">Packing</p><h2>Ready for <b>site</b></h2>${ticks(["Each cabinet in its own export carton with corner protection", "Labels show the order code, finish and your plot or room reference", "Framed Prestige, Slimline and Contract cabinets ship in one box each; Flex and Frameless ship as a box plus a front set", "Handles, legs and fixings packed with each kitchen", "Containers loaded to a plan, so each kitchen comes off the truck together"])}</div><div class="ph">${picture("sy-fac6", { alt: "Packed cabinets ready for loading", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`)}
${ctaBand(m)}`,
  };
}

function quality(m) {
  return {
    id: "quality", path: "/quality/", nav: "how",
    title: "Quality and Certifications: ISO 9001, FSC, E1, KCMA",
    description: "Sanyang quality and compliance: ISO 9001:2015, FSC-certified timber, E1 and CARB Phase 2 boards, KCMA-tested cabinetry and pre-shipment inspection.",
    hero: { kicker: "Quality", h1: "Quality you can <b>document</b>", lede: "Certified materials, a certified quality system and inspection on every order.", trail: [["How it works", "/how-it-works/"], ["Quality"]], img: "sy-fac3" },
    schema: [bc(m, [["How it works", "/how-it-works/"], ["Quality", "/quality/"]])],
    body: `${section("", certs())}${section("cream", `<div class="grid g3">${COMPLIANCE.map(([a, b]) => `<div class="card"><h3>${a}</h3><p>${b}</p></div>`).join("")}</div>`)}
${section("", `<div class="split"><div class="prose"><h2 class="mt0">${t(m, { uk: "Documents for <b>your files</b>", ae: "Material <b>submittals</b>" })}</h2><p>${t(m, { uk: "We provide product data, certificates, test reports and supply-chain documents for tenders, pre-qualification questionnaires and your UK Timber Regulation due diligence.", ae: "We provide product data sheets, FSC, E1 and ISO 9001 certificates and test reports for consultant submittals and client approval." })}</p><p>Kitchen cabinets are classified as HS 9403 40 (wooden kitchen furniture) and bathroom vanities as HS 9403 60.</p></div><div class="ph">${picture("sy-fac4", { alt: "Quality inspection in a Sanyang factory", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`)}${ctaBand(m)}`,
  };
}

function warranty(m) {
  return {
    id: "warranty", path: "/warranty/", nav: "how",
    title: "10-Year Kitchen Cabinet Warranty",
    description: "Every Sanyang cabinet carries a 10-year warranty against defects in materials and workmanship. What it covers, what it does not, and how to make a claim.",
    hero: { kicker: "Warranty", h1: "Ten years. <b>Every cabinet.</b>", lede: "A 10-year warranty against defects in materials and workmanship, because we make every cabinet ourselves.", trail: [["How it works", "/how-it-works/"], ["Warranty"]] },
    schema: [bc(m, [["How it works", "/how-it-works/"], ["Warranty", "/warranty/"]])],
    body: section("", `<div class="prose"><h2 class="mt0">What it <b>covers</b></h2><p>Our warranty covers defects in materials and workmanship in Sanyang cabinets, doors, drawers and panels for 10 years from delivery, under normal use and correct installation. If a covered part fails, we supply a replacement part.</p>
<h2>What it <b>does not cover</b></h2><ul><li>Damage from incorrect installation, misuse, accidents or water leaks</li><li>Normal wear and tear, and natural variation in timber colour and grain</li><li>Damage in transit not noted at delivery</li><li>Handles, appliances and taps, which carry their makers' own warranties</li></ul>
<h2>How to <b>make a claim</b></h2><p>Email <a href="mailto:${m.email}">${m.email}</a> with your order reference, the order code of the item and photographs. We reply within two working days.</p>
<div class="callout"><p>Full warranty terms are confirmed in writing with each order and take precedence over this summary.</p></div></div>`) + ctaBand(m),
  };
}

function faqPage(m) {
  const cats = [...new Set(FAQ.map(f => f.cat))];
  const all = FAQ.filter(f => !f.only || f.only === m.key);
  return {
    id: "faq", path: "/faq/", nav: "how",
    title: t(m, { uk: "FAQ: Buying Trade Kitchens from Sanyang", ae: "FAQ: Kitchens and Joinery from Sanyang UAE" }),
    description: "Answers for buyers and specifiers: ordering, minimums, samples, construction, materials, certifications, shipping, delivery, payment and warranty.",
    hero: { kicker: "FAQ", h1: "Questions, <b>answered</b>", lede: "Everything buyers usually ask before their first order.", trail: [["FAQ"]] },
    schema: [bc(m, [["FAQ", "/faq/"]]), faqSchema(all.map(f => [f.q, t(m, f.a)]))],
    body: section("", `<div class="narrow">${cats.map(c => { const l = all.filter(f => f.cat === c); return l.length ? `<h2 class="cat">${c}</h2>${faqList(l.map(f => [f.q, t(m, f.a)]))}` : ""; }).join("")}</div>`) + ctaBand(m),
  };
}

function contact(m) {
  return {
    id: "contact", path: "/contact/", nav: "contact",
    title: t(m, { uk: "Contact Sanyang: Trade Enquiries and Quotations", ae: "Contact Sanyang UAE: Projects and Proposals" }),
    description: t(m, { uk: "Request a trade quotation from Sanyang Cabinetry. Email sales@sanyang.co.uk or WhatsApp +44 7955 170009. We reply within one working day.", ae: "Contact Sanyang Cabinetry in Dubai for kitchen and joinery proposals. Email sales@sanyang.ae, call or WhatsApp. Showroom in Deira, Dubai." }),
    hero: { kicker: "Contact", h1: t(m, { uk: "Let's price your <b>next scheme</b>", ae: "Let's design your <b>next project</b>" }), lede: "Tell us about the project. We reply within one working day.", trail: [["Contact"]] },
    schema: [bc(m, [["Contact", "/contact/"]]), { "@type": "ContactPage" }],
    body: section("", `<div class="contact-grid"><div>${enquiryForm(m)}</div>
<aside><div class="cbox"><h3>Talk to us</h3>
<a href="mailto:${m.email}">${MAIL}${m.email}</a><a href="${waLink(m)}" target="_blank" rel="noopener">${WA}WhatsApp ${m.whatsappDisplay}</a><a href="tel:${m.phoneHref}">${PHONE}${m.phone}</a>
<p class="mt1">${m.hours}</p>${m.showroom ? `<p><b style="color:var(--cream)">Showroom</b><br>${m.showroom.full}</p>` : ""}</div>
<div class="card mt2"><h3>Sending drawings?</h3><p>Large files are easiest by email or WhatsApp. Include house or unit types, quantities and your delivery dates.</p></div>
<div class="card mt1"><h3>Want the catalogue first?</h3><p>Every door, colour, handle and cabinet with order codes.</p><p class="mt1"><a class="tlink" href="/catalogue/">Request the catalogue →</a></p></div></aside></div>`),
  };
}

function gallery(m) {
  const g = [["sy-hero-kitchen", "Two-tone kitchen with island"], ["b26-cover", "Dark shaker with oak island"], ["sy-white-shaker", "White shaker kitchen"], ["sy-navy", "Navy shaker kitchen"], ["sy-green", "Green shaker utility"], ["b26-p18", "Dark green kitchen with marble island"], ["sy-oak-u", "Natural oak U-shaped kitchen"], ["sy-amber", "Amber oak shaker"], ["sy-gloss", "Gloss European kitchen"], ["b26-p3", "Grey shaker kitchen with island"], ["sy-oakwhite", "Oak and white kitchen"], ["sy-dsg", "Storm grey shaker"], ["sy-white-u", "White U-shaped kitchen"], ["sy-raised", "Raised panel kitchen"], ["b26-tall", "Tall green shaker units"], ["sy-cab-hero", "Navy and white kitchen"], ["kitchen-design2", "Contemporary kitchen"], ["kitchen-design3", "Oak kitchen"], ["sy-va7", "White vanity"], ["sy-va1", "Dark shaker vanity"], ["sy-bath", "Bathroom with vanity"]];
  return {
    id: "gallery", path: "/gallery/", nav: "about",
    title: "Kitchen and Bathroom Gallery",
    description: "Kitchens and bathrooms in Sanyang finishes: shaker, raised panel, gloss, matt and oak, from show homes to villas. Inspiration for specifiers and buyers.",
    hero: { kicker: "Gallery", h1: "Kitchens <b>in our finishes</b>", lede: "Shaker, raised panel, frameless gloss, matt and oak, in real rooms.", trail: [["Gallery"]] },
    schema: [bc(m, [["Gallery", "/gallery/"]]), { "@type": "ImageGallery" }],
    body: section("", `<div class="gal">${g.map(([p, a]) => `<figure>${picture(p, { alt: a, sizes: "(max-width:700px) 100vw, 33vw" })}<figcaption>${a}</figcaption></figure>`).join("")}</div>`) + ctaBand(m),
  };
}

// UAE: where we work + emirate pages. UK: Ireland page.
const EMIRATES = [
  { slug: "dubai", name: "Dubai", h1: "Kitchen cabinets <b>in Dubai</b>", img: "sy-hero-kitchen",
    description: "Kitchen cabinet manufacturer serving Dubai: in-house design, site measurement and factory-direct kitchens, wardrobes and vanities for developers and contractors.",
    text: ["Dubai's residential market moves fast, from high-rise apartment towers in Business Bay, Dubai Marina and Jumeirah Village Circle to villa and townhouse communities in Dubai Hills, Arabian Ranches and Dubai South. Each needs a different kitchen: compact, light-reflecting gloss for studios and one-bed apartments; large show kitchens with separate working kitchens for villas.", "We support Dubai developers and fit-out contractors with site measurement, in-house design, 3D visuals and shop drawings, then manufacture in our own factories and deliver packed by building, floor and unit. Our showroom is in Deira, and payment terms are structured around your project milestones."],
    collections: ["prism", "lustre", "dusk", "eclipse", "meridian"] },
  { slug: "abu-dhabi", name: "Abu Dhabi", h1: "Kitchen cabinets <b>in Abu Dhabi</b>", img: "b26-p18",
    description: "Kitchen and joinery manufacturer for Abu Dhabi developments: in-house design, material submittals, factory-direct kitchens, wardrobes and doors.",
    text: ["Abu Dhabi projects, from apartments on Al Reem and Yas Island to villas on Saadiyat and in the suburbs, are often specified by consultants with detailed material submittals. We provide product data, FSC, E1 and ISO 9001 documentation and samples for approval.", "Our designers measure and draw each unit type, and we supply kitchens, wardrobes, vanities and internal doors from one factory, delivered to your site in Abu Dhabi ready for installation."],
    collections: ["lantern", "meridian", "prism", "golden-hour", "dapple"] },
  { slug: "sharjah-and-northern-emirates", name: "Sharjah and the Northern Emirates", short: "Sharjah", h1: "Kitchens for <b>Sharjah</b> and the Northern Emirates", img: "sy-white-u",
    description: "Factory-direct kitchen cabinets for Sharjah, Ajman, Ras Al Khaimah and the Northern Emirates: value and premium collections, design and delivery to site.",
    text: ["Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah have a growing pipeline of family communities and mid-market apartments, where value for money and durability matter as much as style.", "Our Daylight, Dawn and Ember collections deliver a dependable kitchen at volume, while Meridian and Spectrum give buyers a premium shaker. We design, manufacture and deliver to site across the Northern Emirates."],
    collections: ["daylight", "dawn", "ember", "spectrum", "meridian"] },
];
function locations(m) {
  if (m.key === "uk") {
    return [{
      id: "ireland", path: "/ireland/", nav: "about",
      title: "Kitchen Cabinet Supplier for Ireland: Trade and Projects",
      description: "Factory-direct kitchen cabinets for developers, contractors and retailers in the Republic of Ireland and Northern Ireland, shipped to Dublin, Cork or Belfast.",
      hero: { kicker: "Ireland", h1: "Supplying <b>Ireland</b>", lede: "Kitchens, vanities, wardrobes and doors for projects in the Republic of Ireland and Northern Ireland.", trail: [["About", "/about/"], ["Ireland"]], img: "sy-white-shaker" },
      schema: [bc(m, [["About", "/about/"], ["Ireland", "/ireland/"]])],
      body: section("", `<div class="split"><div class="prose"><p>Our UK programme serves Ireland too: the same collections, the same order codes and the same modular sizes, which match Irish fitting practice.</p><p>We ship to Dublin, Cork and Belfast, or deliver to your warehouse or site under DDP terms. For the Republic of Ireland, goods ship directly into the EU, and we provide the supply-chain documents your EU due-diligence obligations require.</p>${ticks(["Developers and housebuilders", "Approved housing bodies and contractors", "Kitchen retailers and distributors", "Delivery to Dublin, Cork or Belfast, or to site"])}</div><div class="ph">${picture("sy-oak-u", { alt: "", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`) + ctaBand(m),
    }];
  }
  const hub = {
    id: "locations", path: "/locations/", nav: "about",
    title: "Where We Work in the UAE: Dubai, Abu Dhabi, Sharjah",
    description: "Sanyang designs, manufactures and delivers kitchens and joinery across the UAE: Dubai, Abu Dhabi, Sharjah and the Northern Emirates. Showroom in Deira, Dubai.",
    hero: { kicker: "Where we work", h1: "Across <b>the UAE</b>", lede: "Site measurement, design and delivery in every emirate, with our showroom in Deira, Dubai.", trail: [["Where we work"]], img: "b26-cover" },
    schema: [bc(m, [["Where we work", "/locations/"]])],
    body: section("", `<div class="grid g3">${EMIRATES.map(e => `<a class="icard" href="/locations/${e.slug}/"><div class="ph">${picture(e.img, { alt: "", sizes: "(max-width:620px) 100vw, 33vw" })}</div><div class="tx"><h3>${e.name}</h3><p>${e.description}</p></div></a>`).join("")}</div>
<div class="card mt2"><h3>Showroom</h3><p>${m.showroom.full}</p><p class="mt1"><a class="tlink" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(m.showroom.full)}" target="_blank" rel="noopener">Open in Google Maps →</a></p></div>`) + ctaBand(m),
  };
  return [hub, ...EMIRATES.map(e => ({
    id: `loc-${e.slug}`, path: `/locations/${e.slug}/`, nav: "about",
    title: `Kitchen Cabinet Manufacturer in ${e.short || e.name}`,
    description: e.description,
    hero: { kicker: "Where we work", h1: e.h1, lede: e.description, trail: [["Where we work", "/locations/"], [e.name]], img: e.img },
    schema: [bc(m, [["Where we work", "/locations/"], [e.name, `/locations/${e.slug}/`]]), { "@type": "Service", name: `Kitchen cabinets and joinery in ${e.name}`, provider: { "@id": `${m.url}/#organization` }, areaServed: { "@type": "City", name: e.name } }],
    body: section("", `<div class="split"><div class="prose">${e.text.map(p => `<p>${p}</p>`).join("")}${ticks(["Site measurement and in-house design", "3D visuals and shop drawings", "Kitchens, wardrobes, vanities and internal doors", "Very flexible payment terms", "10-year warranty"])}<div class="btns">${btn("/contact/", "Request a proposal")}${waBtn(m)}</div></div><div class="ph">${picture(e.img, { alt: "", sizes: "(max-width:860px) 100vw, 50vw" })}</div></div>`) +
      section("cream", `${head("Popular here", "Collections <b>to consider</b>")}<div class="cgrid">${e.collections.map(s => collectionCard(COLLECTIONS.find(c => c.slug === s))).join("")}</div>`) + ctaBand(m),
  }))];
}

function legal(m) {
  const c = m.company;
  const who = m.key === "uk" ? `${c.legalName}, a company registered in ${c.registeredIn} (company number ${c.number}, VAT ${c.vat})` : `${c.legalName}, with its showroom at ${m.showroom.full}`;
  return [{
    id: "privacy", path: "/privacy/", nav: "",
    title: "Privacy Notice",
    description: `How ${m.brand} collects and uses personal data from website enquiries and catalogue requests, and your rights over it.`,
    hero: { kicker: "Legal", h1: "Privacy <b>notice</b>", trail: [["Privacy"]] },
    schema: [bc(m, [["Privacy", "/privacy/"]])],
    body: section("", `<div class="prose"><p>This notice explains how ${who} ("Sanyang", "we") uses personal data collected through this website.</p>
<h2>What we collect</h2><p>When you send an enquiry or request our catalogue we collect your name, company, email, phone number (if given), the type of business you are and what you tell us about your project.</p>
<h2>Why we use it</h2><p>To reply to your enquiry, prepare quotations and send the catalogue you asked for. If you tick the box, we also send occasional product and project news, and you can unsubscribe at any time. ${m.key === "uk" ? "Our lawful bases under UK GDPR are legitimate interests (replying to business enquiries) and consent (marketing)." : "We process data in line with the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021)."}</p>
<h2>Where it is stored</h2><p>Enquiries are stored in our Google Workspace account. We do not sell or share your data with third parties for their own marketing.</p>
<h2>Cookies</h2><p>This website does not set advertising or tracking cookies. ${"We may use privacy-friendly, cookie-free analytics to count page views."}</p>
<h2>How long we keep it</h2><p>Enquiries are kept for up to three years after our last contact, unless you become a customer, in which case records are kept as long as the law requires.</p>
<h2>Your rights</h2><p>You can ask for a copy of your data, ask us to correct or delete it, or object to its use, by emailing <a href="mailto:${m.email}">${m.email}</a>.${m.key === "uk" ? ` You can also complain to the Information Commissioner's Office (ico.org.uk).` : ""}</p></div>`),
  }, {
    id: "terms", path: "/terms/", nav: "",
    title: "Website Terms of Use",
    description: `Terms of use for the ${m.brand} website. Information on this site is a guide; quotations, prices and terms are agreed in writing with each order.`,
    hero: { kicker: "Legal", h1: "Terms <b>of use</b>", trail: [["Terms"]] },
    schema: [bc(m, [["Terms", "/terms/"]])],
    body: section("", `<div class="prose"><p>This website is operated by ${who}.</p><h2>Information on this site</h2><p>Product information, colours, sizes and specifications are a guide and may change. Colours on screen are approximate: always approve colour from a sample door. Nothing on this website is an offer, a price or a guarantee. Prices, lead times, payment terms and warranty terms are agreed in writing with each quotation.</p><h2>Handles and partner products</h2><p>Handles, appliances and taps are made by our partner factories and are subject to availability.</p><h2>Trade only</h2><p>We supply trade, project and wholesale customers.</p><h2>Intellectual property</h2><p>The content, design, product names and order codes on this site belong to Sanyang. You may share links to it, but not copy its content for commercial use without permission.</p><h2>Law</h2><p>These terms are governed by the laws of ${m.key === "uk" ? "England and Wales" : "the Emirate of Dubai and the federal laws of the UAE"}.</p></div>`),
  }];
}

export function pages(m) {
  return [sectorsHub(m), ...SECTORS[m.key].map(s => sectorPage(m, s)), about(m), factories(m), howItWorks(m), design(m), shipping(m), quality(m), warranty(m), faqPage(m), contact(m), gallery(m), ...locations(m), ...legal(m)];
}
