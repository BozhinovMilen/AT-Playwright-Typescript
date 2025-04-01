import { test, expect } from "@playwright/test";

test.beforeEach("Go to Playwright Home page", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );
});

test("Has H1 title", async ({ page }) => {
  const title = page.locator("xpath=//h1");
  await expect(title).toHaveText("Basic HTML Form Example");
});

test("Test username field", async ({ page }) => {
  const usernameInput = page.locator("xpath=//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("testUser");
  await expect(usernameInput).toHaveValue("testUser");
});

test("Test checkbox selection", async ({ page }) => {
  const checkboxElement = page.locator("xpath=//input[@value='cb2']");
  await expect(checkboxElement).toBeVisible();
  await checkboxElement.check();
  await expect(checkboxElement).toBeChecked();
});

test("Test dropdown selection", async ({ page }) => {
  const dropdown = page.locator("xpath=//select[@name='dropdown']");
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption("dd2");
  await expect(dropdown).toHaveValue("dd2");
});