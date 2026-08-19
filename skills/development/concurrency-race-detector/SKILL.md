---
name: concurrency-race-detector
description: Identifies race conditions, mutex contention, unsafe shared state, and deadlocks in concurrent and async code.
---

## Purpose

Detect and resolve concurrency vulnerabilities, shared-state data races, asynchronous interleaving bugs, lock inversion deadlocks, and missed synchronization in multi-threaded or async event-loop environments.

## When to Use

- When debugging intermittent bugs that only reproduce under high concurrency or specific network latency.
- Reviewing shared in-memory caches, counter updates, or distributed lock implementations.
- Writing Go goroutines, Rust async/tokio, Java threads, or Node.js async operations with shared references.

## What to Analyze

1. **Shared Mutable State**: Find variables, collections, or files accessed concurrently without atomics or locks.
2. **Check-Then-Act Flaws (TOCTOU)**: Inspect code where state is checked, and acted upon in separate non-atomic operations.
3. **Lock Ordering & Deadlocks**: Trace acquisition order of multiple mutexes across threads.
4. **Node.js Event Loop Interleaving**: Identify `await` calls between reading and writing shared object properties.
5. **Database Transaction Isolation**: Check for lost updates or phantom reads under `READ COMMITTED` isolation.

## Output Format

- **Vulnerability Breakdown**: Exact line references and the failing execution trace interleaving.
- **Reproduction Scenario**: Sequence diagram or step-by-step thread execution trace showing the race.
- **Remediation Code**: Thread-safe refactoring using atomic primitives, locks, mutexes, or immutability.
- **Verification Strategy**: Stress test script / race detector command (e.g. `go test -race`).

## Avoid

- Assuming single-threaded JavaScript runtimes are immune to async race conditions across `await` boundaries.
- Suggesting coarse global locks that kill multi-core throughput.
