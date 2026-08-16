# Example: Log Message Improver

## Input

```js
function processPayment(userId, cardNumber, amountCents) {
  console.log('processing payment for ' + userId + ' card ' + cardNumber);
  try {
    const result = chargeCard(cardNumber, amountCents);
    console.log('done');
    return result;
  } catch (e) {
    console.log('error: ' + e);
  }
}
```

## Output

**Sensitive Data (highest priority)**
- `console.log('processing payment for ' + userId + ' card ' + cardNumber)` logs the **full card number** in plaintext. This is a serious issue — full card numbers persisted in log storage is both a security risk (logs are often less tightly access-controlled than the primary database) and likely a PCI-DSS compliance violation.
  - Fix: never log full card numbers. Log a masked version if card identification is needed for debugging: `logger.info('payment_processing_started', { userId, cardLast4: cardNumber.slice(-4) })`.

**Level Issues**
- The `catch` block uses `console.log` for an actual error — this should be an error-level log, not treated the same as routine info messages, or it'll be missed when scanning for real problems.
  - Fix: `logger.error('payment_processing_failed', { userId, error: e.message, stack: e.stack })`.

**Missing Context**
- `console.log('done')` gives no indication of *what* completed, for *whom*, or with *what result* — useless for correlating with the earlier "processing" log during an investigation.
  - Fix: `logger.info('payment_processing_succeeded', { userId, amountCents, transactionId: result.id })`.
- The error log (`'error: ' + e`) loses the stack trace by string-concatenating the error object, and doesn't include `userId` or `amountCents` — during an incident, you'd want to know which user/amount failed, not just that something did.

**Revised:**
```js
function processPayment(userId, cardNumber, amountCents) {
  logger.info('payment_processing_started', { userId, cardLast4: cardNumber.slice(-4), amountCents });
  try {
    const result = chargeCard(cardNumber, amountCents);
    logger.info('payment_processing_succeeded', { userId, amountCents, transactionId: result.id });
    return result;
  } catch (e) {
    logger.error('payment_processing_failed', { userId, amountCents, error: e.message, stack: e.stack });
  }
}
```

**Note:** structured logging (`logger.info('event_name', {...})`) assumed here based on common Node.js logging library conventions (e.g. pino/winston) — confirm this matches the actual logging setup in your project before applying as-is.
