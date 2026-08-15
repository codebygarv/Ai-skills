# 📝 Changelog Generator

Turn raw commits into a changelog people will actually read.

## What it does

Converts a list of commits, PR titles, or dev notes into a categorized changelog (Added/Changed/Fixed/Removed/Deprecated/Security), rewritten for user-facing clarity, with duplicate entries merged and breaking changes called out prominently.

## When to use it

- Preparing release notes for a new version.
- Raw commit history is a mix of styles and needs to become coherent notes.
- You have a list of merged PRs and want clean notes generated.

## Best for

- Release note generation
- Cleaning up inconsistent commit-message-derived changelogs
- Making sure breaking changes are surfaced clearly, not buried

## Example usage

> "Turn these commits into a changelog" (paste commit list or PR titles)

## Expected output

A version-headed, category-grouped changelog with one clear sentence per entry in user-facing language, and breaking changes in their own marked subsection.

## Limitations

- Categorization quality depends on commit message clarity — very vague commit messages ("fix stuff") may need the user to clarify actual impact.
- Doesn't automatically detect breaking changes from code — relies on them being evident from the commit/PR description or explicitly flagged.
