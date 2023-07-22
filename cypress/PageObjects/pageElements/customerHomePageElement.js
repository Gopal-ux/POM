

const or = require ('../../locator.json');
export default class homePageElements
{


// constructor(){

// }

 clickCustomerButtonLogin(){
    return cy.get("body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(1) > button").click();
 }

 
 clickBankManagerLogin(){
     return cy.get(or.homePage.bankLogin);
  }


 validateTextOnPage(){  
    return cy.get("body > div > div > div.box.mainhdr > strong"); 
   }
 }


 // This files is only for storing elements for that page.
 // Actions on this page will be on PageElements Action class