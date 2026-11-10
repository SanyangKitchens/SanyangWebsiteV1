// Shared markup: page shell (head, header, footer), images, breadcrumbs and structured data.
import { readFileSync } from "node:fs";

const IMG = JSON.parse(readFileSync(new URL("../data/images.json", import.meta.url), "utf8"));
export const photos = IMG.photos;
export const tiles = IMG.tiles;

export const esc = s => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
export const amp = s => String(s).replace(/&(?![a-z#0-9]+;)/gi, "&amp;");
export const strip = s => String(s).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
export const slug = s => String(s).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
// Pick market copy: t(m, "same for both") or t(m, { uk: "…", ae: "…" }).
export const t = (m, v) => (v && typeof v === "object" && !Array.isArray(v) && ("uk" in v || "ae" in v)) ? v[m.key] : v;

export const ARROW = `<svg class="arr" viewBox="0 0 18 10" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4"/></svg>`;
export const WA = `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z"/></svg>`;
export const MAIL = `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>`;
export const PHONE = `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z"/></svg>`;
export const CHECK = `<svg class="ico ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>`;

// Responsive photo with AVIF and WebP, falling back to JPEG.
export function picture(name, { alt, sizes = "100vw", eager = false, cls = "", pos = "" }) {
  const img = photos[name];
  if (!img) throw new Error(`Unknown photo "${name}". Add it to images-src/photos and run npm run images.`);
  const set = type => img.widths.map(w => `/img/p/${name}-${w}.${type} ${w}w`).join(", ");
  const mid = img.widths.find(w => w >= 800) || img.widths.at(-1);
  const style = pos ? ` style="object-position:${pos}"` : "";
  return `<picture${cls ? ` class="${cls}"` : ""}><source type="image/avif" srcset="${set("avif")}" sizes="${sizes}"><source type="image/webp" srcset="${set("webp")}" sizes="${sizes}">` +
    `<img src="/img/p/${name}-${mid}.jpg" srcset="${set("jpg")}" sizes="${sizes}" width="${img.width}" height="${img.height}" alt="${esc(alt)}"${style} ${eager ? 'fetchpriority="high" decoding="sync"' : 'loading="lazy" decoding="async"'}></picture>`;
}
export const photoUrl = (name, w = 1200, m) => {
  const img = photos[name];
  return `${m ? m.url : ""}/img/p/${name}-${img.widths.filter(x => x <= w).at(-1) || img.widths[0]}.jpg`;
};
export function preload(name, sizes = "100vw") {
  const img = photos[name];
  return `<link rel="preload" as="image" type="image/avif" imagesrcset="${img.widths.map(w => `/img/p/${name}-${w}.avif ${w}w`).join(", ")}" imagesizes="${sizes}" fetchpriority="high">`;
}
// Door, chip and handle tiles. `src` is the catalogue path, e.g. "a/doors/framed/SW.jpg".
export function tile(src, alt, { eager = false } = {}) {
  const key = src.replace(/^a\//, "").replace(/\.[a-z]+$/i, "");
  const dims = tiles[key];
  if (!dims) throw new Error(`Unknown tile ${src}`);
  return `<picture><source type="image/webp" srcset="/img/t/${key}.webp"><img src="/img/t/${key}.jpg" width="${dims[0]}" height="${dims[1]}" alt="${esc(alt)}" ${eager ? "" : 'loading="lazy" '}decoding="async"></picture>`;
}
export const tileUrl = (src, m) => `${m ? m.url : ""}/img/t/${src.replace(/^a\//, "").replace(/\.[a-z]+$/i, "")}.jpg`;

export const crumbs = items => `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a>${items.map(([label, href]) => `<span aria-hidden="true">/</span>${href ? `<a href="${href}">${amp(label)}</a>` : `<span aria-current="page">${amp(label)}</span>`}`).join("")}</nav>`;
export const breadcrumbSchema = (m, items) => ({
  "@type": "BreadcrumbList",
  itemListElement: [["Home", "/"], ...items].map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name: strip(name), ...(path && { item: m.url + path }) })),
});
export const faqSchema = list => ({
  "@type": "FAQPage",
  mainEntity: list.map(([q, a]) => ({ "@type": "Question", name: strip(q), acceptedAnswer: { "@type": "Answer", text: strip(a) } })),
});

export function orgSchema(m) {
  const sameAs = Object.values(m.social).filter(Boolean);
  return {
    "@type": m.showroom ? ["Organization", "HomeAndConstructionBusiness"] : "Organization",
    "@id": `${m.url}/#organization`,
    name: m.brand,
    alternateName: "Sanyang",
    url: m.url + "/",
    logo: { "@type": "ImageObject", url: `${m.url}/img/logo/sy-logo.png`, width: 640, height: 163 },
    image: photoUrl("sy-factory", 1200, m),
    description: t(m, {
      uk: "Kitchen and bathroom cabinet manufacturer supplying housebuilders, developers, contractors and the kitchen trade across the UK and Ireland, factory-direct.",
      ae: "Kitchen cabinet and joinery manufacturer supplying developers, fit-out contractors and the trade across the UAE, with in-house design and our own factories.",
    }),
    email: m.email,
    telephone: m.phone,
    ...(m.company.legalName && { legalName: m.company.legalName }),
    ...(m.company.number && { identifier: { "@type": "PropertyValue", propertyID: "Companies House", value: m.company.number } }),
    ...(m.company.vat && { vatID: m.company.vat }),
    areaServed: m.areaServed.map(c => ({ "@type": "Country", name: c })),
    knowsAbout: ["Kitchen cabinets", "Bathroom vanities", "Fitted wardrobes", "Internal doors", "Flat-pack kitchens", "Shaker kitchens", "Contract kitchens", "Kitchen joinery"],
    hasCredential: ["ISO 9001:2015", "FSC chain of custody (certified timber available)", "E1 / CARB Phase 2 boards"].map(n => ({ "@type": "EducationalOccupationalCredential", name: n })),
    contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: m.email, telephone: m.phone, areaServed: m.areaServed, availableLanguage: ["en"] }],
    ...(sameAs.length && { sameAs }),
    ...(m.showroom && { address: { "@type": "PostalAddress", streetAddress: m.showroom.street, addressLocality: m.showroom.city, addressRegion: m.showroom.area, addressCountry: m.showroom.country } }),
  };
}
export const websiteSchema = m => ({
  "@type": "WebSite", "@id": `${m.url}/#website`, url: m.url + "/", name: m.brand, inLanguage: m.lang,
  publisher: { "@id": `${m.url}/#organization` },
});

