# Example: Event Driven Architect

## Input

> "Design an event-driven payment processing pipeline using Kafka."

## Output

### 1. Transactional Outbox Schema
```sql
CREATE TABLE outbox_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  aggregate_type VARCHAR(64) NOT NULL,
  aggregate_id VARCHAR(64) NOT NULL,
  event_type VARCHAR(128) NOT NULL,
  payload JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  processed_at TIMESTAMPTZ
);
```

### 2. Standardized CloudEvent Schema
```json
{
  "specversion": "1.0",
  "type": "com.company.payment.processed.v1",
  "source": "/services/payment-processor",
  "id": "evt_01j7h8k2...",
  "time": "2026-08-19T12:00:00Z",
  "datacontenttype": "application/json",
  "data": {
    "paymentId": "pay_98765",
    "amountCents": 4999,
    "currency": "USD",
    "status": "COMPLETED"
  }
}
```

### 3. Consumer Idempotency Pattern
Consumer verifies `INSERT INTO processed_events (event_id) VALUES (:id) ON CONFLICT DO NOTHING;` before executing side-effects.
