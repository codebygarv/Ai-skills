# 🔐 Security Auditor

Find security weaknesses before they ship.

## What it does

Reviews code for injection, auth/session flaws, access control gaps (IDOR), secrets handling, unsafe deserialization, and related weaknesses — each finding paired with the concrete attack scenario and a fix, ranked by severity.

## When to use it

- Before shipping anything that handles user input, auth, payments, or PII.
- Reviewing code that builds queries, commands, or file paths from external input.
- You explicitly want a security-focused pass, not general code quality.

## Best for

- Pre-ship review of auth/payment/PII-handling code
- Reviewing any code path that touches user-supplied input
- Catching IDOR and missing per-resource authorization checks

## Example usage

> "Security audit this endpoint" (paste code)

## Expected output

Findings grouped Critical → High → Medium → Low, each with the vulnerable pattern, a concrete attacker scenario, and a fix.

## Limitations

- This is a defensive-review tool for code you own or are authorized to assess — not for building exploits against systems without permission.
- Static review — can't confirm mitigations that exist elsewhere in the stack (WAF, gateway auth) without that context being provided.
- Not a substitute for a professional penetration test or formal security audit on anything high-stakes.
