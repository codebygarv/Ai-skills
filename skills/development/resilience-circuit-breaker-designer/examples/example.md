# Example: Resilience Circuit Breaker Designer

## Input

> "Design a circuit breaker for our external shipping rates API in Node.js."

## Output

```typescript
import CircuitBreaker from 'opossum';

const options = {
  timeout: 1200,                // Fail if request takes > 1.2s
  errorThresholdPercentage: 50, // Open circuit if 50% of requests fail
  resetTimeout: 15000,          // Try again after 15 seconds (HALF-OPEN)
  volumeThreshold: 10,          // Minimum 10 requests before calculating error rate
};

export const shippingBreaker = new CircuitBreaker(fetchLiveShippingRates, options);

// Graceful fallback when circuit is OPEN or times out
shippingBreaker.fallback((destinationZip: string) => {
  console.warn(`[Circuit Breaker OPEN] Using fallback shipping rate for zip: ${destinationZip}`);
  return { rateCents: 999, estimatedDays: 5, isFallbackEstimate: true };
});

shippingBreaker.on('open', () => metrics.increment('circuit_breaker.shipping.opened'));
shippingBreaker.on('close', () => metrics.increment('circuit_breaker.shipping.closed'));
```
