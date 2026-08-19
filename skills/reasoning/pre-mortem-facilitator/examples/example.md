# Example: Pre-Mortem Facilitator

## Input

> "We are migrating 10 million active customer records from MongoDB to Postgres with zero downtime in 4 weeks."

## Output

### The 6-Month Failure Postmortem
*"It is 6 months later. The migration was aborted after customer carts broke during double-write desyncs. The team spent 3 weeks manually repairing corrupted balance records because idempotency was not handled across dual-write queues."*

### Top Vulnerabilities
1. **Dual-write race conditions**: Network blips caused Mongo write to succeed while Postgres failed silently.
2. **Unindexed foreign keys**: Read queries on Postgres table spiked CPU to 100% under real traffic.
3. **Rollback impossibility**: After 2 hours in production, reverting was blocked because new transactions only existed in Postgres.

### Mandatory Pre-Launch Controls
- Change Data Capture (CDC) with Debezium instead of application-level dual writes.
- Automated reconciliation script running continuously to assert 100% parity before switchover.
- Fully rehearsed rollback playbook verified in staging.
