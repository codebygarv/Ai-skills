---
name: error-handling-architect
description: Designs structured error hierarchies, domain error mapping, and resilient fallback/retry mechanisms across applications.
---

## Purpose

Standardize application error handling into a coherent architecture: custom error hierarchies, typed domain errors, HTTP/RPC status mappings, sanitized client responses, and structured observability logs.

## When to Use

- When error handling is fragmented with ad-hoc `try/catch` blocks, string checks, or unhandled promise rejections.
- Designing error responses for public REST/gRPC APIs.
- Setting up retry policies, circuit breakers, and graceful fallback behaviors.

## What to Analyze

1. **Error Hierarchy**: Base domain error, validation errors, not found errors, authorization errors, external service errors.
2. **Transport Mapping**: Clean translation from internal domain error classes to HTTP status codes / RFC 7807 Problem Details.
3. **Data Sanitization**: Stripping database credentials, stack traces, and internal URLs from client-facing responses.
4. **Telemetry & Log Context**: Including correlation IDs, user IDs, and cause chains (`error.cause`) in server logs.
5. **Resilience Strategy**: Idempotent retries with exponential backoff and jitter vs instant failure.

## Output Format

- **Error Class Hierarchy**: TypeScript / language-specific error class definitions.
- **Global Error Middleware**: Centralized error interceptor / filter implementation.
- **RFC 7807 Response Schema**: Standard JSON structure returned to API consumers.
- **Handling Matrix**: Table mapping each Domain Error to HTTP Status, Log Level, and Retry Policy.

## Avoid

- Catching errors and silently swallowing them (`catch (e) {}`).
- Leaking raw SQL error strings or file paths to API clients.
