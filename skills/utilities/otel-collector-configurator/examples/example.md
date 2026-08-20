# Example: OpenTelemetry Collector Configurator

## Input

> "Configure an OpenTelemetry Collector to accept OTLP traces and metrics, drop health check spans, batch them, and export to SigNoz and Prometheus."

## Output

```yaml
receivers:
  otlp:
    protocols:
      grpc: { endpoint: 0.0.0.0:4317 }
      http: { endpoint: 0.0.0.0:4318 }

processors:
  memory_limiter:
    check_interval: 1s
    limit_percentage: 75
    spike_limit_percentage: 20
  filter/drop_health:
    traces:
      span:
        - 'attributes["http.target"] == "/healthz"'
        - 'attributes["http.target"] == "/ready"'
  batch:
    send_batch_size: 1024
    timeout: 1s

exporters:
  otlp/signoz:
    endpoint: signoz-otel-collector:4317
    tls: { insecure: true }
  prometheus:
    endpoint: 0.0.0.0:8889

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [memory_limiter, filter/drop_health, batch]
      exporters: [otlp/signoz]
    metrics:
      receivers: [otlp]
      processors: [memory_limiter, batch]
      exporters: [prometheus]
```
