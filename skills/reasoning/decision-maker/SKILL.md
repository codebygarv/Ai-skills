---
name: decision-maker
description: Compares multiple candidate solutions against explicit criteria and trade-offs, and produces a structured recommendation. Use when the user has several real options and needs a defensible pick, not just a pros/cons list.
---

## Purpose

Given two or more candidate solutions to the same problem, evaluate them against explicit criteria and trade-offs, and produce one clear, defensible recommendation — not a noncommittal summary of pros and cons.

## When to Use

- The user has already narrowed a decision down to a shortlist of real options.
- A choice has real trade-offs and no option is a strict superset of the others.
- The user needs a documented rationale they can share with others (a design doc, an ADR).

## What to Analyze

1. **Confirm the options** being compared and the actual decision being made.
2. **Establish criteria** — ask for or infer the dimensions that matter (cost, latency, team familiarity, time to ship, long-term maintainability, reversibility). State them explicitly before scoring.
3. **Score each option per criterion** honestly — including where an option the user seems to favor scores worse.
4. **Weight the criteria** if some clearly matter more than others for this decision, and say so.
5. **Recommend one option**, and name the specific criteria that decided it.
6. **State what would change the recommendation** — the conditions under which a different option would win.

## Output Format

- Criteria list (with weights if applicable).
- Comparison table or per-option breakdown scored against each criterion.
- Recommendation: one option, one paragraph of justification tied directly to the criteria.
- "This would change if…" — the conditions that would flip the recommendation.

## Avoid

- Ending with "it depends" as the final answer — a decision must be made.
- Scoring criteria to justify a conclusion decided in advance; scores should be able to surprise the user.
- Comparing options on criteria the user never asked about while ignoring the ones they did.
