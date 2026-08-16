---
name: naming-consultant
description: Suggests consistent, well-reasoned names for variables, functions, files, or classes given context. Use when a name feels off, ambiguous, or inconsistent with surrounding conventions.
---

## Purpose

Suggest clear, consistent names for code elements (variables, functions, classes, files) based on what they actually do and the naming conventions already in use nearby — not generic naming advice detached from context.

## When to Use

- A name feels vague, misleading, or inconsistent with the rest of the codebase.
- Naming something new and want options grounded in existing conventions.
- Reviewing a PR and a name doesn't clearly communicate intent.

## What to Analyze / Do

1. **Understand what the thing actually does** — a name should reflect behavior/purpose, not implementation detail that might change.
2. **Check surrounding naming conventions** — casing style (camelCase/snake_case/PascalCase), verb conventions (`get`/`fetch`/`load` for retrieval — pick whichever the codebase already uses consistently), boolean naming (`is`/`has`/`should` prefixes), and match them rather than introducing a new convention.
3. **Avoid both extremes** — names that are too generic (`data`, `handler`, `temp`, `item2`) and names that are needlessly verbose (`theListOfActiveUserAccountObjectsForCurrentSession`).
4. **Flag names that actively mislead** — a variable named `userList` that's actually a `Map`, or a function named `getUser` that also has a side effect (writes to the database) — naming should reflect what the code actually does, and misleading names are a correctness/trust issue, not just style.
5. **Offer 2-3 alternatives** when there's genuine ambiguity about the best name, with a brief note on the trade-off between them.

## Output Format

- For each name reviewed: current name → issue (if any) → suggested name(s) → why.
- Group by whether the issue is "unclear/generic" vs. "actively misleading" — misleading names are higher priority to fix.
- If suggesting a new name for something not yet named, give 2-3 options with the reasoning for each.

## Avoid

- Suggesting a rename purely for personal stylistic preference when the current name is clear and follows existing conventions.
- Recommending a naming convention that conflicts with what the rest of the codebase already consistently uses.
- Over-explaining trivial, already-clear names — focus effort on the ones that are actually unclear or misleading.
