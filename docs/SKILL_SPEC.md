# Skill Specification

This document defines the standard structure and quality bar every skill in AI Skills Hub must meet. If you're authoring a new skill, follow this spec; [`CONTRIBUTING.md`](../CONTRIBUTING.md) walks through the submission process.

## What Counts as a Skill

A skill is a structured, self-contained set of instructions that gives an AI agent a specialized capability or behavior. At minimum, a skill should make explicit:

- **What** the AI should do
- **When** the AI should use it (trigger conditions / phrases)
- **What** information it should analyze
- **What rules** it should follow
- **What output** it should produce
- **What to avoid**
- **Examples** of expected behavior

## Folder Structure

Every skill lives at `skills/<category>/<skill-name>/` using a kebab-case name, and contains exactly these three items:

```
skills/<category>/<skill-name>/
├── SKILL.md
├── README.md
└── examples/
    └── example.md
```

### `SKILL.md`

The actual instructions consumed by the AI agent. Uses YAML frontmatter followed by a Markdown body:

```markdown
---
name: skill-name
description: One line covering what it does and when an agent should reach for it. This is what discovery/matching is based on, so be specific and concrete rather than generic.
---

## Purpose
...

## When to Use
...

## What to Analyze / Do
...

## Output Format
...

## Avoid
...
```

- `name` must match the folder name exactly.
- `description` is the single most important line in the file — it's what a skill-discovery system (or another engineer skimming the catalogue) matches against. Prefer concrete trigger language over vague marketing copy.
- Keep the body focused on one job. If you find yourself writing "and also handles X", that's a sign it should be a separate skill.

### `README.md`

The human-facing counterpart. Should cover:

- What it does (1–2 sentences)
- When to use it
- Best for (bullet list of scenarios)
- Example usage / trigger phrase
- Expected output shape
- Limitations (what it deliberately does *not* do)

### `examples/example.md`

One concrete, realistic worked example showing the skill's input and resulting output. Prefer a short real-world-shaped example over an abstract one — it's the fastest way for someone browsing the catalogue to decide if a skill fits their need.

## Quality Standards

Every skill accepted into the repo should be:

- **Clear** — a clearly defined, single purpose stated in the first line of `SKILL.md`.
- **Reusable** — works across multiple projects and languages/stacks, not tied to one specific codebase.
- **Deterministic** — the instructions should produce reasonably consistent behavior across runs, not wildly different output styles each time.
- **Focused** — solves one primary problem rather than trying to become a general-purpose assistant.
- **Composable** — plays well alongside other skills (e.g. `GrillMe` + `Architecture Reviewer` + `Security Auditor` = a deep technical review). Avoid instructions that assume it's the only skill active.
- **Documented** — ships with a complete `README.md` and at least one example.

## Categories

Skills are grouped by the primary job they do:

| Category | Folder |
|---|---|
| Thinking & Reasoning | `skills/reasoning/` |
| Development | `skills/development/` |
| UI / UX | `skills/ui-ux/` |
| Documentation & Communication | `skills/documentation/` |
| Quality & Testing | `skills/testing/` |
| Project & Architecture | `skills/architecture/` |
| Security *(reserved, future)* | `skills/security/` |
| Productivity *(reserved, future)* | `skills/productivity/` |
| Utilities *(reserved, future)* | `skills/utilities/` |

If a new skill doesn't fit an existing category, propose a new one in your PR description rather than forcing a fit.
