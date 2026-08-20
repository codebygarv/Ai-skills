# Example: Multi-Tenant Data Partitioner

## Input

> "Design a multi-tenant PostgreSQL schema with Row-Level Security for our B2B SaaS app."

## Output

### PostgreSQL Row-Level Security (RLS) Policy
```sql
-- Enable RLS on business table
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Create tenant isolation policy
CREATE POLICY tenant_isolation_policy ON documents
  FOR ALL
  USING (tenant_id = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);
```

### Application Tenant Context Middleware (Node.js/Prisma)
```typescript
export async function withTenantContext<T>(tenantId: string, fn: (tx: PrismaClient) => Promise<T>): Promise<T> {
  return prisma.$transaction(async (tx) => {
    // Set session variable for RLS policy
    await tx.$executeRawUnsafe(`SET LOCAL app.current_tenant_id = '${tenantId}'`);
    return fn(tx);
  });
}
```
