import { test, expect } from '@playwright/test';

test.describe('Should show premier league list', () => {

  test("should open the newsletter modal", async ({ page }) => {
    //Arrange
    await page.goto("/");
    //Act
    await page.getByRole('link', { name: 'Logo of Football Books' }).click();
    await page.getByRole('link', { name: 'premierleague logo' }).click();
    //Assert
    await expect(page.getByRole('heading', { name: 'Top 10 books inPremier League' })).toBeVisible();
  });
});