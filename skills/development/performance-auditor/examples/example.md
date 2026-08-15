# Example: Performance Auditor

## Input

```js
async function getOrdersWithUsers(orderIds) {
  const orders = await db.orders.findMany({ where: { id: { in: orderIds } } });
  const result = [];
  for (const order of orders) {
    const user = await db.users.findUnique({ where: { id: order.userId } });
    result.push({ ...order, user });
  }
  return result;
}
```

## Output

1. **N+1 query (highest impact).** The loop issues one `db.users.findUnique` call per order, sequentially. For 100 orders, this is 1 query to fetch orders + 100 separate queries for users = 101 round trips, each paying full network/DB latency.
   - *Impact:* at ~5ms per round trip, 100 orders costs ~500ms just in user lookups versus a few ms for a single batched query — this scales linearly with order count, so it gets worse exactly when the feature is under more load.
   - *Fix:* batch the user fetch:
     ```js
     const userIds = [...new Set(orders.map(o => o.userId))];
     const users = await db.users.findMany({ where: { id: { in: userIds } } });
     const userById = new Map(users.map(u => [u.id, u]));
     return orders.map(order => ({ ...order, user: userById.get(order.userId) }));
     ```

2. **Sequential awaiting inside the loop (subsumed by fix above, but worth naming).** Even if the per-user fetch stayed as-is, `await`ing inside a `for` loop serializes what could at minimum be parallelized with `Promise.all` — though the batched-query fix above is strictly better since it also cuts total query count.

**Note:** impact numbers assume a typical same-region DB round trip (~2–10ms); actual numbers should be confirmed by profiling in your environment, especially if the DB is cross-region from the app.
