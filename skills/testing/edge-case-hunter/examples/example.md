# Example: Edge Case Hunter

## Input

> "Find edge cases for this feature: a form that lets users transfer money between their own accounts (checking/savings)."

## Output

**Boundary Values**
- Transfer amount of exactly $0 — should be rejected as a no-op, not silently "succeed" with nothing happening.
- Transfer amount equal to the exact full balance of the source account — should succeed and leave a $0 balance, not be rejected by an off-by-one check.
- Transfer amount with more decimal precision than currency supports (e.g. $10.005) — should be rejected or rounded per a defined rule, not silently truncated inconsistently.

**Empty & Missing States**
- User has only one account (e.g. just checking, no savings yet) — the "transfer to" dropdown has nothing valid to select; the form should communicate this clearly rather than showing an empty/broken dropdown.
- Source or destination account was closed between page load and form submission — submission should fail gracefully with a clear message, not throw a raw error.

**Unexpected User Behavior**
- Double-clicking "Submit" — must not create two transfers; needs idempotency (disable button on click, and/or a server-side idempotency key).
- User submits, then hits browser back and submits again from the (possibly cached) form — should not silently resubmit a stale form state.

**Unusual but Valid Input**
- Pasting an amount with currency symbols/commas ("$1,000.00") into the amount field — should be parsed correctly or rejected with a clear message, not silently parsed as `1` (stopping at the first comma).

**Concurrency**
- User has the transfer form open in two browser tabs and submits from both — both should not succeed if it would overdraw the source account; needs a server-side balance check at commit time, not just at form-load time.

**Degraded Conditions**
- Network drops after submission is sent but before a response is received — the client needs to handle "unknown outcome" distinctly from "definitely failed," since retrying blindly risks a duplicate transfer.
