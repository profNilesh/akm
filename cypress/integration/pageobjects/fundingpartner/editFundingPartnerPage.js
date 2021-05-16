
class EditFundingPartnerPage{

    fundingParnerName(){
        return cy.get(':nth-child(1) > .form-group > div.col-sm-12 > .form-control')
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
        return cy.get('.col-md-12 > .form-group > div.col-sm-12 > .form-control')
    }
    fundingPartnerTaxReceiptCheck(){
        return cy.get('.container-fluid > :nth-child(1) > :nth-child(5)')
    }
    fundingPartnerInactiveCheck(){
        return cy.get('.container-fluid > :nth-child(1) > :nth-child(6)')
    }
    fundingPartnerUpdateButton()
    {
        return cy.get('.col-md-12 > .btn')
    }
}
export default EditFundingPartnerPage;