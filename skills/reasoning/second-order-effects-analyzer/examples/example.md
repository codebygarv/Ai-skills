# Example: Second-Order Effects Analyzer

## Input

> "We are adding an aggressive client-side retry (5 retries with 100ms delay) to our mobile app whenever the checkout API returns a 500 or 504 error."

## Output

### Ripple Effect Analysis
1. **1st Order Effect (Intent)**: Mobile users experience fewer checkout drop-offs during momentary network blips.
2. **2nd Order Effect (Server Collapse)**: When the checkout backend experiences a brief database slowdown, 10,000 active app users issue 50,000 immediate retries, instantly converting a 10% slowdown into a 100% hard outage (Retry Storm / Thundering Herd).
3. **3rd Order Effect (Data Corruption)**: Non-idempotent card charges executed on backend during 504 gateway timeouts get retried and charged 5 times on the customer's credit card.

### Systemic Mitigation Blueprint
- Replace fixed 100ms retries with **Exponential Backoff with Full Jitter** (`random_between(0, min(cap, base * 2^attempt))`).
- Require mandatory **Idempotency Keys** on checkout endpoints to prevent duplicate charges.
- Implement server-side **Circuit Breakers** returning fast 503s with `Retry-After` headers.
