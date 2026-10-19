#!/usr/bin/env node
/**
 * Local dev server: serves the static site AND runs the api/*.js functions,
 * so checkout, contact etc. can be tested without deploying.
 *   cp env.example .env   (fill in test keys)   then   npm run serve
 * Mirrors vercel.json cleanUrls (/about -> about.html).
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
try { process.loadEnvFile(path.join(root, '.env')); } catch { /* no .env: fine */ }

const PORT = Number(process.env.PORT) || 3000;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

// Never serve these from the dev server (and keep them out of deploys via .vercelignore).
const PRIVATE = /(^|[\\/])(\.[^\\/]*|api|scripts|tests|tests-api|node_modules|package-lock\.json|playwright\.config\.ts|env\.[a-z.]*example|env\.example)([\\/]|$)/;

function resolveFile(urlPath) {
  const clean = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '');
  const candidates = [clean, clean + '.html', path.join(clean, 'index.html')];
  for (const c of candidates) {
    const full = path.join(root, c);
    if (!PRIVATE.test(path.relative(root, full)) && full.startsWith(root + path.sep) && fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname.startsWith('/api/')) {
    const name = url.pathname.slice(5).replace(/\/+$/, '');
    const file = /^[a-z0-9-]+$/.test(name) ? path.join(root, 'api', name + '.js') : null;
    if (!file || !fs.existsSync(file)) { res.statusCode = 404; return res.end('{"error":"Not found"}'); }
    delete require.cache[require.resolve(file)];
    try { return await require(file)(req, res); } catch (e) { console.error(e); res.statusCode = 500; return res.end('{"error":"Server error"}'); }
  }
  const file = resolveFile(url.pathname === '/' ? '/index.html' : url.pathname);
  if (!file) {
    res.statusCode = 404;
    res.setHeader('Content-Type', TYPES['.html']);
    return res.end(fs.readFileSync(path.join(root, '404.html')));
  }
  res.setHeader('Content-Type', TYPES[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});

if (require.main === module) {
  server.listen(PORT, () => console.log(`SportaBiedrs dev server: http://localhost:${PORT}`));
}
module.exports = server;
