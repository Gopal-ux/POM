import {  Given, When ,Then } from "@badeball/cypress-cucumber-preprocessor";


Given("I have no todos", ()=>{
    cy.visit("https://todomvc.com/examples/react/#/")
    window.localStorage.setItem("react-todos", [])
})

When("I sumbit {string} for my new todo", (title)=>{
    cy.get(".new-todo").type(title).type('{ENTER}')
})

// When("I sumbit {string} for my new todo", (title)=>{
//    cy.get(".new-todo").type('${title}{ENTER}')
// })


Then("I see the following todos", (datatable)=>{
      datatable.rawTable.slice(1).forEach((list) => {
          cy.get(".todo-list li .view label").should("contain", list[0])
      });

})