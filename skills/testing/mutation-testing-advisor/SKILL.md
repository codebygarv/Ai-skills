---
name: mutation-testing-advisor
description: Analyzes test suites to identify surviving mutants, weak assertions, and false confidence in line coverage.
---

## Purpose

Evaluate the true fault-detection capability of a test suite by simulating code mutations (inverting conditionals, altering arithmetic, removing function calls) and highlighting tests that pass despite broken logic.

## When to Use

- A codebase has 90%+ line coverage but bugs still regularly slip into production.
- Reviewing unit tests that assert on execution without verifying state changes.
- Setting up Stryker or Mutmut mutation testing in critical packages.

## What to Analyze

1. **Mutant Categories**:
   - Conditional Boundary Mutations (`>` swapped for `>=`).
   - Inverted Logic (`if (isValid)` swapped for `if (!isValid)`).
   - Return Value Mutations (returning `null` or `undefined`).
   - Statement Deletions (removing side-effect calls).
2. **Surviving Mutants**: Why didn't any test fail when this line was corrupted?
3. **Weak Assertion Diagnosis**: Identifying tests with no `expect()` or vague assertions (e.g. `expect(res).toBeDefined()`).
4. **Targeted Assertion Improvements**: Writing specific assertions that kill surviving mutants.

## Output Format

- **Mutation Score Assessment**: High-risk areas of false test confidence.
- **Surviving Mutant Table**: [File | Mutation | Why Test Passed | Fix].
- **Hardened Test Code**: Rewritten unit tests with strict state and error assertions.

## Avoid

- Chasing 100% line coverage while leaving assertions superficial.
- Testing mock implementation details instead of real behavior.
