# 🛡️ TypeScript Guardian

Deep review of type safety, not general code quality.

## What it does

Reviews TypeScript specifically for type-system soundness: `any` usage, risky type assertions, overly loose types, unsound generics, and missing narrowing — each with the concrete runtime bug the looseness could let through.

## When to use it

- Reviewing TypeScript where type safety specifically matters (shared libraries, public APIs).
- Type errors keep slipping through despite using TypeScript.
- Before widening a type's public surface.

## Best for

- Shared library / SDK type reviews
- Public API and exported interface design
- Cleaning up accumulated `any` in a codebase

## Example usage

> "TypeScript guardian review this" (paste code with generics/any usage)

## Expected output

Findings grouped Unsound → Loose → Style, each with the file/line, the unsound pattern, the runtime bug it could let through, and a safer typed alternative as real code.

## Limitations

- Type-system focused only — pair with [Code Reviewer](../code-reviewer/) for general logic/readability review.
- Proposed types are reasoned about, not compiler-verified — double-check non-trivial generic fixes actually type-check in your project.
