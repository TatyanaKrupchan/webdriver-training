// An example configuration file.
exports.config = {
  directConnect: false,

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Excersise_17.spec.js'],

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    "loggingPrefs": { "driver": "INFO", "server": "OFF", "browser": "ALL" }
    // 'browserName': 'firefox'
    /* 'browserName': 'internet explorer',
    'platform': 'ANY',
    'ignoreProtectedModeSettings': true*/

  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['example_spec.js'],
  ignoreUncaughtExceptions: true,

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
