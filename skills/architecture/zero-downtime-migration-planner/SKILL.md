---
name: zero-downtime-migration-planner
description: Plans blue-green rollouts, canary deployments, and expand-and-contract schema migrations with zero downtime.
---

## Purpose

Formulate zero-downtime deployment and database migration blueprints (Expand/Contract pattern, Parallel Run, Blue-Green, Canary) allowing continuous availability during breaking changes.

## When to Use

- Renaming or splitting database columns in high-traffic tables.
- Replacing a core microservice or authentication provider without maintenance windows.
- Executing major database engine upgrades with replication cutovers.

## What to Analyze

1. **Expand & Contract Phases**:
   - *Phase 1 (Expand)*: Add new nullable column/table alongside old one.
   - *Phase 2 (Dual Write)*: App writes to both old and new columns, reads from old.
   - *Phase 3 (Backfill)*: Background job migrates historical data.
   - *Phase 4 (Read Switch)*: App switches reads to new column.
   - *Phase 5 (Contract)*: Stop writing to old column and drop it.
2. **Backward Compatibility**: Ensure running v1 and v2 app versions can simultaneously operate on the database.
3. **Traffic Splitting & Canary Gates**: 1% $ightarrow$ 5% $ightarrow$ 25% $ightarrow$ 100% traffic shifting with automated rollback triggers.
4. **Locking & DDL Safety**: Avoiding exclusive table locks (`ACCESS EXCLUSIVE`) during migration runs.

## Output Format

- **Multi-Phase Deployment Roadmap**: Numbered phases with release gates.
- **Database DDL / Migration Scripts**: Safe non-blocking migration code.
- **Rollback Procedure per Phase**: How to abort at any phase without data loss.

## Avoid

- Renaming a database column directly in a single deployment (causes instant 500 errors).
- Running large table updates in a single blocking transaction.
