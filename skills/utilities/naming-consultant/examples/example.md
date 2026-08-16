# Example: Naming Consultant

## Input

```js
function getUser(id) {
  const user = db.users.find(id);
  db.logs.insert({ event: 'user_fetched', userId: id }); // side effect
  return user;
}

const data = getUser(42);
let flag = data.isActive && data.role === 'admin';
const temp2 = data.email.split('@')[1];
```

## Output

**Actively misleading (higher priority):**
- `getUser` — the name implies a pure retrieval, but it also writes a log entry as a side effect. A reader calling this expecting a simple getter wouldn't expect a database write to happen. This is a trust issue, not just a style nit — someone calling this in a hot path or a read-only context could unknowingly cause writes.
  - Suggested: either rename to something that signals the side effect (`getUserAndLogAccess`), or better, separate the concerns — `getUser` stays pure, and the logging call is made explicit at the call site.

**Unclear/generic:**
- `data` — too generic for what it actually holds (a user object). Since `getUser` already exists, naming the result `user` is both clearer and matches common convention (variable name mirrors what the function returns).
  - Suggested: `user`.
- `flag` — doesn't communicate what condition it represents.
  - Suggested: `isActiveAdmin` — matches the `is`-prefix boolean convention and states the actual condition being checked.
- `temp2` — the `2` suggests this was renamed hastily from a `temp`/`temp1`, and gives no indication this is actually the user's email domain.
  - Suggested: `emailDomain`.

**Revised:**
```js
function getUser(id) {
  const user = db.users.find(id);
  db.logs.insert({ event: 'user_fetched', userId: id });
  return user;
}

const user = getUser(42);
const isActiveAdmin = user.isActive && user.role === 'admin';
const emailDomain = user.email.split('@')[1];
```

*(The `getUser` side-effect issue is flagged separately above since fixing it is a small design decision, not just a rename — left as-is in this revised snippet pending that decision.)*
