# Example: Incident Postmortem Writer

## Input

> Raw notes: "checkout started failing around 2:14pm, alerts fired at 2:22pm, someone noticed the payment provider webhook endpoint was returning 500s, turned out a deploy at 2:10pm changed the webhook signature verification and it was rejecting all incoming webhooks as invalid, rolled back at 2:41pm, fully recovered by 2:45pm, checkout was broken for about 30 min, maybe 3000 failed checkout attempts based on the drop in the checkout-success metric"

## Output

## Postmortem: Checkout Failure — [Date]

**Summary:** Checkout was unavailable for approximately 30 minutes due to a deploy that broke payment webhook signature verification, causing all incoming payment confirmation webhooks to be rejected. Resolved via rollback.

**Timeline:**
- **2:10pm** — Deploy shipped, including a change to webhook signature verification.
- **2:14pm** — Checkout failures begin (inferred from checkout-success metric drop; exact detection point not confirmed in source notes).
- **2:22pm** — Alerts fire.
- **~2:22–2:41pm** — Investigation; payment provider webhook endpoint identified as returning 500s.
- **2:41pm** — Rollback deployed.
- **2:45pm** — Full recovery confirmed.

*(Time between 2:14pm and 2:22pm — the gap between failures starting and alerts firing — is not detailed in the source notes; worth clarifying if alerting delay is itself a finding.)*

**Root Cause:** The 2:10pm deploy changed webhook signature verification logic in a way that caused all legitimate incoming payment webhooks to be rejected as invalid, blocking payment confirmation and therefore checkout completion.

**Contributing Factors:**
- Gap between failure onset (2:14pm) and alert firing (2:22pm) — 8 minutes of undetected impact worth investigating separately as a detection-speed issue.
- Not stated in notes whether the signature-verification change was covered by a test that would have caught this before deploy — worth confirming for the action items.

**Impact:** ~30 minutes of checkout unavailability (2:14pm–2:45pm); approximately 3,000 failed checkout attempts, based on the drop in the checkout-success metric.

**Action Items:**

| Action | Owner | Purpose |
|---|---|---|
| Add a test covering webhook signature verification against real provider payloads | Unassigned | Prevents recurrence |
| Add a canary/staged rollout step for deploys touching payment-critical paths | Unassigned | Prevents recurrence |
| Investigate the 8-minute gap between failure onset and alert firing | Unassigned | Improves response time |

**Lessons Learned:** Changes to payment-critical verification logic warrant additional test coverage and a staged rollout before full deployment, given the direct and immediate revenue impact when this path breaks.
