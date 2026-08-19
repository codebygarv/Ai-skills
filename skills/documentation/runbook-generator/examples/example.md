# Example: Runbook Generator

## Input

> "Create a runbook for the alert: `HighDatabaseConnectionPoolUtilization (>90% for 5m)`."

## Output

# Runbook: High Database Connection Pool Utilization

## Alert Summary
- **Severity**: P2 (Elevates to P1 if 5xx errors exceed 1%)
- **Impact**: API requests queue and time out waiting for DB connections.

## 1. Fast Diagnosis (2 mins)
Check active queries locking the pool:
```sql
SELECT pid, now() - query_start AS duration, state, query 
FROM pg_stat_activity 
WHERE state != 'idle' 
ORDER BY duration DESC LIMIT 10;
```

## 2. Immediate Mitigation
- **Option A (Long-running query stuck)**: Terminate the offending PID:
  ```sql
  SELECT pg_terminate_backend(<PID>);
  ```
- **Option B (Traffic surge)**: Scale PgBouncer pool max connections from 100 to 200:
  ```bash
  kubectl patch deployment pgbouncer -p '{"spec":{"template":{"spec":{"containers":[{"name":"pgbouncer","env":[{"name":"MAX_CLIENT_CONN","value":"200"}]}]}}}}'
  ```

## 3. Escalation
If DB CPU exceeds 95% after pool expansion, page Database Lead (@db-oncall) immediately.
