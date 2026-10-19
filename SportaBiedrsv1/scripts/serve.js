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

/** Maps /api/a/b to api/a/b.js, api/a/b/index.js, or dynamic folders like api/venues/[id]/slots.js. */
/* Same rewrites as vercel.json, so local runs and tests behave like production. */
const REWRITES = (() => { try { return JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8')).rewrites || []; } catch { return []; } })();
function applyRewrite(url) {
  for (const r of REWRITES) {
    const names = [];
    const re = new RegExp('^' + r.source.replace(/:([A-Za-z0-9_]+)/g, (_m, n) => { names.push(n); return '([^/]+)'; }) + '$');
    const m = re.exec(url.pathname);
    if (!m) continue;
    const dest = new URL(r.destination.replace(/:([A-Za-z0-9_]+)/g, (_x, n) => encodeURIComponent(m[names.indexOf(n) + 1] || '')), 'http://x');
    return { pathname: dest.pathname, query: Object.fromEntries(dest.searchParams) };
  }
  return { pathname: url.pathname, query: {} };
}

function resolveApi(rel) {
  const segs = rel.split('/').filter(Boolean);
  if (!segs.length || segs.some((s) => !/^[A-Za-z0-9_-]+$/.test(s) || s.startsWith('_'))) return null;
  const apiRoot = path.join(root, 'api');
  function walk(dir, i, params) {
    if (i === segs.length) {
      const idx = path.join(dir, 'index.js');
      return fs.existsSync(idx) ? { file: idx, params } : null;
    }
    const seg = segs[i];
    if (i === segs.length - 1) {
      const f = path.join(dir, seg + '.js');
      if (fs.existsSync(f)) return { file: f, params };
    }
    const exact = path.join(dir, seg);
    if (fs.existsSync(exact) && fs.statSync(exact).isDirectory()) {
      const r = walk(exact, i + 1, params);
      if (r) return r;
    }
    if (fs.existsSync(dir)) {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const m = /^\[([A-Za-z0-9_]+)\]$/.exec(e.name);
        if (!m) continue;
        if (e.isDirectory()) {
          const r = walk(path.join(dir, e.name), i + 1, { ...params, [m[1]]: seg });
          if (r) return r;
        } else if (i === segs.length - 1) {
          return { file: path.join(dir, e.name), params: { ...params, [m[1]]: seg } };
        }
      }
    }
    return null;
  }
  return walk(apiRoot, 0, {});
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname.startsWith('/api/')) {
    const rw = applyRewrite(url);
    const match = resolveApi(rw.pathname.slice(5));
    if (!match) { res.statusCode = 404; res.setHeader('Content-Type', 'application/json'); return res.end('{"error":"Not found"}'); }
    // Vercel gives every function req.query = search params + dynamic route params.
    req.query = { ...Object.fromEntries(url.searchParams), ...rw.query, ...match.params };
    delete require.cache[require.resolve(match.file)];
    try { return await require(match.file)(req, res); } catch (e) { console.error(e); res.statusCode = 500; return res.end('{"error":"Server error"}'); }
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
