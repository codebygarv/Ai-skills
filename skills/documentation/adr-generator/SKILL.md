---
name: adr-generator
description: Formats Architecture Decision Records (ADRs) capturing problem context, considered alternatives, and consequences.
---

## Purpose

Document significant architectural choices in a lightweight, immutable Architecture Decision Record (ADR) following the Michael Nygard format to maintain long-term technical context.

## When to Use

- Committing to a new framework, language, database, or major pattern.
- Changing an existing architectural standard or deprecating a system.
- Preserving the "why" behind non-obvious engineering decisions for future hires.

## What to Analyze

1. **Title & Status**: `[Number] [Title]` (e.g. `ADR-0012 Use ClickHouse for Event Analytics`) with status (`Proposed`, `Accepted`, `Superseded`, `Rejected`).
2. **Context**: What problem are we solving, and what business/technical constraints force a decision?
3. **Decision**: The clear, active-voice statement of what is being adopted.
4. **Alternatives Considered**: What other options were evaluated and why were they declined?
5. **Consequences**: Positive effects, negative tradeoffs, and operational risks accepted.

## Output Format

- Standard Markdown ADR template with YAML frontmatter.
- Clear, objective, concise sections without fluff.

## Avoid

- Writing ADRs as post-hoc justifications with no alternatives mentioned.
- Omitting negative consequences and maintenance burdens.
