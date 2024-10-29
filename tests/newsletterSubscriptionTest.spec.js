import { test, expect } from '@playwright/test';

test('Should show newsletter', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Logo of Football Books' }).click();
  await page.getByLabel('Open Newsletter').click();
  await expect(page.getByText('Subscribe to newsletterSubscribe')).toBeVisible();
})