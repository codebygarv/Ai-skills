# ⏰ Cron Expression Translator

Cron syntax to plain English, and back — with the gotchas flagged.

## What it does

Translates cron expressions into plain English (or builds one from a plain-English schedule), always flagging timezone ambiguity and the day-of-month/day-of-week OR-not-AND gotcha, with example next-run times to verify against.

## When to use it

- A cron expression in code/config/CI needs understanding before you trust or modify it.
- You know when something should run but not the cron syntax for it.
- Reviewing a scheduled job for correctness.

## Best for

- Understanding unfamiliar cron schedules in CI/deploy configs
- Building a correct cron expression without trial-and-error
- Catching the classic timezone and day-field gotchas before they cause a scheduling bug

## Example usage

> "What does this cron mean: `0 */6 * * 1-5`" or "Build a cron expression for every weekday at 9:30am"

## Expected output

For explaining: field breakdown, plain-English summary, and any gotchas. For building: the expression, a plain-English restatement, and 2-3 example next-run times — timezone assumption always stated explicitly.

## Limitations

- Cron itself has no built-in timezone — the actual run time depends on the system/scheduler's configured timezone, which this skill can't know unless told; always verify against your actual scheduler's config.
- Some schedulers (e.g. some CI platforms) use slightly non-standard cron dialects — flags standard 5-field cron behavior, note if your platform differs.
