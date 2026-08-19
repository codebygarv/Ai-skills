---
name: cors-csrf-auditor
description: Reviews Cross-Origin Resource Sharing configs, CSRF protections, SameSite cookies, and origin security.
---

## Purpose

Audit web application endpoints for cross-origin vulnerabilities, overly permissive CORS headers (`Access-Control-Allow-Origin: *` with credentials), missing Anti-CSRF tokens on cookie-based state-changing endpoints, and weak SameSite cookie attributes.

## When to Use

- Exposing new public or authenticated API endpoints.
- Setting up single sign-on (SSO) or cross-subdomain API sharing.
- Reviewing cookie security configurations and pre-flight HTTP headers.

## What to Analyze

1. **CORS Headers**:
   - Inspect `Access-Control-Allow-Origin`, `Access-Control-Allow-Credentials`, and wildcard reflection of `Origin` header.
2. **CSRF Defenses on Cookie-Auth**:
   - Double-Submit Cookie pattern, Synchronizer Token pattern, or custom request headers (`X-Requested-With`).
3. **Cookie Attributes**:
   - `SameSite=Lax` / `SameSite=Strict`, `Secure`, `HttpOnly`, and appropriate `Domain` scoping.
4. **Preflight Request Handling**:
   - `OPTIONS` response status, caching headers (`Access-Control-Max-Age`), and allowed HTTP methods/headers.
5. **JSON vs Form POST Vulnerability**:
   - Ensure endpoints cannot be triggered via simple HTML `<form>` POST submissions without preflights.

## Output Format

- **Vulnerability Assessment**: High / Medium / Low risks identified.
- **Remediation Configuration**: Hardened CORS middleware (Node.js/Go/Python/Nginx).
- **Secure Cookie Definition**: Exact flags and expiration parameters.

## Avoid

- Setting `Access-Control-Allow-Origin: *` while simultaneously setting `credentials: true`.
- Reflecting any requested `Origin` header without whitelist validation.
