---
name: code-reviewer
description: Reviews source code for bugs, readability, maintainability, performance, and best-practice violations. Use for general-purpose code review of a diff, file, or function, not tied to a specific language concern.
---

## Purpose

Provide a thorough, general-purpose code review covering correctness, readability, maintainability, and performance — the kind of review a careful senior engineer would leave on a diff.

## When to Use

- Reviewing a diff, PR, file, or function before merge.
- The user asks for "a code review" without narrowing to a specific concern (security, types, performance) — those narrower concerns have their own skills ([Security Auditor](../security-auditor/), [TypeScript Guardian](../typescript-guardian/), [Performance Auditor](../performance-auditor/)) and this skill should defer to them for deep dives in those areas while still flagging obvious issues.

## What to Analyze

1. **Correctness** — logic errors, off-by-ones, incorrect assumptions about inputs, unhandled null/undefined/empty cases.
2. **Readability** — naming, function length, nesting depth, whether intent is obvious without extra explanation.
3. **Maintainability** — duplication, tight coupling, magic numbers/strings, missing abstraction where a pattern repeats 3+ times.
4. **Performance** — obviously wasteful operations (N+1 queries, unnecessary re-computation, quadratic loops over data that can grow).
5. **Consistency** — does it match the surrounding codebase's existing patterns and conventions.
6. **Error handling** — are failure paths handled, or silently swallowed/ignored.

## Output Format

- Group findings by severity: **Blocking** (bugs, correctness issues) → **Should Fix** (maintainability, missing error handling) → **Nit** (style, naming).
- Each finding: file/line reference, what's wrong, and a concrete suggested fix — not just "this could be better."
- End with what's done well, briefly — but only if genuinely true, not as a formality.

## Avoid

- Rewriting the whole file as "feedback" instead of pointing at specific issues.
- Nitpicking style that a linter/formatter already enforces.
- Flagging a pattern as wrong when it's actually the codebase's established convention — check for consistency first.
