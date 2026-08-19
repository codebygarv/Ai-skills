---
name: dockerfile-optimizer
description: Audits Dockerfiles for multi-stage build efficiency, layer caching, non-root security, and minimal base image footprint.
---

## Purpose

Analyze and optimize container Dockerfiles for minimal image size (Alpine / Distroless), lightning-fast layer caching, non-root security hardening, and clean signal handling.

## When to Use

- Container image builds take minutes instead of seconds in CI.
- Production images are bloated (e.g. 1.5GB for a simple Node or Go binary).
- Security vulnerability scans flag build toolchains (gcc, git, npm) present in production runtime images.

## What to Analyze

1. **Multi-Stage Builds**: Separate build-time dependencies (compilers, devDependencies) from lean runtime artifacts.
2. **Layer Caching Optimization**: Copy lockfiles and install dependencies *before* copying entire application source code.
3. **Base Image Selection**: Use minimal, patched base images (`node:20-alpine`, `gcr.io/distroless/static`, `chainguard`).
4. **Security Hardening**: Explicit non-root user creation (`USER node` / `USER nonroot`), removing package managers from final image.
5. **Execution Mechanics**: Use exec form (`ENTRYPOINT ["node", "server.js"]`) rather than shell form to ensure proper PID 1 signal forwarding.

## Output Format

- **Optimized Dockerfile**: Production-ready, commented multi-stage Dockerfile.
- **Image Size Comparison**: Estimated reduction (e.g. 1.2GB $ightarrow$ 85MB).
- **Security & Caching Improvements**: Explanation of layer order and user hardening.

## Avoid

- Running containers as root (`UID 0`) in production.
- Using `ADD` instead of `COPY` for local files.
