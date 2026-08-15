# Example: Requirements Extractor

## Input

> "Extract requirements from this: 'Add user profiles so people can customize their account.'"

## Output

**Functional requirements:**
1. A user can view their own profile.
2. A user can edit their own profile fields (name, avatar, bio — pending confirmation of exact field set).
3. A user can save changes and see them reflected immediately.
4. Other users can view a given user's public profile (pending confirmation this is intended to be public-facing, not private settings).

**Technical / non-functional requirements:**
1. Profile edits must be validated server-side, not just client-side.
2. Avatar uploads (if included) must have a file-size and file-type limit.
3. Profile pages must be accessible (proper labels, keyboard navigable) if publicly viewable.
4. Profile data changes should be auditable/loggable if this data feeds any compliance or trust-and-safety process.

**Out of scope (assumed unless stated):**
- Social features (following, comments on profiles)
- Profile verification/badges

**Open questions (ranked by impact):**
1. **Which fields are customizable?** (name, avatar, bio, links, theme?) — this defines most of the actual implementation work.
2. **Is the profile public, private, or configurable per-field?** — changes whether this needs permission/visibility logic at all.
3. **Is there an existing design for this, or does UI need to be designed from scratch?**
4. **Any file storage constraints for avatar uploads** (size limits, CDN, moderation)?
