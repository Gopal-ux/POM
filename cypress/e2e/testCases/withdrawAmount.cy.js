import homePageElements from "../../PageObjects/pageElements/customerHomePageElement"
import customerHomePage from "../../PageObjects/pageActions/customerHomePageAction";
import withDrawAction from "../../PageObjects/pageActions/withdrawPageAction";
import customerLoginAction from "../../PageObjects/pageActions/customerLoginAction";
import '../../e2e/testCases/depositAmount.cy.js';



const withdraw = new withDrawAction();
const homePage = new homePageElements();
const customerPage = new customerHomePage();
const customerLoginAct = new customerLoginAction();





    describe("withdraw functionality", ()=>{


        it("withdraw function",()=>{
        
            customerPage.navigateToUrl();
            homePage.clickCustomerButtonLogin();
            customerLoginAct.selectDropDown();
            customerLoginAct.Login();
            withdraw.withDrawAmount();
            withdraw.enterAmount(1000);
            withdraw.clickSubmitWithdraw();
       
        
        
        })
    
    })