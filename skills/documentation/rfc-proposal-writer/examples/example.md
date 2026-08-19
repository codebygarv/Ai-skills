# Example: RFC Proposal Writer

## Input

> "Write an RFC for introducing distributed tracing with OpenTelemetry across our backend microservices."

## Output

```markdown
# RFC-042: Standardizing Distributed Tracing with OpenTelemetry

## Summary
Implement end-to-end distributed tracing across our 12 backend Go and Node.js services using OpenTelemetry (OTel) and export trace spans to SigNoz.

## Motivation
With our recent microservice migration, single API requests cross up to 6 network boundaries. We currently lack visibility into cross-service latency bottlenecks and cascading failures.

## Detailed Design
1. **Trace Context Propagation**: Inject W3C `traceparent` headers on all outgoing HTTP and gRPC requests.
2. **Auto-Instrumentation**: Use OTel SDK auto-instrumentation for database queries and HTTP routers.
3. **Sampling Strategy**: 100% trace sampling on errors (5xx) and 5% head-based probabilistic sampling for standard 200 OK traffic to control storage costs.

## Alternatives Considered
- *Jaeger Self-Hosted*: Higher maintenance overhead compared to managed OTel collector.
- *Vendor APM (Datadog)*: 4x more expensive for our trace volume.
```
