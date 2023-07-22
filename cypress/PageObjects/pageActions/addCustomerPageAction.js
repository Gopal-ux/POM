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
    
    
}