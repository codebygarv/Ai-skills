# Example: API Designer

## Input

> "Design the API for managing a shopping cart: add item, remove item, view cart, checkout."

## Output

**Routes**

| Method | Path | Description |
|---|---|---|
| GET | `/carts/:cartId` | View the current cart and its items |
| POST | `/carts/:cartId/items` | Add an item to the cart |
| PATCH | `/carts/:cartId/items/:itemId` | Update item quantity |
| DELETE | `/carts/:cartId/items/:itemId` | Remove an item from the cart |
| POST | `/carts/:cartId/checkout` | Convert the cart into an order |

**Example: `POST /carts/:cartId/items`**

Request:
```json
{ "productId": "prod_123", "quantity": 2 }
```

Response `201 Created`:
```json
{
  "id": "item_456",
  "productId": "prod_123",
  "quantity": 2,
  "unitPriceCents": 1999,
  "cart": { "id": "cart_789", "itemCount": 3, "subtotalCents": 5997 }
}
```

**Example: `POST /carts/:cartId/checkout`**

Response `201 Created` on success:
```json
{ "orderId": "order_321", "status": "pending_payment" }
```

Response `422 Unprocessable Entity` if the cart is empty or an item is now out of stock:
```json
{ "error": { "code": "cart_invalid", "message": "Item prod_123 is out of stock", "itemId": "item_456" } }
```

**Validation & errors**
- `quantity` must be a positive integer; reject `0` or negative with `400`, not silently clamp.
- Checkout on an empty cart returns `422`, not `400` — the request is well-formed, the cart's *state* just isn't valid for checkout.
- All error responses share one shape: `{ error: { code, message, ...context } }` — consistent across every endpoint, not just this resource.

**Notes**
- `POST /items` is used for add rather than `PUT`, since adding the same product twice should increment quantity, not be idempotent-replace — call this out explicitly in the endpoint docs since it deviates from typical `PUT`-for-create expectations.
- Checkout is `POST` (an action, not idempotent resource creation in the REST-purist sense) — appropriate here since checkout has side effects (payment, inventory) that shouldn't be safely retryable without idempotency-key support; note that as a likely next requirement rather than in scope here.
