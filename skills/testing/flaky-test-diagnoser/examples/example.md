# Example: Flaky Test Diagnoser

## Input

> "This fails maybe 1 in 10 CI runs, never locally."

```js
test('shows the newest notification first', async () => {
  await createNotification({ text: 'first' });
  await createNotification({ text: 'second' });

  render(<NotificationList />);
  await new Promise(r => setTimeout(r, 100));

  const items = screen.getAllByRole('listitem');
  expect(items[0]).toHaveTextContent('second');
});
```

## Output

**Most likely cause: nondeterministic sort ordering from identical timestamps.**

Both notifications are created back-to-back with no delay between them. If `createNotification` stamps `createdAt` with millisecond precision, both records can land on the *same millisecond*. When the list then sorts by `createdAt` descending, two equal keys leave the relative order down to the sort implementation and the order rows came back from the database — which isn't guaranteed without an explicit tiebreaker.

**Why it's intermittent:** locally, the two `await`ed calls are usually slow enough apart to land on different milliseconds. On a fast or differently-loaded CI runner, they collide often enough to fail roughly one run in ten — matching the reported rate.

**Secondary issue: `setTimeout(r, 100)` is a fixed-duration wait.** Even once ordering is fixed, this races render completion — 100ms is enough on a fast machine and may not be on a loaded CI runner. It's a latent second flake.

**Fix:**

```js
test('shows the newest notification first', async () => {
  // Explicit, distinct timestamps — no reliance on wall-clock separation
  await createNotification({ text: 'first',  createdAt: new Date('2026-01-01T10:00:00Z') });
  await createNotification({ text: 'second', createdAt: new Date('2026-01-01T10:00:01Z') });

  render(<NotificationList />);

  // Wait for the condition, not for a duration
  const items = await screen.findAllByRole('listitem');
  expect(items[0]).toHaveTextContent('second');
});
```

Separately, add a stable tiebreaker to the production query (e.g. `ORDER BY created_at DESC, id DESC`) — otherwise the same ambiguity exists for real users whose notifications arrive in the same millisecond, not just in tests.

**How to confirm:** run the original test in a loop (`for i in {1..50}; do npm test -- notification; done`) to reproduce the failure reliably, then run the same loop after the fix. If the ordering diagnosis is right, the original will fail several times in 50 and the fixed version zero.
