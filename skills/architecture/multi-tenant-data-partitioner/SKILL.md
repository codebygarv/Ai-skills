---
name: multi-tenant-data-partitioner
description: Architects database multi-tenancy models (Shared DB/Schema vs Separate Schema vs Separate Database) and tenant routing.
---

## Purpose

Architect secure, cost-effective, and scalable database multi-tenancy models (Shared Database/Shared Schema with Row-Level Security, Database-per-Tenant, Schema-per-Tenant) tailored to compliance, isolation, and cost constraints.

## When to Use

- Designing the data architecture for a B2B SaaS application.
- Enterprise customers requesting strict physical data isolation or custom backup schedules.
- Evaluating database costs vs cross-tenant data leakage risks.

## What to Analyze

1. **Isolation Model Selection**:
   - *Shared Database, Shared Schema (Pool)*: Highest resource efficiency, lowest cost, enforced via Postgres RLS.
   - *Separate Schema (Bridge)*: Logical isolation, schema migration overhead at 1,000+ tenants.
   - *Separate Database (Silo)*: Complete physical isolation, highest cost, individual tenant disaster recovery.
2. **Tenant Context Resolution**: Subdomain (`tenant.app.com`), JWT claim, or custom HTTP header routing.
3. **Connection Pool Management**: Dynamic connection routing without exhausting database connection limits.
4. **Cross-Tenant Leakage Prevention**: Automated query filters and database-enforced Row-Level Security (RLS).
5. **Noisy Neighbor Defense**: Per-tenant query rate limits and compute quotas.

## Output Format

- **Multi-Tenancy Tradeoff Matrix**: Comparison of Pool vs Bridge vs Silo for your specific scale.
- **Postgres Row-Level Security (RLS) Policy**: SQL script enforcing `tenant_id` session boundaries.
- **Tenant Routing Middleware**: Code extracting and injecting tenant context into database queries.

## Avoid

- Relying solely on application-level `WHERE tenant_id = :id` queries without database-level RLS enforcement.
- Creating 10,000 PostgreSQL schemas on a single instance (causes heavy catalog metadata lock contention).
