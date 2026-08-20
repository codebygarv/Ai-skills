---
name: git-conflict-resolver
description: Resolves complex git rebase and merge conflicts with AST-level context, preserving intent across concurrent branches.
---

## Purpose

Resolve difficult, tangled Git merge and rebase conflicts by analyzing both branches' underlying intent, syntax AST changes, import reorganizations, and semantic context rather than blindly picking incoming vs current changes.

## When to Use

- Resolving massive merge conflicts after rebasing a long-lived feature branch onto main.
- Reconciling concurrent refactorings (e.g. one branch renamed a function, another branch added new calls to it).
- Fixing lockfile conflicts (`pnpm-lock.yaml`, `package-lock.json`, `Cargo.lock`).

## What to Analyze

1. **Branch Intent Analysis**: What did Branch A (Incoming) change and why? What did Branch B (Current) change and why?
2. **Syntactic Merging**: Harmonizing import statements, exports, and interface definitions from both branches.
3. **Semantic Collision Detection**: Identifying code that merges cleanly with git text tools but introduces semantic runtime errors (e.g. caller uses old signature).
4. **Lockfile Reconstruction**: Never manually edit lockfile conflict markers; regenerate deterministically via package manager.
5. **Post-Resolution Verification**: Running typecheck and tests to prove the merge resolved correctly.

## Output Format

- **Conflict Intent Breakdown**: What both sides were attempting to do.
- **Resolved Code**: Complete, syntax-error-free unified code.
- **Lockfile Resolution Command**: Exact CLI command to cleanly rebuild lockfiles.

## Avoid

- Discarding legitimate changes from either branch without understanding why they were made.
- Leaving unresolved git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) in code.
