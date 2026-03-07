import { test, expect } from "@playwright/test";

const STORY_URL = "/iframe.html?id=components-addressinput";

test.describe("AddressInput visual states", () => {
  test("empty state", async ({ page }) => {
    await page.goto(`${STORY_URL}--empty`);
    await page.waitForSelector("#storybook-root", { state: "visible" });
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot("empty.png");
  });

  test("focused state", async ({ page }) => {
    await page.goto(`${STORY_URL}--focused&viewMode=story`);
    await page.waitForSelector("#storybook-root", { state: "visible" });
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot("focused.png");
  });

  test("typing state with dropdown", async ({ page }) => {
    await page.goto(`${STORY_URL}--typing&viewMode=story`);
    await page.waitForSelector("#storybook-root", { state: "visible" });
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot("typing.png");
  });

  test("with selection", async ({ page }) => {
    await page.goto(`${STORY_URL}--with-selection&viewMode=story`);
    await page.waitForSelector("#storybook-root", { state: "visible" });
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot("with-selection.png");
  });

  test("filled state", async ({ page }) => {
    await page.goto(`${STORY_URL}--filled&viewMode=story`);
    await page.waitForSelector("#storybook-root", { state: "visible" });
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot("filled.png");
  });
});
