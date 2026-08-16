# 📐 ADR Writer

Record *why* a decision was made, for the reader six months from now.

## What it does

Writes an Architecture Decision Record — context, decision, alternatives considered (and why they were rejected), and consequences including the negative ones — in the standard immutable ADR format.

## When to use it

- A significant technical decision was made and needs recording.
- You keep verbally re-explaining "why is it built this way."
- Retroactively documenting a decision whose rationale only lives in people's heads.

## Best for

- Recording architecture/tech-stack decisions
- Preventing already-settled options from being re-litigated
- Giving new team members the "why" without a meeting

## Example usage

> "Write an ADR: we decided to use server-side sessions instead of JWTs for auth."

## Expected output

A one-page ADR with title, status, date, context, decision, alternatives considered with rejection reasons, and honest consequences (positive and negative).

## Limitations

- Records a decision; doesn't make one — pair with [Decision Maker](../../reasoning/decision-maker/) if the choice isn't settled yet.
- Only as good as the context it's given — rationale that was never explained to it can't be recovered.
- ADRs are immutable by convention: to change a decision, write a new ADR superseding the old one rather than editing it.
