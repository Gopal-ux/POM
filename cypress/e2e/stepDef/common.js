import {  Given, When ,Then } from "@badeball/cypress-cucumber-preprocessor";


Then("I see the following todos", (datatable)=>{
    datatable.rawTable.slice(1).forEach((list) => {
        cy.get(".todo-list li .view label").should("contain", list[0])
    });

})


Then("I see that I have {string}", (itemsLeft) => {
    cy.get(".footer .todo-count").should("contain", itemsLeft);
  });