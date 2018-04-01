'use strict';

exports.config = {

    specs: ['features/**/EP-297.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',


    capabilities: {
        'browserName': 'chrome'
    },

    onPrepare: function() {
        browser.manage().window().maximize();
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        tags: [],
        require: ['features/specSetup.js', 'features/**/step_definitions/**/EP-297Steps.js', 'env.js'],
        format: 'pretty'
    }
};
