---
name: secrets-scanner
description: Narrowly scans code and config for hardcoded secrets, credentials, API keys, and tokens. Use before a commit/PR, or when auditing a codebase for accidentally-committed secrets.
---

## Purpose

Find hardcoded secrets — API keys, passwords, tokens, private keys, connection strings with embedded credentials — sitting in code or config where they shouldn't be. Narrow and mechanical by design, unlike [Security Auditor](../../development/security-auditor/)'s broader vulnerability sweep.

## When to Use

- Before committing/opening a PR, especially after copy-pasting example code or config from elsewhere.
- Auditing an existing codebase for accidentally-committed secrets, e.g. before making a private repo public.
- The user specifically asks to check for "hardcoded secrets," "leaked credentials," or similar.

## What to Analyze

1. **Obvious credential patterns** — variables/constants assigned literal strings that look like API keys, tokens, passwords, or private keys (common prefixes like `sk_`, `AKIA`, `ghp_`, PEM `-----BEGIN PRIVATE KEY-----` blocks, etc.).
2. **Connection strings with embedded credentials** — database URLs, message queue URLs, etc. containing a username:password directly in the string.
3. **Config files** — `.env`-style files, YAML/JSON config, checked-in Docker/CI config, for values that should be pulled from a secrets manager or environment instead.
4. **Comments and commented-out code** — secrets left in comments or disabled code are just as exposed as live code.
5. **Test/example code** — flag but treat with lower severity if it's obviously a placeholder (`sk_test_xxx`, `password123` in a clearly-fake example) versus something that looks like a real, live credential.

## Output Format

- Each finding: file/line, the type of secret suspected, a **redacted** version of the value (never repeat the full secret back in the output), and the fix (move to environment variable / secrets manager, add to `.gitignore` if it's a file).
- Flag real-looking credentials as **Critical** and placeholder/test-looking ones as **Low** — don't treat them the same.
- If a secret appears to already be committed to git history (not just the current working tree), note explicitly that removing it from the current file isn't sufficient — it needs rotation (treat as compromised) and, ideally, history rewriting.

## Avoid

- Echoing the full secret value back in plaintext in the output — always redact (show only a prefix/suffix, e.g. `sk_live_****...ab12`).
- Flagging every string literal as a possible secret — focus on patterns that actually look like credentials, not generic constants.
- Assuming a found secret is definitely still valid/active — flag it as "found," let the owner confirm and rotate.
