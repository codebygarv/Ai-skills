# 🎯 Decision Maker

Compare real options, get a real recommendation.

## What it does

Takes a shortlist of candidate solutions, scores them against explicit criteria, and produces one clear recommendation with justification — instead of a noncommittal pros/cons list.

## When to use it

- You've narrowed a choice down to a few real options with genuine trade-offs.
- You need a documented rationale to share with a team or put in a design doc.
- You want the recommendation to name what would change it.

## Best for

- Tech stack / library choices
- Build vs. buy decisions
- Architecture options with different trade-off profiles
- Any decision that needs a written rationale (ADRs)

## Example usage

> "Help me decide: Postgres with JSONB vs. a dedicated document DB for our new product catalog service."

## Expected output

Explicit criteria (weighted if relevant), a per-option scoring breakdown, a single recommendation tied to those criteria, and the conditions under which the recommendation would flip.

## Limitations

- Only as good as the criteria it's given or can reasonably infer — vague requests get a request for clarifying criteria rather than a guess.
- Doesn't replace domain expertise on highly specialized decisions (e.g. regulatory/legal trade-offs) — flag those explicitly rather than scoring them silently.
