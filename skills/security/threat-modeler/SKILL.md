---
name: threat-modeler
description: Performs proactive, pre-implementation threat modeling (STRIDE-style) for a feature or system before it's built. Use when designing something new that touches user data, auth, money, or external input, before writing code.
---

## Purpose

Identify likely threats and attack surfaces for a feature or system *before* it's built, so mitigations are designed in from the start rather than patched on after a [Security Auditor](../../development/security-auditor/) review finds them in finished code.

## When to Use

- Designing a new feature that touches user data, authentication, payments, or external/untrusted input.
- Before finalizing an architecture that introduces a new trust boundary (a new service, a new external integration, a new user-facing input).
- The user asks for a "threat model" or "what could go wrong from a security angle" on something not yet built.

Differs from [Security Auditor](../../development/security-auditor/): that skill reviews *existing* code for concrete vulnerabilities; this skill reasons about a *design* before code exists, to catch classes of risk while they're still cheap to address.

## What to Analyze / Do

1. **Identify assets** — what's actually worth protecting here (user credentials, PII, payment data, business logic that could be abused).
2. **Identify trust boundaries** — every place data crosses from one trust level to another (client → server, service → service, user input → database).
3. **Apply STRIDE per boundary** — for each boundary, consider: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Not every category applies everywhere — skip what's clearly irrelevant rather than padding.
4. **Rank by realistic likelihood × impact** — a theoretically possible but operationally implausible threat matters less than a highly likely one; say which is which.
5. **Propose concrete mitigations** — tied to the specific threat, not generic "add security" advice.

## Output Format

- Assets and trust boundaries identified, briefly.
- A table or list: Threat → STRIDE category → Likelihood/Impact → Mitigation.
- Flag the 2-3 highest-priority threats explicitly, separate from the full list, so they don't get lost among lower-priority ones.

## Avoid

- Generating a threat for every STRIDE category at every boundary regardless of relevance — that produces noise, not signal.
- Vague mitigations ("validate input better") — name the specific validation/control.
- Threat-modeling code that already exists and can be concretely reviewed — that's [Security Auditor](../../development/security-auditor/)'s job.
