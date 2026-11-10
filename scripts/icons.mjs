// Makes favicons and app icons from the Sanyang mark. Run once: node scripts/icons.mjs
import sharp from "sharp";
const mark = "images-src/mark_light.png";
const bg = { r: 115, g: 48, b: 21, alpha: 1 };
const icon = async (size, file, pad = 0.16) => {
  const inner = Math.round(size * (1 - pad * 2));
  const m = await sharp(mark).resize({ width: inner, height: inner, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: bg } }).composite([{ input: m, gravity: "center" }]).png().toFile(file);
};
await icon(512, "static/icon-512.png"); await icon(192, "static/icon-192.png"); await icon(180, "static/apple-touch-icon.png"); await icon(32, "static/favicon-32.png", 0.1);
const b64 = (await sharp("static/favicon-32.png").toBuffer()).toString("base64");
await import("node:fs").then(fs => {
  // favicon.ico containing a single 32x32 PNG
  const png = Buffer.from(b64, "base64"), h = Buffer.alloc(22);
  h.writeUInt16LE(0, 0); h.writeUInt16LE(1, 2); h.writeUInt16LE(1, 4); h.writeUInt8(32, 6); h.writeUInt8(32, 7); h.writeUInt16LE(1, 10); h.writeUInt16LE(32, 12); h.writeUInt32LE(png.length, 14); h.writeUInt32LE(22, 18);
  fs.writeFileSync("static/favicon.ico", Buffer.concat([h, png]));
  const m64 = fs.readFileSync("static/icon-192.png").toString("base64");
  fs.writeFileSync("static/icon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><image href="data:image/png;base64,${m64}" width="192" height="192"/></svg>`);
});
console.log("icons done");
