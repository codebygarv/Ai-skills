---
name: pr-reviewer
description: Performs a pull-request-style review across an entire diff, organizing findings by severity and considering scope/intent, not just line-level code quality. Use when reviewing a full PR rather than a single function.
---

## Purpose

Review a pull request the way a senior engineer would: assess whether the change accomplishes its stated intent, is appropriately scoped, and doesn't introduce bugs, architectural drift, or maintainability regressions — then organize findings by severity like a real PR review.

## When to Use

- Reviewing a complete PR/diff (multiple files, a coherent change set) rather than a single function.
- Before approving or requesting changes on a real PR.

Differs from [Code Reviewer](../code-reviewer/): Code Reviewer is line/function-level quality; PR Reviewer additionally evaluates scope, intent-match, and whether the PR is the right size and shape as a unit of change.

## What to Analyze

1. **Intent match** — does the diff actually do what the PR title/description claims, completely?
2. **Scope** — is the PR doing one coherent thing, or mixing unrelated changes that should be separate PRs?
3. **Correctness** — bugs, logic errors, edge cases across the changed files, including interactions between changed files.
4. **Test coverage** — are the changed code paths covered by new or existing tests? Is anything risky shipped untested?
5. **Backward compatibility / migration safety** — does this break existing callers, APIs, or data assumptions?
6. **Maintainability** — does this diff make the codebase easier or harder to work in going forward?

## Output Format

- One-line summary of what the PR does and whether it appears to accomplish it.
- Findings grouped by severity: **Blocking** → **Should Fix** → **Nit** → **Question** (things worth asking the author, not necessarily wrong).
- Each finding references the specific file and, where possible, the line or hunk.
- A final verdict: Approve / Approve with comments / Request changes, with the one or two things that most drive that verdict.

## Avoid

- Reviewing files that weren't actually changed in the diff.
- Blocking on nits — reserve "Blocking" for things that are actually wrong.
- Approving without a clear verdict statement — every review should end in an explicit recommendation.
