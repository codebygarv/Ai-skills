# Example: Security Auditor

## Input

```js
app.get('/api/invoices/:id', requireLogin, async (req, res) => {
  const invoice = await db.query(`SELECT * FROM invoices WHERE id = ${req.params.id}`);
  res.json(invoice);
});
```

## Output

**Critical**
- **SQL injection.** `req.params.id` is interpolated directly into the query string. Attack scenario: a request to `/api/invoices/1 OR 1=1` (or a UNION-based payload) returns arbitrary rows or extracts data from other tables entirely, bypassing any intended row filtering.
  - Fix: use a parameterized query — `db.query('SELECT * FROM invoices WHERE id = $1', [req.params.id])` (syntax depends on your DB driver).

**High**
- **IDOR (missing per-resource authorization).** `requireLogin` only checks that *a* user is authenticated — nothing checks that the logged-in user actually owns or has access to invoice `:id`. Attack scenario: any logged-in user can view any other user's invoice by simply incrementing the ID in the URL.
  - Fix: after fetching the invoice, verify `invoice.userId === req.user.id` (or the appropriate ownership/permission check), and return `404` (not `403`, to avoid confirming the ID exists) if it doesn't match.

**Medium**
- Returning the full row (`SELECT *`) exposes any internal-only columns (e.g. internal notes, cost basis) to the client by default — confirm the invoices table doesn't contain fields that shouldn't be client-visible, and select explicit columns instead.

**Verification needed:** confirm whether `requireLogin` middleware also does any resource-level scoping elsewhere in the stack (e.g. a multi-tenancy proxy) — if not, the IDOR above is directly exploitable as described.
