---
name: design-system-guardian
description: Detects hardcoded colors, spacing, typography, widths, and other raw values that should use design-system tokens instead. Use when a project has an established design system/token set and you want to catch drift from it.
---

## Purpose

Catch places where UI code uses raw/hardcoded values (hex colors, pixel spacing, arbitrary font sizes) instead of the project's established design tokens — the specific class of consistency drift that causes a design system to slowly stop being followed.

## When to Use

- The project has an established design-token system (CSS variables, a theme object, Tailwind config, etc.) and you want to check code against it.
- Reviewing new UI code for token compliance before merge.
- Auditing an existing codebase for accumulated token drift.

Requires knowing (or being told, or being able to find) the project's actual token set — this skill checks *against* an existing system, it doesn't invent one from scratch (for that, see [UI Auditor](../ui-auditor/) for general consistency without an established token baseline).

## What to Analyze

1. **Color** — hardcoded hex/rgb/named colors where a color token exists for that exact or a near-identical value.
2. **Spacing** — raw pixel/rem margin/padding/gap values that don't align to the token scale (e.g. `13px` when the scale is 4/8/12/16/24/32).
3. **Typography** — arbitrary `font-size`/`font-weight`/`line-height` combinations instead of defined type-scale tokens or text style components.
4. **Sizing** — hardcoded widths/heights/border-radius that duplicate an existing token (e.g. a one-off `border-radius: 6px` when the system defines `radius.md: 8px`).
5. **Shadows/elevation** — custom `box-shadow` values where an elevation token exists.
6. **Near-misses** — values close to but not equal to a token (`15px` vs. token `16px`) — these are often unintentional and worth flagging even more than obviously-custom values.

## Output Format

- Each finding: the raw value used, its file/line, the matching (or closest) token it should be replaced with, and the token's actual name/variable in this project's system.
- Group by category (Color, Spacing, Typography, Sizing, Shadow).
- If a value has no reasonably close token, say so explicitly rather than forcing a mismatched token onto it — that's a signal the token system may need a new token, not that the code is wrong.

## Avoid

- Forcing a token fit when the design genuinely calls for a one-off value (e.g. matching a third-party embed's fixed dimensions) — flag it as an intentional exception rather than a violation.
- Assuming a token system without confirming what it actually is in this project — ask or look for the theme/token source before flagging anything.
- Flagging token usage inside the design system's own source files (where raw values are expected, since that's where tokens are defined).
