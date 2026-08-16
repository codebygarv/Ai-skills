# 🚨 Incident Postmortem Writer

Turn raw incident notes into a blameless postmortem.

## What it does

Structures raw incident notes/timeline into a proper postmortem — summary, timeline, root cause vs. contributing factors, quantified impact, and concrete action items with owners — all framed around systems and process, not individual blame.

## When to use it

- After an incident/outage, once resolved, and it needs documenting.
- Raw notes/timeline exist and need to become a coherent document.
- Standardizing postmortem format across a team.

## Best for

- Post-incident documentation
- Turning an incident channel's chaos into a clean timeline
- Making sure action items actually get captured, not just discussed and forgotten

## Example usage

> "Write a postmortem from these notes: [raw incident timeline/notes]"

## Expected output

Summary, timestamped timeline, root cause, contributing factors, quantified impact, and an action-items table (owner + whether it prevents recurrence or improves response) — blameless throughout.

## Limitations

- Only as accurate as the source notes — won't invent precise timestamps or details that aren't in the input; gaps are marked as uncertain, not fabricated.
- Doesn't assign action items to people who weren't already identified in the source material — flags "owner unassigned" rather than guessing who should own something.
