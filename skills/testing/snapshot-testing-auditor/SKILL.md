---
name: snapshot-testing-auditor
description: Audits brittle UI and JSON snapshot tests to eliminate false alarm failures and replace them with resilient semantic assertions.
---

## Purpose

Audit test suites for brittle, oversized snapshot tests (Jest/Vitest `toMatchSnapshot()`) that create false alarms during trivial styling updates, blind `-u` approval habits, and slow CI runs, replacing them with precise semantic assertions.

## When to Use

- Developers routinely run `jest -u` without reading git diffs because snapshots break on every commit.
- Huge 500-line JSON/HTML snapshots stored in repository bloating git history.
- Distinguishing when inline snapshot testing is valuable vs when it provides illusory test coverage.

## What to Analyze

1. **Snapshot Granularity**: Giant DOM tree snapshots vs targeted component state / schema snapshots.
2. **Volatile Data**: Dynamic dates, random UUIDs, or counter variables causing non-deterministic snapshot diffs.
3. **Assertion Intent**: Is the snapshot verifying business logic or just blindly serializing HTML structure?
4. **Blind Update Risk**: Identifying snapshots that were updated post-hoc without verifying correctness.
5. **Alternative Semantic Assertions**: Converting DOM snapshots to accessible role/text assertions.

## Output Format

- **Brittle Snapshot Audit Report**: Categorized list of anti-pattern snapshots.
- **Refactored Test Snippets**: Resilient semantic unit tests using `@testing-library`.
- **Snapshot Policy Guidelines**: Concrete rules for when snapshots are permitted.

## Avoid

- Taking snapshots of 1,000-line component trees with all nested child dependencies rendered.
- Snapshotting generated timestamps without mocking system clocks.
