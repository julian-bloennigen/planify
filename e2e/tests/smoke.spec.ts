import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('app loads and displays main content', async ({ page }) => {
    await page.goto('/');

    // Check if the page title is correct
    await expect(page).toHaveTitle(/Vite \+ React/);

    // Check if main heading is visible
    const heading = page.getByRole('heading', { name: /vite \+ react/i });
    await expect(heading).toBeVisible();

    // Check if button is visible and clickable
    const button = page.getByRole('button', { name: /count is 0/i });
    await expect(button).toBeVisible();

    // Test button interaction
    await button.click();
    await expect(page.getByRole('button', { name: /count is 1/i })).toBeVisible();
  });

  test('navigation and logos are visible', async ({ page }) => {
    await page.goto('/');

    // Check for Vite logo
    const viteLogo = page.locator('img[alt="Vite logo"]');
    await expect(viteLogo).toBeVisible();

    // Check for React logo
    const reactLogo = page.locator('img[alt="React logo"]');
    await expect(reactLogo).toBeVisible();
  });
});
