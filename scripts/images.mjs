// Turns the originals in images-src/ into the web images in static/img/ and records their sizes in
// src/data/images.json. Run after adding or replacing a photo:
//   npm i --no-save sharp && npm run images
//
// images-src/photos/*   → AVIF, WebP and JPEG at several widths (for <picture> with srcset)
// images-src/tiles/**   → door, colour chip and handle tiles: WebP and JPEG at one small size
// images-src/*.png      → logos: PNG and WebP
import { readdir, mkdir, writeFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT = "static/img";
const WIDTHS = [480, 800, 1200, 1600, 2000];
const manifest = {};
const fresh = async (src, out) => existsSync(out) && (await stat(out)).mtimeMs >= (await stat(src)).mtimeMs;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p));
    else if (/\.(jpe?g|png|webp)$/i.test(e.name)) out.push(p);
  }
  return out.sort();
}

// Photos
await mkdir(`${OUT}/p`, { recursive: true });
for (const file of await walk("images-src/photos")) {
  const name = path.parse(file).name;
  const img = sharp(file).rotate();
  const { width, height } = await img.metadata();
  const widths = WIDTHS.filter(w => w < width).concat(width >= 2000 ? [] : [width]);
  for (const w of widths) {
    const base = `${OUT}/p/${name}-${w}`;
    if (await fresh(file, `${base}.jpg`)) continue;
    const r = img.clone().resize({ width: w });
    await r.clone().avif({ quality: 50, effort: 5 }).toFile(`${base}.avif`);
    await r.clone().webp({ quality: 72 }).toFile(`${base}.webp`);
    await r.clone().flatten({ background: "#ffffff" }).jpeg({ quality: 76, mozjpeg: true, progressive: true }).toFile(`${base}.jpg`);
  }
  manifest[name] = { width, height, widths };
}

// Tiles (door swatches, colour chips, handles): one size, WebP with a JPEG fallback.
const tiles = {};
for (const file of await walk("images-src/tiles")) {
  const rel = path.relative("images-src/tiles", file).replace(/\.[a-z]+$/i, "");
  const base = `${OUT}/t/${rel}`;
  await mkdir(path.dirname(base), { recursive: true });
  const img = sharp(file).rotate().flatten({ background: "#ffffff" });
  const meta = await img.metadata();
  const w = Math.min(meta.width, 360);
  const h = Math.round(meta.height * w / meta.width);
  if (!(await fresh(file, `${base}.webp`))) {
    const r = img.clone().resize({ width: w });
    await r.clone().webp({ quality: 74 }).toFile(`${base}.webp`);
    await r.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(`${base}.jpg`);
  }
  tiles[rel] = [w, h];
}

// Logos
await mkdir(`${OUT}/logo`, { recursive: true });
for (const file of (await readdir("images-src")).filter(f => f.endsWith(".png"))) {
  const name = path.parse(file).name.replace(/_/g, "-");
  const img = sharp(path.join("images-src", file));
  await img.clone().resize({ width: 640 }).png({ compressionLevel: 9, palette: true }).toFile(`${OUT}/logo/${name}.png`);
  await img.clone().resize({ width: 640 }).webp({ quality: 90 }).toFile(`${OUT}/logo/${name}.webp`);
}

await writeFile("src/data/images.json", JSON.stringify({ photos: manifest, tiles }, null, 1) + "\n");
console.log(`${Object.keys(manifest).length} photos, ${Object.keys(tiles).length} tiles`);
