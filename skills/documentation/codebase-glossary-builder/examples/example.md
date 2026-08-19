# Example: Codebase Glossary Builder

## Input

> "Build a glossary for our payment processing service."

## Output

| Term | Context | Definition | Code Reference |
|---|---|---|---|
| **Merchant of Record (MoR)** | Compliance / Billing | The legal entity authorized to process consumer payments and handle sales tax liabilities. | `src/billing/mor.ts` |
| **Idempotency Key** | API / Transactions | A unique UUID passed in the `Idempotency-Key` header preventing duplicate billing on network retries. | `src/middleware/idempotency.ts` |
| **Chargeback vs Refund** | Payments | A *Refund* is merchant-initiated; a *Chargeback* is a customer dispute initiated via their issuing bank with associated penalty fees. | `src/models/dispute.ts` |
