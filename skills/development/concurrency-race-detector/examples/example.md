# Example: Concurrency Race Detector

## Input

> "Review this Node.js coupon redemption handler:
> async function applyCoupon(userId, couponCode) {
>   const coupon = await db.getCoupon(couponCode);
>   if (coupon.usesLeft > 0) {
>     await grantDiscount(userId);
>     await db.updateCoupon(couponCode, { usesLeft: coupon.usesLeft - 1 });
>   }
> }"

## Output

### Race Condition: Check-Then-Act (TOCTOU)
1. **Thread/Request A** reads `usesLeft = 1`.
2. **Request A** awaits `grantDiscount(userId)`. Event loop switches to **Request B**.
3. **Request B** reads `usesLeft = 1` (still 1 because A hasn't updated yet!).
4. Both requests grant discounts and decrement `usesLeft`, allowing 2 redemptions on a single-use coupon.

### Remediated Atomic SQL
```sql
UPDATE coupons
SET uses_left = uses_left - 1
WHERE code = :couponCode AND uses_left > 0
RETURNING id;
```
Only proceed with `grantDiscount()` if the `UPDATE` returned a row.
