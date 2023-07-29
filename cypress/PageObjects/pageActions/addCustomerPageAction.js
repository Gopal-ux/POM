///<reference types = "Cypress" />



import addCustomerPageElements from '../../PageObjects/pageElements/addCustomerPageElement';

const addCustomerElements = new addCustomerPageElements();

const or = require ('../../locator.json');
export default class addCustomerPage 
{
 
    Constructor()
    {
       
    }


    enterData(firstname,lastname,pcode)
    {  

        addCustomerElements.clickAddCustomer();
        addCustomerElements.getFirstName().type(firstname);
        addCustomerElements.getLastName().type(lastname);
        addCustomerElements.getPinCode().type(pcode);
        addCustomerElements.clickSubmit();
        addCustomerElements.openAccountbtn();
    }
  
    validateAlert()
        {
  
          
        // cy.on('window:alert',(txt)=>{
        //   //Assertion
        //   expect(txt).to.contains('Customer added successfully with customer id :6');
        //   })
 
        }


   clickOpenAccount(){
    addCustomerElements.openAccountbtn().click();
   }
    

   selectUser(){
    addCustomerElements.selectUser().select("Harry Potter");
   }
    
   selectCurrency(){
    addCustomerElements.selectCurrency().select("Rupee");
   }

   proceed(){
    addCustomerElements.clickProceed().click()
   }

   clickCustomer(){
    addCustomerElements.customerButton().click()
   }

   search(name){
    addCustomerElements.searchBox().type(name)
   }

   deleteCustomer(){
    addCustomerElements.deleteCustomer().click();
   }

   deleteValidation(name){
    cy.get("body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div")
    .should("not.have.text",name);
   }
}