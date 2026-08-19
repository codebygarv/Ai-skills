---
name: color-palette-generator
description: Generates accessible, high-contrast, semantic design-system color tokens for light and dark modes.
---

## Purpose

Generate cohesive, accessible, and theme-ready color palettes mapped into semantic design tokens (background, surface, text, border, primary, destructive, warning, success) for light and dark modes with guaranteed WCAG contrast ratios.

## When to Use

- Bootstrapping a new brand design system or UI component library.
- Implementing dark mode on an existing light-only website.
- Fixing accessibility color contrast failures across text and interactive elements.

## What to Analyze

1. **Brand Primaries**: Core brand identity hue and saturation.
2. **Perceptual Uniformity**: Using OKLCH or HSL for balanced lightness steps (50 to 950).
3. **WCAG Compliance**: Minimum 4.5:1 contrast for normal text (AA) and 7:1 for AAA on all surface pairs.
4. **Semantic Token Mapping**: Decoupling raw colors (`blue-500`) from semantic intents (`bg-surface-elevated`, `text-secondary`).
5. **Dark Mode Inversion**: Shifting surface lightness and desaturating vibrant accent colors for reduced eye strain.

## Output Format

- **Color Token Table**: Raw color scale steps (50, 100, 200 ... 950).
- **Semantic CSS Variables**: Light and Dark mode `:root` variables.
- **Contrast Proof**: WCAG contrast ratio score for each text/background pairing.

## Avoid

- Hardcoding raw hex values in individual component styles.
- Creating dark modes that use pure `#000000` black without subtle neutral grays for elevation.
