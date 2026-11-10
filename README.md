# Sanyang Cabinetry websites

One codebase for both wholesale sites:

| Site | Domain | Build | Output |
| --- | --- | --- | --- |
| UK and Ireland | sanyang.co.uk | `node build.mjs uk` | `dist/uk` |
| UAE | sanyang.ae | `node build.mjs ae` | `dist/ae` |

It is a static site with no framework and no runtime dependencies. A small Node script turns the files in `src/`
into plain, pre-rendered HTML pages, so search engines and AI assistants read every word without running
JavaScript. Pages carry their own title, description, canonical URL, hreflang links to the other site, social
image and structured data (Organization, WebSite, WebPage, BreadcrumbList, FAQPage, ItemList, Service, HowTo,
BlogPosting).

The build also writes `sitemap.xml` (with hreflang and image entries), `robots.txt`, `llms.txt`, the Journal RSS
feed, a 404 page, an HTML sitemap and 301 redirects from the old site's URLs. It stops with an error if any page
has a broken internal link, a missing image, a duplicate title or description, or not exactly one `<h1>`.

## Running it on your computer

You need Node.js 20 or newer.

```sh
node build.mjs                 # builds both sites
node scripts/serve.mjs uk 8701 # serves dist/uk at http://localhost:8701 (forms print to the terminal)
node scripts/serve.mjs ae 8702
```

## Where things are

| To change | Edit |
| --- | --- |
| Emails, phone numbers, WhatsApp, company details, the UAE showroom, proof numbers | `src/markets.mjs` |
| The 16 collections: copy, specifications, construction tiers, compliance | `src/data/collections.mjs` |
| Doors, colours, handles and unit drawings (exported from the trade catalogue) | `src/data/catalogue.json` |
| Who we supply (sector pages, per site) | `src/data/sectors.mjs` |
| FAQ | `src/data/faq.mjs` |
| Journal articles | `src/posts/` (one file per article) |
| Page copy | `src/pages/*.mjs` |
| Header, footer and `<head>` SEO tags | `src/lib/html.mjs` |
| Forms | `src/lib/forms.mjs`, `functions/api/submit.js`, `apps-script/Code.gs` |
| Styles | `src/styles/site.css` |
| Redirects from old URLs | `REDIRECTS` in `build.mjs` |

Copy that differs between the sites is written as `t(m, { uk: "…", ae: "…" })`.

## Adding a Journal article

Copy any file in `src/posts/`, rename it `YYYY-MM-DD-short-name.mjs` and edit it. `markets` decides which site
shows it (`["uk"]`, `["ae"]` or both). Articles that appear on both sites with the same `id` are linked to each
other with hreflang. Each needs a unique title and a description of 70 to 160 characters.

## Adding or replacing photos

Put the original (at least 1200 px wide) in `images-src/photos/`, then run
`npm i --no-save sharp && node scripts/images.mjs`. This writes AVIF, WebP and JPEG versions at several sizes to
`static/img/p/` and records the image in `src/data/images.json`. Use it with `picture("file-name", { alt: "…" })`.

## Hosting (recommended: Cloudflare Pages, free)

Create two Cloudflare Pages projects from this one repository:

| Project | Build command | Output directory | Custom domain |
| --- | --- | --- | --- |
| sanyang-uk | `node build.mjs uk` | `dist/uk` | sanyang.co.uk and www.sanyang.co.uk |
| sanyang-ae | `node build.mjs ae` | `dist/ae` | sanyang.ae and www.sanyang.ae |

Both read `static/_headers` (security and caching headers) and `dist/<site>/_redirects`. Each project needs two
secrets for the forms (Settings > Variables and secrets): `FORM_WEBHOOK_URL` (the Apps Script `/exec` URL) and
`FORM_SECRET` (a long random string, also saved in the Apps Script's Script properties).

```
Browser ──POST /api/submit──▶ Cloudflare Pages Function ──▶ Google Apps Script ──▶ Google Sheet
                              (functions/api/submit.js)     (apps-script/Code.gs)   + email to sales@
                              checks fields, blocks bots                            + confirmation email
```

GitHub Pages also works for the pages themselves (a `CNAME` file and redirect stubs are written), but GitHub Pages
cannot run the form function, so forms need Cloudflare Pages or another host with serverless functions.
