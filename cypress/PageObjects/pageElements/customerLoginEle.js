/// <reference types = "Cypress" />


export default class customerLoginEle{


    selectCustomer(){
        return cy.get("#userSelect").select("Harry Potter")
    }



    clickOnLogin(){
    return cy.get('form.ng-valid > .btn').click();
    }
    

}