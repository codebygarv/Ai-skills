---
name: sql-query-optimizer
description: Analyzes SQL queries, execution plans, index usage, and lock contention to optimize database operations.
---

## Purpose

Analyze slow or resource-intensive SQL queries, interpret EXPLAIN / ANALYZE execution plans, and rewrite queries or recommend precise indexes to eliminate sequential scans and lock contention.

## When to Use

- A query causes high CPU, memory pressure, or connection saturation on the database.
- Designing complex joins, aggregations, window functions, or subqueries.
- Diagnosing deadlocks or table lock contention under concurrent writes.

## What to Analyze

1. **Execution Plan**: Inspect cost nodes, Seq Scans, Index Scans, Bitmap Index Scans, Nested Loops vs Hash Joins.
2. **Predicate SARGability**: Identify functions on indexed columns (e.g. `WHERE DATE(created_at) = ...`) preventing index hits.
3. **Join & Subquery Efficiency**: Convert correlated subqueries to CTEs, Window Functions, or Hash Joins.
4. **Indexing Strategy**: Single-column, composite (ordering column matches query pattern), partial, or covering indexes.
5. **Pagination Mechanics**: Replace large offset pagination (`OFFSET 100000`) with keyset/cursor pagination.

## Output Format

- **Diagnosis**: Why the query is slow (missing index, scan type, cardinality misestimate).
- **Optimized SQL**: Clean rewritten query with explanation.
- **DDL Changes**: Exact `CREATE INDEX CONCURRENTLY` statements needed.
- **Before vs After Metrics**: Expected scan cost reduction and latency impact.

## Avoid

- Adding indexes on every column without considering write throughput degradation.
- Omitting `CONCURRENTLY` on production index creation statements.
