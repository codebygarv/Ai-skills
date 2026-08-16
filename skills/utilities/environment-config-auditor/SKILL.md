---
name: environment-config-auditor
description: Reviews .env/config files for consistency and missing required variables across environments. Use when comparing dev/staging/prod config, or debugging an "it works locally but not in prod" issue.
---

## Purpose

Review environment/config files (`.env`, YAML/JSON config, etc.) for consistency across environments — missing variables, inconsistent naming, and unexplained differences that commonly cause "works locally, breaks in prod" bugs.

## When to Use

- Comparing config across environments (dev/staging/prod) to spot drift.
- Debugging an issue that only happens in one environment.
- Onboarding a new environment and want to confirm nothing's missing relative to existing ones.

## What to Analyze

1. **Missing variables** — a variable present in one environment's config but absent in another, where that's not obviously intentional (e.g. a `DEBUG` flag being dev-only is fine; a `DATABASE_URL` missing in prod is not).
2. **Naming inconsistency** — the same concept named differently across files (`DB_URL` in one, `DATABASE_URL` in another) — a common source of "I set the variable but it's not being picked up" bugs.
3. **Type/format inconsistency** — a boolean represented as `"true"` in one environment and `1` in another, where the parsing code might not handle both.
4. **Hardcoded values that should be per-environment** — the same value (e.g. an API URL) present identically across all environments, when it plausibly should differ (pointing to a prod API from a dev config).
5. **Values that look like leftover secrets** — flag (don't just silently note) anything that looks like it could be a real credential rather than a placeholder — cross-reference with [Secrets Scanner](../../security/secrets-scanner/) territory if found.
6. **Unused variables** — defined in config but not obviously referenced anywhere the reviewer can see (flag as "worth checking," since absence of visible usage isn't proof of non-use without full codebase access).

## Output Format

- Findings grouped by category (Missing Variables, Naming Inconsistency, Type/Format Inconsistency, Suspicious Hardcoded Values, Possible Secrets, Possibly Unused).
- Each finding: the variable(s) involved, which environment(s), and the concrete concern.
- Flag anything that looks like a real secret as top priority, with a pointer to [Secrets Scanner](../../security/secrets-scanner/) for a dedicated deeper pass.

## Avoid

- Flagging intentional environment-specific differences (like debug flags, feature flags) as if they were bugs — distinguish "different on purpose" from "different by accident" where inferable from naming/context.
- Assuming a variable is unused without caveat — this skill sees only the config files given, not the full codebase's usage.
- Repeating a found secret value in plaintext in the output — redact, same as [Secrets Scanner](../../security/secrets-scanner/).
