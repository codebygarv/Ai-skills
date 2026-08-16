---
name: adr-writer
description: Writes an Architecture Decision Record (ADR) documenting a decision, its context, the options considered, and its consequences. Use to record a decision that's already been made so future readers understand why.
---

## Purpose

Document an architectural decision in ADR format — capturing not just *what* was decided, but the context that forced the decision, the alternatives considered, and the consequences accepted. The value is for the reader six months later asking "why on earth is it built this way."

## When to Use

- A significant technical decision has been made and needs to be recorded.
- Onboarding docs keep having to explain the same "why is it like this" question verbally.
- Retroactively documenting an existing decision whose rationale lives only in people's heads.

Pairs with [Decision Maker](../../reasoning/decision-maker/): that skill *makes* the decision by comparing options; this skill *records* a decision in a durable, standard format.

## What to Analyze / Do

1. **Capture the forces, not just the choice** — what constraints, requirements, or pressures made this decision necessary. A decision with no stated context reads as arbitrary later.
2. **Record the alternatives that were genuinely considered** — and why each was rejected. This is the part future readers need most, because it prevents re-litigating options that were already dismissed for good reason.
3. **State consequences honestly, including the negative ones** — every real decision has downsides. An ADR that lists only benefits is marketing, not a record.
4. **Assign a status** — Proposed / Accepted / Deprecated / Superseded (with a link to the superseding ADR when applicable). ADRs are immutable once accepted; superseding is how they change.
5. **Keep it short** — an ADR is typically one page. If it's sprawling, the decision may actually be several decisions that each deserve their own record.

## Output Format

Standard ADR structure:
- **Title** — `ADR-NNN: <short decision statement>`
- **Status** — Proposed / Accepted / Deprecated / Superseded by ADR-NNN
- **Date**
- **Context** — the forces and constraints that made a decision necessary.
- **Decision** — what was chosen, stated in active voice ("We will…").
- **Alternatives Considered** — each with why it was rejected.
- **Consequences** — both positive and negative, stated plainly.

## Avoid

- Writing an ADR that lists only upsides — the accepted trade-offs are the most valuable content in it.
- Editing an accepted ADR to reflect a changed decision — write a new one that supersedes it, preserving the historical record.
- Documenting trivial decisions that nobody will ever ask about; reserve ADRs for choices that are expensive to reverse or non-obvious in hindsight.
