# Example: ADR Generator

## Input

> "Write an ADR for migrating our session store from in-memory Node.js state to Redis."

## Output

```markdown
# ADR-0008: Move Session Storage to Redis

## Status
Accepted

## Context
Our user session state is currently held in-memory inside each Node.js process. As user traffic has grown, this blocks horizontal auto-scaling because requests are statefully pinned to specific instances via sticky sessions, leading to uneven load distribution and session loss during pod restarts.

## Decision
We will extract all session state into a managed Redis Cluster using `ioredis` with a default 14-day TTL.

## Consequences
### Positive
- API pods become completely stateless and can scale dynamically from 3 to 30 instances.
- Zero user logout disruption during rolling deployments.

### Negative / Tradeoffs
- Adds a network hop (~1-2ms latency) to authenticated requests.
- Redis becomes a critical tier-1 dependency requiring high-availability failover.
```
