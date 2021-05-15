/// <reference types="cypress" />
import LoginPage from '../pageobjects/LoginPage';
import HomePage from '../pageobjects/HomePage';
const loginPage = new LoginPage();
const homePage = new HomePage();
let credentials, allmodules;
let userName;
let password;
context('Actions', () => {
    before(() => {
 
        cy.fixture('credentials').then((creds) => {
            credentials = creds;
            cy.visit(credentials.url);
        })
    })

    it('Verify all modules from home page', async () => {
        loginPage.loginToCRM(credentials.userName, credentials.password);
        loginPage.getToastMessage().invoke('text')
        .then((text)=>{
          const toastText = text;
          expect(toastText).to.equal(" Login Successfully ");
          cy.url().should('include', '/my-home');
        })
        homePage.getAllModules().should('have.length',20); 
        homePage.getAllModules().each((modules,index)=>{
            cy.wrap(modules).should('contain.text',credentials.modules[index]);
        })
        homePage.getAllModules().each((modules,index)=>{
            if(index==11||index==12){

            }else{
                cy.wrap(modules).click();
                cy.url().should('include',"/"+credentials.modules[index].toLowerCase().replace(/\s/g, '-'));
            } 
        })
    })
})