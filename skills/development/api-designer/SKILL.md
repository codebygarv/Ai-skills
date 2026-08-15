---
name: api-designer
description: Helps design REST APIs - routes, request/response structures, validation, status codes, and conventions. Use when designing new endpoints or reviewing an existing API's design for consistency.
---

## Purpose

Design or review REST API surfaces — routes, resource modeling, request/response shapes, status codes, versioning, and error formats — so the API is consistent, predictable, and follows established conventions rather than ad hoc choices per endpoint.

## When to Use

- Designing new endpoints or a new API from scratch.
- Reviewing an existing API for consistency before it gets more consumers.
- The user has a rough idea of what an endpoint should do and needs it shaped into a proper REST contract.

## What to Analyze / Do

1. **Resource modeling** — identify the actual resources and their relationships; prefer nouns-as-resources over RPC-style action endpoints where REST conventions fit naturally.
2. **Route design** — consistent pluralization, nesting depth (avoid over-nesting past 2 levels), and clear path parameters.
3. **HTTP methods & status codes** — correct verb per operation (GET/POST/PUT/PATCH/DELETE), and status codes that mean what they say (200 vs 201 vs 204, 400 vs 422, 404 vs 403).
4. **Request/response shape** — consistent envelope (or deliberately no envelope) across endpoints, consistent field naming (camelCase vs snake_case — pick one and stay consistent with the rest of the API).
5. **Validation & errors** — what's validated, what error shape is returned, whether error responses are consistent and machine-parseable.
6. **Pagination, filtering, sorting** — for any list endpoint, define these explicitly rather than leaving them unbounded.
7. **Versioning & backward compatibility** — how breaking changes are handled without breaking existing consumers.

## Output Format

- For new design: proposed routes as a table (Method, Path, Description), then example request/response JSON per endpoint, then validation/error notes.
- For review: findings grouped by inconsistency type (naming, status codes, pagination, etc.), each with the specific endpoints affected and the recommended fix.

## Avoid

- Proposing a fully RPC-style API when the resources genuinely fit REST conventions (or vice versa — forcing REST onto an inherently action-based operation).
- Inventing a new convention when the existing API already has an established one — match it unless explicitly asked to redesign.
- Ignoring auth/permissions implications of a new route (who can call it) even if full auth design is out of scope.
