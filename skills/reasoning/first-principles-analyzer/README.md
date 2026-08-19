# 🧩 First Principles Analyzer

Deconstruct problems down to fundamental truths rather than reasoning by analogy.

## What it does

Breaks down complex technical problems and bloated architectures to their fundamental physical and computational limits, eliminating cargo-culting and assumed best practices.

## When to use it

- Rethinking an overly complicated architecture.
- Questioning standard toolchain assumptions (e.g. "Do we really need Kafka for 50 requests/sec?").
- Designing novel systems with unique performance or cost requirements.

## Best for

- Architecture simplification
- Cost reduction
- Performance optimization
- Green-field system design

## Example usage

> "Analyze our event notification pipeline using first principles: we currently publish to RabbitMQ, consume in Python, write to Redis, and send via WebSockets."

## Expected output

A structured deconstruction separating hard constraints from artificial conventions, followed by the leanest first-principles architecture.

## Limitations

- Does not favor quick hacky shortcuts over deep structural thinking.
- May recommend custom lean designs that require more foundational understanding than off-the-shelf SaaS.
