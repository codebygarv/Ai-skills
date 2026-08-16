# Example: Test Coverage Analyzer

## Input

```js
// refundOrder.js
async function refundOrder(orderId, amountCents) {
  const order = await db.orders.find(orderId);
  if (order.status === 'refunded') throw new Error('Already refunded');
  if (amountCents > order.totalCents) throw new Error('Refund exceeds total');
  const result = await paymentProvider.refund(order.paymentId, amountCents);
  await db.orders.update(orderId, { status: 'refunded' });
  return result;
}
```

```js
// refundOrder.test.js
test('refunds an order', async () => {
  paymentProvider.refund = jest.fn().mockResolvedValue({ id: 'ref_1' });
  db.orders.find = jest.fn().mockResolvedValue({ status: 'paid', totalCents: 1000 });
  db.orders.update = jest.fn();
  const result = await refundOrder('order_1', 500);
  expect(result).toBeDefined();
});
```

## Output

**Risk-ranked gaps**

1. **Payment provider failure is untested (highest risk).** If `paymentProvider.refund` throws, the order status is never updated — which is arguably correct — but nothing verifies that, and nothing verifies the error propagates to the caller. *Concrete failure allowed:* a provider outage could leave orders in an inconsistent state with no test catching a future change to this behavior. *Test to add:* mock `refund` to reject, assert the error propagates and `db.orders.update` was **not** called.

2. **Partial refund accounting is untested.** The code allows `amountCents` less than the order total, but then marks the entire order `refunded` regardless of amount. *Concrete failure allowed:* a $5 refund on a $10 order marks the whole order refunded, and the remaining $5 can never be refunded — a real money bug that the current test suite would not catch. *Test to add:* partial refund, then assert a second refund of the remainder behaves as intended (this may surface an actual bug in the implementation, not just a test gap).

3. **Both guard clauses are untested.** Neither `Already refunded` nor `Refund exceeds total` has a test. *Concrete failure allowed:* someone removes or inverts a guard and no test fails — double refunds or over-refunds ship. *Tests to add:* one per guard, asserting the specific error and that no payment call is made.

4. **Missing order is untested.** If `db.orders.find` returns `null`, `order.status` throws a `TypeError` rather than a meaningful error. *Test to add:* find returns null, assert intended behavior (which needs deciding first).

**False confidence (more dangerous than the gaps above)**

- The single existing test asserts only `expect(result).toBeDefined()` — it would pass even if `refundOrder` refunded the wrong amount, refunded the wrong order, or never updated the order status at all. It executes most of the function's lines, so line coverage looks respectable, while verifying essentially nothing. *Fix:* assert `paymentProvider.refund` was called with the expected `paymentId` and amount, and that `db.orders.update` was called with the expected status.

**Deliberately low priority**

- The exact shape of the object returned by the payment provider — that's the provider's contract, not this function's logic, and asserting it here mostly tests the mock.
