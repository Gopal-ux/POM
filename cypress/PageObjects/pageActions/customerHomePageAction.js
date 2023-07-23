
/// < reference types ="Cypress"  />


import homePageElements from "../../PageObjects/pageElements/customerHomePageElement";


const homePage = new homePageElements();
const or = require ('../../locator.json');
export default class customerHomePage {

 
   
    constructor()
    {
      this.homePage = new homePageElements();
    }

  
    navigateToUrl()
 {
    
   // cy.visit(Cypress.config('baseUrl'))
   cy.visit(Cypress.config('baseUrl'))

 }

 clickOnManagerLogin(){
  homePage.clickBankManagerLogin().click();

 }

 validateTextOnHomePage(){
  homePage.validateTextOnPage().should("have.text", "XYZ Bank");
 }
 



 }


