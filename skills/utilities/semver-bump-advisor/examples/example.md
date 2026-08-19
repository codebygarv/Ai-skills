# Example: SemVer Bump Advisor

## Input

> "We changed our function signature from `fetchUser(id, options?)` to `fetchUser(options: { id: string, timeout?: number })`. What SemVer bump is required?"

## Output

### Recommended Version Bump: **MAJOR** (e.g. `1.5.0` $ightarrow$ `2.0.0`)

### Rationale
- **Breaking Change**: Changing the first positional argument from `string` to an `options` object breaks existing consumer code calling `fetchUser('usr_123')`.
- Under SemVer 2.0.0 rule 8, any breaking public API contract change requires incrementing the MAJOR version.

### Backwards-Compatible Alternative (if you want a MINOR bump):
```typescript
// Overload signature to support both without breaking existing code
export function fetchUser(id: string, options?: UserFetchOptions): Promise<User>;
export function fetchUser(options: UserFetchOptionsWithId): Promise<User>;
export function fetchUser(idOrOptions: string | UserFetchOptionsWithId, maybeOptions?: UserFetchOptions): Promise<User> {
  // Implementation handling both
}
```
