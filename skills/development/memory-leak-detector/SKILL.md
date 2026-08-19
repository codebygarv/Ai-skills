---
name: memory-leak-detector
description: Identifies unclosed handles, event listener accumulation, retain cycles, and heap memory leak patterns.
---

## Purpose

Detect and fix memory leaks, lingering closures, detached DOM trees, unbounded cache growth, and uncollected resources in Node.js, JavaScript, Python, Go, and mobile applications.

## When to Use

- Applications whose memory (RSS / Heap) steadily climbs until crashing with Out-Of-Memory (OOM) errors.
- Investigating heap profile snapshots and GC thrashing.
- Reviewing caching layers, WebSocket connection registries, and event listeners.

## What to Analyze

1. **Unbounded In-Memory Collections**: Global arrays/maps that append data without TTL, LRU eviction, or size caps.
2. **Lingering Event Listeners / Subscriptions**: Attaching listeners on recurring objects without matching `removeEventListener` / `unsubscribe`.
3. **Closure Scope Retention**: Outer scope variables captured unintentionally by long-lived closures or callbacks.
4. **Unclosed System Handles**: Database connections, file descriptors, streams, or timers (`setInterval`) left running.
5. **Detached DOM Nodes**: In frontend SPAs, keeping JS object references to HTML elements removed from the document.

## Output Format

- **Leak Mechanism**: Detailed explanation of why the garbage collector cannot free the allocated memory.
- **Code Offender**: Exact snippet causing the retention.
- **Fixed Implementation**: Leak-free pattern (using WeakMap, LRU caches, cleanup hooks, or `AbortController`).
- **Heap Verification Guide**: How to verify the fix via heap snapshots or profiling tools.

## Avoid

- Band-aid solutions like restarting pods every 2 hours without fixing the leak.
- Using plain Javascript `Map` or `Object` as unbounded global caches.
