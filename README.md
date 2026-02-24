# Playwright Data-Driven Login Automation

A modern, clean, and scalable **end-to-end automation framework** built with **Playwright** for testing login functionality using data-driven approach (CSV/Excel).

Supports:
- Data-driven testing from CSV (or Excel)
- Page Object Model (POM)
- Automatic screenshots, traces & videos on failure
- Beautiful HTML reporting (built-in + optional Allure)

![Playwright Logo](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- Data-driven login tests from CSV file (easy to maintain & extend)
- Page Object Model for clean & maintainable code
- Auto-wait & robust locators (role-based, placeholder-based)
- Success & failure verification (URL + error message)
- Built-in Playwright HTML reporter with screenshots/traces
- Optional Allure reporting support
- No external browser drivers needed (Playwright auto-manages)

## 📋 Project Structure
```
project-root/
├── pages/
│   └── LoginPage.js          # Page Object for login screen
├── utils/
│   ├── csvReader.js          # CSV data loader
│   └── excelReader.js        # (optional) Excel data loader
├── tests/
│   └── logintest.spec.js     # Main test file with data-driven loop
├── test-data/
│   └── test_data.csv         # Test credentials (username,password)
├── playwright.config.js      # Configuration (reporters, screenshots, etc.)
├── package.json
└── README.md
```
## 🚀 Quick Start

### 1. Prerequisites
- Node.js ≥ 18
- npm or yarn

### 2. Clone & Install
```bash
git clone https://github.com/yourusername/playwright-login-automation.git
cd playwright-login-automation
npm install
```

### 3. Run Tests
# Normal run
npx playwright test

# Headed mode (see browser)
npx playwright test --headed

# Only specific file
npx playwright test tests/logintest.spec.js

### 4. View HTML Report
After test run:
```
npx playwright show-report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

🛠️ **Tech Stack**

- Playwright – Modern E2E testing framework
- JavaScript (ES6+) – Clean & readable code
- CSV – Simple data source (Excel support also available)
- Page Object Model – Maintainable & reusable
- Playwright HTML Reporter – Built-in rich reporting
- Allure – (optional) Advanced reporting with charts & attachments

📸 **Screenshots & Traces**
 All failures automatically capture:

- Screenshot
- Video recording
- Full trace (DOM, network, console logs)
 - Open report → click failed test → see everything!

🤝 **Contributing**
- Feel free to fork, raise issues, or submit PRs!

- Fork the repo
- Create feature branch (git checkout -b feature/amazing-feature)
- Commit changes (git commit -m 'Add amazing feature')
- Push to branch (git push origin feature/amazing-feature)
- Open Pull Request

📄 **License**
- MIT License – feel free to use for personal/commercial projects.
