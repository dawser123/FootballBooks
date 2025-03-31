import { test, expect } from "@playwright/test";
import { loginData } from "../test-data.js/login-data";
import { NewsletterPage } from "../pages/newsletter.page";

test.describe("Should show newsletter", () => {
  let newsletterPage;
  test.beforeEach(async ({ page }) => {
    newsletterPage = new NewsletterPage(page);
    await page.goto("/");
  });
  test("should open the newsletter modal", async () => {
    //Arrange
    //Act
    await newsletterPage.openNewsletterButton.click();
    //Assert
    await expect(newsletterPage.newsletterModalTitle).toBeVisible();
  });
  test("should subscribe successfully", async () => {
    //Arrange
    //Act
    await newsletterPage.openNewsletterButton.click();
    await newsletterPage.subscribeButton.click();
    //Assert
    await expect(newsletterPage.subscriptionMessage).toBeVisible();
  });
  test("should fail to subscribe with invalid email", async () => {
    //Arrange
    //Act
    await newsletterPage.openNewsletterButton.click();
    await newsletterPage.emailNewsletterInput.fill(loginData.invalid.userEmail);
    await newsletterPage.subscribeButton.click();
    //Assert
    await expect(newsletterPage.errorMessage).toBeVisible();
  });
});
