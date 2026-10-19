'use strict';
/* Sends mail through Resend's REST API (no SDK needed).
 * Returns false when Resend is not configured so callers can degrade. */

const { escHtml } = require('./http');

function configured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);
}

async function sendMail({ to, subject, html, text, replyTo }) {
  if (!configured()) return false;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!r.ok) throw new Error(`Resend ${r.status}: ${(await r.text()).slice(0, 200)}`);
  return true;
}

function ownerAddress() {
  return (process.env.CONTACT_TO || '').trim() || null;
}

function orderHtml({ orderNo, customer, lines, totals, paymentLabel, eur }) {
  const rows = lines
    .map((l) => `<tr><td>${escHtml(l.name)}</td><td align="right">${l.quantity} × ${eur(l.cents)}</td></tr>`)
    .join('');
  return `<div style="font-family:system-ui,sans-serif;max-width:560px">
<h2>Pasūtījums ${escHtml(orderNo)}</h2>
<p>${escHtml(customer.name)} · ${escHtml(customer.email)}</p>
<table width="100%" cellpadding="6" style="border-collapse:collapse;border-top:1px solid #ddd">${rows}
<tr><td>Piegāde (${escHtml(customer.method)})</td><td align="right">${eur(totals.shipping)}</td></tr>
<tr><td><strong>Kopā</strong></td><td align="right"><strong>${eur(totals.total)}</strong></td></tr></table>
<p><strong>Piegādes vieta:</strong> ${escHtml(customer.destination)}</p>
<p><strong>Apmaksa:</strong> ${escHtml(paymentLabel)}</p></div>`;
}

module.exports = { sendMail, configured, ownerAddress, orderHtml };
