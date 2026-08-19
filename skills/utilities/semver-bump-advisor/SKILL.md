---
name: semver-bump-advisor
description: Analyzes git commits and breaking changes to determine exact semantic version increments (PATCH vs MINOR vs MAJOR).
---

## Purpose

Analyze git commit histories (Conventional Commits), API changes, and export diffs to determine the exact Semantic Versioning (SemVer 2.0.0) bump required (PATCH, MINOR, or MAJOR) with full rationale.

## When to Use

- Preparing a new library or package release (npm, PyPI, Crates.io, Go modules).
- Configuring automated release tools (semantic-release, changesets, release-please).
- Determining if a refactoring change introduced an accidental breaking change.

## What to Analyze

1. **MAJOR Bump Triggers**:
   - Renaming or removing exported functions/types/constants.
   - Changing argument order or making optional parameters required.
   - Bumping minimum runtime engine requirements (e.g. Node 16 $ightarrow$ 20).
2. **MINOR Bump Triggers**:
   - Adding new backwards-compatible exported functions, options, or endpoints.
   - Deprecating an existing feature without removing it.
3. **PATCH Bump Triggers**:
   - Backwards-compatible bug fixes and internal performance refactors.
   - Documentation and non-functional dependency updates.

## Output Format

- **Recommended Version**: e.g., `1.4.2` $ightarrow$ `2.0.0` (MAJOR).
- **SemVer Justification**: Point-by-point commit analysis mapping changes to SemVer rules.
- **Breaking Change Migration Guide**: If MAJOR, clear instructions for consumers to upgrade.

## Avoid

- Bumping MINOR or PATCH when an exported interface signature was altered.
- Releasing breaking changes under a PATCH release.
