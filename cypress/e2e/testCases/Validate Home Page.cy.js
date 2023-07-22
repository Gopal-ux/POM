/// <reference types="Cypress" />


import customerHomePage from "../../PageObjects/pageActions/customerHomePageAction";
import addCustomerPage from "../../PageObjects/pageActions/addCustomerPageAction";
import validateAddedCustomer from "../../PageObjects/pageActions/validateCustomerAdded";


  const customerHomePageAction = new customerHomePage();
  const addCustomerdata = new addCustomerPage();
  const validateCust = new validateAddedCustomer();

describe("AddCustomerTestSuite",()=>{



before(()=>{
cy.fixture('bank').then((data)=>{
  
  globalThis.data=data;

})
})


  it("AddCustomer and delete once added",()=>{   
    
    customerHomePageAction.navigateToUrl();
    customerHomePageAction.validateTextOnHomePage();
    customerHomePageAction.clickOnManagerLogin();
    
    addCustomerdata.enterData(data.firstname,data.lastname, data.pincode);
    addCustomerdata.validateAlert();
    
    cy.wait(2000);

    validateCust.validateCustomer(data.firstname);

    
  })








})

