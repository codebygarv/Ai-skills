---
name: otel-collector-configurator
description: Designs OpenTelemetry Collector pipelines (receivers, processors, exporters) with batching and redaction.
---

## Purpose

Architect and configure production OpenTelemetry (OTel) Collector pipelines to ingest, filter, batch, redact sensitive PII, and export distributed traces, metrics, and logs to observability backends (Prometheus, Jaeger, Datadog, Grafana Tempo, SigNoz).

## When to Use

- Centralizing telemetry across microservices without vendor lock-in.
- Filtering out high-frequency health-check traces to reduce APM storage costs.
- Scrubbing sensitive credit card or user authorization data from telemetry spans before exporting.

## What to Analyze

1. **Receivers**: OTLP (gRPC `:4317` and HTTP `:4318`), Prometheus scraper, Jaeger receiver.
2. **Processors**:
   - `memory_limiter`: Prevent collector process from crashing on traffic spikes.
   - `batch`: Buffer and compress spans before sending over the network.
   - `transform` / `attributes`: Redact sensitive headers, insert cluster/environment tags.
   - `filter`: Drop `/healthz` and `/metrics` traces.
3. **Exporters**: OTLP gRPC/HTTP exporter, Prometheus exporter, Debug/logging exporter.
4. **Pipelines**: Explicit `traces`, `metrics`, and `logs` service pipelines.
5. **Deployment Mode**: Sidecar vs DaemonSet vs Centralized Load-Balanced Gateway.

## Output Format

- **Complete `otel-collector-config.yaml`**: Production-ready configuration.
- **Pipeline Architecture Diagram (Mermaid)**: Ingest $ightarrow$ Processors $ightarrow$ Exporters.
- **Resource Sizing & Tuning Guide**: Recommended CPU/memory requests and queue sizes.

## Avoid

- Placing the `batch` processor before the `memory_limiter` processor.
- Leaving `/healthz` endpoint tracing enabled at 100% sample rate.
