/// <reference types="Cypress" />
const { defineConfig } = require("cypress");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}

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
    setupNodeEvents,
    specPattern : "cypress/e2e/features/*.feature",
    baseUrl : "https://way2automation.com/angularjs-protractor/banking/#/login",  
    defaultCommandTimeout :5000,
     },

    "retries": {
      "openMode" : 1
    }
  });


//How Parallel works
// How it works
// 🔍 - Search for existing Cypress tests
// 📄 - Read (if exists) a weight file
// ⚖️ - Split spec files into different threads
// ⚙️ - For each thread it runs the Cypress command you've passed as argument
// 📈 - Wait for all threads to finish and collects the result in a single report
