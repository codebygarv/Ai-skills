---
name: migration-planner
description: Plans a safe, incremental migration (framework, database, service, or platform) with rollback points and a dual-running strategy. Use when replacing something that's already in production and can't just be swapped in one step.
---

## Purpose

Plan a migration from an existing system to a new one in incremental, individually-reversible steps — so the migration can be paused, verified, or rolled back at any point, rather than being a single high-risk cutover.

## When to Use

- Migrating a framework, database, service, or platform that's already running in production.
- Replacing a component where a big-bang cutover would be too risky to attempt.
- The user asks how to "migrate," "move off," or "replace" something existing.

Differs from [Project Planner](../project-planner/): that plans building something new; this plans *replacing* something that already exists and must keep working throughout.

## What to Analyze / Do

1. **Establish what must never break** — the invariants that have to hold during every intermediate state (data integrity, uptime, API compatibility for existing consumers).
2. **Find the seam** — the interface/boundary where old and new can coexist behind a common abstraction. Migrations without a seam turn into big-bang cutovers by default.
3. **Sequence into reversible steps** — each step should be independently deployable and independently revertable. Name the rollback action for each step, not just the forward action.
4. **Plan dual-running/verification** — where both systems run simultaneously and outputs are compared (shadow reads, dual writes, percentage-based traffic shifting) to build confidence before committing.
5. **Identify the point of no return** — the step after which rollback stops being cheap (e.g. once old data is deleted, or once writes stop going to the old system). Call this out explicitly and put maximum verification before it.
6. **Plan the cleanup** — migrations that never delete the old path leave permanent dual-maintenance cost; include the removal step explicitly.

## Output Format

- **Invariants** — what must hold throughout.
- **Migration steps** — numbered, each with: what changes, how it's verified, and how it's rolled back.
- **Point of no return** — which step, and what must be confirmed before crossing it.
- **Cleanup** — the steps that remove the old path once the new one is proven.

## Avoid

- Proposing a single-step cutover for anything nontrivial in production — if it genuinely must be one step, say so explicitly and justify it rather than defaulting to it.
- Steps with no stated rollback — "we'd roll forward" is a decision to make deliberately, not an omission to leave implicit.
- Omitting the cleanup phase, which is how codebases end up permanently maintaining two paths.
