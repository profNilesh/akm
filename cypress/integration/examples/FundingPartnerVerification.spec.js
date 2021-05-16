/// <reference types="cypress" />
import LoginPage from '../pageobjects/LoginPage';
import HomePage from '../pageobjects/HomePage';
import FundingPartnerPage from '../pageobjects/fundingpartner/fundingPartnerPage';
import AddFundingPartnerPage from '../pageobjects/fundingpartner/addFundingPartnerPage';
import FundingPartnerDetailsPage from '../pageobjects/fundingpartner/fundingPartnerDetailsPage';
import EditFundingPartnerPage from '../pageobjects/fundingpartner/editFundingPartnerPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const fundingPartnerPage = new FundingPartnerPage();
const addFundingPartnerPage = new AddFundingPartnerPage();
const fundingPartnerDetailsPage = new FundingPartnerDetailsPage();
const editFundingPartnerPage = new EditFundingPartnerPage();
let credentials, fundingPartner;
let userName;
let password;
describe('Funding partner test suite',()=>{
    beforeEach(() => {
        cy.fixture('credentials').then((creds) => {
            credentials = creds;
            cy.visit(credentials.url);
            loginPage.loginToCRM(credentials.userName, credentials.password);
            loginPage.getToastMessage().invoke('text')
            .then((text)=>{
              const toastText = text;
              expect(toastText).to.equal(" Login Successfully ");
              cy.url().should('include', '/my-home');
            })  
        })
        cy.fixture('fundingPartner').then((fundpartner) => {
            fundingPartner = fundpartner;
        })
    })

    it('Add new funding partner', () => {  

    homePage.getfundingPartner().scrollIntoView().click();   
    fundingPartnerPage.getAddFundingPartnerButton().click();
    addFundingPartnerPage.fundingParnerName().type(fundingPartner[0].name);
    addFundingPartnerPage.fundingPartnerContactName().type(fundingPartner[0].contact);
    addFundingPartnerPage.fundingPartnerPhone().type(fundingPartner[0].phone);
    addFundingPartnerPage.fundingPartnerEmail().type(fundingPartner[0].email);
    addFundingPartnerPage.fundingPartnerNotes().type(fundingPartner[0].notes);
    addFundingPartnerPage.fundingPartnerAddButton().click();
    cy.wait(2000);
    cy.screenshot('added fund details in list');
    fundingPartnerPage.getFundingNameList().each((fund,index) => {
        var fundName=fund.text();
        if(fundName==fundingPartner[0].name)
        {
            return fundName;
        }
    }).then((fund)=>{
        cy.log(fund.text()+" added successfully");
        cy.wrap(fund).click();
    })
    fundingPartnerDetailsPage.getDetailsPage().screenshot().click();
    cy.screenshot('added details');
    fundingPartnerDetailsPage.getFundingParnerName().should('contain.text',fundingPartner[0].name);
    fundingPartnerDetailsPage.getFundingContact().should('contain.text',fundingPartner[0].contact);
    fundingPartnerDetailsPage.getFundingEmail().should('contain.text',fundingPartner[0].email);
    fundingPartnerDetailsPage.getFundingPhone().should('contain.text',fundingPartner[0].phone);
    fundingPartnerDetailsPage.getfundingNotes().should('contain.text',fundingPartner[0].notes);
})

it('Edit funding partner', () => {      
    homePage.getfundingPartner().scrollIntoView().debug().click();
    cy.screenshot();
    fundingPartnerPage.getFundingNameList().each((fund,index) => {
        var fundName=fund.text();
        if(fundName==fundingPartner[0].name)
        {
        cy.wrap(fund).click();
        cy.screenshot();
        }
    })
    fundingPartnerDetailsPage.getDetailsPage().screenshot().click();
    fundingPartnerDetailsPage.getEditFundingPartnerButton().screenshot().click();
    editFundingPartnerPage.fundingParnerName().clear().type(fundingPartner[1].name);
    editFundingPartnerPage.fundingPartnerContactName().clear().type(fundingPartner[1].contact);
    editFundingPartnerPage.fundingPartnerPhone().clear().type(fundingPartner[1].phone);
    editFundingPartnerPage.fundingPartnerEmail().clear().type(fundingPartner[1].email);
    editFundingPartnerPage.fundingPartnerNotes().clear().type(fundingPartner[1].notes);
    editFundingPartnerPage.fundingPartnerUpdateButton().screenshot('updated details').click();
    cy.screenshot('update screenshot');
    fundingPartnerPage.getFundingNameList().each((fund,index) => {
        var fundName=fund.text();
        if(fundName==fundingPartner[1].name)
        {
            return fundName;
        }
    }).then((fund)=>{
        cy.log(fund.text()+" Updated successfully");
    })
    fundingPartnerDetailsPage.getDetailsPage().click();
    fundingPartnerDetailsPage.getFundingParnerName().should('contain.text',fundingPartner[1].name);
    fundingPartnerDetailsPage.getFundingContact().should('contain.text',fundingPartner[1].contact);
    fundingPartnerDetailsPage.getFundingEmail().should('contain.text',fundingPartner[1].email);
    fundingPartnerDetailsPage.getFundingPhone().should('contain.text',fundingPartner[1].phone);
    fundingPartnerDetailsPage.getfundingNotes().should('contain.text',fundingPartner[1].notes);     
})
})