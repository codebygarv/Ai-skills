---
name: sdk-getting-started-writer
description: Crafts developer quickstart guides, language SDK installation snippets, and copy-pasteable curl/Python/TypeScript samples.
---

## Purpose

Write developer-first "Getting Started" guides, SDK quickstarts, and interactive code snippets that enable engineers to make their first successful API call in under 3 minutes.

## When to Use

- Launching a public API, developer SDK, or open-source library.
- High developer drop-off between creating an API key and making their first request.
- Writing documentation for multi-language client libraries (Node, Python, Go, cURL).

## What to Analyze

1. **Time-to-First-Hello-World**: Minimize steps between package install and first successful response.
2. **Prerequisites & API Key Setup**: Clear instructions on environment variables (`export API_KEY=...`).
3. **Multi-Language Tabbed Snippets**: Provide identical minimal examples in cURL, TypeScript, Python, and Go.
4. **Copy-Pasteable Completeness**: Snippets must be 100% executable without missing imports or placeholder pseudo-code.
5. **Immediate Next Steps**: Direct links to full API reference, webhook setup, and error code tables.

## Output Format

- **Quickstart Guide Markdown**: 3-step guide: Install $ightarrow$ Configure $ightarrow$ First Request.
- **Multi-Language Code Blocks**: Tabbed cURL, Node.js, and Python working code.
- **Expected JSON Response**: Actual payload returned on success.

## Avoid

- Hiding package install commands behind long introductory marketing paragraphs.
- Using un-runnable snippet fragments that omit imports or authentication headers.
