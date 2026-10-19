'use strict';
/* POST /api/contact
 * Handles the newsletter box (type "newsletter") and the contact form
 * (type "contact"). The hidden field "website" is a honeypot for bots.
 * If RESEND_AUDIENCE_ID is set, newsletter emails are also added to that
 * Resend audience; otherwise the owner just gets an email. */

const { send, readJson, rateLimit, isEmail, clean, escHtml, handler } = require('./_lib/http');
const { sendMail, configured, ownerAddress } = require('./_lib/mail');

module.exports = handler(['POST'], async (req, res) => {
  const owner = ownerAddress();
  if (!configured() || !owner) return send(res, 503, { error: 'Email is not configured', code: 'MAIL_NOT_CONFIGURED' });
  if (!rateLimit(req, 'contact', 5, 10 * 60 * 1000)) return send(res, 429, { error: 'Too many attempts', code: 'RATE_LIMITED' });

  const b = await readJson(req);
  if (b.website) return send(res, 200, { ok: true }); // honeypot
  const email = clean(b.email, 254).toLowerCase();
  if (!isEmail(email)) return send(res, 400, { error: 'Valid email is required', code: 'BAD_EMAIL' });

  if (b.type === 'newsletter') {
    if (process.env.RESEND_AUDIENCE_ID) {
      const r = await fetch(`https://api.resend.com/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, unsubscribed: false }),
        signal: AbortSignal.timeout(8000),
      });
      if (!r.ok) console.error('[resend audience]', r.status);
    }
    await sendMail({ to: owner, subject: 'Jauns jaunumu abonents', html: `<p>${escHtml(email)} (${escHtml(clean(b.lang, 4))})</p>`, replyTo: email });
    return send(res, 200, { ok: true });
  }

  const name = clean(b.name, 120);
  const message = clean(b.message, 4000);
  if (name.length < 2 || message.length < 5) return send(res, 400, { error: 'Name and message are required', code: 'BAD_INPUT' });
  await sendMail({
    to: owner,
    subject: `Ziņa no ${name}`,
    html: `<p><strong>${escHtml(name)}</strong> &lt;${escHtml(email)}&gt;</p><p>${escHtml(message).replace(/\n/g, '<br>')}</p>`,
    replyTo: email,
  });
  return send(res, 200, { ok: true });
});
