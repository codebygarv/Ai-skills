---
name: load-test-scenario-builder
description: Designs realistic load and performance testing scenarios with k6, Locust, or JMeter for traffic simulations.
---

## Purpose

Create realistic, multi-phase performance and stress testing scripts modeling authentic user traffic patterns (browsing, authentication, cart checkout, search) with proper ramp-up and threshold gates.

## When to Use

- Benchmarking system throughput and maximum capacity limits.
- Validating autoscaling triggers and database connection limits under load.
- Setting up CI performance regression testing gates.

## What to Analyze

1. **Traffic Profile**: Ramp-up, sustained peak load, stress spikes, and ramp-down phases.
2. **User Journey Distribution**: Weighted action ratios (e.g., 70% browse/search, 20% add to cart, 10% checkout).
3. **Think Time & Jitter**: Realistic pauses between user clicks (e.g., `sleep(random(1, 4))`).
4. **Performance Thresholds (SLOs)**: Target response time percentiles (p95 < 200ms, error rate < 0.1%).
5. **Data Parameterization**: Dynamic test data pools to avoid un-realistic cache warming on a single ID.

## Output Format

- **Load Scenario Script**: Complete k6 (JavaScript) or Locust (Python) script.
- **Execution Stages**: Configuration of virtual users (VUs) and durations.
- **Threshold Definitions**: Explicit pass/fail assertion rules.

## Avoid

- Hammering a single URL with 1,000 requests/sec with zero think-time (unrealistic traffic).
- Omitting assertions on HTTP status and response payload validation.
