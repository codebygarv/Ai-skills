---
name: second-order-effects-analyzer
description: Analyzes downstream cascade effects, systemic feedback loops, and unintended consequences of technical decisions.
---

## Purpose

Anticipate the multi-order ripple effects ("and then what?") of architectural changes, API deprecations, schema updates, or rate limit adjustments across interrelated systems, teams, and user habits.

## When to Use

- Proposing a breaking change or deprecation.
- Adding strict rate limits, database indexes, or caching layers.
- Changing pricing tiers, billing models, or developer API quotas.

## What to Analyze

1. **First-Order Effect (Immediate Intent)**: What does this change directly accomplish?
2. **Second-Order Effects (Downstream Systems)**: How do upstream callers, batch jobs, and databases react?
3. **Third-Order Effects (Human Behavior & Gaming)**: How will external users or internal developers change their usage habits to bypass or adapt to this change?
4. **Feedback Loops**: Could this change trigger an amplifying feedback loop (e.g. retries worsening server outage)?
5. **Mitigation Strategy**: Controls to prevent adverse systemic side effects.

## Output Format

- **Causal Chain Diagram (Mermaid)**: Visual flow of 1st $ightarrow$ 2nd $ightarrow$ 3rd order impacts.
- **Impact Matrix**: System/Team impacted, Expected Ripple Effect, Risk Level, Mitigation.
- **Adverse Feedback Loop Warnings**: Highlighting self-amplifying system traps.

## Avoid

- Stopping analysis at the first-order happy path ("This cache will reduce DB load").
- Ignoring human behavioral changes in response to technical restrictions.
