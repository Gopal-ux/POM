///<reference types = "Cypress" />

const or = require ('../../locator.json');


export default class addCustomerPageElements {


 constuctor(){
    
 }


  clickAddCustomer(){

  return cy.get(or.bankLogin.addCustomerbtn)
  }


   




}