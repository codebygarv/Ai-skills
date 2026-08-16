# 🏷️ Naming Consultant

Names that reflect what the code actually does.

## What it does

Suggests clear, consistent names for variables/functions/classes/files, grounded in what the code actually does and the naming conventions already used nearby — and flags names that are actively misleading, not just unclear.

## When to use it

- A name feels vague, misleading, or inconsistent with the rest of the codebase.
- Naming something new and want options grounded in existing conventions.
- Reviewing a PR and a name doesn't clearly communicate intent.

## Best for

- Renaming unclear or misleading variables/functions
- Naming new code elements consistently with existing conventions
- Catching names that actively lie about behavior (e.g. a "getter" with side effects)

## Example usage

> "Suggest better names for these" (paste code with unclear naming, or describe what needs naming)

## Expected output

Current name → issue → suggested name(s) → why, grouped by unclear/generic vs. actively misleading (higher priority) — with 2-3 options and trade-offs when naming something new.

## Limitations

- Won't suggest a rename that conflicts with an established, consistent convention already in use — matches existing patterns rather than imposing new ones.
- Doesn't rename call sites/references itself — flags what to rename, doesn't perform the refactor.
