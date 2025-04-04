import { test, expect, Page } from "@playwright/test";
import path from "path";


interface Results {
  username: string;
  password: string;
  comments: string;
  dropdownValue: string;
}

const results: Results = {
  username: "testUser",
  password: "testPassword",
  comments: "Test comment",
  dropdownValue: "dd2"
}


const fillFields = async (page: Page, results: Results) => {
  const usernameInput = page.locator("xpath=//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill(results.username);
  await expect(usernameInput).toHaveValue(results.username);

  const passwordInput = page.locator("xpath=//input[@name='password']");
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill(results.password);
  await expect(passwordInput).toHaveValue(results.password);

  const commentsField = page.locator("xpath=//textarea[@name='comments']");
  await expect(commentsField).toBeVisible();
  await commentsField.fill(results.comments);
  await expect(commentsField).toHaveValue(results.comments);

  const checkboxElement = page.locator("xpath=//input[@value='cb2']");
  await expect(checkboxElement).toBeVisible();
  await checkboxElement.check();
  await expect(checkboxElement).toBeChecked();

  const radioButtonElement = page.locator("xpath=//input[@value='rd2']");
  await expect(radioButtonElement).toBeVisible();
  await radioButtonElement.check();
  await expect(radioButtonElement).toBeChecked();

  const dropdown = page.locator("xpath=//select[@name='dropdown']");
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption(results.dropdownValue);
  await expect(dropdown).toHaveValue(results.dropdownValue);

  const choseFileButton = page.locator("xpath=//input[@name='filename']");
  const filepath = path.resolve(__dirname, "./test.txt");
  await expect(choseFileButton).toBeVisible();
  await choseFileButton.setInputFiles(filepath);
};

test.describe("Test Basic HTML Form", () => {
  test.beforeEach("Go to Playwright Home page", async ({ page }) => {
    const htmlForumUrl = process.env.BASE_HTML_FORM_URL as string;
    await page.goto(htmlForumUrl);
  });

  test("Has H1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  // test("Test username field", async ({ page }) => {
  //   const usernameInput = page.locator("xpath=//input[@name='username']");
  //   await expect(usernameInput).toBeVisible();
  //   await usernameInput.fill("testUser");
  //   await expect(usernameInput).toHaveValue("testUser");
  // });

  // test("Test checkbox selection", async ({ page }) => {
  //   const checkboxElement = page.locator("xpath=//input[@value='cb2']");
  //   await expect(checkboxElement).toBeVisible();
  //   await checkboxElement.check();
  //   await expect(checkboxElement).toBeChecked();
  // });

  // test("Test radiobutton selection", async ({ page }) => {
  //   const radioButtonElement = page.locator("xpath=//input[@value='rd2']");
  //   await expect(radioButtonElement).toBeVisible();
  //   await radioButtonElement.check();
  //   await expect(radioButtonElement).toBeChecked();
  // });

  // test("Test dropdown selection", async ({ page }) => {
  //   const dropdown = page.locator("xpath=//select[@name='dropdown']");
  //   await expect(dropdown).toBeVisible();
  //   await dropdown.selectOption("dd2");
  //   await expect(dropdown).toHaveValue("dd2");
  // });

  // test("Test 'comments' field", async ({ page }) => {
  //   const commentsField = page.locator("xpath=//textarea[@name='comments']");
  //   await expect(commentsField).toBeVisible();
  //   await commentsField.fill("Test comment");
  //   await expect(commentsField).toHaveValue("Test comment");
  // });

  // test("Upload file", async ({ page }) => {
  //   const choseFileButton = page.locator("xpath=//input[@name='filename']");
  //   const filepath = path.resolve(__dirname, "./test.txt");
  //   await expect(choseFileButton).toBeVisible();
  //   await choseFileButton.setInputFiles(filepath);
  // });

  test("Reset button", async ({ page }) => {
    const cancelButton = page.locator("xpath=//input[@type='reset']");
    await expect(cancelButton).toBeVisible();
    await fillFields(page, results);
    await cancelButton.click();

    await expect(page.locator("xpath=//input[@name='username']")).toHaveValue(
      ""
    );
    await expect(page.locator("xpath=//input[@value='cb3']")).toBeChecked();
  });

  test("Submit button", async ({ page }) => {
    const submitButton = page.locator("xpath=//input[@type='submit']");
    await expect(submitButton).toBeVisible();
    await fillFields(page, results);
    await submitButton.click();

    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );

    const userNameValue = page.locator("xpath=//li[@id='_valueusername']");
    await expect(userNameValue).toHaveText(results.username);
  });
});
