# Example: CQRS and Event Sourcing Designer

## Input

> "Design an event-sourced bank account ledger with deposits, withdrawals, and balance projections."

## Output

### 1. Append-Only Event Store Table
```sql
CREATE TABLE account_events (
  event_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id UUID NOT NULL,
  version INT NOT NULL,
  event_type VARCHAR(64) NOT NULL,
  payload JSONB NOT NULL,
  recorded_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT uq_account_version UNIQUE (account_id, version) -- Optimistic lock
);
```

### 2. Read-Side Projection Worker (Postgres Materialized View)
```typescript
export async function handleAccountEvent(event: AccountEvent, db: Pool) {
  switch (event.type) {
    case 'ACCOUNT_OPENED':
      await db.query(
        'INSERT INTO account_views (id, owner_id, balance_cents, status) VALUES ($1, $2, 0, $3)',
        [event.accountId, event.payload.ownerId, 'ACTIVE']
      );
      break;
    case 'FUNDS_DEPOSITED':
      await db.query(
        'UPDATE account_views SET balance_cents = balance_cents + $1 WHERE id = $2',
        [event.payload.amountCents, event.accountId]
      );
      break;
  }
}
```
