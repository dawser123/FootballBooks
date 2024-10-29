import { test, expect } from '@playwright/test';

test('Logout validation', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Logo of Football Books' }).click();
  await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByText('Log inSubmit')).toBeVisible();
  await expect(page.locator('form')).toContainText('Log in');
  await expect(page.getByPlaceholder('Email address')).toHaveValue('test@gmail.com');
  await page.getByPlaceholder('Password').click();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  await page.getByRole('button', { name: 'Logout' }).click();
  await expect(page.getByText('Are you sure you want to log out ?LogoutCancel')).toBeVisible();
  await expect(page.locator('#overlay-root').getByRole('button', { name: 'Logout' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  await page.locator('#overlay-root').getByRole('button', { name: 'Logout' }).click();
  await expect(page.getByText('You have been logged out successfully.Go home')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Go home' })).toBeVisible();
  await page.getByRole('button', { name: 'Go home' }).click();
  await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
});