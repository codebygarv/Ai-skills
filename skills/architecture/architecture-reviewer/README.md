# 🏛️ Architecture Reviewer

System-level review, above the level of individual files.

## What it does

Reviews a system's architecture for separation of concerns, coupling, scalability, data/state ownership, failure isolation, and evolvability — each finding tied to a concrete scenario and a directionally specific recommendation.

## When to use it

- Evaluating a proposed or existing architecture.
- Before a significant scaling milestone.
- A codebase feels hard to change for structural, not file-level, reasons.

## Best for

- Pre-scale architecture reviews
- Diagnosing "everything feels hard to change" at a structural level
- Evaluating a proposed architecture before committing to it

## Example usage

> "Review this architecture" (describe or diagram the system's components and how they communicate)

## Expected output

A confirmed understanding of the architecture, then findings grouped by area, each with the structural issue, a concrete pain scenario, and a specific recommendation — distinguishing must-fix-now from acceptable current debt.

## Limitations

- Operates at the component/service/system level — pair with [Code Reviewer](../../development/code-reviewer/) for file/function-level review.
- Recommendations are judged against stated or inferred scale/team size — flag if those assumptions aren't accurate, since they materially change what's "right-sized."
