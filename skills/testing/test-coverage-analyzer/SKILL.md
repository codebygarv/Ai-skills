---
name: test-coverage-analyzer
description: Identifies which behaviors are meaningfully untested and risk-ranks the gaps, rather than reporting line-coverage percentage. Use when deciding where to add tests next.
---

## Purpose

Find the testing gaps that actually matter — untested *behaviors* weighted by risk — instead of chasing a line-coverage percentage that can be high while the important paths remain unverified.

## When to Use

- Deciding where to invest limited testing effort next.
- Coverage numbers look acceptable but bugs keep escaping to production.
- Before modifying risky code, to find out what's currently protecting it (and what isn't).

Differs from [Test Generator](../test-generator/): that writes tests; this decides *which* tests are worth writing first.

## What to Analyze

1. **Untested behaviors, not untested lines** — a line executed by a test that asserts nothing is covered on paper and untested in reality. Look for assertions, not execution.
2. **Risk-weight each gap** — an untested path handling money, auth, data deletion, or external input matters far more than an untested display formatter. Rank accordingly.
3. **Error and failure paths** — these are the most commonly untested and the most likely to be wrong, precisely because they're rarely exercised manually.
4. **Boundary and edge conditions** — even where a happy path is tested, check whether empty/zero/max/null cases are (pair with [Edge Case Hunter](../edge-case-hunter/) to enumerate them).
5. **Tests that would pass even if the code broke** — tautological assertions, over-mocked tests that only verify the mock, snapshot tests nobody reviews. These create false confidence, which is worse than a known gap.
6. **Change frequency** — frequently-modified code benefits more from tests than stable code that hasn't changed in two years.

## Output Format

- **Risk-ranked gap list** — each with: what's untested, why it matters (the concrete failure it would allow), and the test that would close it.
- **False-confidence findings** — existing tests that don't actually verify what they appear to, called out separately since they're more dangerous than plain gaps.
- **Deliberately low priority** — areas not worth testing heavily right now, and why.

## Avoid

- Reporting or recommending a coverage percentage target as the goal — high coverage with weak assertions is a common and misleading outcome.
- Treating all uncovered code as equally important.
- Recommending tests for stable, low-risk code just to raise a number.
