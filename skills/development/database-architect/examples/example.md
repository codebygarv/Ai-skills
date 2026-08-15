# Example: Database Architect

## Input

```sql
CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  status VARCHAR(255),
  total FLOAT,
  created_at TIMESTAMP
);
```

## Output

**Data integrity risk**
- No foreign key on `user_id` referencing `users(id)`. Trigger: a user is deleted (or `user_id` is mistyped by a bug) and the order silently references a nonexistent user — nothing in the database prevents or flags this.
  - Fix: `user_id INT NOT NULL REFERENCES users(id)`.
- `status` is a free-text `VARCHAR(255)` with no constraint — the application can insert any string, including typos (`"complted"`), which then silently fail to match any status-based query.
  - Fix: use an enum or a `CHECK (status IN ('pending', 'paid', 'shipped', 'cancelled'))` constraint, or a foreign key to a `statuses` lookup table if statuses need to be data-driven.

**Performance risk**
- No index on `user_id`, but "get a user's orders" is almost certainly the most common query on this table. Without an index, this becomes a full table scan as `orders` grows.
  - Fix: `CREATE INDEX idx_orders_user_id ON orders(user_id);`
- `total FLOAT` for a money value — floats introduce rounding errors in arithmetic (`0.1 + 0.2 !== 0.3`), which is a real bug risk for financial totals, not just precision pedantry.
  - Fix: use `DECIMAL(10,2)` (or store cents as an integer: `total_cents INT`).

**Design**
- `created_at TIMESTAMP` has no default — every insert must remember to set it, or it's silently `NULL`.
  - Fix: `created_at TIMESTAMP NOT NULL DEFAULT now()`.
- No `updated_at` column — if orders are ever mutated after creation (status changes), there's currently no way to know when.
