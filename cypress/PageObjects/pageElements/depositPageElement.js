

export default class depositPageElement{


depositBtn(){

    return cy.get('body > div > div > div.ng-scope > div > div:nth-child(5) > button:nth-child(2)');
}


withdrawButton(){
    return cy.get('.btn-primary').click()
}

EnterDepositAmount(){
    return cy.get('.form-control');
}

ClickDeposit(){
    return cy.get('body > div > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > button');
}

validateDepostSuccess(){
    return cy.get("body > div > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > span");
}


}