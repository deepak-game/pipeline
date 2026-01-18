import { test, expect } from "@playwright/test";

test("Validate step", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByText("Next").click();
  await page.waitForTimeout(2000);
  await page.getByText("Next").click();
  await page.waitForTimeout(2000);
});
