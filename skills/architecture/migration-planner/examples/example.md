# Example: Migration Planner

## Input

> "Plan a migration from our self-hosted Postgres to a managed database service, zero downtime."

## Output

**Invariants (must hold at every intermediate step):**
- No data loss — every write accepted by the app must end up durably stored.
- No downtime — the app must remain able to read and write throughout.
- Existing queries keep working — no application code should need a rewrite mid-migration.

**Migration steps:**

1. **Provision the managed instance and set up replication from the existing primary.**
   - *Verify:* replication lag stays near zero under normal production load; row counts match on both sides.
   - *Rollback:* delete the managed instance. Nothing in the app has changed yet — zero risk at this step.

2. **Point read-only/analytics queries at the managed replica.**
   - *Verify:* query results match the primary for a sample of reads; no latency regression.
   - *Rollback:* repoint reads to the primary via config. Fully reversible in one deploy.

3. **Shadow production reads — send a percentage of app reads to the managed instance and compare results against the primary.**
   - *Verify:* result mismatches at or near zero across a meaningful sample and time window; latency acceptable.
   - *Rollback:* set shadow percentage to 0.

4. **Promote the managed instance to primary during a low-traffic window; repoint writes.** ⚠️ **Point of no return begins here.**
   - *Verify:* writes succeed, replication from old primary is stopped cleanly, no errors in the write path.
   - *Rollback:* possible but expensive — requires reversing replication direction and repointing writes back. Any writes that landed on the new primary must be replicated back to the old one, or they're lost.

5. **Run on the managed instance with the old primary kept as a standby (not deleted) for an agreed soak period.**
   - *Verify:* a full business cycle passes (include peak traffic and any scheduled batch jobs) with no issues.
   - *Rollback:* still possible during this window, which is exactly why the old primary isn't deleted yet.

**Point of no return:** step 4. Before crossing it, confirm shadow-read mismatches were at zero (step 3), replication lag was consistently near zero (step 1), and you have a tested, written procedure for reversing replication — not just an assumption that it's possible.

**Cleanup (after the soak period):**
6. Decommission the old primary and remove its credentials/config from the app.
7. Remove the shadow-read comparison code added in step 3 — otherwise it stays in the codebase as permanent dead weight.
