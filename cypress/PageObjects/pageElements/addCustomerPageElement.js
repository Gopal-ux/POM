///<reference types = "Cypress" />

const or = require ("../../locator.json");


export default class addCustomerPageElements {


 constuctor(){
    
 }


  clickAddCustomer(){

 return cy.contains("Add Customer").click();
  //return cy.get("body > div.ng-scope > div > div.ng-scope > div > div.center > button.btn.btn-lg.tab.btn-primary").click()
}


  getFirstName(){
    return cy.get("body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(1) > input");
  }

  getLastName(){

    return cy.get("body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(2) > input"); 
  }

  getPinCode(){
    return cy.get("body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(3) > input");
  }

  clickSubmit(){
    return cy.get("body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > button").click()
  }
   

  openAccountbtn(){
    return cy.get('[ng-class="btnClass2"]');
  }

  
  selectUser(){
   return cy.get('#userSelect');
  }

   selectCurrency(){
    return cy.get("#currency")
     }

     clickProceed(){
      return cy.get('body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > button')
     }


    customerButton(){
      return cy.get('[ng-class="btnClass3"]').click();
    }


    searchBox(){
      return cy.get('.form-control')
    }

    deleteCustomer(){
      return cy.get(':nth-child(5) > button');
    }



}