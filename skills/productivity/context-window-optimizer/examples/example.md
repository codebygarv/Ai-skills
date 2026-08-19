# Example: Context Window Optimizer

## Input

> "I need to give an AI assistant our 2,000-line billing module to implement a discount feature without overflowing context."

## Output

### Extracted High-Signal Skeleton (92% Token Reduction)
```typescript
// src/billing/types.ts (Essential Interfaces Only)
export interface Subscription {
  id: string;
  customerId: string;
  planId: string;
  status: 'active' | 'past_due' | 'canceled';
  currentPeriodEnd: Date;
  discounts: Discount[];
}

export interface Discount {
  id: string;
  code: string;
  percentOff: number;
  durationInMonths: number;
}

// src/billing/service.ts (Exported Signature Stubs)
export class BillingService {
  async applyDiscount(subscriptionId: string, couponCode: string): Promise<Subscription>;
  async calculateInvoiceTotal(subscriptionId: string): Promise<number>;
  private async validateCoupon(code: string): Promise<Discount>;
}
```
