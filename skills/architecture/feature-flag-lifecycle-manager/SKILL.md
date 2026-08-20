---
name: feature-flag-lifecycle-manager
description: Establishes flag naming, fallback defaults, rollout rings, cleanup telemetry, and automated dead flag retirement.
---

## Purpose

Manage feature flags from creation to deprecation, establishing standardized flag taxonomy, safe fallback defaults, phased rollout rings (canary/percentage/user groups), and automated dead-code cleanup to prevent technical debt accumulation.

## When to Use

- Introducing feature flag tooling (LaunchDarkly, Unleash, PostHog, custom Redis flags).
- Codebases clogged with hundreds of ancient, permanent boolean flags.
- Releasing risky changes using percentage rollouts and progressive ring deployments.

## What to Analyze

1. **Flag Taxonomy & Lifetime**: Release Toggle (short-lived, days) vs Experiment Toggle (weeks) vs Kill Switch (permanent) vs Permission Toggle.
2. **Safe Fallback Defaults**: Guaranteed fail-safe default value if the flag service is unreachable.
3. **Rollout Rings**: Ring 0 (Internal Canary / Dogfood) $ightarrow$ Ring 1 (5% Beta) $ightarrow$ Ring 2 (25%) $ightarrow$ Ring 3 (100% GA).
4. **Observability & Blast Radius**: Metric dashboards linked to flag states (auto-rollback on elevated 5xx errors).
5. **Retirement & Dead Code Removal**: Automated Jira/GitHub cleanup tickets created upon 100% rollout.

## Output Format

- **Feature Flag Specification Sheet**: Name, Type, Owner, Fallback Value, Expiration Date, Rollout Schedule.
- **Type-Safe Wrapper Code**: TypeScript / backend typed flag client with fallback safety.
- **Cleanup PR Plan**: Instructions to remove flag checks once fully deployed.

## Avoid

- Leaving release toggles in production code months after 100% rollout (creates spaghetti debt).
- Making synchronous network calls to flag servers on critical database write paths.
