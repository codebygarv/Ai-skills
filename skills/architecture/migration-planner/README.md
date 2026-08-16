# 🚚 Migration Planner

Replace something in production without a scary big-bang cutover.

## What it does

Plans a migration in incremental, individually-reversible steps — each with a stated verification and rollback — plus a dual-running strategy and an explicit "point of no return" so the risky moment is deliberate rather than accidental.

## When to use it

- Migrating a framework, database, service, or platform that's already in production.
- A big-bang cutover would be too risky.
- You're replacing something that has to keep working throughout.

## Best for

- Database or framework migrations
- Extracting a service out of a monolith
- Replacing a third-party dependency or platform

## Example usage

> "Plan a migration from our self-hosted Postgres to a managed database service, zero downtime."

## Expected output

Invariants that must hold throughout, numbered steps each with verification + rollback, an explicit point-of-no-return callout, and the cleanup steps that remove the old path.

## Limitations

- Plans the migration; doesn't execute it or write the migration code.
- Differs from [Project Planner](../project-planner/) — that plans building something new, this plans replacing something that already exists.
- Rollback plans assume the described architecture is accurate; verify each rollback is actually viable in your environment before relying on it.
