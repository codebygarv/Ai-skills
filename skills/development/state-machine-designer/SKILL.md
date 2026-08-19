---
name: state-machine-designer
description: Designs deterministic Finite State Machines (FSMs) and statecharts for complex UI workflows and backend order lifecycles.
---

## Purpose

Model complex lifecycles (orders, payments, multi-step wizards, IoT device connections) into mathematically sound, deterministic Finite State Machines (FSMs) with explicit states, events, guards, and transition side-effects.

## When to Use

- When code is polluted with dozens of boolean flags (`isLoading`, `isSubmitted`, `hasError`, `canRetry`) creating impossible states.
- Designing distributed transaction orchestrations (Saga lifecycles).
- Modeling complex frontend forms or media player states.

## What to Analyze

1. **State Space**: Exhaustive list of discrete, mutually exclusive states.
2. **Events / Triggers**: Explicit inputs that prompt transitions.
3. **Guards / Conditions**: Pure predicate checks required to permit a transition.
4. **Actions & Side-Effects**: Entry, exit, and transition actions.
5. **Error & Recovery Paths**: Explicit transitions from error states back to operable states.

## Output Format

- **State Transition Table**: [Current State | Event | Guard | Next State | Action].
- **Mermaid State Diagram**: Visual graph of all states and directed transition edges.
- **Type-Safe Implementation**: XState, TypeScript discriminated unions, or backend enum FSM code.
- **Impossible State Proof**: Demonstration of how invalid states are prevented at compile-time.

## Avoid

- Allowing undocumented, wild transitions between arbitrary states.
- Mixing state logic directly inside presentation UI components.
