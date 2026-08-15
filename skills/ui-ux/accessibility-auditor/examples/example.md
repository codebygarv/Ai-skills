# Example: Accessibility Auditor

## Input

```html
<div class="dropdown-toggle" onclick="toggleMenu()">
  <img src="chevron.svg">
  Options
</div>
<div class="menu" id="menu">
  <div onclick="doDelete()">Delete</div>
</div>
```

## Output

**Semantics — Blocker**
- The dropdown toggle is a `<div onclick>` instead of a `<button>`. It's not natively focusable, not reachable via Tab, and won't be announced as an interactive control by a screen reader (it'll just read "Options" as plain text, no indication it's actionable).
  - Fix: `<button class="dropdown-toggle" aria-expanded="false" aria-controls="menu">Options</button>`, toggling `aria-expanded` in the click handler.

**Semantics — Blocker**
- The "Delete" menu item is also a `<div onclick>` — same issue: not keyboard-operable, not announced as a control. A keyboard-only user cannot delete anything through this menu at all.
  - Fix: use `<button>` (or `role="menuitem"` with correct keyboard handling if this is meant to be a full ARIA menu pattern) instead of a bare `div`.

**Labels — Blocker**
- `<img src="chevron.svg">` has no `alt` attribute. Since it's purely decorative (the "Options" text already conveys meaning), it should be `alt=""` so screen readers skip it — as written, some screen readers will announce the filename or a generic "image" instead.

**Keyboard — Blocker**
- No visible focus indicator is defined for either element in the shown code, and neither is currently focusable at all (see Semantics above) — once fixed to use real buttons, confirm focus styles aren't suppressed elsewhere (e.g. a global `outline: none` reset without a replacement focus style).

**ARIA — Improvement**
- Once switched to real `<button>` elements, `aria-expanded`/`aria-controls` on the toggle (suggested above) will let screen reader users know the menu's open/closed state — currently there's no way for a non-visual user to know the menu exists or opened at all.

**Fixed version (sketch):**
```html
<button class="dropdown-toggle" aria-expanded="false" aria-controls="menu" onclick="toggleMenu()">
  <img src="chevron.svg" alt="">
  Options
</button>
<div class="menu" id="menu" role="menu">
  <button role="menuitem" onclick="doDelete()">Delete</button>
</div>
```
