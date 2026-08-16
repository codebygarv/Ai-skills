# 🔓 Auth Flow Reviewer

A deep dive on login, sessions, and SSO — not a general security pass.

## What it does

Reviews authentication/authorization flows in depth: session lifecycle and fixation, token storage and rotation, credential handling, OAuth/SSO correctness (state param, redirect URI validation), and MFA bypass risk.

## When to use it

- Reviewing or designing login, session, or logout code.
- Integrating an SSO/OAuth provider.
- Debugging auth-related bugs (unexpected logouts, sessions that won't die, "why is this user still logged in").

## Best for

- Login/session/logout flow review
- OAuth/SSO integration review
- Debugging auth-specific weirdness

## Example usage

> "Review this auth flow" (paste login/session/OAuth handling code)

## Expected output

Findings grouped by area (Session Lifecycle, Token Handling, Credential Handling, OAuth/SSO, MFA), each with the concrete exploit scenario and fix, ranked by severity.

## Limitations

- Focused specifically on auth — pair with [Security Auditor](../../development/security-auditor/) for a broader vulnerability sweep of the rest of the codebase.
- Doesn't recommend a specific auth provider/library — reviews correctness principles that apply regardless of implementation choice.
