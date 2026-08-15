# 🗄️ Database Architect

Schema design and review that catches integrity and scaling problems early.

## What it does

Reviews or designs database schemas for data integrity (constraints actually enforced, not just assumed in app code), sound relational modeling, and scalability — findings grouped by data-integrity risk, performance risk, and design.

## When to use it

- Designing a new schema or table structure.
- Reviewing an existing schema before it's harder to change.
- Diagnosing slow queries that look like a modeling/indexing problem.

## Best for

- New table/schema design
- Pre-scale schema reviews
- Diagnosing missing indexes or constraints behind slow queries or data bugs

## Example usage

> "Review this schema" (paste table definitions) or "Design a schema for a multi-tenant SaaS billing system."

## Expected output

For review: findings grouped Data integrity risk → Performance risk → Design, each with the table/column, the issue, and concrete DDL fix. For new design: a table list with relationships and key constraints/indexes called out.

## Limitations

- Constraint and index syntax/behavior varies by database engine (Postgres/MySQL/SQLite/etc.) — confirm which engine is in use before applying suggested DDL verbatim.
- Doesn't benchmark actual query performance — flags likely index gaps based on described access patterns, not measured `EXPLAIN` output.
