const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ap1g7j",
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://qauto2.forstudy.space/',
    retries: {
      runMode: 3,
    },
    env: {
      AUTH_USERNAME: 'guest',
      AUTH_PASSWORD: 'welcome2qauto'
    },
    // viewportHeight: 300,
    // viewportWidth: 300,
    // defaultCommandTimeout: 9000,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});