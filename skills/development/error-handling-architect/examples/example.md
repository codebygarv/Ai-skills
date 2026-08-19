# Example: Error Handling Architect

## Input

> "Standardize error handling for our Node.js/Express e-commerce API."

## Output

### Error Class Structure
```typescript
export abstract class AppError extends Error {
  abstract readonly statusCode: number;
  abstract readonly code: string;
  readonly isOperational = true;

  constructor(message: string, public readonly details?: Record<string, unknown>) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class InsufficientInventoryError extends AppError {
  readonly statusCode = 409;
  readonly code = 'INSUFFICIENT_INVENTORY';
}
```

### API Response (RFC 7807 Compliant)
```json
{
  "type": "https://api.example.com/errors/insufficient-inventory",
  "title": "Insufficient Inventory",
  "status": 409,
  "detail": "Requested 5 units of SKU-102, but only 2 remain in stock.",
  "instance": "/orders/checkout",
  "traceId": "req-98fa20"
}
```
