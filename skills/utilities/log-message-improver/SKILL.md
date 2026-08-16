---
name: log-message-improver
description: Improves logging statements for observability - structured logging, appropriate log levels, and useful context. Use when logs are too sparse, too noisy, or missing the context needed to debug an incident from them alone.
---

## Purpose

Improve logging statements so they're actually useful during an incident or investigation — the right level, structured (not just string concatenation), and carrying the context a future reader will need without access to the original author's memory of what was happening.

## When to Use

- Logs are too sparse to debug an issue from, or too noisy to find the signal.
- Adding logging to new code and want it done well from the start.
- Reviewing logging statements in a PR.

## What to Analyze

1. **Log level appropriateness** — is this actually an error (something broke) or just unusual-but-expected (should be warn/info)? Overuse of `error` for expected conditions trains people to ignore error-level alerts.
2. **Structured vs. string-concatenated** — `log.info(\`User ${id} did ${action}\`)` is harder to query/filter than `log.info('user_action', { userId: id, action })` — prefer structured fields where the logging framework supports it.
3. **Missing context** — does the log include enough identifying information (request ID, user ID, relevant entity IDs) to correlate it with other logs from the same request/flow during an investigation?
4. **Missing "why," not just "what"** — `log.warn('retrying')` is less useful than `log.warn('retrying', { attempt: 2, reason: 'timeout', nextRetryMs: 500 })`.
5. **Noise** — logging inside a hot loop at info/debug level that will flood logs without adding investigative value; logging the same event redundantly at multiple layers.
6. **Sensitive data in logs** — flag any logging of passwords, tokens, full credit card numbers, or other sensitive data that shouldn't be persisted in log storage.

## Output Format

- Each finding: the log statement, what's wrong (level/structure/context/noise/sensitive-data), and the improved version as actual code.
- Group by issue type if reviewing many at once (Level Issues, Missing Context, Noise, Sensitive Data).
- Flag sensitive-data logging as highest priority regardless of other issues.

## Avoid

- Recommending logging be added everywhere indiscriminately — more logs isn't the goal, useful logs are; flag genuinely under-logged critical paths, not every line.
- Assuming a specific logging framework's API without checking what's actually in use in the codebase.
- Suggesting structured logging changes that aren't supported by the project's actual logging setup — check what's available first.
