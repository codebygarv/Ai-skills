# Example: Dependency Auditor

## Input

```json
{
  "dependencies": {
    "moment": "^2.29.0",
    "date-fns": "^2.28.0",
    "lodash": "^4.17.15",
    "left-pad": "^1.3.0",
    "request": "^2.88.2",
    "axios": "^1.4.0"
  }
}
```

## Output

**Remove/replace candidates**
- `moment` + `date-fns` — two date libraries doing overlapping work. `moment` is in official maintenance mode with no new features and a documented recommendation from its own maintainers to migrate away. Recommendation: standardize on `date-fns` (already present) and remove `moment`, migrating its call sites.
- `request` + `axios` — two HTTP clients. `request` was fully deprecated (deprecation notice from the maintainers, no further updates). Recommendation: standardize on `axios` (already present) and remove `request`.
- `left-pad` — as of any reasonably modern Node.js/browser target, `String.prototype.padStart` covers this natively. Recommendation: remove and use the built-in.

**Risk**
- `moment` and `request` are both effectively unmaintained (see above) — beyond the duplication concern, this means no future security patches if either ever needs one.

**Note**
- `lodash` (`^4.17.15`) — check whether the codebase uses enough of it to justify the full package vs. per-function imports (`lodash/debounce` etc.) or native alternatives (`Array.prototype` methods now cover a lot of what `lodash` was originally needed for) — not urgent, but worth a bundle-size look if that's a concern.

**Before removing:** confirm actual call sites for `moment`, `request`, and `left-pad` across the codebase (not just this manifest) — grep for their imports to scope the migration effort before deleting the packages.
