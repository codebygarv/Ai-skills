---
name: resilience-circuit-breaker-designer
description: Designs circuit breakers, bulkhead concurrency limits, fallback caches, and timeout policies for failing dependencies.
---

## Purpose

Protect applications from cascading failures when downstream dependencies (third-party APIs, microservices, databases) become slow or unresponsive, using Circuit Breakers, Bulkheads, Timeouts, and Graceful Fallbacks.

## When to Use

- Calling third-party APIs (Stripe, Twilio, OpenAI, shipment tracking) that occasionally degrade.
- Preventing thread/connection exhaustion when one downstream microservice stalls.
- Implementing graceful degradation (e.g. returning cached recommendations when AI engine is down).

## What to Analyze

1. **Circuit States**: `CLOSED` (normal), `OPEN` (failing fast without calling downstream), `HALF-OPEN` (probing recovery).
2. **Threshold Metrics**: Failure percentage threshold (e.g. >50% errors over 20 requests) and slow call duration threshold.
3. **Timeout Strategy**: Strict, aggressive timeouts (e.g. 500ms) to prevent socket pooling exhaustion.
4. **Bulkhead Isolation**: Limiting concurrent outbound calls to a single service (e.g. max 20 concurrent threads for payment gateway).
5. **Fallback Plan**: Returning cached data, static default payloads, or queued background retries.

## Output Format

- **Resilience Blueprint Table**: [Dependency | Timeout | Circuit Trigger | Bulkhead Cap | Fallback Action].
- **Code Implementation**: Production-ready wrapper using Opossum (Node.js), Resilience4j (Java), or go-resiliency (Go).
- **Health Metrics & Alerting**: Prometheus metrics emitted on circuit state changes.

## Avoid

- Omitting strict timeouts (a hanging connection is worse than a fast failure).
- Setting reset timeout too low, causing thrashing between OPEN and HALF-OPEN states.
