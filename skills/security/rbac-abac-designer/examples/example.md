# Example: RBAC and ABAC Designer

## Input

> "Design a permissions model for a document workspace with Owners, Editors, and Viewers, plus resource-level overrides."

## Output

### Permission Matrix
| Permission | Owner | Editor | Viewer |
|---|---|---|---|
| `workspace:delete` | ✅ | ❌ | ❌ |
| `billing:manage` | ✅ | ❌ | ❌ |
| `members:invite` | ✅ | ❌ | ❌ |
| `document:create` | ✅ | ✅ | ❌ |
| `document:edit` | ✅ | ✅ | ❌ (Unless explicitly shared) |
| `document:read` | ✅ | ✅ | ✅ |

### ABAC Policy Rule (Open Policy Agent / TypeScript)
```typescript
export function canEditDocument(user: User, doc: Document): boolean {
  // Tenant guard
  if (user.tenantId !== doc.tenantId) return false;

  // Role check
  if (user.role === 'owner' || user.role === 'editor') return true;

  // ABAC direct resource share
  return doc.sharedEditorUserIds.includes(user.id);
}
```
