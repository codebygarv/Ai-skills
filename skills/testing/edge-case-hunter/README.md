# 🕵️ Edge Case Hunter

Find the cases a normal test pass would skip.

## What it does

Enumerates plausible edge cases for a feature — boundary values, empty/missing states, unexpected user behavior, unusual-but-valid input, concurrency, and degraded conditions — each with why it matters and what should happen.

## When to use it

- Before shipping something that handles user input or external data.
- After writing normal-case tests, to find what's still missing.
- You want edge cases enumerated specifically, not a general bug hunt.

## Best for

- Pre-ship edge-case checklist for a new feature
- Filling gaps after normal-case testing is done
- Thinking through concurrency and degraded-network scenarios before they happen in production

## Example usage

> "Find edge cases for this feature: a form that lets users transfer money between their own accounts."

## Expected output

A checklist grouped by category, each item stating the specific case, why it's plausible for this feature, and what currently happens or should happen.

## Limitations

- Cases are reasoned about, not exhaustively derived from a formal spec — for safety-critical systems, pair with formal methods/domain expert review.
- Pair with [Bug Hunter](../../development/bug-hunter/) to check whether existing code actually handles the cases this skill surfaces.
