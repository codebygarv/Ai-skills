# 🐛 Bug Hunter

Find what's actually broken, not what's ugly.

## What it does

Hunts specifically for defects: boundary conditions, null/undefined handling, race conditions, off-by-ones, and incorrect assumptions — each finding paired with a concrete triggering scenario, not a vague hunch.

## When to use it

- You specifically want bugs found, not a style or architecture review.
- Before shipping code touching money, user data, or concurrency.
- You suspect a bug exists somewhere but haven't located it yet.

## Best for

- Pre-ship review of risky code paths
- Debugging sessions where the bug hasn't been located yet
- Code handling concurrency, money, or user-submitted data

## Example usage

> "Bug hunt this function" (paste code)

## Expected output

A list of concrete bugs, each with the file/line, the exact input or timing that triggers it, actual vs. expected behavior, and a suggested fix — ordered by severity.

## Limitations

- Focused purely on defects — pair with [Code Reviewer](../code-reviewer/) for style/maintainability feedback.
- Static analysis only — can surface likely bugs but can't guarantee a fix compiles/passes tests without running it.
