# Example: Executive Summary Writer

## Input

> "Summarize our 4-hour database failover outage for our CEO and Board."

## Output

# Executive Brief: Primary Database Outage (Incident #402)

### 📌 Bottom Line Up Front (BLUF)
On August 18, our primary customer database experienced a 4-hour partial outage (14:00–18:00 UTC) due to an automated failover misconfiguration during routine storage expansion, impacting 12% of checkout attempts with an estimated $34,000 in delayed transactions. Service has been fully restored with zero permanent data loss.

### 💼 Business & Customer Impact
- **Total Downtime**: 3 hours 52 minutes.
- **Impacted Users**: ~4,200 active customer checkout attempts failed.
- **Financial Exposure**: $34,000 in delayed orders (~85% successfully recovered post-incident).
- **SLA Breach**: Tier-1 enterprise uptime dipped to 99.4% (contractual credits estimated at ~$4,500).

### 🔍 Root Cause (Simplified)
During routine database disk expansion, cloud provider health probes prematurely flagged the primary database as unresponsive, triggering an automated failover to an out-of-sync backup replica before active transactions had finished replicating.

### 🛡️ Corrective Action Plan & Investment
1. **Automated Health Check Calibration (Completed)**: Extended failover evaluation window from 5s to 30s.
2. **Disaster Recovery Automation (Target: Sep 15)**: Implementing automated split-brain fencing tokens (Engineering Lead: @sarah).
