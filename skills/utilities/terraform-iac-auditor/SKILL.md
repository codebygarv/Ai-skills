---
name: terraform-iac-auditor
description: Inspects Terraform and OpenTofu Infrastructure-as-Code modules for drift resilience, security, and state locking.
---

## Purpose

Audit Terraform and OpenTofu Infrastructure-as-Code (IaC) modules for security misconfigurations, hardcoded secrets, missing state locking, unpinned provider versions, and drift vulnerability.

## When to Use

- Writing new Terraform modules for cloud infrastructure (AWS/GCP/Azure).
- Reviewing PRs touching VPCs, IAM policies, security groups, or S3 buckets.
- Preparing for tfsec, Checkov, or Trivy IaC static analysis compliance.

## What to Analyze

1. **State & Backend Security**: Remote state storage with encryption at rest and DynamoDB / object locking enabled.
2. **IAM & Least Privilege**: Wildcard actions (`Action: ["*"]`) or overly broad resource targets.
3. **Network & Security Groups**: Ingress rules open to the world (`0.0.0.0/0`) on sensitive ports (SSH 22, Postgres 5432).
4. **Storage Encryption**: Default KMS encryption enabled on S3 buckets, RDS instances, and EBS volumes.
5. **Module Modularity & Variables**: Input variable validation blocks (`validation {}`), description tags, and outputs.

## Output Format

- **Security & Reliability Findings**: Categorized by severity (High/Medium/Low).
- **Remediated Terraform Code**: Clean, modular HCL with variables and validation rules.
- **Provider & Version Constraints**: Explicit `required_providers` block.

## Avoid

- Hardcoding AWS access keys or database passwords directly in `.tf` files.
- Omitting lifecycle prevent_destroy rules on stateful production databases.
