---
name: edge-case-hunter
description: Focuses specifically on unusual inputs, boundary conditions, empty states, and unexpected user behavior that implementations commonly miss. Use to find what a normal test pass would skip over.
---

## Purpose

Enumerate the edge cases a given piece of functionality is likely to mishandle — unusual input, boundary values, empty/missing states, and unexpected user behavior — the class of case that a "does it work for the normal case" pass typically skips.

## When to Use

- Before shipping something that handles user input or external data.
- After writing normal-case tests, to find what's still missing.
- Specifically want edge cases enumerated, separate from a general bug hunt (see [Bug Hunter](../../development/bug-hunter/) for defects in existing code; this skill is about enumerating cases to consider, whether or not code exists yet).

## What to Analyze

1. **Boundary values** — zero, negative, empty string/array/object, exactly at a limit (min/max), one below/above a limit.
2. **Empty & missing states** — no data yet (first-time user), data deleted mid-session, a required relationship missing (e.g. a comment whose author was deleted).
3. **Unexpected user behavior** — double-submitting a form, navigating away mid-action, using browser back/forward against app state, extremely fast repeated actions.
4. **Unusual but valid input** — very long strings, unicode/emoji, whitespace-only input, numbers as strings, timezone edge cases (midnight, DST transitions, leap years/seconds).
5. **Concurrent/simultaneous actions** — two actors acting on the same resource at once, the same actor acting on two devices/tabs at once.
6. **Degraded conditions** — slow network, partial data load, a dependency being down or timing out.

## Output Format

- A checklist grouped by category (Boundary Values, Empty/Missing States, Unexpected Behavior, Unusual Input, Concurrency, Degraded Conditions).
- Each item: the specific case, why it's plausible (not just theoretically possible), and what currently happens (if known/inferable) or what should happen.
- Prioritize cases realistic for this specific feature over generic edge cases that don't actually apply to it.

## Avoid

- Generating a generic checklist that doesn't reflect what this specific feature actually does — every case should be plausible for the feature at hand.
- Treating truly impossible cases (violating a hard invariant enforced elsewhere) as if they need handling here too.
- Listing a case without saying why it matters or what should happen — a bare list of scenarios isn't actionable.
