# SportaBiedrs.lv

Static site (`index.html`, `app.js`, `styles.css`) plus Vercel serverless functions in `api/`.

## Run locally
```
cp env.example .env     # fill in TEST keys only
npm run serve           # http://localhost:3000, also runs /api/*
npm test                # API tests (no install needed, Node 20+)
```

## API (api/)
| Endpoint | What it does | Needs |
|---|---|---|
| `POST /api/create-checkout-session` | Stripe Checkout, prices taken from the server catalogue | `STRIPE_SECRET_KEY` |
| `POST /api/stripe-webhook` | verifies the Stripe signature, emails you paid orders | `STRIPE_WEBHOOK_SECRET`, Resend |
| `POST /api/create-order` | cash-on-delivery order, emails you and the customer | Resend |
| `POST /api/contact` | newsletter + contact form (honeypot, rate limit) | Resend |
| `GET /api/omniva-locations` | parcel machines from `data/omniva-lockers.json` | nothing |
| `POST /api/ai-chat` | assistant / partner chat; otherwise the frontend uses scripted replies | `OPENAI_API_KEY` |

Without a key an endpoint answers 503 and the site degrades. Cash orders refuse instead of faking success.

## Changing products or prices
Edit `PRODUCTS` in `app.js`, then run `npm run catalog` and commit `api/_lib/catalog.json`.
Prices are ONLY read from that file on the server.

## Go-live checklist
1. Add the Vercel env vars from `env.example` (Stripe **live** key, Resend, `SITE_URL`).
2. Stripe webhook -> `https://YOUR-SITE/api/stripe-webhook`, event `checkout.session.completed`.
3. Replace the `pk_test_` Stripe and Clerk keys in `index.html` with live ones.
4. Verify your sending domain in Resend.
5. Fill in the real seller details in the legal pages (terms, privacy).

## Not built yet
Bookings (`/api/bookings/checkout`, `/api/venues/:id/slots`) need a database (e.g. Supabase or Neon).
Order history also needs one; for now the email is the order record.
