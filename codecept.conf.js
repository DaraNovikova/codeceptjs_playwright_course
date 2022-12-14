const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
const { devices } = require('playwright');
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://todomvc.com/examples/react/',
      show: true,
      // browser: 'chromium',
      emulate: devices['iPhone 6'],
    }
  },
  multiple: {
    basic: {
      browsers: [
        "firefox", "chromium", "webkit"
      ]
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'pw_codecept',
  plugins: {
    allure: {
      enabled: true,
      outputDir: "allure-results"
    }
}

}