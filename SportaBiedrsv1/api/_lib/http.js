'use strict';
/* Small shared helpers for every serverless function: JSON replies, body
 * parsing, same-site check, best-effort rate limiting, input validation. */

const crypto = require('crypto');

function send(res, status, body, headers = {}) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  for (const [k, v] of Object.entries(headers)) res.setHeader(k, v);
  res.end(JSON.stringify(body));
}

function siteUrl(req) {
  const fromEnv = (process.env.SITE_URL || '').trim().replace(/\/+$/, '');
  if (fromEnv) return fromEnv;
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost:3000';
  const proto = req.headers['x-forwarded-proto'] || (host.startsWith('localhost') ? 'http' : 'https');
  return `${proto}://${host}`;
}

/** Reject browser requests that come from another origin (basic CSRF/abuse guard). */
function sameSite(req) {
  const origin = req.headers.origin;
  if (!origin) return true; // same-origin GET/fetch without Origin, curl, webhooks
  try {
    const o = new URL(origin);
    const allowed = new URL(siteUrl(req));
    const host = (req.headers['x-forwarded-host'] || req.headers.host || '').toLowerCase();
    return o.host === allowed.host || o.host.toLowerCase() === host;
  } catch {
    return false;
  }
}

/** Parse a JSON body whether Vercel already parsed it or not. Max ~100 kB. */
async function readJson(req, limit = 100 * 1024) {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) return req.body;
  const raw = typeof req.body === 'string' ? req.body : (await readRaw(req, limit)).toString('utf8');
  if (!raw) return {};
  return JSON.parse(raw);
}

function readRaw(req, limit = 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (c) => {
      size += c.length;
      if (size > limit) {
        reject(Object.assign(new Error('Body too large'), { status: 413 }));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

/* In-memory, per-instance limiter. Good enough to stop casual abuse; for real
 * protection put Vercel Firewall rate limits or Upstash Redis in front. */
const buckets = new Map();
function rateLimit(req, key, max, windowMs) {
  if (process.env.NODE_ENV === 'test') return true;
  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const id = `${key}:${ip}`;
  const now = Date.now();
  const hit = buckets.get(id);
  if (!hit || hit.reset < now) {
    buckets.set(id, { count: 1, reset: now + windowMs });
    if (buckets.size > 5000) for (const [k, v] of buckets) if (v.reset < now) buckets.delete(k);
    return true;
  }
  hit.count += 1;
  return hit.count <= max;
}

const EMAIL_RE = /^[^\s@<>"]{1,64}@[^\s@<>"]{1,255}\.[^\s@<>"]{2,}$/;
const isEmail = (s) => typeof s === 'string' && s.length <= 254 && EMAIL_RE.test(s);
const clean = (s, max = 200) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
const escHtml = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const newOrderNo = () => 'SB-' + crypto.randomInt(100000, 1000000);

/** Wraps a handler: method check, same-site check, error-to-JSON. */
function handler(methods, fn) {
  return async (req, res) => {
    try {
      if (!methods.includes(req.method)) {
        return send(res, 405, { error: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' }, { Allow: methods.join(', ') });
      }
      if (req.method !== 'GET' && !sameSite(req)) {
        return send(res, 403, { error: 'Forbidden origin', code: 'BAD_ORIGIN' });
      }
      return await fn(req, res);
    } catch (err) {
      const status = err.status || (err instanceof SyntaxError ? 400 : 500);
      if (status >= 500) console.error('[api]', req.url, err);
      return send(res, status, {
        error: status >= 500 ? 'Server error' : err.message,
        code: err.code || (status === 400 ? 'BAD_REQUEST' : 'SERVER_ERROR'),
      });
    }
  };
}

module.exports = { send, siteUrl, sameSite, readJson, readRaw, rateLimit, isEmail, clean, escHtml, newOrderNo, handler };
