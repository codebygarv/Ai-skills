---
name: form-ux-optimizer
description: Optimizes complex multi-field web forms with inline validation timing, floating labels, accessible error lists, and smart auto-fill.
---

## Purpose

Transform frustrating, high-friction web forms into seamless, accessible, high-conversion experiences with optimized validation timing (`onBlur` vs `onChange`), autocomplete attributes, keyboard navigation, and clear error summaries.

## When to Use

- High abandonment rates on checkout, registration, or loan application forms.
- Forms that aggressively yell at users with red error messages before they finish typing.
- Auditing forms for mobile usability, virtual keyboard optimization, and WCAG accessibility.

## What to Analyze

1. **Validation Timing**: Validate on blur for clean inputs, validate on change only *after* an initial error is triggered (Reward Early, Punish Late).
2. **HTML Autocomplete & Input Types**: Use proper `autocomplete` attributes (`email`, `name`, `address-line1`, `cc-number`) and `inputmode` (`numeric`, `email`, `tel`).
3. **Error Presentation**: Inline field-level error messages connected via `aria-describedby` + Top-level accessible error summary dialog.
4. **Cognitive Load & Grouping**: Break long 20-field forms into logical visual fieldsets or multi-step wizard cards.
5. **Action Hierarchy**: Clear primary submit button vs subtle secondary cancel link (prevent accidental clears).

## Output Format

- **UX Form Audit Table**: [Field | Identified Friction | Remediation | Autocomplete Token].
- **Accessible Form Component (React/HTML)**: Semantic form with ARIA bindings and floating labels.
- **Validation Timing Rules**: State management logic for clean vs dirty vs touched fields.

## Avoid

- Validating required fields and displaying error messages on initial keystroke while the user is still typing.
- Using placeholder text as the sole label for form inputs.
