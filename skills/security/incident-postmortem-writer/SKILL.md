---
name: incident-postmortem-writer
description: Structures raw incident notes into a blameless postmortem - timeline, root cause, impact, and action items. Use after an incident/outage once the immediate fire is out and it needs to be documented.
---

## Purpose

Turn raw, informal incident notes (timestamps, Slack messages, half-remembered sequence of events) into a structured, blameless postmortem document that captures what happened, why, and what changes as a result.

## When to Use

- After an incident/outage, once it's resolved and needs to be documented.
- Raw notes/timeline exist (from an incident channel, monitoring alerts, or people's recollections) and need to become a coherent document.
- A team wants to standardize postmortem format.

## What to Analyze / Do

1. **Build a clear timeline** — order events chronologically with timestamps where available; note where the timeline has gaps or uncertainty rather than inventing precision that isn't there.
2. **Separate root cause from contributing factors** — the root cause is what actually triggered the incident; contributing factors are things that made it worse or harder to detect/resolve (e.g. "alerting was misconfigured" is a contributing factor to detection delay, not necessarily the root cause of the outage itself).
3. **Quantify impact** — duration, what was affected (which users/features/percentage of traffic), and any measurable business impact if known.
4. **Keep it blameless** — describe what happened and what systemic/process gap allowed it, not who made a mistake. "The deploy process lacked a canary stage that would have caught this" not "X deployed bad code."
5. **Extract concrete action items** — each with an owner (if known) and whether it prevents recurrence vs. improves detection/response time; distinguish these two purposes explicitly.

## Output Format

- **Summary** — one paragraph: what happened, impact, duration.
- **Timeline** — chronological, timestamped where possible.
- **Root Cause** — the actual trigger.
- **Contributing Factors** — what made detection/impact/resolution worse.
- **Impact** — quantified where possible.
- **Action Items** — table: Action | Owner (if known) | Prevents recurrence / Improves response.
- **Lessons Learned** — brief, non-blame-assigning takeaways.

## Avoid

- Assigning blame to individuals — always frame around systems/processes, even when a specific action clearly triggered the incident.
- Inventing precise timestamps or details not present in the source notes — mark gaps as "time uncertain" rather than fabricating false precision.
- Producing a document with no concrete action items — a postmortem without follow-through isn't useful.
