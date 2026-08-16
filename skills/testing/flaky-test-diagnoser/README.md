# 🎲 Flaky Test Diagnoser

Fix the nondeterminism, not the symptom.

## What it does

Diagnoses why a test fails intermittently — timing assumptions, shared state, order dependence, external dependencies, nondeterministic data, or resource contention — and gives a concrete fix plus a way to reproduce the flake deliberately so you can verify the fix worked.

## When to use it

- A test passes locally but fails in CI, or fails one run in ten.
- Tests fail when run in a different order or in parallel.
- Your team has started auto-retrying or ignoring certain tests.

## Best for

- Debugging intermittent CI failures
- Tests that break when the runner randomizes order or shards across workers
- Cleaning up a suite people have stopped trusting

## Example usage

> "This test fails about 1 in 10 CI runs but never locally" (paste the test and relevant code)

## Expected output

The most likely cause with supporting evidence, why it manifests intermittently, a concrete fix, and a method to reproduce the flake on demand to confirm the fix.

## Limitations

- Won't recommend retry wrappers as a primary fix — those hide flakes and can mask real race conditions that exist in production code too.
- Diagnosis quality depends on the information given; if the test alone is inconclusive, it will say what else is needed (failure logs, run order, parallel or serial) rather than guess.
