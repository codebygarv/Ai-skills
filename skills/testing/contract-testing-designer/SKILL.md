---
name: contract-testing-designer
description: Establishes consumer-driven contract tests using Pact or OpenAPI to prevent breaking changes across services.
---

## Purpose

Design consumer-driven contract testing suites (Pact, OpenAPI contract validators) to ensure microservices and frontend/backend interfaces stay compatible without requiring expensive, brittle end-to-end test environments.

## When to Use

- Microservices that communicate over HTTP REST, gRPC, or message queues.
- Preventing frontend outages caused by uncoordinated backend API payload changes.
- Replacing flaky end-to-end staging environments with fast, isolated CI contract verification.

## What to Analyze

1. **Consumer Expectations**: What fields does the client actually read and rely on?
2. **Provider State Definitions**: Setting up backend database fixtures to satisfy contract scenarios.
3. **Contract Serialization (Pact JSON / OpenAPI Schema)**: Contract artifact published to a central broker.
4. **CI Verification Gate**: Provider builds verifying against all active consumer contracts before deploying (`can-i-deploy`).

## Output Format

- **Consumer Contract Test**: Pact consumer test asserting request shape and response mock.
- **Provider Verification Test**: Provider test running against the contract with state handlers.
- **CI Pipeline Workflow**: Integration with Pact Broker or schema registry.

## Avoid

- Writing contracts that assert on every unused field in the response (violates consumer-driven principle).
- Relying on manual human reviews to detect breaking JSON changes.
