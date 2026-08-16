# 🔤 Regex Explainer

Regex to English, and English to regex.

## What it does

Explains what an existing regex actually matches (component by component, plus edge cases), or builds a regex from a plain-English description — always with concrete matching/non-matching examples, never just an unverified pattern.

## When to use it

- A regex in code isn't self-explanatory and needs understanding before you touch it.
- You know what you want to match but not the syntax for it.
- Reviewing whether a regex actually does what its name/comment claims.

## Best for

- Understanding an unfamiliar/legacy regex before modifying it
- Building a validation pattern from a plain description
- Catching regex edge cases (partial matches, missing anchors) before they cause bugs

## Example usage

> "Explain this regex: `^(?=.*[A-Z])(?=.*\d).{8,}$`" or "Build a regex that matches US phone numbers in the format (555) 123-4567"

## Expected output

For explaining: a component breakdown, plain-English summary, and any caught edge cases. For building: the regex, an explanation, and example matching/non-matching strings.

## Limitations

- Regex behavior varies by engine (PCRE/JavaScript/POSIX/etc.) — always states which flavor it's assuming; verify against your actual runtime if it matters.
- Won't add validation depth (e.g. full email RFC compliance) beyond what was actually asked for — matches the stated need, not a maximal version.
