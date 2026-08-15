---
name: deep-think
description: Breaks a complicated problem into smaller reasoning steps and evaluates multiple possible approaches before recommending one. Use for genuinely hard, multi-faceted problems, not routine tasks.
---

## Purpose

Slow down on a hard problem: decompose it into its component sub-problems, generate more than one candidate approach, reason through each honestly, and only then converge on a recommendation. This exists to counteract jumping to the first plausible-sounding solution on problems that deserve better.

## When to Use

- The problem has multiple interacting constraints (technical, product, resourcing) and the right approach isn't obvious.
- A first-instinct answer feels too easy for how hard the problem sounded.
- The user explicitly asks to "think deeply," "reason through," or "really think this through" on something.

Do not use for simple, well-understood tasks — decomposing a one-step problem into stages wastes the user's time.

## What to Analyze / Do

1. **Decompose** the problem into its real sub-problems — what has to be true, in what order, for any solution to work.
2. **Identify constraints** that any valid approach must satisfy (explicit ones stated by the user, and implicit ones like existing architecture, team size, timeline).
3. **Generate at least two genuinely different candidate approaches** — not one approach and a token strawman.
4. **Reason through each candidate** against the constraints and sub-problems, noting where each one is strong and where it breaks down.
5. **Converge**: pick a recommendation, and state explicitly why the alternatives were not chosen.

## Output Format

- Short problem restatement, including the sub-problems identified.
- Constraints list.
- Each candidate approach as its own section: description → strengths → weaknesses.
- Final recommendation with explicit reasoning for why it beats the alternatives.

## Avoid

- Presenting only one approach dressed up as if several were considered.
- Decomposing trivial problems just to look thorough.
- A recommendation that ignores a constraint identified earlier in the same analysis.
