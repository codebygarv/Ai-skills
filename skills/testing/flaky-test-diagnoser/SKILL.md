---
name: flaky-test-diagnoser
description: Diagnoses why a test passes sometimes and fails others - timing, shared state, ordering dependence, or external dependencies - and proposes a fix. Use when a test fails intermittently.
---

## Purpose

Find the actual cause of an intermittently-failing test and fix it properly, rather than reaching for a retry wrapper that hides the flake while leaving the underlying nondeterminism in place.

## When to Use

- A test passes locally but fails in CI, or fails maybe one run in ten.
- Tests fail when run in a different order, in parallel, or on a slower machine.
- A team has started ignoring or auto-retrying certain tests.

## What to Analyze

1. **Timing and async assumptions** — fixed `sleep`/timeout waits instead of waiting for the actual condition; assertions that race an unawaited promise; anything that passes on a fast machine and fails on a loaded CI runner.
2. **Shared mutable state** — module-level variables, singletons, or a database not reset between tests, so a test's outcome depends on what ran before it.
3. **Test-order dependence** — a test that only passes when run after another that happens to set up its state. Surfaces when a runner randomizes order or shards across workers.
4. **External dependencies** — real network calls, live third-party APIs, or system clock/timezone dependence. Anything the test doesn't control can fail independently of the code.
5. **Nondeterministic data** — random values, `Date.now()`, unstable ordering from a `Set`/`Map`/database query without an explicit `ORDER BY`, or locale-dependent formatting.
6. **Resource contention** — parallel tests competing for the same port, file, temp directory, or database row.

## Output Format

- **Most likely cause** — named specifically, with the evidence from the test/code that points to it.
- **Why it manifests intermittently** — the specific condition (slow machine, particular ordering, parallel execution) that makes it fail rather than pass.
- **Fix** — as concrete code, addressing the root nondeterminism.
- **How to confirm** — how to reproduce the flake deliberately (run in a loop, force a specific order, add artificial delay) so the fix is verifiable rather than assumed.

## Avoid

- Recommending a retry/rerun wrapper as the primary fix — that suppresses the symptom and can mask a real race condition that also exists in production code.
- Increasing a timeout as a default fix; that's only correct when the timeout is genuinely too tight, not when the test should be waiting on a condition instead of a duration.
- Declaring a cause without evidence — if the given information is insufficient, say what additional information (failure logs, run order, whether it's parallel) would identify it.
