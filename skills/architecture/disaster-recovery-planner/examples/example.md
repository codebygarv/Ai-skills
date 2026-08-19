# Example: Disaster Recovery Planner

## Input

> "Design a warm-standby Disaster Recovery plan for our AWS production stack (EKS + RDS Postgres + S3)."

## Output

### DR Metrics & Topology
- **Primary Region**: `us-east-1` (Active)
- **Secondary Region**: `us-west-2` (Warm Standby)
- **RTO Target**: < 15 minutes
- **RPO Target**: < 1 minute

### Infrastructure Replication Blueprint
1. **Database**: RDS Postgres Cross-Region Read Replica in `us-west-2`.
2. **Storage**: S3 Cross-Region Replication (CRR) enabled with versioning.
3. **Compute**: Minimal EKS cluster running in `us-west-2` with 2 worker nodes (scaled up during failover via Karpenter).

### Automated Failover Sequence
1. Route 53 health check detects 3 consecutive failures on `us-east-1` ingress.
2. Trigger AWS Lambda / Step Function:
   - Promote `us-west-2` RDS Read Replica to standalone primary.
   - Scale EKS deployment replicas from 1 to 20 in `us-west-2`.
   - Update DNS alias to point to `us-west-2` Application Load Balancer.
