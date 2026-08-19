---
name: cache-strategy-planner
description: Designs multi-tier caching architectures (CDN, Redis, memory), invalidation policies, and stampede mitigations.
---

## Purpose

Architect robust, multi-layer caching strategies (HTTP/CDN edge, distributed Redis/Memcached, in-process local memory) with explicit TTLs, cache invalidation hooks, and cache stampede (thundering herd) protections.

## When to Use

- High-read database bottlenecks or slow third-party API response times.
- Designing CDN caching rules (`Cache-Control`, `stale-while-revalidate`, surrogate keys).
- Fixing cache stampedes that crash origin servers when popular cache keys expire.

## What to Analyze

1. **Cache Tier Selection**: L1 (In-memory LRU, sub-millisecond) vs L2 (Redis Cluster, 1-2ms) vs Edge CDN (Cloudflare/Fastly).
2. **Write Strategy**: Cache-Aside (Lazy Loading), Write-Through, Write-Behind (Write-Back).
3. **Invalidation Policy**: Time-To-Live (TTL) with jitter vs Event-driven explicit key purge vs Tag-based invalidation.
4. **Stampede & Thundering Herd Defense**: Mutex locking (singleflight pattern) or probabilistic early expiration (XFetch algorithm).
5. **Serialization & Memory Footprint**: Protobuf, MessagePack, or compressed JSON over raw strings.

## Output Format

- **Caching Architecture Diagram**: Data flow between Client, CDN, Redis, and Database.
- **Cache Policy Table**: [Data Type | Storage Tier | TTL | Invalidation Trigger | Stampede Defense].
- **Singleflight / Cache Wrapper Code**: Production-ready caching utility with fallback.

## Avoid

- Caching mutable data without a clear invalidation strategy.
- Omitting TTL jitter (all cache keys expiring at the exact same second).
