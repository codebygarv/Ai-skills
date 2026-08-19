# ⚡ SQL Query Optimizer

Diagnose slow SQL queries, optimize execution plans, and construct high-performance indexes.

## What it does

Analyzes SQL queries and database EXPLAIN plans to eliminate full table scans, resolve un-sargable predicates, and design targeted composite/covering indexes.

## When to use it

- Slow dashboard queries and API endpoints.
- Database CPU spikes during traffic surges.
- High-volume batch queries and reporting jobs.

## Best for

- PostgreSQL, MySQL, SQLite, MariaDB query tuning
- Index design and migration safety
- Keyset / cursor pagination refactoring

## Example usage

> "Optimize this query: SELECT * FROM orders WHERE status = 'pending' AND user_id = 42 ORDER BY created_at DESC LIMIT 50;"
