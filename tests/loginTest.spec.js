import { test, expect } from "@playwright/test";
import { loginData } from "../test-data.js/login-data";
import { LoginPage } from "../pages/login.page";
test.describe("user Login to footballBooks", () => {
  let loginPage
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    loginPage = new LoginPage(page);
  });
  test("successful login with correct credentials", async () => {
    //Arrange
    const emailInput = loginData.valid.userEmail;
    const userPassword = loginData.valid.password;
    //Act
    await loginPage.login(emailInput, userPassword);
    //Assert
    await expect(loginPage.logoutButton).toBeVisible();
  });
  test("unsuccessful login with invalid mail", async () => {
    //Arrange
    const emailInput = loginData.invalid.userEmail;
    const userPassword = loginData.valid.password;
    //Act
    await loginPage.login(emailInput, userPassword);
    //Assert
    await expect(loginPage.emailError).toHaveText(
      "Enter valid email and try again.",
    );
  });
  test("unsuccessful login with invalid password", async () => {
    //Arrange
    const emailInput = loginData.valid.userEmail;
    const userPassword = loginData.invalid.password;
    //Act
    await loginPage.login(emailInput, userPassword);
    //Assert
    await expect(loginPage.passwordError).toHaveText(
      "Password must be at least 6 characters long",
    );
  });
});
