module.exports = {
  testDir: './tests',
  timeout: 60000,
  expect: { timeout: 10000 },
reporter: [
    ['line'],  // console-এ basic output (optional)
    ['allure-playwright']  // ← এই লাইন যোগ করলেই Allure চালু
  ],
  use: {
    //baseURL: 'https://your-app.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
};