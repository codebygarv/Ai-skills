# 📝 Log Message Improver

Logs that actually help you debug the incident, not just note it happened.

## What it does

Reviews logging statements for level appropriateness, structured vs. string-concatenated format, missing context (IDs needed to correlate logs), noise, and sensitive data — with sensitive-data logging flagged as highest priority.

## When to use it

- Logs are too sparse to debug from, or too noisy to find signal in.
- Adding logging to new code and want it done well from the start.
- Reviewing logging statements in a PR.

## Best for

- Pre-ship review of new logging statements
- Cleaning up noisy or under-informative existing logs
- Catching sensitive data accidentally being logged

## Example usage

> "Improve this logging" (paste code with log statements)

## Expected output

Findings grouped by issue type (Level Issues, Missing Context, Noise, Sensitive Data), each with the original statement and an improved version as real code — sensitive-data findings flagged as top priority.

## Limitations

- Recommendations assume a logging framework capability — checks what's actually available in the codebase rather than assuming a specific API.
- Won't recommend adding logging everywhere — focuses on genuinely under-logged critical paths, not blanket coverage.
