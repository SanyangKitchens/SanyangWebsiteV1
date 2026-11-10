// Builds both sites: dist/uk (sanyang.co.uk) and dist/ae (sanyang.ae). No framework: `node build.mjs`.
// Build one site only with `node build.mjs uk` or `node build.mjs ae`.
// Every page is plain HTML with its CSS inline, so the first paint needs no extra request.
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { markets, MARKET_KEYS } from "./src/markets.mjs";
import { layout, amp, esc, strip } from "./src/lib/html.mjs";
import { section } from "./src/lib/parts.mjs";
import { COLLECTIONS } from "./src/data/collections.mjs";
import { SECTORS } from "./src/data/sectors.mjs";
import * as home from "./src/pages/home.mjs";
import * as products from "./src/pages/products.mjs";
import * as company from "./src/pages/company.mjs";
import * as journal from "./src/pages/journal.mjs";

const read = f => readFileSync(f, "utf8");
const hash = s => createHash("sha256").update(s).digest("hex").slice(0, 10);
const minifyCss = css => css.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").replace(/\s*([{};,>])\s*/g, "$1").replace(/;}/g, "}").trim();
const minifyJs = js => js.split("\n").map(l => l.trim()).filter(l => l && !l.startsWith("//")).join("\n");
const today = new Date().toISOString().slice(0, 10);

// Old URLs from the previous React site, so existing links and rankings carry over.
const REDIRECTS = {
  uk: [["/products/kitchen-cabinets", "/kitchen-cabinets/"], ["/products/bathrooms", "/bathroom-vanities/"], ["/locations", "/our-factories/"], ["/careers", "/about/"], ["/about", "/about/"], ["/contact", "/contact/"], ["/gallery", "/gallery/"], ["/warranty", "/warranty/"], ["/SanyangBrochure.pdf", "/catalogue/"], ["/SanyangBrochure2.pdf", "/catalogue/"], ["/BrochureWithSKU.pdf", "/catalogue/"]],
  ae: [["/products/kitchen-cabinets", "/kitchen-cabinets/"], ["/products/bathrooms", "/bathroom-vanities/"], ["/locations", "/locations/"], ["/careers", "/about/"], ["/about", "/about/"], ["/contact", "/contact/"], ["/gallery", "/gallery/"], ["/warranty", "/warranty/"], ["/SanyangBrochure.pdf", "/catalogue/"], ["/SanyangBrochure2.pdf", "/catalogue/"], ["/BrochureWithSKU.pdf", "/catalogue/"]],
};

function buildPages(m) {
  const posts = journal.postsFor(m);
  const ctx = { collections: COLLECTIONS, sectors: SECTORS[m.key], posts };
  const list = [...home.pages(m, ctx), ...products.pages(m), ...company.pages(m), ...journal.pages(m)];
  return { list, ctx };
}

const only = process.argv[2];
const keys = only ? [only] : MARKET_KEYS;
const built = Object.fromEntries(MARKET_KEYS.map(k => [k, buildPages(markets[k])]));

// hreflang: pages with the same id on both sites point at each other.
const byId = {};
for (const k of MARKET_KEYS) for (const p of built[k].list) (byId[p.id] ||= {})[k] = p.path;
const alternatesFor = id => {
  const e = byId[id];
  if (!e || !e.uk || !e.ae) return [];
  return [{ lang: "en-GB", href: markets.uk.url + e.uk }, { lang: "en-AE", href: markets.ae.url + e.ae }, { lang: "x-default", href: markets.uk.url + e.uk }];
};

