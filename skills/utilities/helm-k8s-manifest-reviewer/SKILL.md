---
name: helm-k8s-manifest-reviewer
description: Checks Kubernetes manifests and Helm charts for resource limits, readiness probes, and security contexts.
---

## Purpose

Audit Kubernetes manifests (Deployments, Services, Ingress, HPAs) and Helm charts for production readiness, proper resource requests/limits, liveness/readiness probes, pod disruption budgets (PDB), and security context hardening.

## When to Use

- Preparing a new service for deployment onto a Kubernetes cluster.
- Auditing Helm chart templates before release.
- Diagnosing CrashLoopBackOff, sudden pod evictions, or traffic drops during rolling deployments.

## What to Analyze

1. **Resource Specifications**: Explicit `requests` (for scheduling) and `limits` (to prevent node exhaustion) for CPU/memory.
2. **Health Probes**: Distinct `livenessProbe` (restarts hung container), `readinessProbe` (controls traffic routing), and `startupProbe` (slow boots).
3. **Pod Disruption & Graceful Termination**: `terminationGracePeriodSeconds`, `preStop` lifecycle sleep hook, and `PodDisruptionBudget`.
4. **Security Context Hardening**: `readOnlyRootFilesystem: true`, `allowPrivilegeEscalation: false`, `runAsNonRoot: true`, dropping all capabilities (`drop: [ALL]`).
5. **Autoscaling (HPA)**: HorizontalPodAutoscaler targets configured with appropriate min/max replicas.

## Output Format

- **Production Readiness Score**: Checklist of Passed / Failed best practices.
- **Hardened Kubernetes Manifest YAML**: Complete corrected manifest.
- **Helm Values / Template Fixes**: Specific templating corrections.

## Avoid

- Leaving CPU/Memory limits undefined (leads to noisy neighbor node crashes).
- Pointing liveness probes to the same endpoint as readiness probes with zero delay.
