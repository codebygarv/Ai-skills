# 📦 Dependency Auditor

Find bloat, duplication, and risk in your dependency tree.

## What it does

Reviews a dependency manifest for unnecessary packages, duplicated functionality, unmaintained/risky packages, version drift, and license risk — with a concrete remove/replace/upgrade recommendation per finding.

## When to use it

- The dependency list has grown unchecked over time.
- Before adding a new dependency, to check if something already covers the need.
- Investigating bundle size or install time bloat.

## Best for

- Periodic dependency health checks
- Pre-add checks ("do we already have something for this?")
- Flagging unmaintained or high-risk packages before they become urgent

## Example usage

> "Audit these dependencies" (paste package.json/requirements.txt/etc.)

## Expected output

Findings grouped Remove/replace candidates → Risk → Note, each with the package name, the concern, and a concrete recommendation.

## Limitations

- Doesn't verify actual usage across the codebase on its own — confirm a package is truly unused before removing it, not just rarely imported.
- License flags are a starting point for review, not legal advice — get real legal sign-off for anything license-sensitive.
