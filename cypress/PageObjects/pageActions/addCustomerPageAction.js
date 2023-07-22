///<reference types = "Cypress" />

const or = require ('../../locator.json');
export default class addCustomerPage {
 
    Constructor(){

    }

  

 navigateToUrl()
 {
    
   // cy.visit(Cypress.config('baseUrl'))
   cy.visit(Cypress.config('baseUrl'))

 }


      clickCustomerLogin(){
  //  return cy.get("body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(1) > button");
      return cy.get(or.homePage.customerLogin);

 }


 
}