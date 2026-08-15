# Example: GrillMe

## Input

> "Grill me on this: our new feature flag system stores flags as rows in the primary Postgres database, read on every request."

## Output

**Sharpest objection first:** every request now takes a read-path dependency on your primary database for something that's almost always the same answer for minutes at a time — you've turned a config lookup into a scaling bottleneck for your most critical path.

1. **Assumption: flag reads are cheap.** At low traffic, sure. At 10x traffic, this is now competing for connections with actual business queries — a flag check can degrade checkout.
   - *Scenario:* a traffic spike during a sale saturates the connection pool; flag lookups start timing out, and depending on your fail-open/fail-closed default, you either silently disable features or silently enable ones not meant for GA.
2. **No caching layer.** There's nothing between the app and the DB for a value that changes maybe a few times a day.
   - *Scenario:* a single flag toggle during an incident now means every pod is issuing fresh reads with zero staleness tolerance, when 30 seconds of staleness would've been invisible to users.
3. **Alternative not addressed:** a push-based or polled in-memory cache (or a dedicated flag service like LaunchDarkly/Unleash) solves this class of problem entirely — why wasn't that considered, or was it and rejected for a reason not stated here?
4. **Coupling risk:** your feature-flag system now shares a failure domain with your core transactional data. A flags outage becomes a database outage becomes a checkout outage.

**Questions to answer before shipping this:**
- What's your target read latency and QPS for flag checks at peak, and does this design hit it with headroom?
- What's the fail-open vs. fail-closed behavior when the DB is unreachable, and is that the right default per-flag?
