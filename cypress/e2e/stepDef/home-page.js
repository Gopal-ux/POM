import {  Given, When ,Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to the home page", () => {
    cy.visit("https://todomvc.com/examples/react/#/");
    // cy.get(".todoapp").should("be.visible");
    // cy.screenshot("home-page");
  });

Then("I see the home page", () => {
  cy.visit("https://todomvc.com/examples/react/#/");
  cy.get(".header").should("be.visible");
  cy.get(".info").should("be.visible");
});

Given ("I have the following todos", (datatable)=>{
  
    let todos = []
    datatable.rawTable.slice(1).forEach((list, index) => {
        const [title, completed] = list;
        todos.push({
            id : 'test-todo-{index}',
            title,
            completed : completed === "true"
        })
    });
    //  
    window.localStorage.setItem("react-todos", JSON.stringify(todos))
})  
