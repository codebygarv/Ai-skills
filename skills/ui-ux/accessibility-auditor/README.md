# ♿ Accessibility Auditor

Make sure the UI works for keyboard and screen-reader users too.

## What it does

Checks semantic HTML, keyboard navigation, labels/accessible names, color contrast, screen-reader behavior, and ARIA correctness — each finding tied to a concrete barrier a real user would hit, ranked Blocker vs. Improvement.

## When to use it

- Before shipping any user-facing UI, especially public-facing products.
- Reviewing a form, modal, or interactive component specifically.
- You have WCAG/a11y compliance requirements to meet.

## Best for

- Pre-ship accessibility review of forms, modals, and interactive components
- Catching missing labels, poor contrast, and keyboard traps
- Reviewing ARIA usage for correctness, not just presence

## Example usage

> "Accessibility audit this component" (paste code)

## Expected output

Findings grouped by category (Semantics, Keyboard, Labels, Contrast, Screen Reader, ARIA), each with the concrete barrier it creates and a fix, ranked Blocker vs. Improvement.

## Limitations

- Reasons about code, not a live screen reader — for full confidence, verify with an actual screen reader (VoiceOver/NVDA/JAWS) and keyboard-only pass before shipping anything critical.
- Doesn't replace a full WCAG conformance audit for legal/compliance purposes.
