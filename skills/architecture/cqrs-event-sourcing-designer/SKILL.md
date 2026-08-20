---
name: cqrs-event-sourcing-designer
description: Designs Command Query Responsibility Segregation (CQRS) and Event Sourcing models with projection rebuilders.
---

## Purpose

Architect Command Query Responsibility Segregation (CQRS) and Event Sourcing (ES) systems, separating write-side domain command handling from read-side materialized view projections with full auditability.

## When to Use

- High-compliance domains requiring immutable audit logs (Fintech, Healthcare, Legal, Supply Chain).
- Systems with asymmetric read/write ratios and complex reporting queries.
- Designing collaborative workspaces with branch/merge or time-travel history.

## What to Analyze

1. **Command vs Query Separation**: Command handlers (validate and emit events) vs Query handlers (read denormalized projections).
2. **Event Store Architecture**: Append-only immutable log (`aggregate_id`, `version`, `event_type`, `payload`) with optimistic concurrency control.
3. **Projection & Read Model Synchronization**: Asynchronous event handlers building denormalized views in Postgres/Elastic/Redis.
4. **Snapshotting Strategy**: Periodic aggregate state snapshots to prevent slow replays on aggregates with 10,000+ events.
5. **Rebuilding & Migration**: Ability to replay event streams from scratch to generate new projection tables.

## Output Format

- **CQRS / ES Architecture Blueprint**: Command, Event Store, Projection, and Query read path diagram.
- **Event Store DDL & Aggregate Class**: Append-only schema with version-checking optimistic locks.
- **Projection Worker Code**: Consumer updating materialized read models.

## Avoid

- Applying CQRS and Event Sourcing to simple CRUD applications (unnecessary operational complexity).
- Mutating historical events in the event store.
