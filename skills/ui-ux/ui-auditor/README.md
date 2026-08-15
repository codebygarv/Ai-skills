# 🎨 UI Auditor

Catch visual inconsistencies before they ship.

## What it does

Reviews a UI implementation for spacing/alignment, visual hierarchy, consistency with the rest of the app, color/contrast usage, and coverage of empty/loading/error states — each finding concrete and actionable, not a vague taste opinion.

## When to use it

- After implementing or changing UI, before it ships.
- A screen feels "off" but it's unclear why.
- Comparing a new screen against the rest of the app for consistency.

## Best for

- Pre-ship review of new screens/components
- Catching reinvented components that should reuse existing patterns
- Spotting missing empty/loading/error states

## Example usage

> "Audit this UI" (paste component code or describe/attach the screen)

## Expected output

Findings grouped by area (Spacing, Hierarchy, Consistency, Color/Contrast, State Coverage), each with what's wrong, where, and a concrete fix.

## Limitations

- General-purpose visual review — for deep dives, pair with [Responsive Checker](../responsive-checker/), [Accessibility Auditor](../accessibility-auditor/), [Design System Guardian](../design-system-guardian/), or [UI Text Formatter](../ui-text-formatter/).
- Works best with actual code or a real screenshot — a text description alone limits how specific findings can be.
