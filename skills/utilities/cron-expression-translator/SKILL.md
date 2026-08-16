---
name: cron-expression-translator
description: Translates cron expressions to plain English and back. Use when a cron schedule in code/config is unclear, or when you know when something should run but not the cron syntax for it.
---

## Purpose

Translate between cron syntax and plain English in both directions, so scheduled jobs are easy to verify by reading, and easy to write correctly without trial-and-error against a cron syntax reference.

## When to Use

- A cron expression in code/config/CI needs to be understood before trusting or modifying it.
- Knowing when something should run but not confident in cron syntax to express it correctly.
- Reviewing a scheduled job for correctness (does it actually run when the comment/name claims?).

## What to Analyze / Do

**Explaining a cron expression:**
1. Break down each of the 5 (or 6, if seconds are included) fields: minute, hour, day-of-month, month, day-of-week.
2. State the plain-English schedule clearly, including timezone ambiguity if relevant (cron expressions are frequently run in UTC or server-local time — note that this isn't specified by the expression itself and depends on the running system's configuration).
3. Flag common gotchas: day-of-month AND day-of-week both specified (most cron implementations treat this as OR, not AND — a frequent source of confusion), or `*/N` stepping that doesn't align the way people assume (e.g. `*/5` in the hour field means hours 0,5,10,15,20, not "every 5 hours from whenever the job started").

**Building a cron expression:**
1. Clarify the exact intended schedule, including timezone assumptions.
2. Construct the expression.
3. Give the next 2-3 example run times in plain terms so the schedule is verifiable at a glance, not just trusted blindly.

## Output Format

- **Explaining:** field-by-field breakdown, then one-line plain-English summary, then any gotchas found.
- **Building:** the cron expression, a plain-English restatement, and 2-3 example next-run times.
- Always note the timezone assumption explicitly, since it's the most common source of scheduling bugs with cron.

## Avoid

- Stating a schedule confidently without flagging timezone ambiguity — this is the single most common real-world cron bug.
- Silently assuming day-of-month/day-of-week are ANDed when most cron implementations OR them — always call this out when both fields are non-`*`.
- Giving an expression without example run times to verify against.
