# Example: Cost Optimization Auditor

## Input

> "Our AWS bill is $14,000/mo. We have 20 EKS worker nodes (m5.2xlarge), NAT Gateway processing 30TB/mo, and 5TB in S3 standard."

## Output

### Immediate Cost Reductions (Estimated Savings: ~$5,800/mo = 41%)
1. **NAT Gateway S3 Egress Trap (Save ~$1,350/mo)**:
   - *Problem*: EKS pods downloading data from S3 traverse the NAT Gateway ($0.045/GB).
   - *Fix*: Create a free **S3 Gateway VPC Endpoint** in the VPC route tables.
2. **Compute Architecture & Graviton (Save ~$2,800/mo)**:
   - *Problem*: Nodes are running on older x86 `m5.2xlarge` instances with 22% average CPU utilization.
   - *Fix*: Migrate to `m7g.xlarge` (Graviton3 ARM) and enable Karpenter autoscaling to binpack pods tightly.
3. **S3 Intelligent-Tiering (Save ~$150/mo)**:
   - *Fix*: Apply lifecycle policy moving objects >30 days to Intelligent-Tiering / Glacier Instant Retrieval.
