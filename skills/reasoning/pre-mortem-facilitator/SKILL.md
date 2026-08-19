---
name: pre-mortem-facilitator
description: Runs prospective failure simulations by assuming a project or deployment has failed and working backward to identify vulnerabilities.
---

## Purpose

Uncover hidden risks before launch by assuming the project has completely failed 6 months in the future, then working backward to diagnose why.

## When to Use

- Prior to kicking off a major migration, rewrite, or product launch.
- When a plan feels "too smooth" and team members are hesitant to voice doubts.
- Before committing to a major third-party dependency or cloud vendor.

## What to Analyze

1. **The Disaster Scenario**: Assume it is 6 months post-launch and the project was rolled back or caused massive downtime.
2. **Failure Vectors**:
   - Technical (data loss, cascading latency, schema lockups).
   - Operational (on-call burnout, missing runbooks, metric blindness).
   - Organizational (team dependencies, key-person risk, unclear ownership).
   - Adoption (users rejected the new UX, edge cases broke integrations).
3. **Early Warning Indicators**: Leading indicators that signal failure is beginning.
4. **Preventative Controls**: Interventions to implement immediately.

## Output Format

- **Failure Scenario Narrative**: A vivid 2-paragraph retrospective on what went wrong.
- **Top 5 Plausible Failure Vectors**: Categorized with severity and likelihood.
- **Leading Indicators**: Metric anomalies that warn of impending failure.
- **Pre-Launch Remediation Actions**: Concrete checklist before green-lighting launch.

## Avoid

- Mild, trivial issues (focus on catastrophic, project-killing risks).
- Vague mitigations like "improve monitoring".
