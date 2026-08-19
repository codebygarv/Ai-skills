---
name: data-anonymizer-specifier
description: Formulates redaction rules and masking strategies for PII, secrets, and customer data in logs and staging.
---

## Purpose

Define automated data anonymization, pseudonymization, and redaction rules to prevent Personally Identifiable Information (PII), credit card numbers, passwords, and API keys from leaking into application logs, error monitoring tools, and staging databases.

## When to Use

- Sanitizing production database snapshots for local development or QA environments.
- Configuring log scrubber rules (Datadog, Pino, Winston, Logstash).
- Complying with GDPR, HIPAA, or PCI-DSS redaction mandates.

## What to Analyze

1. **PII Cataloging**: Email addresses, phone numbers, SSNs, IP addresses, full names, physical addresses.
2. **Secret Identification**: Passwords, bearer tokens, JWTs, API keys, credit card PANs / CVVs.
3. **Transformation Technique**:
   - Masking (e.g. `4111-XXXX-XXXX-1234`).
   - Hashing with Salt (pseudonymization preserving relational consistency across tables).
   - Synthetic Replacement (replacing with realistic Faker data).
   - Zeroing / Nullification.
4. **Log Scrubber Interceptor**: Middleware sanitizing HTTP request headers and bodies before logging.

## Output Format

- **Data Classification Matrix**: Field Name, PII Category, Masking Method.
- **SQL / Pipeline Anonymization Script**: Anonymization script for staging database copies.
- **Logger Masking Middleware**: Regex/path-based scrubber for server logs.

## Avoid

- Reversible weak encryption instead of one-way salted hashes for identifiers.
- Leaving sensitive URL query parameters (e.g. `?token=xyz`) un-sanitized in access logs.
