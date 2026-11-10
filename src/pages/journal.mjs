// The Journal: articles, category pages and the RSS feed. Articles live in src/posts/, one file each.
import { readdirSync } from "node:fs";
import { picture, btn, t, amp, esc, strip, slug, breadcrumbSchema, faqSchema, photoUrl, preload, ctaBand } from "../lib/html.mjs";
import { section, postCard, faqList } from "../lib/parts.mjs";

const files = readdirSync(new URL("../posts/", import.meta.url)).filter(f => f.endsWith(".mjs")).sort();
const RAW = await Promise.all(files.map(f => import(new URL(`../posts/${f}`, import.meta.url)).then(x => x.default)));

export const CATEGORIES = ["Buying guides", "Materials and construction", "Design and trends", "Projects and procurement", "Market insight"];

// Posts for one market, newest first, with the market's copy resolved.
export function postsFor(m) {
  return RAW.filter(p => p.markets.includes(m.key)).map(p => {
    const s = t(m, p.slug);
    return {
      raw: p, id: `post-${p.id}`, slug: s, path: `/journal/${s}/`,
      title: t(m, p.title), description: t(m, p.description), excerpt: t(m, p.excerpt), category: p.category, img: p.img,
      published: p.published, modified: p.modified || p.published, readMins: 0,
    };
  }).sort((a, b) => b.published.localeCompare(a.published) || a.title.localeCompare(b.title));
}

const fmt = d => new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

function postPage(m, p, all) {
  let html = p.raw.body(m);
  const toc = [];
  html = html.replace(/<h2>(.*?)<\/h2>/g, (_, h) => { const id = slug(strip(h)).slice(0, 60); toc.push([id, strip(h)]); return `<h2 id="${id}">${h}</h2>`; });
  const words = strip(html).split(" ").length;
  const mins = Math.max(3, Math.round(words / 230));
  const res = v => typeof v === "function" ? v(m) : t(m, v);
  const kp = p.raw.keypoints ? res(p.raw.keypoints) : null;
  const faq = p.raw.faq ? res(p.raw.faq) : null;
  const related = all.filter(o => o !== p && o.category === p.category).concat(all.filter(o => o !== p && o.category !== p.category)).slice(0, 3);
  const body = `<article>
<header class="article-head"><div class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/journal/">Journal</a><span aria-hidden="true">/</span><a href="/journal/category/${slug(p.category)}/">${amp(p.category)}</a></nav>
<p class="kicker">${amp(p.category)}</p><h1>${amp(p.title)}</h1>
<div class="article-meta"><span>By the Sanyang design and technical team</span><span>Published <time datetime="${p.published}">${fmt(p.published)}</time></span>${p.modified !== p.published ? `<span>Updated <time datetime="${p.modified}">${fmt(p.modified)}</time></span>` : ""}<span>${mins} min read</span></div>
<div class="ph">${picture(p.img, { alt: "", eager: true, sizes: "(max-width:1240px) 100vw, 1240px" })}</div></div></header>
<div class="wrap article-wrap"><div class="prose">
${kp ? `<div class="keypoints"><p>Key points</p><ul>${kp.map(k => `<li>${k}</li>`).join("")}</ul></div>` : ""}
${html}
${faq ? `<h2 id="faq">Frequently asked questions</h2>${faqList(faq)}` : ""}
<div class="callout mt2"><p><b>About the author.</b> Written by Sanyang's design and technical team, drawing on more than 25 years of manufacturing kitchen and bathroom cabinetry and more than 500 containers a month shipped to the United States. <a href="/about/">About Sanyang</a>.</p></div>
</div>
<aside class="toc"><p>In this article</p><ol>${toc.map(([id, h]) => `<li><a href="#${id}">${amp(h)}</a></li>`).join("")}${faq ? `<li><a href="#faq">FAQ</a></li>` : ""}</ol>
<div class="side-cta"><b>${t(m, { uk: "Pricing a scheme?", ae: "Planning a project?" })}</b><p>${t(m, { uk: "Send your house types for an itemised quotation.", ae: "Our designers will turn your plans into a full proposal." })}</p><a class="btn gold sm" href="/contact/">Get in touch</a></div></aside>
</div></article>
${section("cream", `<p class="kicker">Keep reading</p><h2 style="margin-bottom:36px">Related <b>articles</b></h2><div class="posts">${related.map(postCard).join("")}</div>`)}
${ctaBand(m)}`;
  const url = m.url + p.path;
  return {
    id: p.id, path: p.path, nav: "journal", title: p.title, description: p.description, body,
    ogType: "article", ogImage: photoUrl(p.img, 1200, m), preload: preload(p.img, "(max-width:1240px) 100vw, 1240px"),
    article: { published: p.published, modified: p.modified },
    schema: [breadcrumbSchema(m, [["Journal", "/journal/"], [p.category, `/journal/category/${slug(p.category)}/`], [p.title, p.path]]),
      { "@type": "BlogPosting", "@id": url + "#article", headline: strip(p.title), description: p.description, image: [photoUrl(p.img, 1600, m)], datePublished: p.published, dateModified: p.modified, inLanguage: m.lang, wordCount: words,
        mainEntityOfPage: { "@id": url + "#webpage" }, articleSection: p.category,
        author: { "@type": "Organization", name: "Sanyang design and technical team", url: m.url + "/about/" }, publisher: { "@id": `${m.url}/#organization` } },
      ...(faq ? [faqSchema(faq)] : [])],
  };
}

