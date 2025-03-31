import { test, expect } from "@playwright/test";
import { loginData } from "../test-data.js/login-data";
import { LoginPage } from "../pages/login.page";
import { LogoutPage } from "../pages/logout.page";
import { logoutData } from "../test-data.js/logout-data";
test.describe("user logout from footballBooks", () => {
  let loginPage;
  let logoutPage;
  test.beforeEach(async ({ page }) => {
    const emailInput = loginData.valid.userEmail;
    const userPassword = loginData.valid.password;
    loginPage = new LoginPage(page);

    await page.goto("/");
    await loginPage.login(emailInput, userPassword);
    logoutPage = new LogoutPage(page);
  });
  test("successful logout ", async () => {
    //Act
   await logoutPage.logout()
    //Assert
    await expect(logoutPage.confirmationLogoutMessage).toHaveText(
      logoutData.logoutConfirmationText
    );
  });
});
