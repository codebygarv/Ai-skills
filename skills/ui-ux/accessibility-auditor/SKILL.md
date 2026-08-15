---
name: accessibility-auditor
description: Checks an interface against accessibility principles - keyboard navigation, semantic HTML, color contrast, labels, and screen-reader behavior. Use before shipping any user-facing UI, especially public-facing ones.
---

## Purpose

Audit a UI implementation against core accessibility principles so it's usable by people relying on keyboard navigation, screen readers, or other assistive technology — not just usable with a mouse and full vision.

## When to Use

- Before shipping any user-facing UI, especially public-facing products.
- Reviewing a form, modal, or interactive component specifically.
- The user asks for an accessibility review/audit, or mentions WCAG/a11y compliance requirements.

## What to Analyze

1. **Semantic HTML** — using actual `<button>`, `<a>`, `<nav>`, `<form>`, heading levels (`<h1>`–`<h6>`) instead of generic `<div>`/`<span>` with click handlers or visual-only styling standing in for structure.
2. **Keyboard navigation** — every interactive element reachable and operable via keyboard alone (Tab, Enter/Space, Escape for dismissible elements), with a visible focus indicator.
3. **Labels & names** — form inputs with associated `<label>`s (or `aria-label`), buttons/icons with accessible names (not just an icon with no text alternative), images with meaningful `alt` text (or empty `alt=""` if purely decorative).
4. **Color contrast** — text-to-background contrast meeting at least WCAG AA (4.5:1 for normal text, 3:1 for large text), and that meaning isn't conveyed by color alone (e.g. error state needs more than just red text).
5. **Screen reader behavior** — dynamic content changes (loading states, form errors, toasts) announced via appropriate ARIA live regions; modal/dialog focus trapping and return-focus-on-close behavior.
6. **ARIA usage correctness** — flag ARIA attributes used incorrectly or redundantly (ARIA on top of already-semantic HTML, or roles that don't match actual behavior) — "no ARIA is better than bad ARIA."

## Output Format

- Findings grouped by WCAG-adjacent category (Semantics, Keyboard, Labels, Contrast, Screen Reader, ARIA).
- Each finding: the specific element/pattern, the concrete barrier it creates (what a keyboard/screen-reader user actually can't do), and the fix.
- Note severity: **Blocker** (a user with a disability literally cannot complete the task) vs. **Improvement** (usable but suboptimal).

## Avoid

- Suggesting ARIA attributes as a first resort when fixing the underlying HTML semantics would solve it more reliably.
- Treating passing an automated linter (e.g. axe) as equivalent to actually being usable — automated checks catch a fraction of real accessibility issues; reason about actual usage too.
- Giving contrast/sizing advice without a concrete value — "make contrast better" isn't actionable, a specific ratio or color adjustment is.
