---
name: microservices-boundary-definer
description: Applies Domain-Driven Design (DDD) bounded contexts and event storming to decompose monoliths into clean services.
---

## Purpose

Define high-cohesion, low-coupling service boundaries using Domain-Driven Design (DDD) strategic design principles, avoiding distributed monolith anti-patterns and chatty network coupling.

## When to Use

- Planning the extraction of services from a monolithic codebase.
- Splitting a team or scaling engineering throughput across organizational boundaries (Conway's Law).
- Correcting overly granular nanoservices that require distributed transactions.

## What to Analyze

1. **Domain Entities & Aggregates**: Group data that must maintain transactional consistency within a single boundary.
2. **Ubiquitous Language**: Identify terms that mean different things in different contexts (e.g. `Account` in Billing vs `Account` in Auth).
3. **Data Ownership**: Ensure each database table has exactly one owning service (no shared database anti-pattern).
4. **Communication Patterns**: Synchronous REST/gRPC for queries vs Asynchronous domain events for side-effects.
5. **Team Alignment**: Map service boundaries to independent team ownership (Team Topologies).

## Output Format

- **Bounded Context Map**: List of services, their core domain responsibility, and owned aggregates.
- **Context Relationship Graph (Mermaid)**: Upstream/Downstream relationships, Shared Kernels, and Anti-Corruption Layers.
- **Service API Contract & Domain Events**: Public interfaces and events emitted.
- **Data Migration Strategy**: Step-by-step path to decouple shared tables.

## Avoid

- Creating "Entity Services" (e.g., `UserService`, `OrderService`) that just expose CRUD without business logic.
- Allowing services to directly read or write each other's databases.
