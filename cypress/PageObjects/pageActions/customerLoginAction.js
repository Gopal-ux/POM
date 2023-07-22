
import customerLoginEle from "../../PageObjects/pageElements/customerLoginEle";




const selectCustomer = new customerLoginEle();            // Object Creation

export default class customerLoginAction{


   selectDropDown(){
    selectCustomer.selectCustomer();
   }

   Login(){

    selectCustomer.clickOnLogin();
   }
   
  


}