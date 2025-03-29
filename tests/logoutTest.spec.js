import { test, expect } from "@playwright/test";

test.describe("user logout from footballBooks", () => {
  test.only("successful logout ", async ({ page }) => {
    //Arrange
    await page.goto("/");
    const loginUserName = "test@gmail.com";
    const loginUserPassword = "1234567";
    //Act
    await page.getByRole("link", { name: "Login" }).click();
    await page.getByPlaceholder("Email address").fill(loginUserName);
    await page.getByPlaceholder("Password").fill(loginUserPassword);
    await page.getByRole("button", { name: "Submit" }).click();
    await page.locator("#logout-btn").click();
    await page.locator("#modal-logout-btn").click();
    //Assert
    await expect(page.locator('#confirmation-logout-msg')).toHaveText('You have been logged out successfully.')
  });
});
