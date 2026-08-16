# Example: Environment Config Auditor

## Input

`.env.development`:
```
DB_URL=postgres://localhost:5432/app_dev
DEBUG=true
API_TIMEOUT_MS=30000
STRIPE_KEY=sk_test_abc123
```

`.env.production`:
```
DATABASE_URL=postgres://prod-db.internal:5432/app
API_TIMEOUT_MS="5000"
STRIPE_KEY=sk_live_EXAMPLE_FAKE_KEY_DO_NOT_USE_1234
```

## Output

**Naming Inconsistency**
- `DB_URL` (dev) vs. `DATABASE_URL` (prod) — same concept, different variable name. If application code reads `process.env.DATABASE_URL` consistently, dev's `DB_URL` is silently never picked up (likely masked by a fallback or default that makes dev "work" for the wrong reason). If code reads `DB_URL`, prod is broken.
  - Fix: standardize on one name across all environments.

**Type/Format Inconsistency**
- `API_TIMEOUT_MS=30000` (dev, unquoted number) vs. `API_TIMEOUT_MS="5000"` (prod, quoted string) — depending on how the app parses this (`Number(process.env.API_TIMEOUT_MS)` vs. assuming it's already numeric), the quoting difference may or may not matter, but it's worth confirming the parsing handles both consistently.

**Missing Variables**
- `DEBUG` is present in dev but absent in prod — this is very likely intentional (debug mode shouldn't be on in prod) and not flagged as an issue, but worth confirming the application has a sane default (`false`) when `DEBUG` is unset, rather than erroring on a missing variable.

**Possible Secrets (top priority — cross-reference [Secrets Scanner](../../security/secrets-scanner/))**
- `STRIPE_KEY` in prod (`sk_live_...`) is a live-looking Stripe key committed directly in what appears to be a config file rather than pulled from a secrets manager. Redacted: `sk_live_EXAM****...E1234`.
  - Recommendation: this shouldn't be in a checked-in `.env.production` file at all — move to a secrets manager, and treat this key as potentially exposed if this file has ever been committed to version control.
- Dev's `STRIPE_KEY` (`sk_test_...`) is a test key — lower concern, but same "shouldn't be hardcoded in a committed file" principle applies as a hygiene matter.

**Summary:** the `DB_URL`/`DATABASE_URL` naming mismatch is the most likely cause of an "works in dev, broken in prod" bug if this pattern is what's being debugged — check that first.
