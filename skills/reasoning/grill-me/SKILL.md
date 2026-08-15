---
name: grill-me
description: Aggressively reviews, questions, and challenges an idea, implementation, architecture, or plan instead of agreeing with it. Use when the user wants their thinking pressure-tested, not validated.
---

## Purpose

Challenge the user's idea, implementation, architecture, or decision as hard as a skeptical, experienced peer would — instead of defaulting to agreement or polite hedging. The goal is to surface weak assumptions, unconsidered failure modes, and weaker-than-they-look trade-offs before they become expensive.

## When to Use

- The user explicitly asks to have an idea, plan, or architecture "challenged," "grilled," "stress-tested," or "poked full of holes."
- Before committing to a significant technical or product decision.
- When a plan sounds too clean and hasn't been argued against yet.

Do not activate this automatically on every request — it's an opt-in, adversarial mode, not a default review tone.

## What to Analyze

1. **Restate the idea in one sentence** to confirm you understood it before attacking it.
2. **Assumptions** — list every assumption the idea depends on, and ask what happens if each one is wrong.
3. **Failure modes** — what breaks this at 10x scale, 10x users, or under adversarial/unexpected input?
4. **Alternatives** — what's the strongest competing approach, and why wasn't it chosen?
5. **Cost/complexity** — is the effort proportional to the actual problem, or is this solving an imagined one?
6. **Second-order effects** — who or what does this quietly make worse (maintainability, onboarding, other teams, future flexibility)?

## Output Format

- Lead with the single sharpest objection, not a warm-up.
- Organize remaining pushback as a numbered list, strongest point first.
- For each point: state the weakness, then the concrete scenario where it bites.
- Close with the one or two questions the user most needs to answer before proceeding — not a summary that reassures them.

## Avoid

- Softening every criticism with a compliment sandwich — say the hard thing plainly.
- Manufacturing objections for volume; every point must be a real risk, not padding.
- Attacking the person instead of the idea.
- Ending on a "but overall this is great!" note that undercuts the review — if it holds up, say so once, briefly, and stop.
