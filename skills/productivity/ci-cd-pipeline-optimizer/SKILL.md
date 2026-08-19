---
name: ci-cd-pipeline-optimizer
description: Audits CI/CD workflows (GitHub Actions, GitLab CI) to implement caching, parallelization, and cut build durations.
---

## Purpose

Analyze and optimize continuous integration and deployment pipelines (GitHub Actions, GitLab CI, CircleCI) to dramatically cut build minutes, reduce compute costs, eliminate redundant jobs, and speed up developer feedback loops.

## When to Use

- CI pipelines take >15 minutes, slowing down pull request velocity.
- GitHub Actions monthly billing bills are spiking.
- Investigating non-deterministic flaky steps or cache-miss penalties.

## What to Analyze

1. **Dependency & Build Caching**: Caching `node_modules`, `~/.cargo`, `~/.m2`, Go build cache, Docker build layers (Buildx / GitHub Actions Cache backend).
2. **Job Parallelization & Matrix Builds**: Running lint, typecheck, unit tests, and E2E suites concurrently instead of sequentially.
3. **Change Path Filtering**: Using `paths` / `paths-ignore` to skip backend builds when only frontend or docs change.
4. **Test Sharding**: Splitting heavy test suites across multiple parallel runner nodes.
5. **Fail-Fast Configuration**: Immediately canceling sister jobs as soon as one test fails (`fail-fast: true`).

## Output Format

- **Pipeline Bottleneck Diagnosis**: Timeline waterfall analysis of current pipeline.
- **Optimized Workflow YAML**: Production-ready GitHub Actions / GitLab CI configuration.
- **Expected Duration & Cost Savings**: Projected time reduction (e.g. 18m $ightarrow$ 3m30s).

## Avoid

- Running expensive E2E suites on every trivial Markdown typo commit.
- Rebuilding identical Docker images without layer caching across CI runs.
