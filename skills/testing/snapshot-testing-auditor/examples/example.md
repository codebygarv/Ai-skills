# Example: Snapshot Testing Auditor

## Input

> "Our test suite has a 400-line snapshot for `<UserProfileCard />` that breaks every time we change a Tailwind padding class."

## Output

### Diagnosis: Fragile Structural Coupling
The test uses `expect(wrapper).toMatchSnapshot()` on the entire rendered DOM, asserting on CSS class strings rather than accessible user-facing content.

### Refactored Semantic Test
```typescript
import { render, screen } from '@testing-library/react';
import { UserProfileCard } from './UserProfileCard';

test('renders user profile with verified badge and role', () => {
  render(
    <UserProfileCard
      name="Elena Rostova"
      role="Senior Architect"
      isVerified={true}
    />
  );

  // Assert on semantic accessible elements (Survives CSS refactors)
  expect(screen.getByRole('heading', { name: 'Elena Rostova' })).toBeVisible();
  expect(screen.getByText('Senior Architect')).toBeVisible();
  expect(screen.getByLabelText('Verified Account')).toBeInTheDocument();
});
```
