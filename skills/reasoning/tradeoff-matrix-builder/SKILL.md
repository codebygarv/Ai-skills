---
name: tradeoff-matrix-builder
description: Constructs weighted, multi-attribute decision matrices evaluating technical, architectural, or library choices.
---

## Purpose

Quantify and structure complex technical evaluations by comparing alternatives against explicit, weighted decision criteria with rationale.

## When to Use

- Choosing between frameworks, databases, libraries, or architectural patterns.
- Resolving engineering stalemates on technology selection.
- Providing objective justification for RFCs and executive presentations.

## What to Analyze

1. **Candidate Options**: 2 to 4 viable technical contenders.
2. **Evaluation Dimensions**: Performance, developer experience, maintenance cost, ecosystem maturity, learning curve, vendor lock-in.
3. **Weighting**: Importance score (1-5) per criterion based on project priorities.
4. **Scoring & Justification**: Objective score (1-5) per candidate on each dimension with concrete rationale.
5. **Sensitivity Analysis**: Which criterion flipping would change the decision?

## Output Format

- **Decision Summary**: The recommended winner and one-line core thesis.
- **Weighted Matrix (Markdown Table)**: Options, Weights, Scores, and Total Weighted Score.
- **Criterion-by-Criterion Justification**: Detailed rationale per cell.
- **Risk & Mitigation for Winner**: What gotchas come with the winning choice.

## Avoid

- Arbitrary numbers without stated rationale.
- Biased weighting designed to force a pre-determined favorite.
