# Example: Chaos Experiment Designer

## Input

> "Design a chaos experiment to test how our checkout service handles third-party tax API outages."

## Output

### Hypothesis
*When the external Tax Calculation API experiences 2,000ms latency or 100% 500 errors, checkout requests will fall back to cached regional tax estimates within 100ms with zero customer-facing checkout failures.*

### Chaos Injection Specification (Chaos Mesh)
```yaml
apiVersion: chaos-mesh.org/v1alpha1
kind: NetworkChaos
metadata:
  name: tax-api-latency
spec:
  action: delay
  mode: all
  selector:
    namespaces: [staging]
    labelSelectors: { app: checkout-service }
  delay:
    latency: '3000ms'
    jitter: '200ms'
  direction: to
  target:
    externalTargets: ['api.taxprovider.com']
  duration: '5m'
```

### Abort Threshold
If customer checkout error rate exceeds 0.5% for > 30 seconds, automatically terminate the NetworkChaos resource.
