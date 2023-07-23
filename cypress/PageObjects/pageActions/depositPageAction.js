

import depositPageElement from "../../PageObjects/pageElements/depositPageElement";

const deposit = new depositPageElement();


export default class depositActions{


depositButtonClick(){

    deposit.depositBtn().click();
    deposit.EnterDepositAmount().type(2000);
    deposit.ClickDeposit().click();
    deposit.validateDepostSuccess().should("have.text","Deposit Successful");
}


}