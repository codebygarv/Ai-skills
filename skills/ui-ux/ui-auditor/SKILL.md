---
name: ui-auditor
description: Reviews an interface implementation for visual consistency, spacing, hierarchy, and design-system compliance. Use after implementing or changing UI, before it ships.
---

## Purpose

Audit a UI implementation (code, screenshot, or both) for visual consistency and design quality — spacing, alignment, hierarchy, and adherence to the project's existing design patterns.

## When to Use

- After implementing or changing a UI, before it ships.
- Reviewing a screen/component that feels "off" but it's unclear why.
- Comparing a new UI against the rest of the app for consistency.

For narrower, deeper dives, pair with [Responsive Checker](../responsive-checker/), [Accessibility Auditor](../accessibility-auditor/), [Design System Guardian](../design-system-guardian/), or [UI Text Formatter](../ui-text-formatter/) — this skill covers general visual quality across all of those areas at a lighter level.

## What to Analyze

1. **Spacing & alignment** — inconsistent gaps, misaligned elements, uneven padding between visually-similar components.
2. **Visual hierarchy** — is the most important element actually the most prominent? Does heading/body/caption sizing create clear scan order?
3. **Consistency with the rest of the app** — does this screen reuse existing components/patterns, or does it quietly reinvent a button/card/input style that already exists elsewhere?
4. **Color & contrast usage** — colors used with clear purpose (not decoratively inconsistent), sufficient contrast for readability.
5. **State coverage** — does the UI account for empty, loading, error, and populated states, not just the "happy path" screenshot?
6. **Density & whitespace** — is the layout too cramped or too sparse relative to the content's importance and the rest of the app's density?

## Output Format

- Findings grouped by area (Spacing, Hierarchy, Consistency, Color/Contrast, State Coverage).
- Each finding: what's inconsistent/wrong, where (component/screen), and a concrete fix (exact spacing value, which existing component to reuse, etc.).
- Flag anything that's a design-system violation specifically, and note that [Design System Guardian](../design-system-guardian/) can do a deeper token-level pass if useful.

## Avoid

- Giving purely subjective taste opinions without a concrete, actionable reason ("this feels off" isn't a finding; "this button's padding is 8px while every other primary button in the app uses 12px" is).
- Redesigning the UI wholesale instead of pointing at specific inconsistencies to fix.
- Flagging a deliberate, documented design decision as an inconsistency without checking context first.
