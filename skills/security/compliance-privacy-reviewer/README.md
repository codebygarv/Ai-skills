# 📋 Compliance & Privacy Reviewer

Find the privacy gaps before legal has to.

## What it does

Reviews how a feature collects, stores, and processes personal data against common privacy principles — data minimization, purpose limitation, consent, retention, user rights, and third-party sharing — flagging gaps for legal/compliance follow-up.

## When to use it

- A feature collects, stores, or processes personal data.
- Reviewing a new data flow or third-party integration for privacy implications.
- Before shipping something that touches user data in a new way.

## Best for

- Pre-ship review of features handling PII
- New analytics/tracking/third-party integrations
- Surfacing retention and data-minimization gaps early

## Example usage

> "Review this for privacy/compliance gaps: we're adding location tracking to improve delivery estimates."

## Expected output

Findings grouped by principle (Data Minimization, Purpose Limitation, Consent, Retention, User Rights, Third-Party Sharing), each with the gap and a recommendation — framed as review input for legal, not a compliance certification.

## Limitations

- **Not legal advice and not a compliance certification** — real GDPR/CCPA/HIPAA/etc. sign-off requires qualified legal review; this flags likely gaps for that review, nothing more.
- Doesn't know which specific jurisdiction/framework applies unless told — defaults to general privacy principles common across most frameworks.
