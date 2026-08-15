# 🔍 Code Reviewer

A thorough, general-purpose code review.

## What it does

Reviews a diff, file, or function for correctness, readability, maintainability, performance, and consistency with the surrounding codebase — findings grouped by severity with concrete suggested fixes.

## When to use it

- Before merging a diff or PR.
- Reviewing a function or file someone's unsure about.
- You want general coverage, not a deep dive into one specific concern (for those, see [Security Auditor](../security-auditor/), [TypeScript Guardian](../typescript-guardian/), [Performance Auditor](../performance-auditor/)).

## Best for

- Pre-merge review of any diff
- Reviewing unfamiliar or inherited code
- Getting a second pair of eyes before a PR review

## Example usage

> "Code review this function" (paste function or file)

## Expected output

Findings grouped Blocking → Should Fix → Nit, each with a file/line reference, what's wrong, and a concrete fix.

## Limitations

- General-purpose — not a substitute for language- or domain-specific deep dives (types, security, performance) when those matter most.
- Can't catch issues that require running the code (e.g. actual runtime behavior under load) — it's a static read, not a test run.
