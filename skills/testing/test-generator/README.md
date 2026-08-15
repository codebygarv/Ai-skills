# 🧪 Test Generator

Tests that verify real behavior, not just coverage numbers.

## What it does

Generates unit/integration/component tests covering the happy path, boundary conditions, and failure modes — using the project's actual test framework and convention, with descriptive names and one behavior asserted per test.

## When to use it

- Code has no tests, or existing ones don't cover what matters.
- Before refactoring, to lock in current behavior first.
- You want tests for a specific function, module, or component.

## Best for

- Adding coverage to untested code
- Pre-refactor safety net tests
- Filling gaps in boundary/failure-mode coverage

## Example usage

> "Write tests for this function" (paste function + point to the project's test framework/conventions if not obvious)

## Expected output

Tests in the project's real framework, grouped logically, with descriptive names, covering happy path + boundaries + failure modes, plus a note on anything intentionally left uncovered.

## Limitations

- Needs to know the actual implementation to test real behavior, not assumed behavior — works from provided code, not specs alone.
- Doesn't run the tests itself to confirm they pass — verify by actually running the suite after generation.
