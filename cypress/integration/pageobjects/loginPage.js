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
        getUserName().type(userName);
        getPassword().type(password);
        getLoginButton().click();
        return getToastMessage().invoke('text')
        .then((text)=>{
          const toastText = text;
          expect(toastText).to.equal(" Login Successfully ");
          cy.url().should('include', '/my-home');
          return toastText;
        })
    }
}
export default LoginPage;