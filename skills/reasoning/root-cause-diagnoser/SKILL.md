---
name: root-cause-diagnoser
description: Performs 5-Whys and Ishikawa fishbone causal analysis to discover root causes behind systemic bugs, outages, and regressions.
---

## Purpose

Drill past surface-level symptoms and immediate triggers to uncover the systemic, architectural, and organizational root causes of engineering failures.

## When to Use

- Post-incident reviews and postmortems.
- Recurring bugs that keep resurfacing after quick patches.
- Flaky systems where the immediate fix failed to prevent secondary fallout.

## What to Analyze

1. **Immediate Trigger**: What directly caused the error?
2. **Propagation Chain**: How did the failure cascade through the system?
3. **Detection Delay**: Why was the issue not caught in CI, staging, or monitoring?
4. **5-Whys Iteration**: Drill 5 levels deep into process, architecture, and code.
5. **Systemic Defenses**: What automated safeguards or architectural barriers are missing?

## Output Format

- **Incident Summary**: Exact failure statement.
- **5-Whys Diagnostic Chain**: Clear causal progression from trigger to root cause.
- **Contributing Factors**: Process, tooling, architecture, and observability factors.
- **Corrective Actions (Actionable)**: Specific engineering tickets categorized into Immediate, Medium-term, and Prevention.

## Avoid

- Stopping at human error ("Developer made a typo").
- Proposing generic solutions like "Be more careful in code review".
