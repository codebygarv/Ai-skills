# Example: Code Reviewer

## Input

```js
function getActiveUsers(users) {
  let result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].status == 'active') {
      result.push(users[i]);
    }
  }
  return result;
}

function getActiveAdmins(users) {
  let result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].status == 'active' && users[i].role == 'admin') {
      result.push(users[i]);
    }
  }
  return result;
}
```

## Output

**Blocking**
- None — the logic is correct for well-formed input.

**Should Fix**
- `getActiveUsers` and `getActiveAdmins` duplicate the same active-status filter logic. Extract a shared `isActive(user)` predicate, or better, replace both with `.filter()`:
  ```js
  const isActive = (user) => user.status === 'active';
  const getActiveUsers = (users) => users.filter(isActive);
  const getActiveAdmins = (users) => users.filter(u => isActive(u) && u.role === 'admin');
  ```
- Both functions use `==` instead of `===`. Not a bug today since `status`/`role` are presumably always strings, but it's an unguarded assumption — a stray `null` would coerce unexpectedly with `==`.
- Neither function handles `users` being `undefined`/`null` — if this is ever called before data loads, it throws instead of returning `[]`.

**Nit**
- `result` is a generic name; `activeUsers` / `activeAdmins` would read better at the call site's return.

**Done well:** the filtering intent is clear and each function does exactly one thing — the fix here is about removing duplication, not restructuring logic.
