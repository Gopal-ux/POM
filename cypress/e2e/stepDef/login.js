import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";




Given("I navigate to automation exercise website", () => {
    cy.visit("https://www.google.com")
    
    
    })
When("Enter text to search in search box" ,()=>{
        cy.get("#APjFqb").type("Cypress Tutorial")
        cy.contains("cypress tutorial").click()
    })

Then("should be able to see text on Page {string}",(title) =>{
        cy.url().should("contains", title)
    })


Given("hit Tutorial Videos | Cypress Documentation link",()=>{
    cy.visit("https://www.google.com")
})

When ("Start to type your And step here",()=>{

})