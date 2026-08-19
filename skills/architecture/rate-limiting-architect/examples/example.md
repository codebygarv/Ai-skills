# Example: Rate Limiting Architect

## Input

> "Design a sliding window counter rate limiter in Redis for an API endpoint allowing 100 requests per minute per API key."

## Output

### Redis Sliding Window Lua Script
```lua
local key = KEYS[1]
local now = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local limit = tonumber(ARGV[3])
local clearBefore = now - window

-- Remove old request timestamps
redis.call('ZREMRANGEBYSCORE', key, 0, clearBefore)

-- Count requests in current window
local currentRequests = redis.call('ZCARD', key)

if currentRequests < limit then
  -- Add current timestamp
  redis.call('ZADD', key, now, now)
  redis.call('EXPIRE', key, math.ceil(window / 1000))
  return { 1, limit - currentRequests - 1 }
else
  return { 0, 0 }
end
```

### Response Headers on 429
```http
HTTP/1.1 429 Too Many Requests
RateLimit-Limit: 100
RateLimit-Remaining: 0
RateLimit-Reset: 34
Retry-After: 34
Content-Type: application/json

{"error": "Too Many Requests", "message": "Rate limit exceeded. Please retry in 34 seconds."}
```
