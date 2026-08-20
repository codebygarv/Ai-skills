---
name: soc2-evidence-collector
description: Prepares automated audit trails, access review logs, change management records, and infrastructure evidence for SOC 2 audits.
---

## Purpose

Automate and structure evidence collection for SOC 2 Type II compliance audits across the Trust Services Criteria (Security, Availability, Confidentiality), organizing access reviews, change control pull requests, encryption proof, and disaster recovery drill logs.

## When to Use

- Preparing for annual SOC 2 Type I or Type II compliance audits.
- Configuring automated compliance platforms (Vanta, Drata, Secureframe).
- Creating tamper-proof audit trails for change management and production database access.

## What to Analyze

1. **Change Management (CC8.1)**: Proof that all production deployments link to approved PRs with 2+ code reviews and passing CI checks.
2. **Access Control & Least Privilege (CC6.1 - CC6.3)**: Quarterly user access review logs, SSO MFA enforcement, and zero static root keys.
3. **Encryption in Transit & at Rest (CC6.6 - CC6.7)**: TLS 1.3 configs, AWS KMS encryption on RDS/EBS/S3, and automated certificate renewals.
4. **Incident Response & Postmortems (CC7.3 - CC7.4)**: Documented postmortems with completed preventative action item tickets.
5. **Backup & Disaster Recovery (A1.2)**: Automated verification logs of successful weekly test database restores.

## Output Format

- **SOC 2 Evidence Checklist Table**: Control ID, Evidence Description, Source System, Automated Extraction Script.
- **Audit Evidence Template**: Standardized markdown artifact for auditor submission.
- **Automation Script**: CLI / GitHub Actions workflow to export change management and access logs.

## Avoid

- Taking manual screenshots of cloud consoles that become stale or unverifiable.
- Granting direct, unmonitored production database access without break-glass ticketing.
