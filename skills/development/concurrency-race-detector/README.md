# 🏎️ Concurrency Race Detector

Detect and resolve data races, async state corruption, and deadlock conditions.

## What it does

Analyzes asynchronous and multi-threaded code to surface subtle timing bugs, Check-Then-Act races, and lock ordering hazards.

## When to use it

- Inspecting high-concurrency payment, inventory, or booking services.
- Reviewing Go channels/goroutines, Rust async code, or Node.js shared state.
- Investigating intermittent "flaky" production bugs.

## Best for

- Concurrency safety
- Thread safety and lock analysis
- Distributed locking and transaction isolation
