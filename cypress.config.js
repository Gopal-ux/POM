/// <reference types="Cypress" />

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

     "baseUrl" : "https://way2automation.com/angularjs-protractor/banking/#/login",  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    },

   
  // env : {
  //   baseUrl : "https://way2automation.com/angularjs-protractor/banking/#/login", 
  // }



});
