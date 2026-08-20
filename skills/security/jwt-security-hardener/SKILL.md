---
name: jwt-security-hardener
description: Audits JSON Web Token implementations for algorithm confusion attacks, key rotation, expiration, and replay defense.',
---

## Purpose

Audit and harden JSON Web Token (JWT) authentication, signing, and verification pipelines to eliminate critical vulnerabilities: algorithm confusion (`alg: none`, HMAC vs RSA/ECDSA confusion), weak signing secrets, missing claim validations, and lack of revocation mechanisms.

## When to Use

- Implementing or reviewing JWT authentication for APIs, single sign-on, or microservices.
- Passing security audits and penetration tests on token validation logic.
- Setting up token rotation, refresh token revocation, and asymmetric key pairs (JWKS).

## What to Analyze

1. **Algorithm Whitelisting**: Explicitly enforcing expected algorithms (e.g. `algorithms: ['RS256']`) preventing `none` or public-key-as-HMAC attacks.
2. **Mandatory Standard Claims**: Enforcing `exp` (short expiration, max 15m), `iat`, `nbf`, `iss` (issuer validation), and `aud` (audience validation).
3. **Storage Security**: Storing tokens in `HttpOnly`, `Secure`, `SameSite=Lax` cookies vs vulnerable `localStorage`.
4. **Token Revocation & Blacklisting**: Redis blocklist for revoked `jti` (token IDs) upon logout or permission change.
5. **Asymmetric Key Rotation**: Fetching public verification keys via standard JWKS endpoints with key caching.

## Output Format

- **Security Vulnerability Assessment**: Critical / High risks found in current JWT setup.
- **Hardened Verification Code**: Drop-in secure token validation middleware.
- **JWKS Key Rotation Specification**: Standard asymmetric key management flow.

## Avoid

- Storing sensitive user permissions in long-lived access tokens without revocation capabilities.
- Trusting the `alg` header from untrusted incoming tokens without backend whitelisting.
