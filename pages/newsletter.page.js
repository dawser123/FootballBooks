import { newsletterData } from "../test-data.js/newsletter-data";
export class NewsletterPage {
  constructor(page) {
    this.page = page;
    this.openNewsletterButton = this.page.getByLabel(newsletterData.messages.openNewsletterModalTitle);
    this.newsletterModalTitle  = this.page.getByText(newsletterData.messages.newsletterModalTitle, {
      exact: true,
    });
    this.subscribeButton=this.page.getByRole("button", { name: "Subscribe" })
    this.subscriptionMessage=this.page.getByText(newsletterData.messages.success)
    this.emailNewsletterInput=this.page.getByPlaceholder("Email address")
    this.errorMessage=this.page.getByText(newsletterData.messages.invalidEmail)

  }
}
