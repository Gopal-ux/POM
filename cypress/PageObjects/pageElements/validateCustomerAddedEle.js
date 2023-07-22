

export class validateAddedCustomer{



    clickCustomer(){
    // return cy.get('[ng-class="btnClass3"]');
    return cy.contains("Customers").click();
    };

    ClickSearchBox(){
    return cy.get('.form-control');
    }


    deleteUser(){
        return cy.get(':nth-child(5) > button').click()
    }

    

}