///<reference types = "Cypress" />

import { validateAddedCustomer} from "../pageElements/validateCustomerAddedEle";

const validate = new validateAddedCustomer();



export default class customerValidation{


validateCustomer(name){

validate.clickCustomer().click();
validate.ClickSearchBox().type(name);
validate.deleteUser();

}



}