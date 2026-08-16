# 🎯 Threat Modeler

Find the risks before you build, not after.

## What it does

Performs STRIDE-style threat modeling on a proposed feature or system design — identifies assets, trust boundaries, and ranked threats with concrete mitigations, before any code exists to review.

## When to use it

- Designing a new feature touching user data, auth, payments, or external input.
- Before finalizing an architecture that introduces a new trust boundary.
- You want "what could go wrong here" answered at the design stage, not after shipping.

## Best for

- Pre-implementation design review of sensitive features
- New integrations with external services or untrusted input
- Architecture decisions involving a new trust boundary

## Example usage

> "Threat model this: we're adding a 'share this document with anyone via link' feature."

## Expected output

Assets and trust boundaries identified, a Threat → STRIDE category → Likelihood/Impact → Mitigation table, with the top 2-3 priority threats called out separately.

## Limitations

- Reasons about the design as described — can't catch implementation-level bugs that only exist once code is written (pair with [Security Auditor](../../development/security-auditor/) once it is).
- Not a substitute for a formal threat-modeling process (e.g. Microsoft's TMT, PASTA) on high-stakes systems — this is a fast, practical pass, not a compliance artifact.
