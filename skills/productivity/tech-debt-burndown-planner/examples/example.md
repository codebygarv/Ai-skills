# Example: Tech Debt Burndown Planner

## Input

> "We have slow CI builds (20m), flaky payments E2E tests, Node 14 runtime in legacy worker, and hardcoded colors in UI. Prioritize these."

## Output

### Prioritized Technical Debt Backlog
| Priority | Item | Category | Drag | Risk | Effort | ROI Score | Action |
|---|---|---|---|---|---|---|---|
| **1 (Quick Win)** | Optimize CI cache & parallelize | Tooling | 5/5 | 1/5 | 1 day | **6.0 (Highest)** | Add GitHub Actions npm cache & matrix test runners |
| **2** | Upgrade Node 14 to 20 in worker | Dependency | 2/5 | 5/5 (EOL Security) | 2 days | **3.5** | Bump base image, test worker event queue |
| **3** | Replace flaky Payment E2E with Contract Tests | Testing | 4/5 | 3/5 | 3 days | **2.3** | Remove arbitrary `sleep()` calls, mock Stripe in CI |
| **4** | Extract hardcoded UI colors to tokens | UI/UX | 1/5 | 1/5 | 5 days | **0.4** | Clean up incrementally during feature work |
