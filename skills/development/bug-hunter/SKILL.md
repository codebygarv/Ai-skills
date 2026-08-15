---
name: bug-hunter
description: Searches code specifically for potential bugs, edge cases, race conditions, and incorrect assumptions rather than general style/quality. Use when the goal is finding what's broken, not improving what already works.
---

## Purpose

Hunt specifically for defects — not style, not maintainability, not architecture. The single question driving this skill is: "under what real input or timing, does this code produce a wrong result or crash?"

## When to Use

- The user wants bugs found, specifically — not a general quality review.
- Before shipping code that handles money, user data, or concurrency, where a missed bug is expensive.
- Debugging: the user suspects a bug exists somewhere in a file/module but hasn't found it yet.

## What to Analyze

1. **Boundary conditions** — empty collections, zero, negative numbers, max values, single-element cases.
2. **Null/undefined/missing data** — every place data is accessed, ask what happens if it's absent.
3. **Type coercion and comparison bugs** — loose equality, implicit conversions, unit mismatches (ms vs. seconds, cents vs. dollars).
4. **Concurrency/race conditions** — shared mutable state, async operations that assume ordering that isn't guaranteed, double-submit/double-click scenarios.
5. **Off-by-one and loop errors** — inclusive/exclusive bounds, iterator invalidation.
6. **Incorrect assumptions** — code that assumes an invariant (sorted input, unique IDs, non-empty list) that isn't actually enforced anywhere.

## Output Format

- Each bug as its own entry: **file/line**, **trigger condition** (the specific input/timing that causes it), **actual vs. expected behavior**, **suggested fix**.
- Ordered by severity — data corruption/crash first, cosmetic/rare-edge-case issues last.
- No entry without a concrete triggering scenario — "this looks risky" without a scenario isn't a finding, it's a hunch; say so separately if worth a mention.

## Avoid

- Reporting style or readability issues — that's [Code Reviewer](../code-reviewer/)'s job, not this skill's.
- Vague findings without a reproducing scenario.
- Flagging theoretical issues that the surrounding code already guards against (check the full context first).
