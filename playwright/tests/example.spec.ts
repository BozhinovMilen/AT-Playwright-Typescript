import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('has logo', async ({ page }) => {
  const url = process.env.BASE_URL as string
  await page.goto(url);

  const logo = page.getByAltText("Playwright logo").first();
  
  await expect(logo).toBeVisible();
});

test('has heading', async ({ page }) => {
  const url = process.env.BASE_URL as string
  await page.goto(url);

  const headingTitle = page.locator("h1");
  const headingTitleText = (await headingTitle.innerText()).valueOf();

  
  await expect(headingTitleText).toEqual("Playwright enables reliable end-to-end testing for modern web apps.");
});

test('has nav links', async ({ page }) => {
  const url = process.env.BASE_URL as string
  await page.goto(url);

  const docsLink = page.getByRole("link", {name: "Docs"});
  const apiLink = page.getByRole("link", {name: "API"});
  
  await expect(docsLink).toBeVisible();
  await expect(apiLink).toBeVisible();
});

test('nav links working', async ({ page }) => {
  const url = process.env.BASE_URL as string
  await page.goto(url);

  const communityLink = page.getByRole("link", {name: "Community"});
  await communityLink.click()
  
  await expect(page).toHaveURL("https://playwright.dev/community/welcome");
});

test('hss logos list', async ({ page }) => {
  const url = process.env.BASE_URL as string
  await page.goto(url);

  const logosListItems = page.locator("ul.logosList_zAAF li");
  
  await expect(logosListItems).toHaveCount(9);
});
