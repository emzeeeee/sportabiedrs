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

## Bookings, accounts, clubs (new)

Everything below is additive. If `DATABASE_URL` is missing these endpoints answer 503 and the site keeps working with its built-in fallbacks.

| Endpoint | What it does |
|---|---|
| `GET /api/venues` | Bookable venues (only those with at least one active court) |
| `GET /api/venues/:id/slots?date=YYYY-MM-DD` | Free/busy hourly slots, venue-local time |
| `POST /api/bookings/checkout` | Login required. Holds the slot 15 min, creates a Stripe PaymentIntent with the server-side price |
| `GET /api/bookings`, `POST /api/bookings/cancel` | My bookings; free cancellation with full refund up to 24 h before start |
| `GET/POST /api/clubs` | Approved clubs for the map / club application form |
| `GET /api/orders`, `GET /api/me` | Shop order history and profile for the signed-in user |
| `/api/admin` | Admin only (`x-admin-token`): applications, venues, courts, bookings, orders |

Pages: `account.html` (my bookings and orders), `club-register.html` (club application).

**Setup**
1. Vercel > Storage > connect a Postgres (Neon). Tables are created automatically on first request.
2. Set `CLERK_SECRET_KEY`, `ADMIN_TOKEN`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` (see `env.example`).
3. Stripe webhook endpoint `https://YOUR-SITE/api/stripe-webhook`, events: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.canceled`.
4. Make a venue bookable (nothing is bookable until you do this):
```
curl -X POST https://YOUR-SITE/api/admin -H "x-admin-token: $ADMIN_TOKEN" -H "content-type: application/json" \
 -d '{"action":"upsert_venue","venue":{"name":"MH Padel Club","sport_key":"padel","city":"Mārupe","address":"Mārupes Parks 1"},"courts":[{"name":"Court 1","price_eur":20}]}'
```
The venue name must match the name already on the map. Club applications: `GET /api/admin?view=applications`, then `{"action":"review_application","id":"app_...","decision":"approve","lat":56.9,"lng":24.1,"courts":[{"name":"Court 1","price_eur":18}]}`.

Rules: 15 min payment hold, no double booking (row lock), bookable 30 min to 60 days ahead, late payment after an expired hold is revived if the slot is still free, otherwise refunded automatically.

## Not built yet
Email reminders before a booking, club self-service dashboard, and admin screens (admin is API-only for now).

**Function limit:** Vercel's free (Hobby) plan allows 12 serverless functions. The API is deliberately 11 files; related calls share one file and `vercel.json` rewrites keep the public URLs (`/api/bookings/checkout`, `/api/me`, `/api/venues/:id/slots`, …). Shared code lives in `api/_lib/` (not counted). Keep it at 12 or fewer.
