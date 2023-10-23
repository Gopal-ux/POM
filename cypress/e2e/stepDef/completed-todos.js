const { When } = require("@badeball/cypress-cucumber-preprocessor");

When ("I completed {string}", (title)=>{
    cy.get(".todo-list li .view label")
    .parent()
    .find(".toggle")
    .click()

    cy.get(".todo-list").find(".completed").should("have.class", "completed")

})
