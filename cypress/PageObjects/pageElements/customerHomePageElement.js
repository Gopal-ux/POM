
const or = require ('../../locator.json');
export default class homePageElements
{



 clickCustomerButtonLogin(){

    returns cy.get(or.homePage.customerLogin)

 }
 

 clickBankManagerLogin(){
     return cy.get(or.homePage.bankLogin);

  }


 validateTextOnPage(){
  
     cy.get("body > div > div > div.box.mainhdr > strong").should("have.text", "XYZ Bank");
  

   }
 }