import { test, expect } from '@playwright/test';

test.describe('user navigate to contact page',  () => {
test('successful navigate to Contact page ', async ({page}) => {
  //Arrange 
  await page.goto('/');
  //Act
  await page.getByRole('link', { name: 'Contact' }).click();
  //Assert
  await expect(page.getByRole('heading', { name: 'Contact us' })).toBeVisible();
 })
test('successful message sent  ', async ({page}) => {
  //Arrange
  await page.goto('/');
  const loginUserName = "test@gmail.com";
  const userMessage = "12345678910";
  //Act
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByPlaceholder('Name').fill(loginUserName);
  await page.getByPlaceholder('Your message').fill(userMessage);
  await page.getByRole('button', { name: 'Submit' }).click();
  //Assert
  await expect(page.getByText('Your message was sent successfully !')).toBeVisible();

 })
test('unsuccessful message sent  ', async ({page}) => {
   //Arrange
   await page.goto('/');
   const loginUserName = "test@gmail.com";
   const userMessage = "12345";
   //Act
   await page.getByRole('link', { name: 'Contact' }).click();
   await page.getByPlaceholder('Name').fill(loginUserName);
   await page.getByPlaceholder('Your message').fill(userMessage);
   await page.getByRole('button', { name: 'Submit' }).click();
   //Assert
   await expect(page.getByText('Your message must contain at least 10 characters')).toBeVisible();
 })


 
});