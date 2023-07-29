// import './depositAmount.cy.js';
import withDrawAction from "../../PageObjects/pageActions/withdrawPageAction";
import homePageElements from "../../PageObjects/pageElements/customerHomePageElement"
import customerHomePage from "../../PageObjects/pageActions/customerHomePageAction";
import customerLoginAction from "../../PageObjects/pageActions/customerLoginAction"
import depositActions from "../../PageObjects/pageActions/depositPageAction";

const homeElements = new homePageElements();
const homePage = new customerHomePage();
const customerLoginAct = new customerLoginAction();
const deposit = new depositActions();                                                           /// Incompleted Neeed to work on
const withdraw = new withDrawAction();


describe("withdraw-deposit", ()=>{


    it("Deposit function",()=>{


        homePage.navigateToUrl();
        homeElements.clickCustomerButtonLogin();
        customerLoginAct.selectDropDown();
        customerLoginAct.Login();
        deposit.depositButtonClick();     
        cy.wait(2000) 
        cy.get('[ng-class="btnClass3"]').click();


        withdraw.withDrawAmount();
        withdraw.enterAmount(1000);
         withdraw.clickSubmitWithdraw();
        
        })


    // it("withdraw-deposit",()=>{
    
    //  withdraw.withDrawAmount();
    
    
    // })

})