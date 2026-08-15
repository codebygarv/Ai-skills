# Example: DeepThink

## Input

> "Deep think this: how should we handle offline support for a mobile app that needs to sync inventory counts across warehouses?"

## Output

**Problem restatement & sub-problems:**
1. How does the app behave while offline (what can users still do)?
2. How are local changes queued and later synced?
3. How are conflicts resolved when two warehouses edit the same item's count while both were offline?

**Constraints:**
- Inventory counts must never silently lose an update — a lost decrement/increment is a real financial error, not a UI inconvenience.
- Warehouses may be offline for hours (not just seconds), so conflicts are expected, not rare.
- Team is small — the solution needs to be operable without a dedicated infra team.

**Approach A — Last-write-wins with timestamps**
- *Strength:* simple to implement, minimal new infrastructure.
- *Weakness:* directly violates the "never silently lose an update" constraint — two warehouses decrementing the same SKU offline will silently drop one decrement.

**Approach B — Event-sourced deltas (sync +/- changes, not absolute counts)**
- *Strength:* deltas commute — two offline decrements both apply correctly regardless of order, no silent loss.
- *Weakness:* requires a real sync/merge engine and a durable local queue; more implementation work up front.

**Approach C — Server-authoritative counts, offline is read-only**
- *Strength:* trivially avoids conflicts — no offline writes to reconcile.
- *Weakness:* fails the actual requirement — warehouses need to record counts while offline, not just view them.

**Recommendation:** Approach B. It's the only one of the three that satisfies the "never lose an update" constraint under realistic offline durations. Approach A is disqualified by data-loss risk; Approach C is disqualified because it doesn't actually deliver offline write support, which was the point of the request. The added complexity of a delta-sync queue is justified given inventory correctness is a financial concern, not a cosmetic one.
