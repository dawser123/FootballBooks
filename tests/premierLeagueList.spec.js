import { test, expect } from '@playwright/test';

test('Should show premier leage list', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Logo of Football Books' }).click();
  await page.getByRole('link', { name: 'premierleague logo' }).click();
  await expect(page.getByText('Premier League')).toBeVisible();
});