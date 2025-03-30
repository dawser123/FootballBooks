export class LogoutPage {
    constructor(page) {
        this.page=page
        this.logoutButton=this.page.locator("#logout-btn")
        this.logoutModalButton=this.page.locator("#modal-logout-btn")
        this.confirmationLogoutMessage=this.page.locator('#confirmation-logout-msg')   
    }
    async logout () {
       await this.logoutButton.click()
       await this.logoutModalButton.click()
    }
}