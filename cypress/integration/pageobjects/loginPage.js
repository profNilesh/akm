class LoginPage{
    getUserName(){
        return cy.get("#email");
    }
    getPassword(){
        return cy.get("#password");
    }
    getLoginButton(){
        return cy.get(".btn");
    }
    getRememberLabel(){
        return cy.get('.custom-control-label');
    }
    getRememberUserCheck(){
        return cy.get('.custom-control');
    }
    getToastMessage(){
        return cy.get('.toast-message');
    }

    loginToCRM(userName,password){
        this.getUserName().type(userName);
        this.getPassword().type(password);
        this.getLoginButton().click();
    }
}
export default LoginPage;