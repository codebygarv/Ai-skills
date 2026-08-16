---
name: tech-debt-assessor
description: Inventories technical debt across a codebase and prioritizes it by cost-of-delay versus effort, producing a ranked paydown list. Use when debt is accumulating but it's unclear what to fix first.
---

## Purpose

Turn a vague sense that "the codebase has a lot of debt" into a ranked, justified paydown list — assessing each item by what it actually costs to keep living with it, versus what it costs to fix.

## When to Use

- Technical debt is accumulating and it's unclear what to tackle first.
- Justifying debt-paydown work to stakeholders who need a reason beyond "it's messy."
- Planning a cleanup sprint and needing to pick the highest-value targets.

Differs from [Refactor Expert](../../development/refactor-expert/): that skill simplifies one specific piece of code; this one operates at portfolio level across the codebase, deciding *what* is worth refactoring at all.

## What to Analyze

1. **Inventory the debt** — categorize each item: design debt (wrong abstraction), code debt (duplication, complexity), test debt (untested critical paths), dependency debt (outdated/unmaintained), documentation debt, and operational debt (manual processes that should be automated).
2. **Assess cost-of-delay per item** — what does *not* fixing it cost, concretely: slower feature delivery, recurring incidents, onboarding friction, blocked work. Debt that isn't costing anything measurable is often fine to leave alone.
3. **Assess effort and risk to fix** — including the risk that fixing it introduces regressions in code without good test coverage.
4. **Identify blocking debt** — items where other planned work can't proceed cleanly until this is fixed. These rank above items that are merely annoying.
5. **Rank by value** — high cost-of-delay ÷ low effort first. Explicitly name the items *not* worth fixing right now, so the list is a decision, not just a wish list.

## Output Format

- **Debt inventory** — table: Item | Category | Cost of delay | Effort | Blocking?
- **Ranked paydown list** — ordered, with a one-line justification each.
- **Explicitly deprioritized** — items deliberately left alone, and why. This section matters as much as the paydown list.

## Avoid

- Listing everything imperfect as debt — code that works, isn't changing, and isn't blocking anything is rarely worth paying down regardless of how it looks.
- Ranking purely by how unpleasant code is to read rather than what it actually costs the team.
- Omitting the "not worth fixing" section, which is what makes the output an actual prioritization instead of an inventory.
