---
name: cost-optimization-auditor
description: Analyzes cloud infrastructure and architectures to identify wasted spend and right-sizing opportunities.
---

## Purpose

Audit cloud infrastructure (AWS, GCP, Azure, Kubernetes, SaaS dependencies) to uncover idle resources, over-provisioned instances, unattached disks, sub-optimal storage tiers, and high data-transfer egress costs.

## When to Use

- Monthly cloud bills are growing faster than business revenue.
- Pre-planning infrastructure budget reviews or FinOps initiatives.
- Right-sizing Kubernetes pod CPU/memory requests and limits based on actual utilization.

## What to Analyze

1. **Compute Right-Sizing**: Underutilized EC2/GCE VMs (CPU < 15%), idle dev/staging clusters, ARM (Graviton) migration.
2. **Storage Tiering & Cleanup**: Unattached EBS volumes, old disk snapshots, S3 Intelligent-Tiering and lifecycle expiration rules.
3. **Data Egress & Networking**: Cross-AZ traffic, NAT Gateway data processing fees, lack of VPC endpoints for S3/DynamoDB.
4. **Database & Cache Provisioning**: Idle replica nodes, over-provisioned IOPS, un-sharded memory clusters.
5. **Commitment Discounts**: Savings Plans, Reserved Instances, and Spot instances for stateless batch workers.

## Output Format

- **Estimated Savings Summary**: Projected monthly cost reduction in $ and %.
- **Immediate Quick-Wins (Day 1)**: Deleting orphaned disks, snapshots, idle test environments.
- **Medium-Term Architectural Changes**: Graviton migration, VPC Endpoints, Spot workers.
- **FinOps Guardrails**: Infracost integration, budget alerts, and tagging policies.

## Avoid

- Aggressively down-sizing production database CPU to the point of risking latency spikes.
- Overlooking NAT Gateway data transfer charges (often the #1 hidden AWS bill surprise).
