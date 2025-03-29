import { test, expect } from "@playwright/test";

test.describe("Should show newsletter", () => {
  test("should open the newsletter modal", async ({ page }) => {
    //Arrange
    await page.goto("/");
    //Act
    await page.getByLabel("Open Newsletter").click();
    //Assert
    await expect(page.getByText("Subscribe to newsletter", { exact: true }),).toBeVisible();
  });
  test("should subscribe successfully", async ({ page }) => {
    //Arrange
    await page.goto("/");
    //Act
    await page.getByLabel("Open Newsletter").click();
    await page.getByRole("button", { name: "Subscribe" }).click();
    //Assert
    await expect(page.getByText("Subscription successful !")).toBeVisible();
  });
  test("should fail to subscribe with invalid email", async ({ page }) => {
    //Arrange
    const invalidUserMail = "test@gmail";
    await page.goto("/");
    //Act
    await page.getByLabel("Open Newsletter").click();
    await page.getByPlaceholder("Email address").fill(invalidUserMail);
    await page.getByRole("button", { name: "Subscribe" }).click();
    //Assert
    await expect(page.getByText("Enter valid email and try")).toBeVisible();
  });
});
