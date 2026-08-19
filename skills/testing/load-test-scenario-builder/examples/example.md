# Example: Load Test Scenario Builder

## Input

> "Create a k6 load test for our REST API with 500 concurrent users ramping up over 5 minutes."

## Output

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 }, // Warm up
    { duration: '3m', target: 500 }, // Peak load
    { duration: '1m', target: 0 },   // Cool down
  ],
  thresholds: {
    http_req_duration: ['p(95)<250', 'p(99)<500'],
    http_req_failed: ['rate<0.01'], // <1% errors
  },
};

export default function () {
  const res = http.get('https://api.example.com/v1/products?limit=20');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'has products': (r) => JSON.parse(r.body).data.length > 0,
  });
  sleep(Math.random() * 2 + 1); // 1-3s think time
}
```
