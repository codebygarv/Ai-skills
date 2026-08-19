# ⚡ Cache Strategy Planner

Design high-performance multi-tier caching architectures with stampede defense and tag invalidation.

## What it does

Architects caching systems across CDN, Redis, and in-memory tiers, preventing cache stampedes, stale data desyncs, and origin database crashes.

## When to use it

- Scaling high-traffic read endpoints.
- Implementing Redis, Memcached, or Cloudflare Edge caching.
- Solving the "Thundering Herd" problem on key expirations.

## Best for

- Distributed caching & Redis
- CDN headers & stale-while-revalidate
- Cache stampede & singleflight patterns
