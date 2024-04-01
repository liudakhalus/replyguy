const { test, expect } = require("@playwright/test");
import config from "./config";

async function login(page, config) {
	await page.goto("https://www.reddit.com/");
	await page.locator("#login-button").click();
	await page.locator('input[name="username"]').fill(config.username);
	await page.locator('input[name="password"]').fill(config.password);
	await page.locator("button.login[type='button']").click();

	await page.waitForTimeout(1000);

	await page.locator("a[name='comments-action-button']").nth(0).click();

	// await page.getByPlaceholder("Cancel Comment Markdown").click();
	await page.locator("faceplate-tracker[noun='add_comment_button']").click();
	await page.locator("div[name='body']").fill("Hello, World!");

	await page.pause();
}

test("login", async ({ page }) => {
	await login(page, config);
});
