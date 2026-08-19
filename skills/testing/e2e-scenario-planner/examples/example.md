# Example: E2E Scenario Planner

## Input

> "Design a Playwright test for a user signup and workspace onboarding flow."

## Output

```typescript
import { test, expect } from '@playwright/test';

test.describe('User Onboarding Journey', () => {
  test('registers new user and creates first team project', async ({ page }) => {
    await page.goto('/signup');

    // Use accessible semantic locators
    await page.getByLabel('Work Email').fill(`test+${Date.now()}@example.com`);
    await page.getByLabel('Password').fill('SecurePassword123!');
    await page.getByRole('button', { name: 'Create Account' }).click();

    // Verify redirection to onboarding wizard
    await expect(page).toHaveURL(/\/onboarding/);

    await page.getByLabel('Workspace Name').fill('Acme Corp');
    await page.getByRole('button', { name: 'Continue' }).click();

    // Verify arrival on workspace dashboard
    await expect(page.getByRole('heading', { name: 'Welcome to Acme Corp' })).toBeVisible();
  });
});
```
