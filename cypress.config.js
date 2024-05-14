const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// eslint-disable-next-line import/no-unresolved
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    async setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin.default(config)] }));
      return config;
    },
    specPattern: [
      'cypress/e2e/**/*.feature'
    ],
    baseUrl: 'https://example.com/',
  },
});
