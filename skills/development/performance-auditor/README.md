# ⚡ Performance Auditor

Find real bottlenecks, with real impact estimates.

## What it does

Scans frontend, backend, database, and network code for concrete performance bottlenecks — N+1 queries, algorithmic complexity, unnecessary re-renders, waterfalled requests — each with the mechanism behind the slowness and a rough impact estimate, ordered by expected win.

## When to use it

- Something is measurably slow and the cause isn't obvious.
- Before code needs to handle significantly more load or data.
- You want a performance-specific pass, not general code review.

## Best for

- Diagnosing slow endpoints or pages
- Pre-scale review of code that will see more traffic/data
- Catching N+1 queries and waterfalled network requests

## Example usage

> "Performance audit this" (paste code or describe the slow flow)

## Expected output

Findings ordered by impact, each with where the bottleneck is, why it's slow, a rough impact estimate, and the fix — with measured/certain findings distinguished from likely-but-unconfirmed ones.

## Limitations

- Impact estimates are reasoned, not profiled — confirm with real profiling/load testing before large investments based on this alone.
- For deep schema/index-level database work, pair with [Database Architect](../database-architect/).
