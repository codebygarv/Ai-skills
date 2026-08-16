# 👋 Onboarding Guide Generator

Get a new engineer from clone to first PR faster.

## What it does

Generates an onboarding guide grounded in the actual codebase — real setup steps, an architecture overview, key files to start reading, and a well-scoped first task — instead of a generic welcome template.

## When to use it

- A project has no onboarding doc, or an outdated one.
- Preparing for a new hire or contributor.
- You want a "getting started" doc for a codebase.

## Best for

- New-hire onboarding documentation
- Contributor "getting started" guides for open-source projects
- Refreshing a stale onboarding doc against the current codebase

## Example usage

> "Generate an onboarding guide for this codebase" (point to the repo/package manifest, or paste key files)

## Expected output

Setup steps (verified against the real manifest/scripts), an architecture overview, a key-files list, a suggested first task, and a getting-help section if that info is provided.

## Limitations

- Setup steps are only as accurate as the source provided — verify against the actual manifest before publishing.
- Won't invent team contact points/channels — only includes a "getting help" section if that information is actually given.
