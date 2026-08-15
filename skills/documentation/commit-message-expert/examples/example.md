# Example: Commit Message Expert

## Input

Diff summary: switched the session token expiry check from comparing against a hardcoded 24-hour window to reading an `expiresAt` timestamp stored on the token itself, because tokens issued via SSO had a different, shorter intended lifetime that the hardcoded check was ignoring.

## Output

```
fix(auth): respect per-token expiry instead of hardcoded 24h window

Session validation previously checked tokens against a fixed 24-hour
expiry regardless of how they were issued. SSO-issued tokens are meant
to expire sooner, but the hardcoded window silently extended their
lifetime to 24h anyway.

Now reads the expiresAt timestamp stored on the token at issuance,
so each token's actual intended lifetime is respected.
```

**Why this shape:**
- `fix(auth):` — matches Conventional Commits, `fix` because this corrects incorrect behavior (SSO tokens living longer than intended), scoped to `auth` since that's the affected area.
- Subject is imperative ("respect," not "respects"/"respected") and specific enough to be useful in a log scan, not just "fix token bug."
- Body is included because the *why* (SSO tokens had a different intended lifetime the old check ignored) isn't obvious from a one-line diff summary alone — a reader six months from now needs that context to understand why the change was made, not just what changed.
- No breaking-change footer — this is a fix restoring intended behavior, not a change to a public contract that existing callers depend on differently.
