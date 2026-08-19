# Example: Microservices Boundary Definer

## Input

> "We have a monolithic logistics app where `Orders`, `Drivers`, `Routes`, and `Invoicing` are in a single MySQL database with foreign keys between everything. How should we split this?"

## Output

### 1. Defined Bounded Contexts
- **Order Management Context**: Owns order placement, customer cart, status lifecycle. Emits: `OrderPlaced`, `OrderCanceled`.
- **Fulfillment & Dispatch Context**: Owns driver availability, route optimization, real-time GPS tracking. Listens to: `OrderPlaced`. Emits: `OrderDelivered`.
- **Billing & Invoicing Context**: Owns customer payment processing, driver payout calculations, tax invoices. Listens to: `OrderDelivered`.

### 2. Decoupling Foreign Keys
- Replace `orders.driver_id` DB foreign key with an eventual-consistency reference stored in Dispatch service.
- Dispatch publishes `DriverAssignedToOrder` event; Order service stores read-only snapshot.
