---
name: disaster-recovery-planner
description: Formulates RTO/RPO targets, cross-region failover, backup verification, and split-brain recovery procedures.
---

## Purpose

Formulate enterprise Disaster Recovery (DR) and Business Continuity plans, defining Recovery Time Objectives (RTO), Recovery Point Objectives (RPO), multi-region replication, and automated split-brain prevention.

## When to Use

- Preparing architecture for SOC 2, ISO 27001, or enterprise compliance audits.
- Designing active-passive (pilot light / warm standby) or active-active multi-region systems.
- Establishing automated database backup verification and restore drills.

## What to Analyze

1. **RTO & RPO Definitions**: Acceptable data loss in time (RPO) and acceptable downtime duration (RTO) per tier.
2. **Topology Strategy**: Backup & Restore vs Pilot Light vs Warm Standby vs Active-Active Multi-Region.
3. **Data Replication**: Asynchronous vs synchronous replication lag, cross-region replication (CRR), WAL archiving.
4. **DNS & Traffic Routing**: Route 53 / Cloudflare health check failover policies with low TTLs.
5. **Split-Brain Prevention & Quorum**: Fencing tokens and automated tie-breakers during network partition.

## Output Format

- **DR Strategy Classification Table**: Tiers (Tier 0 to Tier 3), RTO, RPO, and Topology.
- **Failover & Failback Sequence**: Step-by-step failover execution checklist.
- **Backup Verification Automation**: Scheduled test restoration script.

## Avoid

- Untested backups (an untested backup is not a backup).
- Manual multi-hour DNS switchover processes with high TTLs.
