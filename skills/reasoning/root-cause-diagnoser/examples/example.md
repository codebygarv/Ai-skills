# Example: Root Cause Diagnoser

## Input

> "Our payment webhook processor dropped 12% of requests during deployment."

## Output

### 5-Whys Analysis
1. **Why did requests fail?** The webhook listener service threw 502 Bad Gateway errors for 4 minutes.
2. **Why 502 Bad Gateway?** Nginx forwarded traffic to pods that were shutting down during rolling deployment.
3. **Why did pods receive traffic while shutting down?** Kubernetes SIGTERM was handled immediately by exiting the Node.js server without draining active connections or waiting for endpoints removal.
4. **Why was graceful shutdown omitted?** The base template lacked a `preStop` lifecycle hook and `SIGTERM` handler.
5. **Why was this not tested before production?** Deployment rolling updates were never tested under continuous synthetic load in staging.

### Prevention Plan
- Add `preStop: sleep 10` and graceful connection draining in base Helm chart.
- Implement automated zero-downtime deployment gate in CI using synthetic load generator.
