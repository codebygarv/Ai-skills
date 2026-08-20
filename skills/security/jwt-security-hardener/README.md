# 🛡️ JWT Security Hardener

Harden JSON Web Token validation against algorithm confusion, replay attacks, and key vulnerabilities.

## What it does

Audits JWT issuance and verification logic to eliminate security flaws, enforcing strict algorithm whitelisting, short lifetimes, and token revocation blocklists.

## When to use it

- Implementing API auth with JSON Web Tokens.
- Hardening against OWASP JWT security vulnerabilities.
- Setting up JWKS asymmetric token verification.

## Best for

- JWT authentication & security
- Token revocation & refresh flow
- Asymmetric signing (RS256 / Ed25519)
