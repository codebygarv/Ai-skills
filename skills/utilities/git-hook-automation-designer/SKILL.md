---
name: git-hook-automation-designer
description: Configures pre-commit and pre-push hooks (Husky, Lefthook) for fast lint-staged, branch naming, and secret blocking.
---

## Purpose

Design fast, unobtrusive client-side Git hooks using Husky, Lefthook, or pre-commit to automatically run lint-staged formatting, branch naming enforcement, secret detection, and commit message linting before code leaves the developer's machine.

## When to Use

- Preventing broken code, unformatted files, and accidental secret keys from being pushed to GitHub.
- Standardizing Conventional Commits across team members (`commitlint`).
- Accelerating local feedback so CI doesn't fail on trivial formatting mistakes.

## What to Analyze

1. **Hook Framework Selection**: Lefthook (super-fast parallel execution in Go/binary) vs Husky + lint-staged (standard Node ecosystem).
2. **Pre-Commit Scope**: Run linters and formatters strictly on *staged* files (`lint-staged`) to keep hook execution under 2 seconds.
3. **Commit-Msg Validation**: Enforce Conventional Commits (`feat:`, `fix:`, `chore:`) via `commitlint`.
4. **Pre-Push Gate**: Fast typechecking (`tsc --noEmit`) and unit testing before network push.
5. **Secret Blocking**: Lightweight regex check scanning staged diffs for AWS keys, private keys, and `.env` credentials.

## Output Format

- **Hook Configuration Files**: `lefthook.yml` or `.husky/` scripts + `.lintstagedrc.json`.
- **Commitlint Config**: `commitlint.config.js` with allowed types and scopes.
- **Fast Bypass Documentation**: Instructions for emergency bypass (`--no-verify`).

## Avoid

- Running 10-minute full end-to-end test suites on every git commit (developers will just bypass with `-n`).
- Formatting files across the whole repo on commit instead of staged files only.
