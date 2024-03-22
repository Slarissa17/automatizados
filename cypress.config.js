const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
        allureWriter(on, config);
            return config;
    },
    baseUrl: 'https://homologation.varstation.varsomics-sandbox.com/#/'
  },

});
