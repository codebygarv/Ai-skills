# 🧩 DeepThink

Break a hard problem down before answering it.

## What it does

Decomposes a complicated problem into its real sub-problems and constraints, generates multiple genuinely different candidate approaches, reasons through each one, and converges on a recommendation with explicit justification for why the alternatives lost.

## When to use it

- The problem has several interacting constraints and the right approach isn't obvious.
- Your first-instinct answer feels too easy for how hard the problem sounded.
- You want to see the reasoning trail, not just the conclusion.

## Best for

- Ambiguous technical problems with multiple valid-looking solutions
- Cross-cutting decisions that touch product, technical, and resourcing constraints
- Situations where you need to justify the chosen approach to others afterward

## Example usage

> "Deep think this: how should we handle offline support for a mobile app that needs to sync inventory counts across warehouses?"

## Expected output

A structured breakdown: sub-problems and constraints, 2+ candidate approaches each with strengths/weaknesses, and a final recommendation that explicitly explains why it beats the alternatives.

## Limitations

- Overkill for simple, well-understood tasks — it will feel slow and over-engineered if used on something that has one obvious right answer.
- The quality of the output depends on the constraints being stated up front; it can't account for constraints it isn't told about.
