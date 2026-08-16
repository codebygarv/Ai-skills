# Example: Auth Flow Reviewer

## Input

```js
app.post('/login', async (req, res) => {
  const user = await db.users.findByEmail(req.body.email);
  if (!user) return res.status(401).send('User not found');
  const valid = await bcrypt.compare(req.body.password, user.passwordHash);
  if (!valid) return res.status(401).send('Wrong password');

  req.session.userId = user.id; // req.session already exists from a pre-login anonymous session
  res.json({ token: jwt.sign({ userId: user.id }, SECRET) });
});

app.post('/logout', (req, res) => {
  res.clearCookie('session');
  res.json({ success: true });
});
```

## Output

**Credential Handling — Medium**
- The 401 responses differ by reason ("User not found" vs. "Wrong password"), which lets an attacker enumerate valid emails by observing which message they get back.
  - Fix: return the same generic message ("Invalid email or password") for both cases.

**Session Lifecycle — High**
- `req.session.userId = user.id` reuses the *existing* session object that was already created before login (a session-fixation risk — if an attacker can set a victim's pre-login session ID, e.g. via a subdomain cookie trick, they get authenticated access once the victim logs in under that same session).
  - Fix: regenerate the session ID on successful login (most session middleware exposes a `regenerate()` call) before setting `userId`.

**Session Lifecycle — High**
- `/logout` only calls `res.clearCookie('session')` — this removes the client-side cookie but does nothing server-side. If sessions are stored server-side (e.g. in Redis/a sessions table), the session remains valid; anyone who captured the cookie before logout (e.g. via a shared device, a proxy log, or XSS) can continue using it after the "logged out" user believes they're safe.
  - Fix: explicitly destroy the server-side session record on logout (`req.session.destroy()`), in addition to clearing the cookie.

**Token Handling — Medium**
- The login response also issues a JWT (`jwt.sign(...)`) alongside the session — two parallel auth mechanisms exist simultaneously with no clear indication of which one actually gates access to protected routes, or whether logout invalidates the JWT too (JWTs are typically stateless and can't be server-side invalidated without an additional revocation list).
  - Fix: clarify whether session or JWT is the source of truth; if JWTs are kept, either keep them very short-lived or maintain a revocation mechanism, since the logout fix above won't invalidate an already-issued JWT.

**Top priority:** session fixation and the no-op logout are the two issues that mean a compromised session can outlive the user believing they've secured their account — fix both before the enumeration/JWT issues.
