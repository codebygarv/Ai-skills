---
name: rbac-abac-designer
description: Designs Role-Based and Attribute-Based Access Control models, permission bitmasks, and multi-tenant boundary checks.
---

## Purpose

Architect scalable, secure authorization frameworks supporting Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC), fine-grained permissions, and strict multi-tenant data isolation.

## When to Use

- Implementing workspace roles (Owner, Admin, Editor, Viewer) in a B2B SaaS application.
- Designing resource-level permissions (e.g. "Can edit document only if document belongs to user's team AND status is draft").
- Preventing Insecure Direct Object References (IDOR) and cross-tenant data leakage.

## What to Analyze

1. **Authorization Paradigm**: RBAC (role assigned to user) vs ABAC (policy based on user attributes + resource attributes + environment).
2. **Permission Granularity**: Action-resource strings (e.g. `documents:write`, `billing:manage`) or numeric bitmasks.
3. **Tenant Boundary Enforcement**: Automated row-level security (RLS) or mandatory `where tenant_id = :tenant_id` query wrappers.
4. **Hierarchical Roles & Inheritance**: Admin inheriting all Editor permissions cleanly without duplication.
5. **Performance & Caching**: Pre-computing permission bitmasks or caching token claims vs dynamic policy evaluation.

## Output Format

- **Permission Matrix**: Table of Roles vs Granular Permissions.
- **Data Model Schema**: Tables/schemas for `users`, `roles`, `permissions`, and `role_permissions`.
- **Policy Enforcement Guard Code**: Middleware or decorator function asserting permissions on endpoints.

## Avoid

- Hardcoding role strings (`if (user.role === 'admin')`) scattered across business logic instead of checking granular permissions.
- Relying on frontend UI visibility to enforce security.
