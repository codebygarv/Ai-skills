# Example: Cache Strategy Planner

## Input

> "We have a product catalog page receiving 10,000 req/sec. Postgres CPU reaches 100% when the Redis cache expires every 5 minutes."

## Output

### Diagnosis: Cache Stampede (Thundering Herd)
When the 5-minute Redis key expires, hundreds of concurrent requests find a cache miss simultaneously and hammer Postgres with identical expensive queries.

### Caching Blueprint
1. **Probabilistic Early Invalidation (XFetch)** or **Singleflight Mutex**:
   - Only 1 worker computes the database query; all other concurrent requests wait on the promise or receive a slightly stale cached version.
2. **HTTP Stale-While-Revalidate**:
   ```http
   Cache-Control: public, max-age=60, s-maxage=300, stale-while-revalidate=86400
   ```
3. **Redis Wrapper with Singleflight**:
```typescript
const flight = new Map<string, Promise<any>>();

async function getOrSet(key: string, ttlSeconds: number, fetcher: () => Promise<any>) {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  if (flight.has(key)) return flight.get(key);

  const promise = (async () => {
    const fresh = await fetcher();
    await redis.set(key, JSON.stringify(fresh), 'EX', ttlSeconds);
    flight.delete(key);
    return fresh;
  })();

  flight.set(key, promise);
  return promise;
}
```
