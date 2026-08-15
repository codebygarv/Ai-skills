# 🔌 API Designer

Design or review a REST API that's consistent, not ad hoc.

## What it does

Helps design new REST endpoints (routes, request/response shapes, status codes, validation, pagination) or reviews an existing API for consistency, producing a concrete proposed contract or a list of inconsistencies to fix.

## When to use it

- Designing new endpoints or an API from scratch.
- Reviewing an existing API before it gets more consumers.
- You have a rough idea of what an endpoint should do and need it shaped into a real contract.

## Best for

- New endpoint design (routes + request/response shapes)
- API consistency audits (naming, status codes, pagination conventions)
- Deciding REST vs. RPC-style for a given operation

## Example usage

> "Design the API for managing a shopping cart: add item, remove item, view cart, checkout."

## Expected output

For new design: a route table plus example request/response JSON per endpoint and validation/error notes. For review: findings grouped by inconsistency type, each tied to specific endpoints with a recommended fix.

## Limitations

- Doesn't design full auth/authorization systems — flags permission implications but auth architecture is a separate concern.
- Assumes REST; for GraphQL or gRPC API design, conventions differ and this skill's route/status-code guidance doesn't directly apply.
