# Example: Feature Flag Lifecycle Manager

## Input

> "Design a feature flag lifecycle for rolling out a new checkout flow."

## Output

### Feature Flag Specification
- **Flag Key**: `release_v2_checkout_engine`
- **Type**: Release Toggle (Temporary — Lifespan: 14 days)
- **Owner**: @checkout-squad
- **Fail-Open / Fail-Closed**: Fail-Closed (Default to `false` legacy checkout if flag evaluation fails)
- **Target Retirement Date**: 2026-09-05

### Rollout Rings Schedule
1. **Ring 0 (Day 1-2)**: Internal employees (`@company.com` emails).
2. **Ring 1 (Day 3-4)**: 5% random traffic. Monitor payment error rates and latency p95.
3. **Ring 2 (Day 5-7)**: 25% traffic.
4. **Ring 3 (Day 8+)**: 100% General Availability.
5. **Retirement (Day 14)**: Automated GitHub issue created to delete legacy checkout code and flag wrapper.
