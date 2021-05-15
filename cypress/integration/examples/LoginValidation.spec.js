/// <reference types="cypress" />
import LoginPage from '../pageobjects/LoginPage';
const loginPage = new LoginPage();
let credentials;
let userName;
let password;
context('Actions', () => {
    before(() => {
 
        cy.fixture('credentials').then((creds) => {
            credentials = creds;
            cy.visit(credentials.url);

        })
    })

    it('Login Validation', async () => {
        var successMessage;
        loginPage.getUserName().type(credentials.userName);
        loginPage.getPassword().type(credentials.password);
        loginPage.getLoginButton().click();
        loginPage.getToastMessage().invoke('text')
        .then((text)=>{
          const toastText = text;
          expect(toastText).to.equal(" Login Successfully ");
        })
        cy.url().should('include', '/my-home');
})
})