const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor');

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    base_url: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
  },
  e2e: {
    setupNodeEvents(on, config) {
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        'module-resolver',
        {
          alias: {
            '@tests': './tests',
            '@helpers': './tests/helpers'
          },
        },
      ]);

      on('file:preprocessor', browserify(options));
    },
    specPattern: 'tests/scenarios/**/*.test.js'
  },
});
