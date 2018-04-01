'use strict';

exports.config = {

    specs: ['features/**/EP-299.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',


    capabilities: {
        // 'directConnect': true,
        'browserName': 'firefox'
        // chromeOptions: {
        //     args: ["--headless", "--disable-gpu", "--window-size=800x600"]
        // }
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        tags: [],
        require: [ 'features/**/step_definitions/**/EP-299Steps.js', 'env.js'],
        format: 'pretty'
    }
};
