---
name: runbook-generator
description: Generates structured, copy-pasteable operational runbooks and disaster recovery SOPs for on-call engineering teams.
---

## Purpose

Produce clear, foolproof, executable operational runbooks for on-call engineers to diagnose, mitigate, and resolve production alerts under pressure.

## When to Use

- Creating runbooks for new microservices, alerts, or cron jobs.
- Standardizing incident response procedures across engineering teams.
- Documenting disaster recovery failovers, certificate renewals, and manual database rollbacks.

## What to Analyze

1. **Alert Definition**: Alert name, firing trigger threshold, severity, and impacted customer services.
2. **Triage & Diagnosis**: Step-by-step commands and dashboard links to verify if it is a real issue or false positive.
3. **Mitigation Steps**: Fast containment actions (rollback, traffic reroute, scaling up, cache purge).
4. **Root Cause Resolution**: Permanent investigative steps to fix the underlying problem.
5. **Escalation Policy**: Who to page if mitigation does not restore service within 15 minutes.

## Output Format

- **Alert Metadata**: Severity, SLI/SLA impacted, PagerDuty link.
- **Diagnostic Commands**: Copy-pasteable CLI commands (kubectl, curl, SQL) with expected output.
- **Mitigation Playbook**: Numbered actions in order of speed.
- **Rollback & Safety Checks**: How to verify recovery before closing the incident.

## Avoid

- Vague instructions like "check the logs" without exact log query filters or links.
- Omitting escalation contacts and secondary on-call details.
