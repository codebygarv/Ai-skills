---
name: dependency-auditor
description: Reviews package dependencies for unnecessary packages, outdated or risky patterns, duplication, and licensing/maintenance risk. Use when a dependency manifest has grown unchecked or before adding a new dependency.
---

## Purpose

Review a project's dependency manifest for bloat, risk, and duplication — packages that shouldn't be there, packages that duplicate functionality, and packages that carry maintenance or licensing risk.

## When to Use

- The dependency list has grown over time without anyone auditing it.
- Before adding a new dependency, to check if an existing one already covers the need.
- Investigating bundle size or install time bloat.

## What to Analyze

1. **Unnecessary packages** — dependencies for functionality that's a few lines of code, or that duplicate a built-in language/runtime feature.
2. **Duplication** — multiple packages solving the same problem (e.g. two date libraries, two HTTP clients) introduced at different times by different people.
3. **Maintenance risk** — packages that are unmaintained (no updates in years, open critical issues with no response), single-maintainer with no succession, or deprecated in favor of a successor.
4. **Bundle/install cost** — a heavy dependency pulled in for a small fraction of its functionality (check if a lighter alternative or a direct implementation would do).
5. **Version drift** — dependencies significantly behind current major versions, especially where the gap blocks picking up security fixes.
6. **License risk** — copyleft licenses (e.g. GPL) in a codebase that otherwise ships under a permissive/proprietary license, where that's likely unintentional.

## Output Format

- Grouped: **Remove/replace candidates** (unnecessary or duplicated) → **Risk** (unmaintained, license, badly behind on versions) → **Note** (heavier than needed but not urgent).
- Each entry: package name, the concern, and the concrete recommendation (remove, replace with X, upgrade to version Y, or just flag for awareness).
- State clearly when a recommendation needs verification (e.g. "confirm no other code path relies on this package's transitive behavior before removing").

## Avoid

- Recommending removal of a dependency without checking whether it's actually used across the codebase, not just imported once.
- Treating every slightly-outdated version as urgent — distinguish "years behind with known CVEs" from "one minor version behind."
- Making licensing calls as if they're legal advice — flag for review, don't declare a license is definitely a problem without appropriate caveats.
