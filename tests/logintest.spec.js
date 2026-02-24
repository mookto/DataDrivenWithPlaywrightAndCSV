// tests/logintest.spec.js
const { test, expect } = require('@playwright/test');
const loginPageClass = require('../pages/LoginPage').default;
const { readCsvData } = require('../utils/csvReader'); // নতুন CSV reader

// CSV থেকে data লোড (একবার load)
const csvData = readCsvData('./test-data/test_data.csv');

test.describe('Data Driven Login Tests - Username & Password Only (CSV)', () => {
  
  test.beforeEach(async ({ page }) => {
    const login = new loginPageClass(page);
    const url = "https://stagingv2.smartoffice.ai/auth/login?_r=Lw==";
    await login.goto(url);
  });

  for (const row of csvData) {
    const username = row[0] || '';
    const password = row[1] || '';

    test(`Login attempt with ${username || 'empty username'}`, async ({ page }) => {
      const login = new loginPageClass(page);

      await login.login_s(username, password);

      // Navigation wait
      await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});

      // Success check: URL contains /people
      await expect(page).toHaveURL(/.*\/people/);

      console.log(`✅ Login SUCCESS for ${username}`);

      
    });
  }
});