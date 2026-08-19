---
name: event-driven-architect
description: Designs event-driven systems with CloudEvents schemas, message brokers, idempotency keys, and dead-letter queues.
---

## Purpose

Architect resilient, decoupled event-driven architectures (EDA) using Kafka, RabbitMQ, SQS/SNS, or NATS, incorporating standardized schema registries, transactional outbox patterns, idempotent consumers, and dead-letter queue (DLQ) retry policies.

## When to Use

- Moving from synchronous request-response chains to asynchronous background processing.
- Ensuring guaranteed event delivery without dual-write inconsistency (Transactional Outbox).
- Designing event topics, partition keys for ordering, and consumer group scaling.

## What to Analyze

1. **Event Schema Design**: Standard envelopes (CloudEvents spec), event types, versioning, and payloads.
2. **Publishing Reliability**: Transactional Outbox pattern with Debezium or polling to prevent lost events if broker is down.
3. **Partitioning & Ordering**: Choosing partition keys (e.g., `customerId`) to guarantee FIFO ordering per entity.
4. **Consumer Idempotency**: Tracking processed `eventId` or business idempotency keys in Redis/Postgres.
5. **Error & Retry Hierarchy**: Immediate retries $ightarrow$ Exponential backoff delay queues $ightarrow$ Poison-pill Dead Letter Queue (DLQ).

## Output Format

- **Event Flow Diagram (Mermaid)**: Producers, Topics, Consumers, Outbox, and DLQ.
- **CloudEvents JSON Schema**: Standardized event format specification.
- **Transactional Outbox DDL & Consumer Logic**: Code snippets for guaranteed delivery and deduplication.

## Avoid

- Emitting events inside application code before the database transaction has committed.
- Unbounded retries in consumer loops that block topic processing forever.
