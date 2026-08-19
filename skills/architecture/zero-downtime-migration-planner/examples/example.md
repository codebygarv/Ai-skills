# Example: Zero-Downtime Migration Planner

## Input

> "We need to split a `users.full_name` column into `first_name` and `last_name` on a table with 20 million rows."

## Output

### Phase 1: Expand (Deploy Migration)
```sql
-- Add new nullable columns (Zero locking)
ALTER TABLE users ADD COLUMN first_name VARCHAR(128);
ALTER TABLE users ADD COLUMN last_name VARCHAR(128);
```

### Phase 2: Dual-Write (Deploy App v1.1)
- Application writes to both `full_name` and (`first_name`, `last_name`).
- Reads continue reading from `full_name`.

### Phase 3: Historical Backfill (Background Worker)
- Run batched background script updating 1,000 rows at a time:
  ```sql
  UPDATE users SET first_name = split_part(full_name, ' ', 1), last_name = split_part(full_name, ' ', 2) WHERE id BETWEEN :start AND :end AND first_name IS NULL;
  ```

### Phase 4: Read Cutover (Deploy App v1.2)
- Application switches reads to (`first_name`, `last_name`).

### Phase 5: Contract (Deploy App v1.3 & Drop Column)
- Drop `full_name` column safely.