// Navigation
export function nav(m) {
  return [
    { href: "/kitchen-cabinets/", label: "Kitchens", key: "kitchens", menu: "kitchens" },
    { href: "/bathroom-vanities/", label: "Bathrooms", key: "bathrooms" },
    { href: "/who-we-supply/", label: "Who we supply", key: "sectors", menu: "sectors" },
    { href: "/how-it-works/", label: "How it works", key: "how", menu: "how" },
    { href: "/about/", label: "About", key: "about", menu: "about" },
    { href: "/journal/", label: "Journal", key: "journal" },
  ];
}

const pageHero = ({ kicker, h1, lede, trail, img, pos, after = "", dark = false }) => img
  ? `<section class="p-hero img${dark ? " dark" : ""}">${picture(img, { alt: strip(h1), eager: true, sizes: "100vw", pos, cls: "bgimg" })}<div class="wrap">${crumbs(trail)}${kicker ? `<p class="kicker">${kicker}</p>` : ""}<h1>${h1}</h1>${lede ? `<p class="lede">${lede}</p>` : ""}${after}</div></section>`
  : `<section class="p-hero"><div class="wrap">${crumbs(trail)}${kicker ? `<p class="kicker">${kicker}</p>` : ""}<h1>${h1}</h1>${lede ? `<p class="lede">${lede}</p>` : ""}${after}</div></section>`;
