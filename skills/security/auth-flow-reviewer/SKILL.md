---
name: auth-flow-reviewer
description: Deep review of authentication, authorization, session, and SSO flows specifically - token lifecycle, session fixation, logout behavior, and OAuth/SSO correctness. Use when reviewing or designing login, session, or SSO code specifically.
---

## Purpose

Review authentication and authorization flows in depth — login, session management, token lifecycle, logout, and SSO/OAuth integrations — going deeper into this one area than [Security Auditor](../../development/security-auditor/)'s general pass covers.

## When to Use

- Reviewing or designing login, session, or logout code.
- Integrating an SSO/OAuth provider.
- Debugging auth-related bugs (unexpected logouts, session persistence issues, "why is this user still logged in").

## What to Analyze

1. **Session lifecycle** — session creation on login, expiry (both idle timeout and absolute max lifetime), and invalidation on logout — confirm logout actually invalidates server-side state, not just clears a client-side cookie.
2. **Session fixation** — is a new session ID issued on login (not reusing a pre-login session ID), preventing an attacker from fixing a victim's session ID before authentication?
3. **Token handling** — where access/refresh tokens are stored (httpOnly cookies vs. localStorage — localStorage is readable by any script, a real XSS-amplification risk), token expiry, and refresh-token rotation on use.
4. **Password/credential handling** — hashing algorithm (bcrypt/argon2/scrypt, not plain SHA/MD5), rate limiting on login attempts, no username enumeration via differing error messages ("no such user" vs "wrong password").
5. **OAuth/SSO correctness** — `state` parameter used and verified (CSRF protection for the OAuth flow), redirect URI validated against an allowlist (not just checking it "contains" the expected domain), token exchange happens server-side not client-side where possible.
6. **Multi-factor / step-up auth** — if present, confirm it can't be bypassed by directly hitting a post-MFA endpoint/state.

## Output Format

- Findings grouped by area (Session Lifecycle, Token Handling, Credential Handling, OAuth/SSO, MFA).
- Each finding: what's wrong, the concrete exploit scenario, and the fix.
- Severity ranked — session fixation and auth bypass issues rank above weaker but non-bypassable issues like missing rate limiting.

## Avoid

- Re-doing a full general security review — stay focused on auth/session/SSO specifically; hand off other findings to [Security Auditor](../../development/security-auditor/).
- Recommending a specific auth library/provider without knowing the stack — focus on correctness principles that apply regardless of implementation.
- Treating every auth pattern that differs from your default expectation as wrong — ask about intentional design choices (e.g. deliberately long session lifetimes for a specific product reason) before flagging them.
