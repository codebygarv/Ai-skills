# Example: Secrets Scanner

## Input

```js
// config.js
const STRIPE_KEY = "sk_live_EXAMPLE_FAKE_KEY_DO_NOT_USE_1234";
const DB_URL = "postgres://admin:hunter2@prod-db.internal:5432/app";

// test setup
const TEST_STRIPE_KEY = "sk_test_1234567890abcdefTESTTESTTEST";

// -- old auth code, disabled --
// const LEGACY_API_KEY = "AKIAIOSFODNN7EXAMPLE";
```

## Output

1. **`config.js:2`** — `STRIPE_KEY` — Critical. Value pattern (`sk_live_...`) matches a live Stripe secret key, not a test key. Redacted: `sk_live_EXAM****...E1234`.
   - Fix: move to an environment variable (`process.env.STRIPE_SECRET_KEY`) loaded from a secrets manager, remove from source. **If this is a real key, treat it as compromised and rotate it in Stripe's dashboard** — being present in the file (and likely git history) means it should be considered leaked regardless of repo visibility.

2. **`config.js:3`** — `DB_URL` — Critical. Connection string has an embedded username:password (`admin:hunter2`). Redacted: `postgres://admin:****@prod-db.internal:5432/app`.
   - Fix: same as above — pull from environment/secrets manager, and rotate the database password since it's been exposed in source.

3. **`config.js:6`** — `TEST_STRIPE_KEY` — Low. Pattern (`sk_test_...`) and naming (`TEST_STRIPE_KEY`) both indicate this is Stripe's test-mode key, not a live credential — test keys don't grant access to real payment data. Still worth moving out of source as good hygiene, but not an active-exposure emergency.

4. **`config.js:10` (commented out)** — `LEGACY_API_KEY` — Medium. This looks like an AWS access key ID pattern (`AKIA...`), and being commented out doesn't remove it from the file or git history — it's just as exposed as live code.
   - Fix: remove the comment entirely (don't just leave it disabled), and if this key was ever real, confirm with AWS whether it's still active and rotate/deactivate if so.

**Overall:** two Critical, real-looking credentials found (Stripe live key, DB password) — both should be treated as compromised and rotated regardless of whether this repo is public or private, since "committed to git" is enough exposure to warrant rotation.
