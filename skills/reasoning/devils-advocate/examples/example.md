# Example: Devil's Advocate

## Input

> "Play devil's advocate: we've decided to migrate our monolith to microservices over the next two quarters."

## Output

**Counter-position:** the strongest case against this migration is that microservices trade a known, understood cost (a monolith's coupling) for a set of *new* costs your team has not yet paid and may be underestimating — distributed-systems debugging, deployment orchestration, and cross-service data consistency — at a time when the team's actual bottleneck may be something else entirely (like unclear ownership or a lack of tests), which a rewrite will not fix and could make worse.

**Supporting points:**
- **Precedent:** several well-documented cases (Segment's 2018 "goodbye microservices" writeup is a commonly cited one) show teams migrating back to a monolith after finding operational overhead outweighed the benefits at their actual scale.
- **Opportunity cost:** two quarters of migration work is two quarters not spent on product surface area or the underlying process problems that made the monolith feel unmanageable in the first place.
- **New failure surface:** network partitions, partial failures, and eventual consistency bugs don't exist in a monolith and are genuinely hard to reason about without prior experience.

**Anticipated rebuttal:** "our team already can't deploy independently and it's blocking us." Response: that's a real problem, but it's a deployment/ownership boundary problem — it's worth checking whether a modular monolith with clearer internal boundaries and independent deploy paths solves it with a fraction of the operational cost.

**Verdict:** this counter-argument is moderately strong — not a reason to cancel the migration outright, but strong enough that it should be answered directly: has a modular-monolith alternative been seriously evaluated and rejected for a stated reason, or just not considered?
