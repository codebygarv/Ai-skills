---
name: rate-limiting-architect
description: Designs distributed token bucket, leaky bucket, and tiered rate limiting architectures to prevent abuse.
---

## Purpose

Architect scalable, distributed rate limiting and traffic throttling systems using Token Bucket, Leaky Bucket, Sliding Window Log, or Sliding Window Counter algorithms to protect APIs from abuse and noisy neighbors.

## When to Use

- Protecting public APIs from DDoS, credential stuffing, and scraping.
- Implementing multi-tier usage limits (Free vs Pro vs Enterprise quotas).
- Managing outbound rate limits to comply with third-party vendor quotas (OpenAI, Stripe).

## What to Analyze

1. **Algorithm Selection**: Token Bucket (bursts allowed) vs Leaky Bucket (smooth pacing) vs Sliding Window Counter (memory efficient).
2. **Identification Key**: User ID, Organization ID, API Token, or IP address (with X-Forwarded-For trust validation).
3. **Storage Tier**: Redis cluster with Lua scripts (atomic evaluation) vs local memory vs Envoy/Kong API Gateway rate limits.
4. **Standard HTTP Headers**: Return standard headers (`RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset`, `Retry-After`).
5. **Graceful Degradation**: HTTP 429 Too Many Requests response with actionable backoff guidance.

## Output Format

- **Rate Limiting Blueprint**: Selected algorithm, storage topology, and key design.
- **Redis Lua Script**: Atomic multi-key sliding window or token bucket implementation.
- **Middleware Code**: Express / Fastify / Go HTTP rate limiter with standard headers.

## Avoid

- Simple fixed-window counters that permit 2x traffic bursts at the boundary minute.
- Executing multiple non-atomic Redis commands that create race conditions under load.
