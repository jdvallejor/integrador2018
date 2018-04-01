'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var EP297Steps = function () {

    this.Before(function () {
        browser.ignoreSynchronization = true;
    });

    //---------------------------------- Steps ----------------------------------//
    this.Given(/^The pop-up window is open$/, function () {
        //----------------------- Open App -----------------------//
        browser.get('https://integrador2018frontendtest.herokuapp.com/');
        //----------------------- Verify if exist and then click on Groups to open-----------------------//
        var menuitem = element(by.xpath("/html/body/app-root/nav/ul/li[1]/a/span"));
        expect(menuitem.getText()).to.eventually.contain("Groups to open");
        menuitem.click();
        browser.driver.sleep(1000);
        //----------------------- Verify if exist and then click on Open-----------------------//
        var openButton = element(by.xpath("/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr[1]/div/a[1]"));
        return openButton.click();
    });

    this.When(/^I verify that exist the Link input field$/, function () {
        var fieldD = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-description-detail/div/form/mat-form-field[1]/div/div/div/span/label"));
        var fieldL = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-description-detail/div/form/mat-form-field[2]/div/div/div/span/label"));
        return (expect(fieldD.getText()).to.eventually.contain("Description") &&
            expect(fieldL.getText()).to.eventually.contain("Link"));
    });

    this.When(/^I put on the link input field "www.skype.com"$/, function () {
        var fieldL = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-description-detail/div/form/mat-form-field[2]/div/div/div/input"));
        return expect(fieldL.sendKeys("www.skype.com"));
    });

    this.Then(/^The Link field contains the link "www.skype.com"$/,function(){
        browser.driver.sleep(500);
        var fieldL = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-description-detail/div/form/mat-form-field[2]/div/div/div/input"));
        fieldL.getAttribute('value').then(function(text) {
            return expect(text=="www.skype.com").to.be.equal(true);
        });
    });

};
module.exports = EP297Steps;
