---
name: dashboard-widget-designer
description: Designs high-signal analytics widgets, sparklines, KPI summary cards, and comparative metric badges with zero chartjunk.
---

## Purpose

Design clean, scannable, and actionable analytics dashboard components (KPI summary cards, trend comparison badges, inline sparklines, progress gauges) adhering to Edward Tufte's data-ink ratio and accessibility principles.

## When to Use

- Building executive analytics overviews, SaaS metrics dashboards, or billing usage widgets.
- Fixing cluttered dashboards that display overwhelming numbers with no context or trend indications.
- Designing responsive grid layouts for dashboard tiles across desktop and mobile screens.

## What to Analyze

1. **Core Metric Hierarchy**: Primary value (large typography) vs Secondary context (timeframe, vs last month).
2. **Trend Indicators**: Percentage delta (`+14.2%`), semantic color (green/red with accessible icons), and reference baseline.
3. **Data-Ink Ratio**: Eliminate redundant gridlines, heavy 3D gradients, and superfluous borders (maximize data visibility).
4. **Sparkline Integration**: Compact inline SVG micro-charts showing 30-day directional trends at a glance.
5. **Loading & Skeleton States**: Smooth pulsing placeholder shapes while backend aggregates calculate.

## Output Format

- **Widget Component Specification**: Layout blueprint with typographic scale and spacing.
- **React / Tailwind CSS Code**: Copy-pasteable responsive KPI widget component.
- **Color & Accessible Contrast Guide**: WCAG compliant delta colors with non-color icons.

## Avoid

- Displaying raw numbers without comparative context (e.g. "$40,000" means nothing without "+12% vs last month").
- Using color alone (green/red) to convey status without up/down arrow icons for colorblind accessibility.
