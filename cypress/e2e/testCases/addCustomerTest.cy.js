/// <reference types="Cypress" />

import addCustomerPage from '../../PageObjects/pageActions/addCustomerPageAction';
import customerHomePage from '../../PageObjects/PageActions/customerHomePageAction';

  const customerPage = new addCustomerPage();
  const homePage = new customerHomePage();

describe("AddCustomerTestSuite",()=>{



  it("AddCustomerTest",()=>{

   
    customerPage.navigateToUrl();
    customerPage.validateTextOnPage();
    customerPage.clickBankManagerLogin().click();

   

  })

})

