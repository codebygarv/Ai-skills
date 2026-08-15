# ✍️ UI Text Formatter

Clean up the small copy details that make an interface feel polished.

## What it does

Reviews UI text — labels, headings, buttons, messages, empty states — for capitalization and punctuation consistency, action-text clarity, message tone, and terminology consistency, presented as concrete before/after fixes.

## When to use it

- Reviewing user-facing strings before shipping a new screen or feature.
- The interface mixes capitalization styles inconsistently.
- Cleaning up error/empty-state messages that were never revisited after being written quickly.

## Best for

- Pre-ship copy review of new screens
- App-wide capitalization/terminology consistency passes
- Rewriting vague error messages into actionable ones

## Example usage

> "Clean up this UI text" (paste the labels/headings/messages in question)

## Expected output

A before/after table grouped by category (Capitalization, Punctuation, Clarity, Terminology), with app-wide patterns flagged separately from one-off fixes.

## Limitations

- Doesn't do full localization/i18n review — flags English-language copy issues, not translation quality.
- Respects existing brand voice/terminology where it's deliberate — won't override intentional stylistic choices without flagging them as a question first.
