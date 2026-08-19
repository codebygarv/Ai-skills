# 🛑 Rate Limiting Architect

Design robust distributed rate limiters with sliding windows, token buckets, and standard HTTP headers.

## What it does

Structures API rate limiting and traffic throttling systems with atomic Redis Lua scripts, tiered quota policies, and RFC-compliant headers.

## When to use it

- Protecting APIs against scrapers and DDoS attacks.
- Implementing tiered customer subscription quotas.
- Throttling outbound calls to third-party APIs.

## Best for

- Redis Lua rate limiters
- Token Bucket & Sliding Window algorithms
- API Gateway & reverse proxy throttling
