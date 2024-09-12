import { test, expect } from '@playwright/test';

test('displays book if available and its details', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'premierleague logo' }).click();
  await page.getByRole('link', { name: 'Encyclopedia of British' }).click();
  await expect(page.getByText('Add to my listEncyclopedia of')).toBeVisible();
});