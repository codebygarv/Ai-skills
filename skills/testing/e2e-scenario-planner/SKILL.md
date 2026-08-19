---
name: e2e-scenario-planner
description: Plans high-value end-to-end critical user journeys with Playwright or Cypress focusing on revenue-critical flows.
---

## Purpose

Architect a resilient, non-flaky End-to-End (E2E) test suite using Playwright or Cypress focused on core business user journeys (authentication, checkout, workspace invitation, data export) while keeping test run times fast.

## When to Use

- Establishing an automated E2E smoke and regression suite.
- Refactoring brittle E2E tests filled with arbitrary `sleep()` calls and unstable CSS selectors.
- Prioritizing which test scenarios must run on pull requests vs nightly builds.

## What to Analyze

1. **Critical User Journeys (CUJs)**: Identify flows where a failure stops users from converting or using core features.
2. **Stable Locators**: Prioritize user-facing accessibility locators (`getByRole`, `getByLabel`, `getByText`) over brittle CSS hierarchy selectors.
3. **Authentication State Re-use**: Use storage state fixtures to log in once via API rather than UI login on every test.
4. **Network Mocking vs Real APIs**: Mocking slow third-party widgets (Stripe, Intercom, Analytics) while hitting real internal APIs.
5. **Parallelism & Sharding**: Splitting tests across CI runners for sub-5-minute runs.

## Output Format

- **CUJ Coverage Matrix**: User Journey, Priority (P0/P1/P2), Execution Frequency.
- **Playwright Test Suite Code**: Clean Page Object Model (POM) implementation.
- **Flakiness Mitigation Rules**: Explicit wait strategies, retries, and network intercept patterns.

## Avoid

- Automating every minor edge case via E2E instead of unit/integration tests (Testing Pyramid inversion).
- Using hardcoded `page.waitForTimeout(5000)` sleeps.
