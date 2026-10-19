'use strict';
/* Minimal Stripe REST client (form-encoded, no SDK). */

function configured() {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

async function stripe(method, path, form, { idempotencyKey } = {}) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw Object.assign(new Error('Online payment is not configured'), { status: 503, code: 'STRIPE_NOT_CONFIGURED' });
  const headers = { Authorization: `Bearer ${key}` };
  if (form) headers['Content-Type'] = 'application/x-www-form-urlencoded';
  if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey;
  const r = await fetch(`https://api.stripe.com/v1${path}`, {
    method,
    headers,
    body: form ? new URLSearchParams(form) : undefined,
    signal: AbortSignal.timeout(10000),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) {
    const err = new Error(data?.error?.message || `Stripe ${r.status}`);
    err.status = 502;
    err.code = 'STRIPE_ERROR';
    err.stripeStatus = r.status;
    throw err;
  }
  return data;
}

module.exports = { stripe, configured };
