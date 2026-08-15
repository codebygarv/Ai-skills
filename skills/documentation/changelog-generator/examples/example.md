# Example: Changelog Generator

## Input

Raw commit list:
```
fix null check in auth.js
fix another null check in auth.js
add dark mode toggle
add dark mode persistence to localStorage
remove deprecated /v1/users endpoint
refactor internal query builder
bump lodash version
WIP dark mode css
```

## Output

## v2.4.0 — 2026-08-15

### Added
- Dark mode, with a toggle in settings and your preference remembered across sessions.

### Fixed
- Fixed an issue where users could be unexpectedly signed out due to a null-check bug in authentication.

### Removed
- **Breaking:** removed the deprecated `/v1/users` endpoint. Use `/v2/users` instead.

---

*Internal (not user-facing, omitted from public notes): refactored the internal query builder; bumped `lodash` to the latest version.*

**Notes on synthesis:**
- The two "null check" commits were merged into one Fixed entry since they address the same underlying auth issue.
- The three dark-mode-related commits (toggle, persistence, WIP css) were merged into one Added entry describing the user-facing feature, not three separate implementation steps.
- The `/v1/users` removal is called out as a **Breaking** change since it removes a previously-working endpoint, rather than being grouped anonymously under "Removed."
