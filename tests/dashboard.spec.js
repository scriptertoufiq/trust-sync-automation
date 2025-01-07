const { test, expect } = require('@playwright/test');

test.use({ storageState: 'playwright/.auth/user.json' });


test('Dashboard Checking Of Shopify', async ({ page }) => {
  const cookies = await page.context().cookies();
  console.log(cookies); // Check if Shopify-related cookies are present

  await page.goto('https://admin.shopify.com/store/toufiq-automation-do-not-delete');
  await expect(page.getByText('Setup guide')).toBeVisible(); // Ensure the authenticated page loads
});