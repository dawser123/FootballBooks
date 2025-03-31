import { test, expect } from "@playwright/test";
import { LeaguePage } from "../pages/league.page";
test.describe("Should show premier league list", () => {
  let leaguePage;
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    leaguePage = new LeaguePage(page)
  });
  test("should open the newsletter modal", async () => {
    //Arrange
    //Act
    await leaguePage.premierLeagueLogo.click();
    //Assert
    await expect(leaguePage.premierLeagueTitle).toBeVisible();
  });
});
