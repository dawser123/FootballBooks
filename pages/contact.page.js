import { contactData } from "../test-data.js/contact-data";

export class ContactPage {
  constructor(page) {
    this.page = page;
    this.contactLink = this.page.getByRole("link", { name: "Contact" });
    this.contactHeading = this.page.getByRole("heading", {
      name: "Contact us",
    });
    this.contactName = this.page.getByPlaceholder("Name");
    this.message = this.page.getByPlaceholder("Your message");
    this.submitButton = this.page.getByRole("button", { name: "Submit" });
    this.messageSent = this.page.getByText(
      contactData.messages.success.messageSent,
    );
    this.messageTooShort=this.page.getByText(contactData.messages.error.minMessageLength)
  }
}
