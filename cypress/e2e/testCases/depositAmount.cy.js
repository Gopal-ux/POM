/// reference type = "Cypress" />

import homePageElements from "../../PageObjects/pageElements/customerHomePageElement"
import customerHomePage from "../../PageObjects/pageActions/customerHomePageAction";
import customerLoginAction from "../../PageObjects/pageActions/customerLoginAction"

const homeElements = new homePageElements();
const homePage = new customerHomePage();
const customerLoginAct = new customerLoginAction();

describe("Deposit functionality", ()=>{


it("Deposit function",()=>{


homePage.navigateToUrl();
homeElements.clickCustomerButtonLogin();
customerLoginAct.selectDropDown();
customerLoginAct.Login();



})


})