export { pageHero };

export const btn = (href, text, cls = "btn primary", extra = "") => `<a class="${cls}" href="${esc(href)}"${extra}>${text} ${ARROW}</a>`;
export const waLink = (m, text = "Hello Sanyang, I'd like to discuss a project.") => `https://wa.me/${m.whatsapp}?text=${encodeURIComponent(text)}`;
export const waBtn = (m, label = "WhatsApp us", cls = "btn wa") => `<a class="${cls}" href="${waLink(m)}" target="_blank" rel="noopener">${WA}<span>${label}</span></a>`;

export function ctaBand(m, { title, text, img = "sy-white-u" } = {}) {
  return `<section class="cta-band">${picture(img, { alt: "Sanyang kitchen made in our own factory", sizes: "100vw", cls: "bgimg" })}<div class="wrap"><div class="cta-box">
<p class="kicker">Start a project</p>
<h2>${title || t(m, { uk: "Let's price your <b>next scheme</b>", ae: "Let's design your <b>next project</b>" })}</h2>
<p>${text || t(m, {
    uk: "Send drawings or a unit schedule for each house type. We return an itemised quotation by order code, with sample doors for you and your client to sign off.",
    ae: "Send drawings, a BOQ or just an idea. Our in-house designers measure, draw and specify, and you approve samples before anything is made.",
  })}</p>
<div class="btns">${btn("/contact/", t(m, { uk: "Request a quotation", ae: "Request a proposal" }))}${waBtn(m)}</div>
</div></div></section>`;
}

function megaKitchens(collections) {
  const framed = collections.filter(c => c.group === "cabinet"), ranges = collections.filter(c => c.group === "range");
  const li = c => `<li><a href="/kitchen-cabinets/${c.slug}/"><span class="mi">${tile(c.door, `${c.name} kitchen door`)}</span><span><b>${c.name}</b><small>${c.sub}</small></span></a></li>`;
  return `<div class="mega"><div class="wrap mega-grid">
<div><p class="mh">Cabinet collections</p><ul class="mlist">${framed.map(li).join("")}</ul></div>
<div><p class="mh">Signature door ranges</p><ul class="mlist">${ranges.map(li).join("")}</ul></div>
<div class="mside"><p class="mh">Specify</p><ul class="mlinks">
<li><a href="/kitchen-cabinets/">All 16 collections</a></li><li><a href="/colours/">Colour finder</a></li><li><a href="/cabinet-units/">Cabinet units and sizes</a></li>
<li><a href="/construction/">Construction and materials</a></li><li><a href="/handles/">Handles</a></li><li><a href="/panels-and-mouldings/">Panels, mouldings and accessories</a></li><li><a href="/sample-kitchen/">Sample kitchen specification</a></li><li><a href="/catalogue/">Download the catalogue</a></li></ul></div>
</div></div>`;
}
const simpleMenu = items => `<div class="mega small"><div class="wrap"><ul class="mlinks cols">${items.map(([h, l, d]) => `<li><a href="${h}"><b>${l}</b>${d ? `<small>${d}</small>` : ""}</a></li>`).join("")}</ul></div></div>`;

