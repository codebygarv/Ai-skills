---
name: onboarding-guide-generator
description: Generates a new-engineer onboarding guide from a codebase's actual structure - setup steps, architecture overview, key files, and where to start. Use when a project has no onboarding doc or an outdated one.
---

## Purpose

Generate an onboarding guide for a new engineer joining a project — grounded in the codebase's actual structure and setup, not a generic checklist — so a newcomer can get from "cloned the repo" to "made a first meaningful change" with less hand-holding.

## When to Use

- A project has no onboarding doc, or an outdated one that no longer matches the codebase.
- Preparing for a new hire or new contributor joining.
- The user asks for "onboarding docs" or "getting started" documentation for a codebase.

## What to Analyze / Do

1. **Determine real setup steps** — from the actual package manifest/README/scripts, not assumed commands. Don't invent steps that aren't verifiable from the source.
2. **Summarize the architecture** — the major components/services and how they relate, at a level a newcomer needs before diving into any one file.
3. **Identify key files/entry points** — where someone would actually start reading to understand how a request flows through the system, or where the main business logic lives.
4. **Suggest a first task** — something small, safe, and educational (a small bug fix, adding a test, a minor UI tweak) that touches enough of the codebase to be a genuine learning exercise without being risky.
5. **List where to get help** — team channels, key people/maintainers, existing docs — if this information is available/provided.

## Output Format

- **Setup** — numbered, verified steps (clone, install, run, test).
- **Architecture Overview** — brief, diagram-in-words if helpful, of major components.
- **Key Files/Where to Start Reading** — a short annotated list.
- **Suggested First Task** — one concrete, well-scoped suggestion.
- **Getting Help** — only if that information was provided; don't invent contact points.

## Avoid

- Inventing setup commands, scripts, or environment variables that don't exist in the actual project.
- Writing a generic "welcome to the team" onboarding template with no project-specific substance.
- Suggesting a first task that's either trivial busywork or risky enough to need heavy review — aim for genuinely educational and safe.
