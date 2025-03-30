export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButton = this.page.getByRole("link", { name: "Login" });
    this.emailInput = this.page.getByPlaceholder("Email address");
    this.userPassword = this.page.getByPlaceholder("Password");
    this.submitButton = this.page.getByRole("button", { name: "Submit" });
    this.logoutButton = this.page.getByRole("button", { name: "Logout" });
    this.emailError= this.page.locator("#email-error")
    this.passwordError= this.page.locator("#password-error")
  }
  async login(emailInput, userPassword) {
    await this.loginButton.click();
    await this.emailInput.fill(emailInput);
    await this.userPassword.fill(userPassword);
    await this.submitButton.click();
  }
}
