---
name: regex-explainer
description: Explains what a regular expression does in plain English, or builds one from a plain-English description. Use when a regex is unreadable at a glance, or when you know what you want to match but not the regex syntax for it.
---

## Purpose

Bridge between regex syntax and plain English in both directions: explain what an existing regex actually matches, or construct a regex from a plain-English description of what should match.

## When to Use

- Encountering a regex in code that isn't self-explanatory and needs understanding before modifying it safely.
- Knowing what you want to match/validate but not confident in the regex syntax to express it.
- Reviewing a regex for correctness (does it actually match what its comment/name claims?).

## What to Analyze / Do

**Explaining a regex:**
1. Break it into its logical components (groups, character classes, quantifiers, anchors).
2. Explain each component's role, then synthesize into a plain-English description of what the whole pattern matches.
3. Note any surprising edge cases the pattern might catch or miss (e.g. an email regex that doesn't handle `+` addressing, or a "digits only" pattern that doesn't anchor and would partially match non-digit strings).

**Building a regex:**
1. Clarify the exact matching requirement, including edge cases (should it match partial strings or the whole string, is it case-sensitive, does it need to handle unicode).
2. Construct the regex, favoring readability (named groups, comments via verbose mode if the language supports it) over cleverness/brevity.
3. Provide 2-3 example strings that should match and 2-3 that shouldn't, so the regex's boundaries are concrete, not just described.

## Output Format

- **Explaining:** a component-by-component breakdown, then a one-paragraph plain-English summary, then any caught edge cases.
- **Building:** the regex itself, a plain-English explanation of it, and matching/non-matching examples.
- Always specify which regex flavor/engine assumptions apply (PCRE, JavaScript, POSIX, etc.) since syntax and behavior differ between them.

## Avoid

- Providing a regex without example strings demonstrating it — an unverified-by-example regex is a common source of silent bugs.
- Assuming a specific regex flavor without stating the assumption, since features like lookbehind vary by engine/language version.
- Over-engineering a regex for edge cases the user didn't ask about (e.g. full RFC 5322 email validation when a simple sanity check was requested) — match the actual stated need.
