---
name: commit-message-expert
description: Generates consistent, meaningful Git commit messages based on a diff or description of changes. Use when writing or reviewing a commit message, especially to follow Conventional Commits or a project's existing convention.
---

## Purpose

Write a clear, well-structured commit message for a given change — one that explains *what* changed and, where non-obvious, *why*, following the project's commit convention (Conventional Commits by default unless another pattern is evident).

## When to Use

- Writing a commit message for a diff/change and want it done well.
- Reviewing an existing commit message for clarity/convention compliance.
- A project's commit history is inconsistent and needs a documented convention to follow going forward.

## What to Analyze / Do

1. **Determine the convention in use** — check recent commit history for a pattern (Conventional Commits `type(scope): subject`, or a different house style) and match it; default to Conventional Commits if none is evident.
2. **Identify the actual change type** — `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, etc. — based on what the diff actually does, not what the author might casually call it.
3. **Write a subject line** — imperative mood ("add" not "added"/"adds"), no trailing period, under ~72 characters, specific enough to be useful in a `git log --oneline` scan.
4. **Write a body when the "why" isn't obvious from the diff alone** — motivation, context, trade-offs considered. Skip the body entirely for genuinely self-explanatory changes; an empty body isn't a defect.
5. **Flag breaking changes** — using the convention's mechanism for it (e.g. `BREAKING CHANGE:` footer in Conventional Commits, or `!` after the type/scope).

## Output Format

- Subject line first.
- Blank line, then body (only if it adds real information beyond the subject).
- Footer for breaking changes/issue references if applicable.
- If reviewing an existing message rather than writing a new one: state what's good, what's unclear, and a rewritten version.

## Avoid

- Vague subjects like "fix stuff," "update code," "misc changes" — every commit message should say what actually changed.
- Writing a body that just restates the subject in different words without adding context.
- Forcing Conventional Commits format onto a project that clearly uses a different, established convention.
