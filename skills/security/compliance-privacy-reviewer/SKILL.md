---
name: compliance-privacy-reviewer
description: Reviews how a feature or system handles PII, data retention, and consent against common privacy-framework principles (GDPR-style). Use when a feature collects, stores, or processes personal data - not a substitute for legal advice.
---

## Purpose

Review how a feature collects, stores, processes, and retains personal data against common privacy-framework principles — data minimization, purpose limitation, consent, retention limits, and user rights (access/deletion/export) — flagging gaps before they become compliance problems.

## When to Use

- A feature collects, stores, or processes personal data (PII) — user profiles, tracking/analytics, location data, health/financial data, anything third-party-shareable.
- Reviewing a data flow or new integration for privacy implications.
- Before shipping something that touches user data in a new way.

**This is not legal advice.** Real compliance sign-off (GDPR, CCPA, HIPAA, etc.) requires qualified legal review — this skill flags likely gaps for a human/legal team to evaluate, not a compliance certification.

## What to Analyze

1. **Data minimization** — is every piece of personal data collected actually necessary for the stated purpose, or is more being collected "just in case"?
2. **Purpose limitation** — is data used only for the purpose it was collected for, or silently reused elsewhere (e.g. support-ticket data later used for marketing without new consent)?
3. **Consent** — is consent captured before data collection where required, is it specific (not bundled into an unrelated ToS acceptance), and can it be withdrawn?
4. **Retention** — is there a defined retention period, or does data accumulate indefinitely with no deletion policy?
5. **User rights** — can a user actually access, export, or delete their data on request, or does the current design make that operationally difficult (data scattered across systems with no way to locate/purge it all)?
6. **Third-party sharing** — is personal data sent to third parties (analytics, ad tech, subprocessors) disclosed, and is there a data processing agreement consideration flagged for legal?

## Output Format

- Findings grouped by principle (Data Minimization, Purpose Limitation, Consent, Retention, User Rights, Third-Party Sharing).
- Each finding: what's collected/done, the gap against the principle, and a concrete recommendation.
- Explicit reminder at the top and bottom of output: this is a technical/design review, not legal sign-off — flag for legal/compliance review before treating any framework as "satisfied."

## Avoid

- Presenting findings as definitive legal compliance verdicts ("this satisfies GDPR") — always frame as "gaps to review with legal," not certification.
- Assuming a specific jurisdiction's rules apply without being told — different frameworks (GDPR/CCPA/HIPAA/etc.) have different specific requirements; flag general principles common across most of them unless a specific framework is named.
- Recommending data collection be removed outright when the real fix might be better consent/retention practices — distinguish "don't collect this" from "collect it but handle it properly."
