import {  Given, When ,Then } from "@badeball/cypress-cucumber-preprocessor";


When("I have no todos", ()=>{
    cy.visit("https://todomvc.com/examples/react/#/")
    window.localStorage.setItem("react-todos", [])
})


When("I sumbit {string} for my new todo", (title)=>{
    cy.get(".new-todo").type(title).type('{ENTER}')
})
