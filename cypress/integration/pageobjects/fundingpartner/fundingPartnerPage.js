class FundingPartnerPage {

    getFundingParnerName(){
        return cy.get('tr > :nth-child(1)');
    }
    getInactiveLabel(){
        return cy.get('tr > :nth-child(2)');
    }
    getNotesLabel(){
        return cy.get('tr > :nth-child(3)');
    }
    getAddFundingPartnerButton(){
        return cy.get('.col-md-2 > .btn');
    }
    getFundingNameList(){
        return cy.get('tbody > .ng-star-inserted > :nth-child(1)');
    }
    getFundingInactiveList(){
        return cy.get('tbody > .ng-star-inserted > :nth-child(2)');
    }
    getFundingNotesList(){
        return cy.get('tbody > .ng-star-inserted > :nth-child(3)');
    }
}
export default FundingPartnerPage;
