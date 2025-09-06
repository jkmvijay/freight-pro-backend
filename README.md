# Freight Pro Backend

This is the backend for Freight Pro (job bidding + trucking app).

## Endpoints
- `GET /` → Health check
- `POST /jobs` → Create a new job
- `POST /bids` → Place a bid

## Environment Variables
- `DATABASE_URL` → Postgres connection string (from Render)
- `COMMISSION_PERCENT` → Hidden commission percentage (default 0.1 = 10%)

## Deploy on Render
1. Create new Web Service → connect this repo.
2. Add Postgres → copy internal DB URL → set as DATABASE_URL.
3. Deploy 🚀.
