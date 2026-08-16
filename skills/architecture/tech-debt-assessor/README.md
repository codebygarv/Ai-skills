# 📊 Tech Debt Assessor

Decide what debt to actually pay down, and what to leave alone.

## What it does

Inventories technical debt by category, assesses each item by cost-of-delay versus effort to fix, and produces a ranked paydown list — plus an explicit list of debt deliberately *not* worth fixing right now.

## When to use it

- Debt is accumulating and it's unclear what to tackle first.
- You need to justify cleanup work to stakeholders with more than "it's messy."
- Planning a cleanup sprint and picking the highest-value targets.

## Best for

- Prioritizing a debt-paydown backlog
- Making the case for cleanup work with concrete cost reasoning
- Deciding which debt is genuinely safe to ignore

## Example usage

> "Assess the tech debt in this codebase and tell me what to fix first" (describe the codebase or paste key areas)

## Expected output

A debt inventory table (item, category, cost of delay, effort, blocking?), a ranked paydown list with justifications, and an explicit "deliberately deprioritized" section.

## Limitations

- Cost-of-delay estimates are reasoned from the context given, not measured — pair with real data (incident frequency, cycle time) where you have it.
- Operates at portfolio level; for actually simplifying a specific piece of code, use [Refactor Expert](../../development/refactor-expert/).