let failed = false;
for (const key of keys) {
  const m = markets[key];
  const OUT = `dist/${key}`;
  const { list, ctx } = built[key];
  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(`${OUT}/assets`, { recursive: true });
  cpSync("static", OUT, { recursive: true });

  const code = minifyJs(read("src/scripts/site.js"));
  const jsFile = `site.${hash(code)}.js`;
  writeFileSync(`${OUT}/assets/${jsFile}`, code);
  const assets = { css: minifyCss(read("src/styles/site.css")), js: { site: jsFile }, head: m.analytics || "" };

  // HTML sitemap and 404, built from the page list.
  const groups = [["Products", p => p.path.startsWith("/kitchen-cabinets") || ["/colours/", "/cabinet-units/", "/handles/", "/construction/", "/panels-and-mouldings/", "/sample-kitchen/", "/bathroom-vanities/", "/catalogue/"].includes(p.path)], ["Who we supply", p => p.path.startsWith("/who-we-supply")], ["Company", p => !p.path.startsWith("/journal") && !p.path.startsWith("/kitchen-cabinets") && !p.path.startsWith("/who-we-supply")], ["Journal", p => p.path.startsWith("/journal")]];
  const used = new Set();
  const sm = groups.map(([g, f]) => { const items = list.filter(p => !used.has(p) && f(p)); items.forEach(p => used.add(p)); return `<h2 class="mt3">${g}</h2><ul class="sitemap-list mt1">${items.map(p => `<li><a href="${p.path}">${amp(strip(p.title === "Home" ? "Home" : p.title))}</a></li>`).join("")}</ul>`; }).join("");
  list.push({ id: "sitemap", path: "/sitemap/", nav: "", title: "Sitemap", description: `Every page on the ${m.brand} website${key === "ae" ? " for the UAE" : ""}: kitchen collections, units, sectors, company information and the Journal.`, hero: { kicker: "Sitemap", h1: "All <b>pages</b>", trail: [["Sitemap"]] }, body: section("", sm) });
  list.push({ id: "404", path: "/404.html", file: "404.html", noindex: true, nav: "", title: "Page not found", description: "This page could not be found.", hero: { kicker: "404", h1: "We can't find <b>that page</b>", lede: "It may have moved when we rebuilt the website. Try one of these instead.", trail: [["Not found"]] }, body: section("", `<div class="grid g4"><a class="card" href="/kitchen-cabinets/"><h3>Kitchen cabinets</h3><p>All 16 collections</p></a><a class="card" href="/who-we-supply/"><h3>Who we supply</h3><p>Sectors and services</p></a><a class="card" href="/journal/"><h3>Journal</h3><p>Guides and insight</p></a><a class="card" href="/contact/"><h3>Contact</h3><p>${m.email}</p></a></div>`) });

  const seen = new Map();
  for (const page of list) {
    if (seen.has(page.path)) throw new Error(`${key}: two pages use ${page.path}`);
    seen.set(page.path, page);
    page.alternates = alternatesFor(page.id);
    const file = page.file || path.join(page.path, "index.html");
    mkdirSync(path.dirname(path.join(OUT, file)), { recursive: true });
    writeFileSync(path.join(OUT, file), layout(m, page, assets, ctx));
  }

  // Redirect stubs for hosts without _redirects (GitHub Pages), plus _redirects for Cloudflare Pages.
  for (const [from, to] of REDIRECTS[key]) {
    if (from.endsWith(".pdf") || seen.has(from + "/")) continue;
    const dir = path.join(OUT, from);
    if (existsSync(path.join(dir, "index.html"))) continue;
    mkdirSync(dir, { recursive: true });
    writeFileSync(path.join(dir, "index.html"), `<!doctype html><meta charset="utf-8"><title>Moved</title><link rel="canonical" href="${m.url}${to}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}"><a href="${to}">This page has moved</a>`);
  }
  writeFileSync(`${OUT}/_redirects`, REDIRECTS[key].map(([f, t]) => `${f} ${t} 301`).join("\n") + "\n");
  if (m.domainFile !== false) writeFileSync(`${OUT}/CNAME`, m.url.replace("https://", "") + "\n");

  // XML sitemap with hreflang alternates and images, robots.txt, RSS, llms.txt.
  const indexable = list.filter(p => !p.noindex);
  const imgs = html => [...new Set([...html.matchAll(/<img src="(\/img\/p\/[^"]+\.jpg)"/g)].map(x => x[1]))].slice(0, 20);
  writeFileSync(`${OUT}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${indexable.map(p => {
    const html = read(path.join(OUT, p.file || path.join(p.path, "index.html")));
    return `<url><loc>${m.url}${p.path}</loc><lastmod>${p.article ? p.article.modified : today}</lastmod>${p.alternates.map(a => `<xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`).join("")}${imgs(html).map(i => `<image:image><image:loc>${m.url}${i}</image:loc></image:image>`).join("")}</url>`;
  }).join("\n")}
</urlset>
`);
  writeFileSync(`${OUT}/robots.txt`, `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${m.url}/sitemap.xml\n`);
  mkdirSync(`${OUT}/journal`, { recursive: true });
  writeFileSync(`${OUT}/journal/feed.xml`, journal.feed(m));
  writeFileSync(`${OUT}/llms.txt`, `# ${m.brand}${key === "ae" ? " (UAE)" : ""}

> ${strip(list[0].description)}

${m.brand} is a kitchen and bathroom cabinet manufacturer with ${m.proof.years} years of experience, its own factories in China, Vietnam and Thailand (${m.proof.area} m²), and more than ${m.proof.containers.replace("+", "")} containers a month shipped to the United States. ${key === "uk" ? "It supplies housebuilders, developers, contractors, housing providers, retailers and distributors in the UK and Ireland, trade only." : "In the UAE it designs, manufactures and supplies kitchens, wardrobes, vanities and doors for developers, contractors and designers, with in-house design and flexible payment terms."} Certifications: ISO 9001:2015, FSC-certified timber available, E1 / CARB Phase 2 boards, KCMA-tested cabinetry. Every cabinet has a ${m.proof.warrantyYears}-year warranty. Contact: ${m.email}, WhatsApp ${m.whatsappDisplay}.

## Key pages
${["/", "/kitchen-cabinets/", "/construction/", "/cabinet-units/", "/colours/", "/who-we-supply/", "/how-it-works/", "/shipping-and-delivery/", "/quality/", "/faq/", "/contact/"].map(p => { const pg = seen.get(p); return pg ? `- [${strip(pg.title === "Home" ? m.brand : pg.title)}](${m.url}${p}): ${strip(pg.description)}` : ""; }).filter(Boolean).join("\n")}

## Collections
${COLLECTIONS.map(c => `- [${c.name}, ${c.sub}](${m.url}/kitchen-cabinets/${c.slug}/): ${c.desc}`).join("\n")}

## Journal
${ctx.posts.map(p => `- [${strip(p.title)}](${m.url}${p.path}): ${strip(p.excerpt)}`).join("\n")}
`);
  writeFileSync(`${OUT}/site.webmanifest`, JSON.stringify({ name: m.brand, short_name: "Sanyang", start_url: "/", display: "browser", background_color: "#FBF8F4", theme_color: "#733015", icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/icon-512.png", sizes: "512x512", type: "image/png" }] }));

  // Checks: a broken link, missing image, duplicate title or missing h1 stops the build.
  const problems = [], warnings = [];
  const exists = href => {
    const clean = decodeURIComponent(href.split("#")[0].split("?")[0]);
    if (clean === "" || seen.has(clean)) return true;
    const f = path.join(OUT, clean);
    return existsSync(f) && (statSync(f).isFile() || existsSync(path.join(f, "index.html")));
  };
  const titles = new Map(), descs = new Map();
  for (const p of list) {
    const html = read(path.join(OUT, p.file || path.join(p.path, "index.html")));
    for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) if (!exists(href)) problems.push(`${p.path} links to missing ${href}`);
    for (const [, set] of html.matchAll(/srcset="([^"]+)"/g)) for (const part of set.split(",")) { const u = part.trim().split(" ")[0]; if (u.startsWith("/") && !exists(u)) problems.push(`${p.path} uses missing image ${u}`); }
    if ((html.match(/<h1[\s>]/g) || []).length !== 1) problems.push(`${p.path} should have exactly one <h1>`);
    if (p.noindex) continue;
    const title = html.match(/<title>([^<]*)<\/title>/)[1];
    if (titles.has(title)) problems.push(`Duplicate title "${title}" on ${p.path} and ${titles.get(title)}`);
    titles.set(title, p.path);
    if (descs.has(p.description)) problems.push(`Duplicate description on ${p.path} and ${descs.get(p.description)}`);
    descs.set(p.description, p.path);
    const tl = title.replace(/&amp;/g, "&").length, dl = p.description.length;
    if (tl > 70) warnings.push(`${p.path}: title is ${tl} characters`);
    if (dl < 70 || dl > 165) warnings.push(`${p.path}: description is ${dl} characters`);
  }
  warnings.forEach(w => console.warn(`warning (${key}):`, w));
  if (problems.length) { problems.forEach(p => console.error(`error (${key}):`, p)); failed = true; }
  const size = dir => readdirSync(dir, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? size(path.join(dir, e.name)) : statSync(path.join(dir, e.name)).size), 0);
  console.log(`${key}: built ${list.length} pages (${ctx.posts.length} articles) into ${OUT}/ (${(size(OUT) / 1048576).toFixed(1)} MB). CSS ${(assets.css.length / 1024).toFixed(1)} KB inline.`);
}
if (failed) process.exit(1);
