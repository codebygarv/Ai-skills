# Example: Design System Guardian

## Input

Token source (`theme.ts` excerpt):
```ts
export const colors = { primary: '#2563eb', danger: '#dc2626', textMuted: '#6b7280' };
export const spacing = { sm: 8, md: 16, lg: 24, xl: 32 };
export const radius = { sm: 4, md: 8, lg: 16 };
```

Component under review:
```css
.alert-banner {
  background: #dc2727;
  padding: 15px 24px;
  border-radius: 6px;
  color: #6b7280;
}
```

## Output

**Color**
- `background: #dc2727` is a near-miss of the `danger` token (`#dc2626`) — almost certainly a typo/hand-picked approximation rather than an intentional new color.
  - Fix: `background: var(--color-danger)` (or `colors.danger` depending on your CSS approach).
- `color: #6b7280` exactly matches `textMuted` but is hardcoded rather than referencing the token.
  - Fix: `color: var(--color-text-muted)`.

**Spacing**
- `padding: 15px 24px` — the `24px` matches `spacing.lg` exactly and should reference it. The `15px` is a near-miss of `spacing.md` (`16px`) with no matching token at 15 — likely unintentional.
  - Fix: `padding: var(--spacing-md) var(--spacing-lg);` (16px, not 15px, unless the 1px difference is deliberate — worth confirming).

**Sizing**
- `border-radius: 6px` doesn't match any defined radius token (`sm: 4`, `md: 8`, `lg: 16`) — closest is `radius.sm` (4px) or `radius.md` (8px) depending on intended visual weight.
  - Fix: pick `var(--radius-sm)` or `var(--radius-md)` based on design intent; if genuinely a different intended radius, that's worth raising as a possible missing token rather than silently hardcoding it.

**No exceptions found** — nothing here appears to be an intentional one-off; all four values look like unintentional drift from existing tokens.
