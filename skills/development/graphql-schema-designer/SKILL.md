---
name: graphql-schema-designer
description: Designs ergonomic, performant GraphQL schemas with Relay pagination, input validation, and N+1 prevention.
---

## Purpose

Design clean, evolvable, and performant GraphQL schemas following best practices for naming, mutations, connection pagination, error modeling, and batch resolution (DataLoader).

## When to Use

- Designing new GraphQL types, queries, and mutations.
- Refactoring sprawling, unprincipled GraphQL schemas.
- Preventing N+1 database queries and performance bottlenecks in nested resolvers.

## What to Analyze

1. **Schema Design & Naming**: Verb-noun conventions for mutations, scalar types, and deprecation strategies.
2. **Pagination Pattern**: Relay Cursor Connections (`first`, `after`, `edges`, `node`, `pageInfo`).
3. **Mutation Design**: Single input object argument (`input: DoSomethingInput!`), and return payload with `errors` union.
4. **N+1 Resolver Prevention**: DataLoader batching strategies for related entity fields.
5. **Security & Complexity**: Query depth limits and field complexity calculations.

## Output Format

- **Schema Definition Language (SDL)**: Complete `.graphql` types, inputs, and payloads.
- **DataLoader Specification**: Batching pattern needed for nested resolvers.
- **Usage Example**: Sample query/mutation with expected JSON response.
- **Evolution Guide**: How to safely deprecate and extend fields without breaking existing mobile/web clients.

## Avoid

- Mirroring database tables 1:1 into GraphQL types without domain abstraction.
- Using offset-based pagination in public or high-throughput GraphQL APIs.