function header(m, active, ctx) {
  const menus = {
    kitchens: megaKitchens(ctx.collections),
    sectors: simpleMenu(ctx.sectors.map(s => [`/who-we-supply/${s.slug}/`, s.short, s.menu])),
    how: simpleMenu([
      ["/how-it-works/", "How it works", "From drawings to delivery"],
      ["/design-service/", "Design service", t(m, { uk: "Kitchen plans and specifications", ae: "Measurement, 3D design and specification" })],
      ["/shipping-and-delivery/", "Shipping and delivery", "Containers, Incoterms and packing"],
      ["/quality/", "Quality and certifications", "ISO 9001, FSC, E1, KCMA"],
      ["/warranty/", "10-year warranty", "What it covers"],
      ["/faq/", "FAQ", "Answers for buyers"],
    ]),
    about: simpleMenu([
      ["/about/", "About Sanyang", "A manufacturer first"],
      ["/our-factories/", "Our factories", "China, Vietnam and Thailand"],
      ["/gallery/", "Gallery", "Kitchens and bathrooms"],
      ...(m.key === "ae" ? [["/locations/", "Where we work", "Dubai, Abu Dhabi and across the UAE"]] : [["/ireland/", "Supplying Ireland", "Projects in the Republic and NI"]]),
      ["/contact/", "Contact", m.email],
    ]),
  };
  const links = nav(m).map(n => `<li class="${n.menu ? "has-menu" : ""}"><a href="${n.href}"${n.key === active ? ' aria-current="page"' : ""}>${n.label}</a>${n.menu ? menus[n.menu] : ""}</li>`).join("");
  return `<a class="skip" href="#main">Skip to content</a>
<div class="topbar"><div class="wrap"><p>${m.proof.years} years manufacturing <i>·</i> ${m.proof.containers} containers a month <i>·</i> ${m.proof.warrantyYears}-year warranty <i>·</i> FSC · E1 · ISO 9001</p>
<p class="tb-r"><a href="mailto:${m.email}">${MAIL}${m.email}</a>${m.key === "ae" ? `<a href="tel:${m.phoneHref}">${m.phone}</a>` : ""}<a href="${waLink(m)}" target="_blank" rel="noopener">${WA}${m.whatsappDisplay}</a></p></div></div>
<header class="site-header" id="top"><div class="wrap">
<a class="logo" href="/" aria-label="${m.brand} home"><picture><source type="image/webp" srcset="/img/logo/sy-logo.webp"><img src="/img/logo/sy-logo.png" width="640" height="163" alt="${m.brand}"></picture></a>
<nav class="main-nav" aria-label="Main"><ul>${links}</ul></nav>
<div class="h-cta"><a class="btn primary sm" href="/contact/">${t(m, { uk: "Get a quotation", ae: "Get a proposal" })}</a></div>
<button class="menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer"><span></span></button>
</div></header>
<div class="drawer" id="drawer" hidden><div class="wrap">
<ul>${nav(m).map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}<li><a href="/colours/">Colour finder</a></li><li><a href="/catalogue/">Catalogue</a></li><li><a href="/contact/">Contact</a></li></ul>
<div class="btns">${btn("/contact/", t(m, { uk: "Get a quotation", ae: "Get a proposal" }))}${waBtn(m)}</div>
</div></div>`;
}

