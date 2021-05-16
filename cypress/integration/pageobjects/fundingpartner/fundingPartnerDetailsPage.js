class FundingPartnerDetailsPage {
    getDetailsPage(){
        return cy.get('#detailsTab');
    }
    getPartnerCampaignPage(){
        return cy.get('#campaignTab');
    }
    getFundingParnerName(){
        return cy.get('.card-body > :nth-child(2)');
    }
    getEditFundingPartnerButton(){
        return cy.get('.btn > .fas');
    }
    getFundingContact(){
        return cy.get('.card-body > :nth-child(3)');
    }
    getFundingInactive(){
        return cy.get('.card-body > :nth-child(7)')
    }
    getFundingPhone(){
        return cy.get('.card-body > :nth-child(4)');
    }
    getFundingEmail(){
        return cy.get('.card-body > :nth-child(5)')
    }
    getFundingTax()
    {
        return cy.get('.card-body > :nth-child(6)');
    }
    getfundingNotes()
    {
        return cy.get('.card-body > :nth-child(8)');
    }

    
}
export default FundingPartnerDetailsPage;
