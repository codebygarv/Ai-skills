---
name: test-generator
description: Creates meaningful unit, integration, and component tests based on implementation and requirements. Use when code needs test coverage and you want tests that verify behavior, not just tests that pad a coverage number.
---

## Purpose

Generate tests that actually verify behavior — correctness under normal input, boundary conditions, and failure modes — rather than tests that exist only to move a coverage percentage.

## When to Use

- Code has no tests, or existing tests don't cover the behavior that matters.
- Before refactoring, to lock in current behavior first.
- The user asks for tests for a specific function/module/component.

## What to Analyze / Do

1. **Understand actual behavior** — read the implementation (not just the function name/docstring) to know what it really does, including edge cases it may or may not handle.
2. **Cover the happy path** — normal, expected input produces the expected output.
3. **Cover boundary conditions** — empty input, zero, single-element, max-size, exactly-at-a-threshold.
4. **Cover failure modes** — invalid input, missing dependencies/data, error paths — verify the function fails the way it's supposed to (throws, returns an error value, etc.), not just that it doesn't crash unpredictably.
5. **Cover integration points** if relevant — mocked dependencies behave as expected, and the unit under test handles both success and failure responses from them.
6. **One behavior per test** — each test should have a clear, singular reason to fail; avoid mega-tests asserting many unrelated things.

## Output Format

- Tests in the project's actual testing framework/convention (ask or infer from existing test files — don't assume Jest if the project uses Vitest, etc.).
- Descriptive test names that state the behavior being verified ("returns empty array when input is empty," not "test 1").
- Grouped logically (`describe` blocks or equivalent) by function/scenario.
- A brief note on what's intentionally *not* covered and why, if anything significant was left out (e.g. requires a live network call, out of scope for unit tests).

## Avoid

- Writing tests that just re-assert the implementation's own logic back at it (a test that would still pass if a bug were introduced isn't testing anything).
- Testing implementation details that aren't part of the actual contract (internal variable names, private helper call counts) instead of observable behavior.
- Generating tests purely to inflate a coverage number without verifying real behavior.
