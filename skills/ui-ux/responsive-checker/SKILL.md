---
name: responsive-checker
description: Analyzes whether a UI will behave correctly across mobile, tablet, and desktop layouts. Use when reviewing responsive/adaptive layout code or before shipping a UI meant to work across screen sizes.
---

## Purpose

Determine whether a UI implementation will actually hold up across mobile, tablet, and desktop viewports — not just at whatever single width it was built and eyeballed at.

## When to Use

- Reviewing layout code (CSS/Tailwind/styled-components/etc.) meant to be responsive.
- Before shipping any UI intended to be used on multiple device classes.
- Debugging a specific "looks broken on mobile/tablet" report.

## What to Analyze

1. **Breakpoint coverage** — are there defined behaviors at common breakpoints (mobile ~375–428px, tablet ~768–1024px, desktop 1280px+), or does the layout only really work at one width?
2. **Fixed vs. fluid sizing** — hardcoded pixel widths/heights that won't adapt, versus relative units (%, `fr`, `rem`, `vw/vh` used appropriately) that do.
3. **Overflow handling** — content that will overflow, get clipped, or force horizontal scroll at narrow widths (long text, wide tables, fixed-width images).
4. **Touch target sizing** — interactive elements meeting a reasonable minimum touch target size (~44x44px) on mobile, not just sized for mouse precision.
5. **Layout reflow** — does a multi-column desktop layout collapse sensibly on mobile (stacking, hiding secondary content, or reflowing), or does it just shrink until unreadable?
6. **Text scaling** — font sizes and line lengths that stay readable at mobile widths, not desktop-sized text crammed into a narrow viewport.

## Output Format

- Findings organized by viewport class (Mobile / Tablet / Desktop) where the issue manifests, or "All viewports" if it's breakpoint-independent.
- Each finding: what breaks, at roughly what width, and the fix (a specific CSS/layout change).
- If reviewing code without a live render, note explicitly which findings are code-inferred vs. would benefit from an actual visual check at that width.

## Avoid

- Assuming a specific breakpoint strategy the codebase doesn't use — check existing breakpoint conventions first and match them.
- Flagging a deliberately mobile-hidden or desktop-only element as broken when it's an intentional responsive choice.
- Recommending a full layout rewrite when a targeted breakpoint fix solves the actual issue.
