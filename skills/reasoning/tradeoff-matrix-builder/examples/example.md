# Example: Tradeoff Matrix Builder

## Input

> "Compare Tailwind CSS vs Vanilla Extract vs CSS Modules for our design system."

## Output

| Criterion | Weight | Tailwind CSS | Vanilla Extract | CSS Modules |
|---|---|---|---|---|
| Runtime Performance | 5 | 5 (Zero runtime) | 5 (Zero runtime, typed) | 5 (Zero runtime) |
| Type Safety & Tokens | 4 | 3 (Config based) | 5 (TypeScript native) | 2 (Manual typing) |
| Developer Velocity | 4 | 5 (Utility classes) | 4 (Typed stylesheets) | 3 (Context switching) |
| Design System Portability | 3 | 3 (Tailwind coupled) | 5 (Framework agnostic) | 4 (CSS standard) |
| **Weighted Score** | - | **66 / 80** | **76 / 80 (Winner)** | **57 / 80** |

**Recommendation:** Vanilla Extract for a standalone reusable design system; Tailwind CSS if embedded in a single product repo.
