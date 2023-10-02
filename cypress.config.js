/// <reference types="Cypress" />

const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");


module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: false,
    
  },
   
  e2e: {
    specPattern :  "**/*.feature",
   "baseUrl" : "https://way2automation.com/angularjs-protractor/banking/#/login",  
    defaultCommandTimeout :5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
      
    },
    },
  
  

    "retries": {
      "openMode" : 1
    }

   
  // env : {
  //   baseUrl : "https://way2automation.com/angularjs-protractor/banking/#/login", 
  // }



});

//How Parallel works
// How it works
// 🔍 - Search for existing Cypress tests
// 📄 - Read (if exists) a weight file
// ⚖️ - Split spec files into different threads
// ⚙️ - For each thread it runs the Cypress command you've passed as argument
// 📈 - Wait for all threads to finish and collects the result in a single report
