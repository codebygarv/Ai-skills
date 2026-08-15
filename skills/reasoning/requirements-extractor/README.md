# 📋 Requirements Extractor

Turn vague asks into requirements you can actually build against.

## What it does

Converts an informal or underspecified request into explicit, testable functional and technical requirements, plus a ranked list of the open questions that need answers before implementation.

## When to use it

- A ticket or feature request is too vague to start building from.
- You want to confirm scope with a stakeholder before writing code.
- Different people on the team have different assumptions about what a request includes.

## Best for

- Turning a one-line feature request into a spec
- Pre-implementation scope confirmation
- Surfacing hidden non-functional requirements (perf, security, accessibility) that weren't stated but are clearly implied

## Example usage

> "Extract requirements from this: 'Add user profiles so people can customize their account.'"

## Expected output

A numbered list of functional requirements, a numbered list of technical/non-functional requirements, an out-of-scope list where inferable, and a ranked list of open questions.

## Limitations

- Doesn't make product decisions on the team's behalf — genuinely ambiguous points go to the open-questions list, not a guessed answer.
- Quality depends on the domain context available; obviously-implied non-functional requirements (e.g. "must support screen readers" for a public-facing form) still need domain judgment to catch.
