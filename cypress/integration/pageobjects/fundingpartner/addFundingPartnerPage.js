
class AddFundingPartnerPage{

    fundingParnerName(){
        return cy.get(':nth-child(1) > .form-group > div.col-sm-12 > .form-control');
    }
    fundingPartnerContactName(){
        return cy.get(':nth-child(2) > .form-group > div.col-sm-12 > .form-control')
    }
    fundingPartnerPhone(){
        return cy.get(':nth-child(3) > .form-group > div.col-sm-12 > .form-control')
    }
    fundingPartnerEmail(){
        return cy.get(':nth-child(4) > .form-group > div.col-sm-12 > .form-control')
    }
    fundingPartnerNotes(){
        return cy.get(':nth-child(7) > .form-group > div.col-sm-12 > .form-control')
    }
    fundingPartnerTaxReceiptCheck(){
        return cy.get('.col-md-8 > .custom-control > .custom-control-label');
    }
    fundingPartnerInactiveCheck(){
        return cy.get('.col-md-4 > .custom-control > .custom-control-label');
    }
    fundingPartnerAddButton()
    {
        return cy.get('.col-md-12 > .btn');
    }
}
export default AddFundingPartnerPage;