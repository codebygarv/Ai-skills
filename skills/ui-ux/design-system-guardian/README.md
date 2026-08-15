# 🎯 Design System Guardian

Catch hardcoded values that should be tokens.

## What it does

Scans UI code for hardcoded colors, spacing, typography, sizing, and shadows that duplicate — or nearly duplicate — an existing design token, and maps each one to the token it should use.

## When to use it

- The project has an established design-token system and you want code checked against it.
- Reviewing new UI code for token compliance before merge.
- Auditing an existing codebase for accumulated token drift.

## Best for

- Pre-merge token-compliance checks
- Catching "near-miss" values (15px vs. a 16px token) that are usually unintentional
- Periodic design-system drift audits

## Example usage

> "Check this component against our design tokens" (paste component code + point to the token source, e.g. theme.ts or tailwind.config.js)

## Expected output

Findings grouped by category (Color, Spacing, Typography, Sizing, Shadow), each with the raw value, its file/line, and the matching token it should be replaced with — or an explicit note when no close token exists.

## Limitations

- Needs to know the actual token set to check against — without it, this degenerates into guessing; provide the theme/token source or point to where it lives.
- Won't force a token onto a genuinely intentional one-off (e.g. matching a third-party embed's fixed size) — flags those as exceptions, not violations.
