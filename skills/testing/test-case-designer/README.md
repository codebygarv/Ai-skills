# 📋 Test Case Designer

Turn requirements into an executable test plan.

## What it does

Converts requirements/acceptance criteria into structured manual test cases — ID, title, priority, preconditions, steps, and expected results — covering both positive and negative paths per requirement.

## When to use it

- Requirements exist and need a test plan before or during implementation.
- QA needs a structured document to execute manually.
- Preparing acceptance criteria for feature sign-off.

## Best for

- QA test plans derived from requirements/user stories
- Acceptance criteria documentation
- Structuring manual regression test suites

## Example usage

> "Design test cases for this requirement: users can reset their password via a link emailed to them, valid for 1 hour."

## Expected output

A structured table of test cases (ID, Title, Priority, Preconditions, Steps, Expected Result) grouped by requirement area, covering positive and negative paths, with any skipped/ambiguous requirements flagged explicitly.

## Limitations

- Produces human-readable test cases, not executable code — for that, see [Test Generator](../test-generator/).
- Pair with [Edge Case Hunter](../edge-case-hunter/) for a deeper pass on unusual/boundary scenarios beyond what's directly implied by the stated requirements.
