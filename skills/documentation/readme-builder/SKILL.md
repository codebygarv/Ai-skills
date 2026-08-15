---
name: readme-builder
description: Creates professional README files for GitHub projects, covering purpose, installation, usage, and contribution info. Use when a repo has no README or an outdated/thin one.
---

## Purpose

Produce a professional, complete README for a GitHub project that lets a newcomer understand what the project is, install it, and start using it — without needing to read the source first.

## When to Use

- A repository has no README, or one that's thin/outdated.
- Preparing a project for public release or wider internal sharing.
- The user asks for "a README" for a project.

## What to Analyze / Do

1. **Determine what the project actually is** — from the codebase, package manifest, or the user's description: language/framework, what it does, its entry points.
2. **Cover the standard sections**, adapted to project type:
   - Title + one-line description
   - What it does / why it exists (a short "why would I use this" paragraph)
   - Installation (exact commands, from a clean environment)
   - Usage (a minimal working example)
   - Configuration (if applicable — env vars, config file)
   - Project structure (for non-trivial repos, a brief tree/overview)
   - Contributing (link out to CONTRIBUTING.md if one exists, or a short inline section)
   - License
3. **Verify commands are accurate** — don't invent install/run commands; check the actual package manifest/scripts/Makefile for what's real.
4. **Match the project's actual maturity** — a weekend script doesn't need a "Roadmap" and "Governance" section; a serious open-source library might.

## Output Format

- Full README.md in Markdown, badges only if genuinely applicable (CI status, npm version) and not invented.
- Code blocks with correct language tags for every command/example.
- Concise — a README that's skimmable in under a minute for the essentials (what/install/usage), with more detail below for those who want it.

## Avoid

- Inventing installation commands, scripts, or features that don't exist in the actual project.
- Copy-pasting a generic README template without adapting section relevance to the actual project.
- Writing a README so long that the essential "what is this and how do I run it" gets buried.
