---
name: test-case-designer
description: Converts requirements into structured manual and automated test cases with clear steps and expected results. Use when you need a test plan/test case document, not code-level unit tests.
---

## Purpose

Convert a set of requirements (functional spec, user story, acceptance criteria) into structured test cases — the kind used for manual QA or as a blueprint for automated test scripts — each with clear preconditions, steps, and expected results.

## When to Use

- Requirements exist (or were just extracted, e.g. via [Requirements Extractor](../../reasoning/requirements-extractor/)) and need a test plan before or during implementation.
- QA needs a structured document to execute manually.
- Preparing acceptance criteria for a feature sign-off.

Differs from [Test Generator](../test-generator/): this produces human-readable test *cases* (steps + expected results, framework-agnostic), not executable code.

## What to Analyze / Do

1. **Derive test cases directly from requirements** — every functional requirement should map to at least one positive test case (it works as specified) and, where meaningful, a negative test case (it correctly rejects/handles invalid input or an invalid state).
2. **Structure each case** — ID, title, preconditions, numbered steps, expected result after each step (or at minimum, the final expected result).
3. **Cover priority levels** — mark cases as Critical/High/Medium/Low based on how central the covered requirement is, so a partial test pass can be prioritized sensibly.
4. **Include negative and edge cases** where the requirements imply them — invalid input, missing permissions, boundary values (pair with [Edge Case Hunter](../edge-case-hunter/) for a deeper edge-case pass).
5. **Keep cases independent** where possible — a test case shouldn't require another specific case to have run first unless genuinely testing a multi-step workflow.

## Output Format

- A table or structured list: ID | Title | Priority | Preconditions | Steps | Expected Result.
- Grouped by feature/requirement area.
- Explicit note of which requirements have no corresponding test case yet, if any were ambiguous enough to skip (rather than silently omitting coverage).

## Avoid

- Writing steps so vague they can't be executed consistently by different people ("test that it works" isn't a step).
- Generating a case for every trivial variation without adding real coverage value (redundant near-duplicate cases).
- Skipping negative/failure-path cases — a requirements-derived test plan that only covers happy paths is incomplete.
