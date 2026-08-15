---
name: changelog-generator
description: Converts commits or development updates into clean, categorized release notes and changelogs. Use when preparing a release and raw commit history needs to become human-readable notes.
---

## Purpose

Turn a raw list of commits, PR titles, or dev notes into a clean, categorized changelog entry that a user (not just an engineer) can read and understand what changed.

## When to Use

- Preparing release notes for a new version.
- A commit history is a mix of styles/quality and needs to become one coherent changelog.
- The user pastes a list of merged PRs or commit messages and wants them turned into notes.

## What to Analyze / Do

1. **Categorize each change** — typically: Added, Changed, Fixed, Removed, Deprecated, Security (following a Keep a Changelog–style structure, or the project's existing convention if different).
2. **Rewrite for the reader, not the author** — "fix null check in auth.js" becomes "Fixed an issue where login could fail unexpectedly for some users." Focus on user-visible impact, not implementation detail, unless the audience is technical (e.g. a library's changelog for other engineers, where technical specificity is appropriate).
3. **Merge duplicate/related entries** — several commits fixing the same underlying issue become one changelog line, not three.
4. **Drop non-user-facing noise** — pure refactors, test-only changes, CI config tweaks typically don't belong in user-facing release notes (may still belong in an "Internal" section for a technical audience).
5. **Flag breaking changes prominently** — these should never be buried among minor fixes.

## Output Format

- Version header (if known) and date.
- Grouped by category (Added / Changed / Fixed / Removed / Deprecated / Security), only including categories that have entries.
- Each entry: one clear sentence, user-facing language, imperative or past tense consistent throughout.
- Breaking changes called out in their own clearly marked subsection if any exist.

## Avoid

- Listing every commit 1:1 — the point is synthesis, not transcription.
- Vague entries like "various fixes and improvements" — every entry should say what actually changed.
- Losing breaking-change information by burying it in a generic "Changed" bullet.
