---
name: rfc-proposal-writer
description: Drafts formal technical Requests for Comments (RFCs) complete with motivation, architecture design, and rollout plan.
---

## Purpose

Author comprehensive, highly structured Request for Comments (RFC) engineering proposals that clearly articulate the motivation, technical design, alternatives considered, security implications, and rollout phases for major technical initiatives.

## When to Use

- Proposing large architectural refactors, new microservices, or shared libraries.
- Introducing major third-party vendors or new programming languages to the stack.
- Building consensus across distributed engineering teams before writing code.

## What to Analyze

1. **Problem Statement & Motivation**: What business or engineering pain point requires solving now?
2. **Proposed Solution & Architecture**: System diagrams, API payloads, schema migrations, and sequence flows.
3. **Non-Goals**: Explicitly stating what this proposal will *not* attempt to solve.
4. **Security & Privacy Considerations**: Auth, PII handling, rate limiting, attack surface.
5. **Rollout & Migration Strategy**: Phased rollout, feature flags, rollback triggers, and monitoring metrics.

## Output Format

- Markdown RFC document with formal sections: Summary, Motivation, Detailed Design, Drawbacks, Alternatives Considered, Rollout Plan.

## Avoid

- Hand-waving implementation details without concrete data schemas or API payloads.
- Omitting drawbacks and potential operational hazards.
