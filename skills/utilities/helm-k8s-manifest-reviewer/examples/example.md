# Example: Helm and K8s Manifest Reviewer

## Input

> "Review this basic Kubernetes Deployment manifest."

## Output

### Hardened Deployment Manifest
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-api
spec:
  replicas: 3
  selector:
    matchLabels: { app: web-api }
  template:
    metadata:
      labels: { app: web-api }
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 10001
      terminationGracePeriodSeconds: 30
      containers:
        - name: api
          image: registry.example.com/web-api:v1.2.0
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            capabilities: { drop: ["ALL"] }
          resources:
            requests: { cpu: "250m", memory: "256Mi" }
            limits: { cpu: "1000m", memory: "512Mi" }
          readinessProbe:
            httpGet: { path: /health/ready, port: 8080 }
            initialDelaySeconds: 5
            periodSeconds: 5
          livenessProbe:
            httpGet: { path: /health/live, port: 8080 }
            initialDelaySeconds: 15
            periodSeconds: 10
```
