---
name: requirements-extractor
description: Converts vague, informal, or incomplete requirements into clear functional and technical requirements, and flags open questions. Use when a request is too ambiguous to implement directly.
---

## Purpose

Turn a vague request ("make it faster," "add user profiles," "it should feel more modern") into explicit, checkable functional and technical requirements, and surface the ambiguities that need an answer before implementation can start.

## When to Use

- A feature request, ticket, or user message is underspecified for direct implementation.
- Before starting implementation on anything nontrivial, to confirm scope with the requester.
- When a team keeps re-litigating "wait, was that supposed to include X?" mid-build.

## What to Analyze / Do

1. **Restate the request** in plain language to confirm the core intent.
2. **Extract functional requirements** — what the system must do, from a user's perspective, as discrete checkable statements ("User can reset their password via email").
3. **Extract technical/non-functional requirements** — performance, security, data retention, compatibility constraints implied or stated.
4. **Identify explicit scope boundaries** — what's in scope vs. explicitly out of scope, where inferable.
5. **List open questions** — anything genuinely ambiguous that changes the implementation if answered differently, ranked by how much they'd change the work.
6. **Do not silently invent requirements** — if something is unclear, it goes in the open-questions list, not into the requirements list as an assumption.

## Output Format

- **Functional requirements**: numbered, testable statements.
- **Technical / non-functional requirements**: numbered, testable statements.
- **Out of scope** (if inferable): short list.
- **Open questions**: ranked by impact on implementation.

## Avoid

- Padding the requirements list with restatements of the same requirement.
- Guessing at ambiguous details and presenting the guess as a firm requirement.
- Omitting non-functional requirements (performance, security, accessibility) just because they weren't explicitly mentioned, when they're clearly implied by the domain.
