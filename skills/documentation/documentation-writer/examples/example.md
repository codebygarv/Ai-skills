# Example: Documentation Writer

## Input

```js
// rateLimiter.js
function createRateLimiter(maxRequests, windowMs) {
  const hits = new Map();
  return function isAllowed(key) {
    const now = Date.now();
    const timestamps = (hits.get(key) || []).filter(t => now - t < windowMs);
    if (timestamps.length >= maxRequests) return false;
    timestamps.push(now);
    hits.set(key, timestamps);
    return true;
  };
}
```

Audience: engineers integrating this into their own services.

## Output

# Rate Limiter

A simple in-memory sliding-window rate limiter. Given a max request count and a time window, it tells you whether a given key (e.g. a user ID or IP address) is currently allowed to make another request.

## How it works

`createRateLimiter(maxRequests, windowMs)` returns an `isAllowed(key)` function. For each call, it looks up the timestamps of previous allowed requests for that key, discards any older than `windowMs`, and checks whether the remaining count is still under `maxRequests`. If so, it records the new timestamp and returns `true`; otherwise it returns `false` without recording anything.

This is a **sliding window**, not a fixed window — the window is measured back from "now" on every check, not reset on a fixed schedule.

## Usage

```js
const isAllowed = createRateLimiter(5, 60_000); // 5 requests per 60 seconds per key

if (!isAllowed(userId)) {
  return res.status(429).send('Too many requests');
}
```

## Limitations

- **In-memory only** — state is a `Map` local to the process. In a multi-instance deployment, each instance enforces its own independent limit (e.g. 5 instances effectively allow 25 requests/window across the fleet), not a shared global limit. For a distributed limit, this would need a shared store (Redis, etc.) instead.
- **No cleanup of old keys** — `hits` grows with every distinct key ever seen and is never pruned, even after a key's entries have all expired. Long-running processes with many distinct keys (e.g. per-IP limiting on a public endpoint) will accumulate memory over time; this isn't handled by the current implementation.
- Not safe for concurrent/parallel access patterns beyond standard single-threaded JS execution — no additional consideration is given here for e.g. Worker threads sharing this instance.
