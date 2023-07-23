/// reference type = "Cypress" />

import homePageElements from "../../PageObjects/pageElements/customerHomePageElement"
import customerHomePage from "../../PageObjects/pageActions/customerHomePageAction";
import customerLoginAction from "../../PageObjects/pageActions/customerLoginAction"
import depositActions from "../../PageObjects/pageActions/depositPageAction";

const homeElements = new homePageElements();
const homePage = new customerHomePage();
const customerLoginAct = new customerLoginAction();
const deposit = new depositActions();

describe("Deposit functionality", ()=>{


it("Deposit function",()=>{


homePage.navigateToUrl();
homeElements.clickCustomerButtonLogin();
customerLoginAct.selectDropDown();
customerLoginAct.Login();
deposit.depositButtonClick();



})


})