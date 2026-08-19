# Example: Contract Testing Designer

## Input

> "Write a Pact consumer contract test for our React web app calling the User Service."

## Output

```typescript
import { PactV3, MatchersV3 } from '@pact-foundation/pact';

const provider = new PactV3({
  consumer: 'WebApp',
  provider: 'UserService',
});

test('fetches user details by ID', async () => {
  provider
    .given('User with ID usr_123 exists')
    .uponReceiving('A request for user usr_123')
    .withRequest({
      method: 'GET',
      path: '/api/v1/users/usr_123',
    })
    .willRespondWith({
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: {
        id: MatchersV3.string('usr_123'),
        email: MatchersV3.email('user@example.com'),
        tier: MatchersV3.regex(/^(free|pro|enterprise)$/, 'pro'),
      },
    });

  await provider.executeTest(async (mockserver) => {
    const user = await fetchUser(mockserver.url, 'usr_123');
    expect(user.email).toBe('user@example.com');
  });
});
```