export function pages(m) {
  const all = postsFor(m);
  if (!all.length) return [];
  const cats = CATEGORIES.filter(c => all.some(p => p.category === c));
  const catNav = cur => `<nav class="cats" aria-label="Categories"><a href="/journal/"${cur ? "" : ' aria-current="page"'}>All</a>${cats.map(c => `<a href="/journal/category/${slug(c)}/"${cur === c ? ' aria-current="page"' : ""}>${amp(c)}</a>`).join("")}</nav>`;
  const [first, ...rest] = all;
  const index = {
    id: "journal", path: "/journal/", nav: "journal",
    title: t(m, { uk: "Journal: Kitchen Guides for Developers and the Trade", ae: "Journal: Kitchen and Joinery Guides for UAE Projects" }),
    description: t(m, { uk: "Practical guides on specifying, buying and shipping kitchen cabinets for UK housebuilders, contractors and retailers, from the Sanyang design and technical team.", ae: "Practical guides on specifying, designing and buying kitchens and joinery for UAE developers, contractors and designers, from the Sanyang team." }),
    hero: { kicker: "Journal", h1: "Guides for <b>buyers and specifiers</b>", lede: "Materials, construction, design and procurement, explained by the people who make the cabinets.", trail: [["Journal"]] },
    pageType: "CollectionPage",
    schema: [breadcrumbSchema(m, [["Journal", "/journal/"]]), { "@type": "Blog", "@id": `${m.url}/journal/#blog`, name: `${m.brand} Journal`, publisher: { "@id": `${m.url}/#organization` }, blogPost: all.map(p => ({ "@type": "BlogPosting", headline: strip(p.title), url: m.url + p.path, datePublished: p.published })) }],
    body: section("", `${catNav("")}<a class="post-feature" href="${first.path}"><div class="ph">${picture(first.img, { alt: "", sizes: "(max-width:820px) 100vw, 55vw", eager: true })}</div><div><span class="tag">${amp(first.category)}</span><h2 class="mt1">${amp(first.title)}</h2><p class="lede mt1">${esc(first.excerpt)}</p><span class="tlink">Read the article →</span></div></a><div class="posts">${rest.map(postCard).join("")}</div>`) + ctaBand(m),
  };
  const catPages = cats.map(c => ({
    id: `journal-cat-${slug(c)}`, path: `/journal/category/${slug(c)}/`, nav: "journal",
    title: `${c}: Journal`, description: `${c} from the ${m.brand} Journal: ${all.filter(p => p.category === c).map(p => strip(p.title)).slice(0, 2).join("; ")}.`.slice(0, 158),
    hero: { kicker: "Journal", h1: amp(c), trail: [["Journal", "/journal/"], [c]] },
    pageType: "CollectionPage",
    schema: [breadcrumbSchema(m, [["Journal", "/journal/"], [c, `/journal/category/${slug(c)}/`]])],
    body: section("", `${catNav(c)}<div class="posts">${all.filter(p => p.category === c).map(postCard).join("")}</div>`),
  }));
  return [index, ...catPages, ...all.map(p => postPage(m, p, all))];
}

export function feed(m) {
  const all = postsFor(m);
  const x = s => esc(strip(s));
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>${m.brand} Journal</title><link>${m.url}/journal/</link><description>${x(t(m, { uk: "Kitchen guides for UK developers and the trade", ae: "Kitchen and joinery guides for UAE projects" }))}</description><language>${m.lang.toLowerCase()}</language>
<atom:link href="${m.url}/journal/feed.xml" rel="self" type="application/rss+xml"/>
${all.map(p => `<item><title>${x(p.title)}</title><link>${m.url}${p.path}</link><guid>${m.url}${p.path}</guid><pubDate>${new Date(p.published + "T09:00:00Z").toUTCString()}</pubDate><category>${x(p.category)}</category><description>${x(p.excerpt)}</description></item>`).join("\n")}
</channel></rss>
`;
}
