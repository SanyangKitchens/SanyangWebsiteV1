// Serves dist/<site> locally: node scripts/serve.mjs uk 8701
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import path from "node:path";
const site = process.argv[2] || "uk", port = +(process.argv[3] || 8701), root = path.resolve("dist", site);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".svg": "image/svg+xml", ".xml": "application/xml", ".txt": "text/plain", ".woff2": "font/woff2", ".ico": "image/x-icon", ".json": "application/json" };
createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/submit") { let b = ""; req.on("data", c => b += c); req.on("end", () => { console.log("form:", b.slice(0, 300)); res.writeHead(200, { "content-type": "application/json" }); res.end('{"ok":true}'); }); return; }
  let p = path.join(root, decodeURIComponent(req.url.split("?")[0]));
  if (existsSync(p) && statSync(p).isDirectory()) p = path.join(p, "index.html");
  if (!existsSync(p)) { res.writeHead(404, { "content-type": types[".html"] }); res.end(readFileSync(path.join(root, "404.html"))); return; }
  res.writeHead(200, { "content-type": types[path.extname(p)] || "application/octet-stream" }); res.end(readFileSync(p));
}).listen(port, () => console.log(`${site} on http://localhost:${port}`));
