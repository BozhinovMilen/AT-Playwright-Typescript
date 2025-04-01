import { test, expect } from "@playwright/test";
import { link } from "fs";

test.describe("Playwright home page testing", () => {
  test.beforeEach("Go to Playwright Home page", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url, { timeout: 60000 });
  });

  test("has logo", async ({ page }) => {
    const logo = page.getByAltText("Playwright logo").first();

    await expect(logo).toBeVisible();
  });

  test("has heading", async ({ page }) => {
    const headingTitle = page.locator("h1");
    const headingTitleText = (await headingTitle.innerText()).valueOf();

    await expect(headingTitleText).toEqual(
      "Playwright enables reliable end-to-end testing for modern web apps."
    );
  });

  test("has nav links", async ({ page }) => {
    const docsLink = page.getByRole("link", { name: "Docs" });
    const apiLink = page.getByRole("link", { name: "API" });

    await expect(docsLink).toBeVisible();
    await expect(apiLink).toBeVisible();
  });

  test("nav links working", async ({ page }) => {
    const communityLink = page.getByRole("link", { name: "Community" });
    await communityLink.click();

    await expect(page).toHaveURL("https://playwright.dev/community/welcome");
  });

  test("hss logos list", async ({ page }) => {
    const logosListItems = page.locator("ul.logosList_zAAF li");

    await expect(logosListItems).toHaveCount(9);
  });

  test("select Playwright environment from the list", async ({ page }) => {
    const initialEnv = page.getByRole("button", { name: "Node.js" });

    await initialEnv.hover();

    const envList = page.locator(".dropdown__menu");
    await expect(envList).toBeVisible();

    const listItem = page.locator("ul.dropdown__menu a").getByText("Python");
    await listItem.click();
    await expect(page).toHaveURL("https://playwright.dev/python/")
  });
});
