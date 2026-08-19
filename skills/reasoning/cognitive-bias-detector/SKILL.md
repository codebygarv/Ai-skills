---
name: cognitive-bias-detector
description: Audits design documents, sprint estimates, and technical debates for cognitive biases like anchoring, sunk cost, and optimistic scoping.
---

## Purpose

Detect and correct human cognitive distortions in engineering planning, architectural choices, and project roadmaps to avoid predictable traps.

## When to Use

- Reviewing sprint estimates or project milestone plans.
- When a team insists on maintaining an obsolete custom system (sunk cost).
- When a design heavily mirrors the author's previous company stack (availability bias / law of the instrument).

## What to Analyze

1. **Sunk Cost Fallacy**: Continuing an unviable strategy because of prior invested hours.
2. **Planning Fallacy & Optimism Bias**: Assuming perfect zero-defect execution with no buffer.
3. **Law of the Instrument (Maslow's Hammer)**: Forcing a familiar tool onto a mismatched problem.
4. **Anchoring**: Sticking to an initial off-the-cuff estimate or early architectural idea.
5. **Confirmation Bias**: Highlighting only benchmarks that flatter the preferred tool.

## Output Format

- **Identified Biases**: Name, trigger quote/claim, and underlying fallacy.
- **Risk Assessment**: How this bias distorts delivery date, stability, or budget.
- **Corrective Re-framing**: Unbiased re-evaluation questions.

## Avoid

- Accusatory or personal attacks.
- Dismissing valid domain experience as bias.
