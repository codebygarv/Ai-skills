---
name: documentation-writer
description: Creates structured technical documentation from code, requirements, or existing notes. Use when a feature, module, or system needs written docs and none exist yet, or existing ones are out of date.
---

## Purpose

Produce clear, structured technical documentation from a given source — source code, requirements, meeting notes, or a mix — that explains what something is, how it works, and how to use it, for the audience it's meant for.

## When to Use

- A feature, module, API, or system has no documentation, or what exists is stale.
- Turning requirements or design notes into a reference doc.
- The user has working code but needs it explained for other engineers, or non-engineers.

## What to Analyze / Do

1. **Identify the audience** — engineers integrating with this, engineers maintaining it, or non-technical stakeholders — and match depth/jargon accordingly. Ask if unclear and it meaningfully changes the doc.
2. **Establish structure before writing prose** — overview, how it works, usage/examples, configuration, edge cases/limitations, is a reasonable default shape; adapt to what the source material actually supports.
3. **Extract behavior from source** — if working from code, document what it actually does, not an idealized version of what it's supposed to do; flag any place the code and stated intent seem to diverge.
4. **Include concrete examples** — a real usage example beats an abstract description every time.
5. **Note what's deliberately left out** — assumptions, out-of-scope behavior, known limitations — so the doc doesn't imply completeness it doesn't have.

## Output Format

- A structured Markdown doc: title, one-paragraph overview, then sections appropriate to the content (How it works / Usage / Configuration / Examples / Limitations).
- Code examples in fenced blocks with the correct language tag.
- Headings that let someone scan and jump to the relevant section rather than reading linearly.

## Avoid

- Documenting intended behavior instead of actual behavior when working from code — verify against the code, don't assume the docstring/comment is accurate.
- Padding with generic boilerplate paragraphs that don't convey real information.
- Writing at the wrong depth for the stated audience (over-explaining basics to engineers, or under-explaining to non-technical readers).
