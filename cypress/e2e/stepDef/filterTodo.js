const { When } = require("@badeball/cypress-cucumber-preprocessor");


When("I filter by Active", ()=>{
    cy.get(".footer .filters").contains("Active").click()
})

When ("I filter by Completed", ()=>{
    cy.get(".footer .filters").contains("Completed").click()
})