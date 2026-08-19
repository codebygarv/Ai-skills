---
name: contributor-guide-writer
description: Creates clear, welcoming CONTRIBUTING.md files, PR templates, and local dev onboarding guides for open source projects.
---

## Purpose

Draft comprehensive, beginner-friendly `CONTRIBUTING.md` guides, GitHub pull request templates, and issue templates to streamline open-source contributions and maintain repo code quality.

## When to Use

- Open-sourcing an internal project or launching a new public repository.
- Improving contributor onboarding when PRs consistently fail CI or lack context.
- Standardizing commit conventions and testing expectations for contributors.

## What to Analyze

1. **Prerequisites & Tooling**: Required Node/Go/Rust/Python versions, package managers, and global CLI tools.
2. **Local Setup Steps**: Exact shell commands from `git clone` to running tests locally.
3. **Contribution Workflow**: Branch naming, Conventional Commits format, PR checklist.
4. **Code Quality Standards**: Running linters, formatters, typecheckers, and test suites before submitting.
5. **Community Etiquette & Code of Conduct**: Guidelines for respectful interaction.

## Output Format

- Complete, markdown-formatted `CONTRIBUTING.md`.
- `.github/PULL_REQUEST_TEMPLATE.md` content.
- `.github/ISSUE_TEMPLATE/` markdown schemas.

## Avoid

- Assuming contributors already know non-standard monorepo commands.
- Overly restrictive walls of text that discourage community participation.
