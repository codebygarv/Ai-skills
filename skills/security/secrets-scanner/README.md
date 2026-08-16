# 🔑 Secrets Scanner

Find the credentials that shouldn't be in your code.

## What it does

Narrowly scans code and config for hardcoded secrets — API keys, passwords, tokens, private keys, credential-embedded connection strings — with every finding redacted in the output and flagged by real-vs-placeholder severity.

## When to use it

- Before a commit/PR, especially after pasting example code or config from elsewhere.
- Auditing a codebase for leaked secrets before making a repo public.
- You specifically want secrets checked, not a full security review.

## Best for

- Pre-commit/pre-PR secret checks
- Pre-open-sourcing audits
- Narrowing in on credential leaks specifically, faster than a full security review

## Example usage

> "Scan this for hardcoded secrets" (paste code or config)

## Expected output

Findings with file/line, the suspected secret type, a redacted value, and the fix — Critical for real-looking credentials, Low for obvious placeholders, with a rotation note if it looks like it may already be committed to git history.

## Limitations

- Pattern-based — can miss secrets that don't match common credential formats, and can't verify whether a found credential is still active.
- For broader vulnerability review beyond secrets specifically, use [Security Auditor](../../development/security-auditor/).
- Doesn't rewrite git history itself — flags when that's needed, doesn't perform it.
