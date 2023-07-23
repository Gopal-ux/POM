

export default class withDrawElements {



 withDrawButton()
{
return cy.get('body > div.ng-scope > div > div.ng-scope > div > div:nth-child(5) > button:nth-child(3)');

}


enterAmount(){

return cy.get ('body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > div > input');

}


clickSubmitWithdraw(){
    return cy.get("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > button");
}



}