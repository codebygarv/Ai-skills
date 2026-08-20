---
name: fuzz-testing-designer
description: Creates property-based and mutation fuzz testing harnesses (AFL, Atheris, fast-check) to discover unexpected panics and crashes.
---

## Purpose

Design coverage-guided fuzz testing harnesses and property-based tests (AFL, libFuzzer, Atheris, Go native `testing.F`, fast-check) that generate millions of pseudo-random, adversarial inputs to discover buffer overflows, unhandled panics, assertion failures, and infinite loops.

## When to Use

- Testing data parsers (JSON, XML, YAML, binary protocols, image decoders).
- Validating cryptographic algorithms, compilers, and serialization engines.
- Securing untrusted user input handlers against malicious exploit payloads.

## What to Analyze

1. **Fuzz Target Entry Point**: Minimal, deterministic function signature accepting byte slices or structured objects.
2. **Seed Corpus**: High-quality initial valid samples to guide mutation algorithms toward deeper code paths.
3. **Property Invariants**: Assertions that must hold true for *any* input (e.g. `deserialize(serialize(x)) == x`, no unhandled panics, execution completes in <100ms).
4. **Sanitizers**: AddressSanitizer (ASan), MemorySanitizer (MSan), and UndefinedBehaviorSanitizer (UBSan).
5. **Crash Minimization**: Replay and minimization script for discovered failure artifacts.

## Output Format

- **Fuzz Test Harness Code**: Complete test harness in Go (`F.Fuzz`), TypeScript (`fast-check`), Python (`Atheris`), or Rust (`cargo-fuzz`).
- **Property Invariants Specification**: Mathematical or logical invariants asserted.
- **Corpus & Crash Reproducer Guide**: Instructions to reproduce and minimize crashes.

## Avoid

- Performing expensive disk I/O or network calls inside the inner fuzz loop (kills execution throughput).
- Fuzzing non-deterministic code containing random seeds or system timers.
