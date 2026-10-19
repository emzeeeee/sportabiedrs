'use strict';
/* POST /api/stripe-webhook
 * Stripe calls this after a payment. We verify the signature (HMAC, no SDK
 * needed) and email the owner an order notification.
 * In Stripe Dashboard add endpoint https://YOUR-SITE/api/stripe-webhook for the
 * event checkout.session.completed and put its signing secret in
 * STRIPE_WEBHOOK_SECRET. */

const crypto = require('crypto');
const { send, readRaw, escHtml } = require('./_lib/http');
const { sendMail, ownerAddress } = require('./_lib/mail');

const TOLERANCE_SECONDS = 300;

function verify(rawBody, header, secret) {
  if (!header) return false;
  const parts = Object.fromEntries(header.split(',').map((p) => p.split('=')));
  const t = Number(parts.t);
  if (!t || Math.abs(Date.now() / 1000 - t) > TOLERANCE_SECONDS) return false;
  const expected = crypto.createHmac('sha256', secret).update(`${t}.${rawBody}`).digest('hex');
  const given = header.split(',').filter((p) => p.startsWith('v1=')).map((p) => p.slice(3));
  return given.some((sig) => sig.length === expected.length && crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected)));
}

async function handle(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' }, { Allow: 'POST' });
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return send(res, 503, { error: 'Webhook not configured', code: 'WEBHOOK_NOT_CONFIGURED' });

  const raw = (await readRaw(req)).toString('utf8');
  if (!verify(raw, req.headers['stripe-signature'], secret)) return send(res, 400, { error: 'Bad signature' });

  const event = JSON.parse(raw);
  if (event.type === 'checkout.session.completed') {
    const s = event.data.object;
    const owner = ownerAddress();
    if (owner && s.payment_status === 'paid') {
      const m = s.metadata || {};
      const eur = (s.amount_total / 100).toFixed(2);
      await sendMail({
        to: owner,
        subject: `Apmaksāts pasūtījums (${eur} €)`,
        html: `<div style="font-family:system-ui,sans-serif"><h2>Stripe maksājums saņemts: ${escHtml(eur)} €</h2>
<p>${escHtml(m.customer_name)} · ${escHtml(s.customer_details?.email || s.customer_email)}</p>
<p><strong>Preces:</strong> ${escHtml(m.items)}</p>
<p><strong>Piegāde:</strong> ${escHtml(m.delivery_method)} → ${escHtml(m.delivery_destination)}</p>
<p>Stripe session: ${escHtml(s.id)}</p></div>`,
      }).catch((e) => console.error('[mail]', e.message));
    }
  }
  return send(res, 200, { received: true });
}

module.exports = async (req, res) => {
  try {
    await handle(req, res);
  } catch (err) {
    console.error('[webhook]', err);
    send(res, err.status || 500, { error: 'Server error' });
  }
};
// Stripe needs the exact raw bytes to verify the signature.
module.exports.config = { api: { bodyParser: false } };
