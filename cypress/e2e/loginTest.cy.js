/// <reference types = "Cypress"/>




describe("test login", ()=>{

    it("Google search",() =>{

cy.visit("https://www.google.com/");

cy.get(".a4bIc").type("cypress testing")

    })
})

 