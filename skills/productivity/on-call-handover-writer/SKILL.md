---
name: on-call-handover-writer
description: Formats structured end-of-shift summaries covering active incidents, degraded services, and pending follow-ups.
---

## Purpose

Generate concise, comprehensive, and actionable on-call shift handover reports to transfer operational context smoothly to the incoming engineer without lost details.

## When to Use

- Weekly or daily on-call shift transitions.
- Handing over active or mitigated incidents across time zones (Follow-the-Sun).
- Summarizing alert volume and noise for engineering managers.

## What to Analyze

1. **Active / Ongoing Incidents**: Any un-resolved or partially mitigated P1/P2 issues.
2. **Recent Deployments & Feature Flags**: High-risk changes toggled during the shift.
3. **Flaky Alerts & False Positives**: Alerts that paged repeatedly without actionable issues (alert fatigue).
4. **Follow-Up Action Items**: Jira postmortem tickets or bug fixes assigned during the week.
5. **Upcoming High-Risk Events**: Scheduled database maintenance, marketing campaigns, or cutovers.

## Output Format

- **Shift Overview**: Dates, Outgoing Engineer, Incoming Engineer, Total Pages (P1/P2/P3).
- **Incident Summary Table**: [Incident # | Severity | Status | Current Mitigation | Next Action].
- **Alert Noise & Tuning Candidates**: Specific alerts that need threshold relaxation.
- **Scheduled Maintenance & High-Risk Items**: What the incoming on-call must watch for.

## Avoid

- Writing a 10-page unorganized wall of text.
- Leaving active workarounds undocumented.
