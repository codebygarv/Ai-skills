# Example: Responsive Checker

## Input

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 16px;
}
.product-card img { width: 300px; height: 300px; }
.product-card .price { font-size: 14px; }
```

## Output

**Mobile (~375–428px)**
- `grid-template-columns: repeat(4, 300px)` produces a grid at least 1200px wide regardless of viewport — on a 375px screen this forces horizontal scroll across the entire page, not just the grid.
  - Fix: use fluid columns, e.g. `grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))`, or a mobile-specific override at a breakpoint switching to 1–2 columns.
- `.product-card img { width: 300px }` is a fixed pixel width — combined with the grid issue above, images won't shrink to fit a narrow card even if the grid itself is fixed.
  - Fix: `width: 100%; height: auto;` (or `aspect-ratio` if a fixed ratio is needed) so images scale with their container.

**Tablet (~768–1024px)**
- Same fixed 4-column, 300px-wide grid issue applies — at 768px, 4×300px + gaps (~1264px) still overflows a tablet viewport, though less severely than mobile.

**Desktop (1280px+)**
- No issue at this width — the fixed sizing happens to work here, which is likely why it wasn't caught: the layout was probably built and only checked at a desktop width.

**All viewports**
- `.price { font-size: 14px }` is on the small side generally, but becomes more of a concern on mobile once the grid is fixed to allow narrower cards — worth bumping to 16px minimum for legibility once the layout itself is responsive.

**Note:** these findings are code-inferred from the fixed pixel values; a live check at 375px/768px/1280px is worth doing once the grid fix lands to confirm the reflow looks right.
