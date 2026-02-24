// pages/loginPage.js
export default class LoginPage {   
  /** @param {import('playwright').Page} page */
  constructor(page) {
    this.page = page;
    this.userInput = page.getByRole('textbox', { name: 'Email address' });
    this.passInput = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Log In', exact: true });
  }

  async login_s(user, pass) {
    await this.userInput.fill(user);
    await this.passInput.fill(pass);
    await this.loginBtn.click();
  }

  // Optional: add goto method if not there
  async goto(url) {
    await this.page.goto(url);
  }
}
