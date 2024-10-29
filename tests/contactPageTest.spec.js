import { test, expect } from '@playwright/test';

test('Should show contact page', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page.locator('#root')).toContainText('Contact us');
  await expect(page.locator('div').filter({ hasText: 'Submit' }).nth(4)).toBeVisible();
});