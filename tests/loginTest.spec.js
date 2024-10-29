import { test, expect } from '@playwright/test';

test('Login validation', async ({ page }) => {
  await page.goto('http://localhost:5173/');
 await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByText('Log inSubmit')).toBeVisible();
  await expect(page.getByPlaceholder('Email address')).toHaveValue('test@gmail.com');
  await expect(page.getByPlaceholder('Password')).toHaveValue('1234567');
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
});