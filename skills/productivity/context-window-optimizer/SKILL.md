---
name: context-window-optimizer
description: Curates and condenses codebase context, file contents, and prompts to optimize LLM token usage and response quality.
---

## Purpose

Compress, filter, and structure codebase context and instructions provided to AI coding agents and LLMs, maximizing token efficiency, eliminating noise, and preventing context window dilution.

## When to Use

- Feeding large codebases, trace logs, or documentation into AI assistants.
- Hitting token context limits in AI agent sessions.
- Improving LLM reasoning accuracy by stripping unneeded boilerplate and node_modules cruft.

## What to Analyze

1. **Signal-to-Noise Ratio**: Strip minified bundles, lockfiles, compiled artifacts, and repetitive mock fixtures.
2. **Skeleton & Interface Extraction**: Extract TypeScript interfaces, class signatures, and exported function headers rather than full 1,000-line function bodies.
3. **Log & Trace Compression**: Deduplicate repeated stack traces, error loops, and verbose debug strings into frequency summaries.
4. **Structured Chunking**: Organize context into semantic markdown blocks with unambiguous file paths.

## Output Format

- **Optimized Context Package**: Clean, condensed markdown representation of the essential code/architecture.
- **Token Reduction Score**: Estimated tokens saved (e.g. 75,000 tokens $ightarrow$ 6,200 tokens, 91% reduction).
- **Extracted Type Interface Summary**: High-signal API surface overview.

## Avoid

- Dumping 50,000-line `package-lock.json` files into LLM context.
- Stripping crucial type signatures or error definitions needed for reasoning.
