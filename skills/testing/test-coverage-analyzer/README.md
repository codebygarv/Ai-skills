# 🔬 Test Coverage Analyzer

Find the gaps that matter, not the percentage.

## What it does

Identifies untested *behaviors* risk-ranked by consequence — and flags existing tests that create false confidence (tautological assertions, over-mocking) because those are more dangerous than a known gap.

## When to use it

- Deciding where to invest limited testing effort next.
- Coverage looks fine but bugs keep escaping to production.
- Before modifying risky code, to see what's actually protecting it.

## Best for

- Prioritizing which tests to write next
- Auditing a suite that has high coverage but low confidence
- Pre-refactor safety assessment

## Example usage

> "Analyze the test coverage gaps here" (paste code plus its existing tests)

## Expected output

A risk-ranked gap list (what's untested, the concrete failure it allows, the test that closes it), a separate false-confidence section, and an explicit low-priority list.

## Limitations

- Analyzes the code and tests provided — it reasons about behavior coverage, it doesn't execute a coverage tool or produce line-coverage metrics.
- Decides *what* to test; use [Test Generator](../test-generator/) to actually write the tests, and [Edge Case Hunter](../edge-case-hunter/) to enumerate boundary cases.
