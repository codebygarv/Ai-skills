# 🛡️ Error Handling Architect

Standardize application error management with domain error hierarchies, RFC 7807 responses, and safe logging.

## What it does

Establishes a robust, production-grade error handling system that separates operational errors from programmer bugs, provides safe API responses, and preserves debug logs.

## When to use it

- Establishing error standards for a new service.
- Refactoring inconsistent `try/catch` and error responses across a codebase.
- Implementing RFC 7807 Problem Details.

## Best for

- Backend API architecture
- Microservice resilience
- Observability and log hygiene
