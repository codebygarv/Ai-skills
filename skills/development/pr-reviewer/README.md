# 🔀 PR Reviewer

Review a whole pull request like a senior engineer, not just a diff of lines.

## What it does

Evaluates a full PR — intent match, scope, correctness, test coverage, backward compatibility, and maintainability — and ends with an explicit Approve / Approve with comments / Request changes verdict.

## When to use it

- Reviewing a complete PR before approving or requesting changes.
- You want the review to consider whether the PR is well-scoped, not just whether individual lines are correct.

## Best for

- Real PR reviews on GitHub/GitLab
- Catching PRs that mix unrelated changes
- Flagging risky changes that ship without test coverage

## Example usage

> "PR review this diff" (paste diff or PR link/description)

## Expected output

A one-line summary of what the PR does, severity-grouped findings (Blocking / Should Fix / Nit / Question) each tied to a file, and a final Approve / Approve with comments / Request changes verdict.

## Limitations

- Reviews what's in the diff — can't verify runtime behavior or CI results, only static review.
- For deep language/security/performance dives, pair with [TypeScript Guardian](../typescript-guardian/), [Security Auditor](../security-auditor/), or [Performance Auditor](../performance-auditor/).
