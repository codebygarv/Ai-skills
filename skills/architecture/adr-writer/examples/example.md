# Example: ADR Writer

## Input

> "Write an ADR: we decided to use server-side sessions instead of JWTs for auth. Main reason was we need to be able to revoke access immediately when an account is suspended, and JWTs can't be invalidated before expiry without extra infrastructure. Downside is we now need Redis."

## Output

# ADR-007: Use server-side sessions for authentication

**Status:** Accepted
**Date:** 2026-08-16

## Context

Our product supports account suspension for trust-and-safety reasons, and suspension must take effect immediately — a suspended account continuing to make authenticated requests for even a few minutes is an unacceptable outcome for this use case.

We needed to choose an authentication mechanism that supports immediate, reliable revocation of an active session.

## Decision

We will use server-side sessions, with session state stored in Redis and a session ID held in an httpOnly cookie.

## Alternatives Considered

**Stateless JWTs.** Rejected because a JWT is valid until it expires, and there is no way to invalidate one before expiry without introducing server-side state — which defeats the primary benefit of choosing JWTs in the first place.

**JWTs with a revocation list.** Rejected because it delivers the worst of both approaches: we would still need a shared datastore to hold the revocation list (the same operational cost as sessions), while also carrying JWT's added complexity around token expiry, refresh, and signing key rotation.

**Very short-lived JWTs (1–2 minutes) with frequent refresh.** Rejected because it narrows the revocation window without closing it, and it substantially increases auth traffic. Given that suspension needs to be immediate rather than merely fast, a narrowed window doesn't satisfy the actual requirement.

## Consequences

**Positive:**
- Revocation is immediate and simple — delete the session record.
- Session contents can be updated server-side without waiting for a token to be reissued.
- No signing key management or rotation burden.

**Negative:**
- We now depend on Redis for authentication. If Redis is unavailable, authentication fails — this makes Redis a critical-path dependency requiring the corresponding monitoring and availability guarantees.
- Every authenticated request incurs a session lookup, adding latency compared to stateless token verification.
- Horizontal scaling requires all app instances to reach the same session store, ruling out fully independent stateless instances.
