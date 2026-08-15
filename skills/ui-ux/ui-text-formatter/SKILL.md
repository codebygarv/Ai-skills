---
name: ui-text-formatter
description: Detects poorly formatted UI text and improves capitalization, spacing, hierarchy, and readability - labels, headings, button text, and messages. Use when reviewing user-facing copy for consistency.
---

## Purpose

Review user-facing UI text (labels, headings, buttons, messages, empty states) for consistent, correct capitalization, punctuation, tone, and clarity — the small copy details that make an interface feel polished or sloppy.

## When to Use

- Reviewing user-facing strings before shipping a new screen or feature.
- The interface mixes capitalization styles (Title Case here, sentence case there) inconsistently.
- Cleaning up error/empty-state messages that were written quickly and never revisited.

## What to Analyze

1. **Capitalization consistency** — pick one convention (Title Case or Sentence case) per text category (headings, buttons, labels) and flag mixed usage across the interface.
2. **Punctuation consistency** — trailing periods on short labels/buttons (usually omitted), consistent use of ellipses for "leads to another step" actions (e.g. "Delete…" vs "Delete").
3. **Button/action text clarity** — is the action verb specific ("Delete project" vs. a bare "Delete" with ambiguous target, "OK" vs. a clearer action-named button)?
4. **Message tone & clarity** — error messages that explain what happened and (where possible) what to do next, not just a raw error code or vague "Something went wrong."
5. **Redundancy** — text that repeats what's already conveyed by an icon, adjacent label, or the page's heading.
6. **Terminology consistency** — the same concept called by different names in different places (e.g. "Team" in one screen, "Organization" in another, for the same entity).

## Output Format

- Findings as a before/after table: original text → suggested text → why.
- Group by category (Capitalization, Punctuation, Clarity, Terminology).
- Flag app-wide patterns (e.g. "headings are inconsistently capitalized across 5 screens") separately from single-instance fixes.

## Avoid

- Imposing a capitalization/tone convention different from the app's established one without flagging it as a broader convention question first.
- Rewriting text to be "cleverer" at the cost of clarity — UI copy should optimize for immediate understanding, not personality.
- Flagging brand-specific or intentionally distinctive terminology as an error without checking if it's deliberate.
