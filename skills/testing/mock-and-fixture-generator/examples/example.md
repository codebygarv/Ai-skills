# Example: Mock and Fixture Generator

## Input

> "Generate a mock user profile fixture with standard fields and edge-case variants."

## Output

```typescript
export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: 'member' | 'admin' | 'owner';
  balance: number;
}

export const createMockUser = (overrides?: Partial<MockUser>): MockUser => ({
  id: 'usr_' + Math.random().toString(36).substring(2, 9),
  name: 'Sarah Connor',
  email: 'sarah.connor@example.com',
  role: 'member',
  balance: 149.99,
  ...overrides,
});

export const userEdgeCases: Record<string, MockUser> = {
  unicodeName: createMockUser({ name: 'José González (🔥)' }),
  zeroBalance: createMockUser({ balance: 0 }),
  maxBoundaryBalance: createMockUser({ balance: 9007199254740991 }),
  emptyEmail: createMockUser({ email: '' }),
};
```
