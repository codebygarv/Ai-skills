---
name: monorepo-workflow-architect
description: Designs monorepo workspaces, dependency graphs, package sharing, and incremental build pipelines with Turborepo or Nx.
---

## Purpose

Architect scalable monorepo structures (Turborepo, Nx, pnpm workspaces) with strict package boundary isolation, shared internal UI/config/type packages, deterministic dependency graphs, and remote build caching.

## When to Use

- Consolidating multiple standalone repositories into a single unified monorepo.
- Setting up shared UI component libraries, TypeScript configs, or ESLint rules across apps.
- Fixing slow monorepo build times using incremental build pipelines and computation caching.

## What to Analyze

1. **Workspace Topography**: `apps/*` (deployable targets) vs `packages/*` (internal shared libraries).
2. **Dependency Graph Directionality**: Ensuring apps depend on packages, and leaf packages never depend upward.
3. **Shared Configurations**: Centralizing tsconfig, tailwind, eslint, and prettier presets as internal packages.
4. **Task Pipeline Definitions**: Defining `dependsOn` chains (e.g. `build` depends on `^build`) for correct topological execution.
5. **Remote Caching**: Setting up Vercel / Nx Cloud remote build cache to share artifacts across team members and CI.

## Output Format

- **Monorepo Directory Layout**: Clean folder structure diagram.
- **Workspace Config**: `pnpm-workspace.yaml` and `turbo.json` / `nx.json` pipeline configurations.
- **Internal Package Standard**: Template `package.json` using workspace protocol (`workspace:*`).

## Avoid

- Creating circular dependencies between internal workspace packages.
- Installing conflicting version numbers of external dependencies across packages.
