# ⚙️ Environment Config Auditor

Catch config drift before it causes an "it works locally" bug.

## What it does

Reviews `.env`/config files across environments for missing variables, naming inconsistency, type/format mismatches, suspicious hardcoded values, and possible leftover secrets — distinguishing intentional differences from accidental drift.

## When to use it

- Comparing config across dev/staging/prod to spot drift.
- Debugging an issue that only happens in one environment.
- Onboarding a new environment and confirming nothing's missing.

## Best for

- Pre-deploy config comparison across environments
- Debugging environment-specific bugs
- Catching accidentally-hardcoded values that should differ per environment

## Example usage

> "Compare these configs across dev/staging/prod and flag issues" (paste the config files)

## Expected output

Findings grouped by category (Missing Variables, Naming Inconsistency, Type/Format Inconsistency, Suspicious Hardcoded Values, Possible Secrets, Possibly Unused), each tied to the specific variable and environment(s) involved.

## Limitations

- Sees only the config files provided — can't confirm a variable is truly unused without full codebase access; flags candidates, doesn't guarantee them.
- Overlaps with [Secrets Scanner](../../security/secrets-scanner/) on possible-secret findings — this skill flags them in context; use Secrets Scanner for a dedicated deeper pass.
