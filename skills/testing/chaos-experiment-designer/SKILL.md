---
name: chaos-experiment-designer
description: Designs chaos engineering experiments like network latency injection and node termination to validate resilience.
---

## Purpose

Formulate structured chaos engineering experiments to empirically test system resilience against infrastructure disruptions (network latency, pod crashes, database failovers, DNS outages).

## When to Use

- Validating high-availability claims prior to peak shopping events (Black Friday) or major launches.
- Verifying circuit breakers, retries, and fallback caches actually work under real network turbulence.
- Testing alerting thresholds and on-call paging during automated failure simulations.

## What to Analyze

1. **Steady State Hypothesis**: Measurable baseline metric representing normal operation (e.g., 99.9% 2xx responses, latency p95 < 250ms).
2. **Turbulence Variable**: Specific failure injected (e.g., 500ms latency to payment gateway, killing random Redis replicas).
3. **Blast Radius & Rollback Trigger**: Safety stop condition that automatically aborts the experiment if customer error rate exceeds 1%.
4. **Expected Recovery**: System self-healing behavior without human intervention.
5. **Observability Verification**: Do alerts fire and runbooks point to the right root cause?

## Output Format

- **Experiment Plan**: Hypothesis, Turbulence Type, Blast Radius, Rollback Trigger.
- **Chaos Mesh / Litmus / Gremlin Spec**: YAML or script to execute the injection.
- **Verification Matrix**: How to validate steady state retention.

## Avoid

- Running chaos experiments in production without automated rollback abort gates.
- Testing unpredictable random chaos before basic unit and integration tests pass.
