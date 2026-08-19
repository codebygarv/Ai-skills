# Example: SQL Query Optimizer

## Input

> "Optimize: `SELECT * FROM orders WHERE status = 'completed' AND DATE(created_at) = '2026-01-01' ORDER BY total_amount DESC LIMIT 20;`"

## Output

### Diagnosis
1. **Un-sargable Predicate**: `DATE(created_at)` wraps the column in a function, forcing a Sequential Scan across all rows even if an index on `created_at` exists.
2. **Over-fetching**: `SELECT *` pulls unneeded blobs/text columns, preventing index-only scans.

### Optimized SQL
```sql
SELECT id, user_id, status, total_amount, created_at
FROM orders
WHERE status = 'completed'
  AND created_at >= '2026-01-01 00:00:00'
  AND created_at < '2026-01-02 00:00:00'
ORDER BY total_amount DESC
LIMIT 20;
```

### Recommended Index
```sql
CREATE INDEX CONCURRENTLY idx_orders_status_created_total
ON orders (status, created_at, total_amount DESC);
```
