# ✅ Commit Message Expert

Commit messages that actually explain the change.

## What it does

Writes (or reviews) a Git commit message for a given diff, matching the project's existing convention (or Conventional Commits by default), with a clear imperative subject and a body only when the "why" isn't obvious from the diff alone.

## When to use it

- Writing a commit message for a change and want it done properly.
- Reviewing an existing message for clarity/convention compliance.
- A project's history is inconsistent and needs a documented convention going forward.

## Best for

- Writing commit messages for non-trivial changes
- Enforcing/adopting Conventional Commits
- Cleaning up a vague commit message before pushing

## Example usage

> "Write a commit message for this diff" (paste diff or describe the change)

## Expected output

A subject line (imperative, specific, convention-matched), a body only when it adds real context, and a breaking-change footer if applicable.

## Limitations

- Convention detection is based on recent commit history provided — without that context, it defaults to Conventional Commits.
- Can't infer "why" that isn't evident from the diff or given context — will ask rather than invent a plausible-sounding rationale.
