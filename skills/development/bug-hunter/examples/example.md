# Example: Bug Hunter

## Input

```js
async function chargeCard(userId, amountCents) {
  const user = await getUser(userId);
  if (user.balance >= amountCents) {
    await deductBalance(userId, amountCents);
    return { success: true };
  }
  return { success: false };
}
```

## Output

1. **Race condition (severity: high).** `file.js:2-4` — between `getUser` reading `user.balance` and `deductBalance` writing the new balance, there's no lock or atomic check-and-set. Trigger: two concurrent requests to `chargeCard` for the same user, both reading a balance of 1000 and both amount 800 — both pass the `>=` check, both deduct, resulting in a balance of -600 despite the guard. Fix: perform the check-and-deduct as a single atomic operation at the datastore level (e.g. `UPDATE ... SET balance = balance - ? WHERE balance >= ?` and check rows affected), not as two separate steps in application code.

2. **Missing null handling (severity: medium).** `file.js:2` — if `getUser(userId)` returns `null`/`undefined` for an invalid `userId`, `user.balance` throws a `TypeError` instead of returning a clean failure. Trigger: calling `chargeCard` with a deleted or nonexistent `userId`. Fix: check `if (!user) return { success: false, reason: 'user_not_found' }` before accessing `user.balance`.

3. **Unvalidated amount (severity: medium).** `file.js:1` — no check that `amountCents` is a positive integer. Trigger: calling with `amountCents = -500` passes the `>=` check trivially (any balance is `>= -500`) and *increases* the user's balance via `deductBalance` with a negative amount, if that function doesn't itself validate sign. Fix: validate `amountCents > 0` at the top of the function.
