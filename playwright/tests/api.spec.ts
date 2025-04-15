import { test, expect } from "@playwright/test";
import { REQUEST_URL, PRODUCT_ID } from "../test-data/constants.ts";
import REQUEST_BODY from "../test-data/request_body.json";


test.describe("CRUD Operations", () => {
  test("API test GET Products", async ({ request }) => {
    const response = await request.get(REQUEST_URL);
    const responseBody = await response.json();
    console.log(responseBody);
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    await expect(responseBody).toEqual(
      expect.objectContaining({
        title: "",
      })
    );
  });

  test("API test GET Product by ID", async ({ request }) => {
    const response = await request.get(`${REQUEST_URL}/${PRODUCT_ID}`);
    const responseBody = await response.json();
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    await expect(responseBody).toEqual(
      expect.objectContaining({
        title: "",
      })
    );
    await expect(responseBody).toContainEqual();
    await expect(responseBody).toEqual();
    await expect(responseBody).toMatchObject();
    await expect(responseBody).toHaveProperty();
  });

  test("API test POST Product", async ({ request }) => {
    const response = await request.post(REQUEST_URL, {
      data: {
        id: 200,
        title: "string",
        price: 0.1,
        description: "string",
        category: "string",
        image: "http://example.com",
      },
    });
    const responseBody = await response.json();
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    await expect(responseBody).toEqual(
      expect.objectContaining({
        title: "",
      })
    );
    await expect(responseBody).toContainEqual();
    await expect(responseBody).toEqual();
    await expect(responseBody).toMatchObject();
    await expect(responseBody).toHaveProperty();
  });

  test("API test POST Product wit imported rquest body", async ({ request }) => {
    const requestUrl = "https://fakestoreapi.com/products/6";
    const response = await request.post(REQUEST_URL, {
      data: REQUEST_BODY,
    });
    const responseBody = await response.json();
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    await expect(responseBody).toEqual(
      expect.objectContaining({
        title: "",
      })
    );
    await expect(responseBody).toContainEqual();
    await expect(responseBody).toEqual();
    await expect(responseBody).toMatchObject();
    await expect(responseBody).toHaveProperty();
  });
});

test.describe("Matchers Example", async () => {
  test("toContainEqual example", async () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    await expect(users).toContainEqual({ id: 1, name: "Alice" });
  });

  test("toEqual example", async () => {
    await expect({ id: 1, name: "Alice" }).toEqual({ id: 1, name: "Alice" });
  });

  test("toMatchObject example", async () => {
    const users = {
      id: 1,
      name: "Alice",
      age: 30,
    };
    await expect(users).toMatchObject({ name: "Alice" });
  });

  test("toHaveProperty example", async () => {
    const user = {
      profile: {
        name: "Alice",
      },
    };
    await expect(user).toHaveProperty("profile.name");
    await expect(user).toHaveProperty("profile.name", "Alice");
  });
});
