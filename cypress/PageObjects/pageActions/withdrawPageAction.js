
import withDrawElements from "../pageElements/withdrawPageElement";


const withdraw = new withDrawElements();


export default class withDrawAction{



withDrawAmount(){
 withdraw.withDrawButton().click();

}

enterAmount(amount){
 withdraw.enterAmount().type(amount);
}

clickSubmitWithdraw(){
    withdraw.clickSubmitWithdraw().click();
}








}