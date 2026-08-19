# 💧 Memory Leak Detector

Identify and eliminate memory leaks, unbounded cache growth, and uncollected closures.

## What it does

Surfaces root causes of memory leaks across backend servers and frontend applications, providing leak-free refactorings with WeakRefs, proper disposal hooks, and bounded caches.

## When to use it

- Pods crashing due to OOM (Out Of Memory) under steady traffic.
- Frontend single-page apps slowing down over long user sessions.
- Reviewing streaming and WebSocket server code.

## Best for

- Node.js, V8 heap profiling
- React / Vue component lifecycle cleanup
- Go / Python memory diagnostics
