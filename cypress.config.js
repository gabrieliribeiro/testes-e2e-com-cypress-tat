const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    requestTimeout: 15000,
  },
  projectId: 'qoacs6',
})
