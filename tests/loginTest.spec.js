import { test, expect } from "@playwright/test";

test.describe("user Login to footballBooks", () => {
  test("successful login with correct credentials", async ({ page }) => {
    //Arrange
    await page.goto("/");
    const loginUserName = "test@gmail.com";
    const loginUserPassword = "1234567";
    //Act
    await page.getByRole("link", { name: "Login" }).click();
    await page.getByPlaceholder("Email address").fill(loginUserName);
    await page.getByPlaceholder("Password").fill(loginUserPassword);
    await page.getByRole("button", { name: "Submit" }).click();
    //Assert
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("unsuccessful login with invalid mail", async ({ page }) => {
    //Arrange
    await page.goto("/");
    const loginUserName = "testgmail.com";
    const loginUserPassword = "1234567";
    //Act
    await page.getByRole("link", { name: "Login" }).click();
    await page.getByPlaceholder("Email address").fill(loginUserName);
    await page.getByPlaceholder("Password").fill(loginUserPassword);
    await page.getByRole("button", { name: "Submit" }).click();
    //Assert
    await expect(page.locator('#email-error')).toHaveText('Enter valid email and try again.');
  });
  test("unsuccessful login with invalid password", async ({ page }) => {
    //Arrange
    await page.goto("/");
    const loginUserName = "test@gmail.com";
    const loginUserPassword = "12345";
    //Act
    await page.getByRole("link", { name: "Login" }).click();
    await page.getByPlaceholder("Email address").fill(loginUserName);
    await page.getByPlaceholder("Password").fill(loginUserPassword);
    await page.getByRole("button", { name: "Submit" }).click();
    //Assert
    await expect(page.locator('#password-error')).toHaveText('Password must be at least 6 characters long');
  });
});
