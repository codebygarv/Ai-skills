---
name: release-notes-writer
description: Converts git commits, PR summaries, and changelogs into engaging, user-facing product release notes.
---

## Purpose

Transform raw developer commit logs and PR titles into compelling, customer-centric release notes that highlight user value, new features, bug fixes, and breaking changes.

## When to Use

- Publishing weekly, monthly, or major version product releases.
- Writing app store update descriptions and developer changelog entries.
- Creating internal stakeholder release announcements.

## What to Analyze

1. **Audience**: End-users vs API developers vs Enterprise admins.
2. **Feature Highlights**: Group related changes by customer impact rather than PR order.
3. **Language Translation**: Convert jargon (e.g. `refactor(auth): fix token race condition`) into user value ("Resolved an issue where users were occasionally logged out on mobile").
4. **Breaking Changes**: Clear migration callouts with bold warnings and code diffs.
5. **Call to Action**: Links to documentation, updated SDK versions, or tutorial videos.

## Output Format

- **Release Title & Version**: e.g., `v2.4.0 — Lightning Fast Search & Dark Mode`.
- **Hero Summary**: 2 sentences on the biggest advancement.
- **Categorized Sections**: 🚀 New Features, ⚡ Performance Improvements, 🐛 Bug Fixes, ⚠️ Breaking Changes.
- **Contributor Shoutouts**: Thanking external community contributors.

## Avoid

- Copy-pasting raw git commit hashes and messages ("fix lint", "wip").
- Burying breaking changes at the very bottom without warnings.