function footer(m, ctx) {
  const c = m.company;
  const legal = m.key === "uk"
    ? `© ${new Date().getFullYear()} ${c.legalName}. Registered in ${c.registeredIn}, company number ${c.number}. VAT ${c.vat}.`
    : `© ${new Date().getFullYear()} ${c.legalName}. Showroom: ${m.showroom.full}.`;
  const col = (h, items) => `<div><p class="fh">${h}</p><ul>${items.map(([href, l]) => `<li><a href="${href}">${amp(l)}</a></li>`).join("")}</ul></div>`;
  return `<footer class="site-footer"><div class="wrap">
<div class="f-top">
<div class="f-brand"><picture><source type="image/webp" srcset="/img/logo/logo-light.webp"><img src="/img/logo/logo-light.png" width="640" height="163" alt="${m.brand}" loading="lazy"></picture>
<p>${t(m, { uk: "Kitchen and bathroom cabinetry made in our own factories, for housebuilders, developers, contractors and the kitchen trade across the UK and Ireland.", ae: "Kitchens, wardrobes, vanities and doors, designed in-house and made in our own factories, for developers, contractors and the trade across the UAE." })}</p>
<p class="f-contact"><a href="mailto:${m.email}">${MAIL}${m.email}</a><a href="tel:${m.phoneHref}">${PHONE}${m.phone}</a><a href="${waLink(m)}" target="_blank" rel="noopener">${WA}WhatsApp ${m.whatsappDisplay}</a></p></div>
${col("Products", [["/kitchen-cabinets/", "Kitchen cabinets"], ["/colours/", "Colour finder"], ["/cabinet-units/", "Cabinet units"], ["/handles/", "Handles"], ["/bathroom-vanities/", "Bathroom vanities"], ["/construction/", "Construction"], ["/catalogue/", "Trade catalogue"]])}
${col("Who we supply", ctx.sectors.map(s => [`/who-we-supply/${s.slug}/`, s.short]))}
${col("Company", [["/about/", "About Sanyang"], ["/our-factories/", "Our factories"], ["/how-it-works/", "How it works"], ["/quality/", "Quality"], ["/warranty/", "Warranty"], ["/journal/", "Journal"], ["/faq/", "FAQ"], ["/contact/", "Contact"]])}
</div>
<div class="f-certs"><span>ISO 9001:2015</span><span>FSC certified timber available</span><span>E1 · CARB P2</span><span>KCMA tested</span><span>${m.proof.warrantyYears}-year warranty</span></div>
<div class="f-bottom"><p>${legal}</p><p class="f-legal"><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/sitemap/">Sitemap</a><a href="${m.key === "uk" ? "https://sanyang.ae" : "https://sanyang.co.uk"}" hreflang="${m.key === "uk" ? "en-AE" : "en-GB"}">${m.key === "uk" ? "Sanyang UAE" : "Sanyang UK"}</a></p></div>
</div></footer>
<a class="wa-float" href="${waLink(m)}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${WA}</a>`;
}

// The full HTML document for one page.
export function layout(m, page, assets, ctx) {
  const url = m.url + page.path;
  const title = page.fullTitle || `${page.title} | Sanyang${m.key === "ae" ? " UAE" : ""}`;
  const og = page.ogImage || photoUrl("sy-white-u", 1200, m);
  const alts = page.alternates || [];
  const graph = [orgSchema(m), websiteSchema(m), {
    "@type": page.pageType || "WebPage", "@id": url + "#webpage", url, name: strip(page.title), description: page.description,
    inLanguage: m.lang, isPartOf: { "@id": `${m.url}/#website` }, about: { "@id": `${m.url}/#organization` },
    ...(page.ogImage && { primaryImageOfPage: { "@type": "ImageObject", url: og } }),
  }, ...(page.schema || [])];
  return `<!doctype html>
<html lang="${m.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${amp(title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">'}
<link rel="canonical" href="${url}">
${alts.map(a => `<link rel="alternate" hreflang="${a.lang}" href="${a.href}">`).join("\n")}
<meta name="theme-color" content="#733015">
<meta property="og:type" content="${page.ogType || "website"}">
<meta property="og:site_name" content="${m.brand}">
<meta property="og:locale" content="${m.ogLocale}">
<meta property="og:title" content="${esc(strip(page.title))}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
${page.article ? `<meta property="article:published_time" content="${page.article.published}"><meta property="article:modified_time" content="${page.article.modified}">` : ""}
<link rel="icon" href="/favicon.ico" sizes="32x32"><link rel="icon" href="/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest">
<link rel="alternate" type="application/rss+xml" title="${m.brand} Journal" href="${m.url}/journal/feed.xml">
<link rel="preload" href="/fonts/montserrat-latin-300-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/montserrat-latin-600-normal.woff2" as="font" type="font/woff2" crossorigin>
${page.preload || ""}
<style>${assets.css}</style>
<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")}</script>
${assets.head || ""}
</head>
<body class="${page.bodyClass || ""}">
${header(m, page.nav, ctx)}
<main id="main">
${page.hero ? pageHero(page.hero) : ""}
${page.body}
</main>
${footer(m, ctx)}
<script src="/assets/${assets.js.site}" defer></script>
</body>
</html>
`;
}
