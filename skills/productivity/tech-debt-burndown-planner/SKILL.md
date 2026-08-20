---
name: tech-debt-burndown-planner
description: Quantifies technical debt into an actionable, prioritized burndown backlog with clear ROI estimates.
---

## Purpose

Audit and convert sprawling, informal technical debt complaints into a rigorously prioritized, ROI-driven engineering burndown backlog ranked by Risk, Developer Drag, and Remediation Effort.

## When to Use

- Planning engineering allocation for technical debt sprints or quarterly OKRs.
- Convincing product managers to prioritize refactoring by translating tech debt into developer velocity and reliability metrics.
- Establishing an ongoing, sustainable 20% technical debt paydown workflow.

## What to Analyze

1. **Debt Categorization**: Architecture Debt (monolith coupling), Test Debt (flaky E2E tests), Tooling Debt (slow CI builds), Dependency Debt (EOL libraries).
2. **Developer Drag Factor (1-5)**: How many hours per engineer does this issue waste weekly?
3. **Production Risk Score (1-5)**: Likelihood of causing downtime, security breaches, or data loss.
4. **Remediation Effort (Story Points / Days)**: Realistic engineering time required to fix.
5. **Payoff ROI Score**: `(Drag + Risk) / Effort` to determine exact sprint ordering.

## Output Format

- **Prioritized Tech Debt Backlog Table**: [Debt Item | Category | Drag | Risk | Effort | ROI Score | Action].
- **High-ROI Quick Wins**: 1-2 day tasks that yield massive developer velocity improvements.
- **Business Justification Narrative**: Language for product stakeholders explaining why fixing these items accelerates future feature velocity.

## Avoid

- Labeling pure personal aesthetic preferences as "critical tech debt".
- Proposing open-ended multi-month rewrites without incremental milestones.
