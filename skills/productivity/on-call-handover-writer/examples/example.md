# Example: On-Call Handover Writer

## Input

> "Draft our weekly on-call handover report. We had one P1 payment outage on Tuesday (fixed with pod restart), a noisy memory alert on worker pods, and scheduled Redis maintenance this Thursday."

## Output

# 🔁 On-Call Handover: Aug 12 - Aug 19

**Outgoing**: @alex  
**Incoming**: @jordan  
**Shift Paging Volume**: 1 P1, 0 P2, 14 P3 alerts

---

### 🚨 Incidents & Hotspots
1. **INC-492 (P1 - Resolved)**: Payment Webhook 504s on Tuesday.
   - *Root Cause*: Connection leak in worker pod. Temporary fix: restarted pods and bumped pool to 50.
   - *Next Step*: Postmortem scheduled for Wednesday 2 PM; PR #412 fixes connection pooling.

### 🔔 Alert Tuning Candidates
- **`WorkerMemoryUsageHigh (>85%)`**: Paged 9 times without degradation (expected spike during cron batch). Recommendation: Increase threshold to 92% or extend evaluation window from 5m to 15m.

### 📅 Upcoming Scheduled Maintenance
- **Thursday 03:00 UTC**: Managed Redis Cluster engine upgrade to v7.2. Ensure read replicas are healthy before maintenance window starts.
