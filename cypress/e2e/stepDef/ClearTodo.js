import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click on Clear Completed", ()=>{

    cy.get(".footer .clear-completed").click()
})



Then("I should No see any todo", (todo)=>{
   
})