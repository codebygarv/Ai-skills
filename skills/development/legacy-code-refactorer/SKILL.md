---
name: legacy-code-refactorer
description: Formulates safe Mikado Method refactoring dependency graphs and Strangler Fig extraction paths for fragile legacy codebases.
---

## Purpose

Plan safe, incremental refactorings of complex, untested legacy codebases using proven methodologies (Mikado Method, Characterization Testing, Strangler Fig pattern, Seams) without breaking production behavior.

## When to Use

- Refactoring sprawling 3,000-line "God classes" or legacy spaghetti functions.
- Untangling deeply coupled monolithic code with zero existing unit tests.
- Modernizing ancient callback-hell or global-state architectures into clean, testable interfaces.

## What to Analyze

1. **Characterization Tests (Golden Master)**: Capture existing behavior with black-box snapshot tests before touching code.
2. **Mikado Graph**: Map dependency prerequisites to identify leaf nodes that can be refactored safely first.
3. **Seam Identification**: Find places where behavior can be intercepted and mocked without editing core logic.
4. **Extract Interface & Dependency Injection**: Replace direct static class instantiation with injected interfaces.
5. **Incremental Verification**: Ensure every micro-step leaves the codebase in a releasable, passing state.

## Output Format

- **Mikado Refactoring Dependency Tree**: Step-by-step ordered graph of prerequisite tasks.
- **Characterization Test Harness**: Safety-net test verifying existing input/output contracts.
- **Before / After Code Diffs**: Clean step-by-step refactoring transformations.

## Avoid

- Attempting a "Big Bang" rewrite from scratch that never reaches production.
- Refactoring internal logic before establishing characterization test safety nets.
