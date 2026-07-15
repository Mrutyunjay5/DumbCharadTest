import { test, expect } from '@playwright/test';

test('Verify title', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  let titleElement = page.locator("//h1[@id='mainTitle']").first()

  let title = await titleElement.textContent();
  expect(title).toBe("🎭 DUMB CHARADES 123 🎭")

});

test('Verify timer minute can be increased', async ({ page }) => {
  await page.goto('http://localhost:8000/');

  // Click the get started link.
  await page.getByRole('button', { name: '+' }).first().click();

  let timerCount = page.locator("//div[@id='timerValue']").first()

  let count = await timerCount.textContent();

  expect(count).toBe("2:00")

});

test('Verify if reset button work', async ({ page }) => {
  await page.goto('http://localhost:8000/');


  await page.locator("//button[@id='resetBtn']").first().click()
  let timerCount = page.locator("//div[@id='timerValue']").first()

  let count = await timerCount.textContent();

  expect(count).toBe("1:00")


});
test('Verify title 2', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  let titleElement = page.locator("//h1[@id='mainTitle']").first()

  let title = await titleElement.textContent();
  expect(title).toBe("🎭 DUMB CHARADES 🎭")

});