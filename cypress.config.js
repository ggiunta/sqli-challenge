const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  },
  env: {
    ui_base_url: 'https://www.google.com/',
    api_base_url: 'https://petstore.swagger.io/v2',
  }
})
