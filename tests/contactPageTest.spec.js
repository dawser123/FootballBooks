import { test, expect } from '@playwright/test';
import { loginData } from '../test-data.js/login-data';
import { contactData } from '../test-data.js/contact-data';
import { ContactPage } from '../pages/contact.page';

test.describe('user navigate to contact page',  () => {
  let contactPage
  test.beforeEach(async({page})=>{
    contactPage=new ContactPage(page)
    await page.goto('/');
  })
test('should navigate to Contact page successfully ', async () => {
  //Arrange 
  //Act
  await contactPage.contactLink.click();
  //Assert
  await expect(contactPage.contactHeading).toBeVisible();
 })
test('should send a message successfully', async () => {
  //Arrange
  const loginUserName = loginData.valid.userEmail
  const validMessage =contactData.examples.validMessage
  //Act
  await contactPage.contactLink.click();
  await contactPage.contactName.fill(loginUserName);
  await contactPage.message.fill(validMessage);
  await contactPage.submitButton.click();
  //Assert
  await expect(contactPage.messageSent).toBeVisible();
 })
test('should fail to send a message when too short', async () => {
   //Arrange
   const loginUserName = loginData.valid.userEmail
   const invalidMessage = contactData.examples.invalidMessage
   //Act
   await contactPage.contactLink.click();
   await contactPage.contactName.fill(loginUserName);
   await contactPage.message.fill(invalidMessage);
   await contactPage.submitButton.click();
   //Assert
   await expect(contactPage.messageTooShort).toBeVisible();
 })


 
});