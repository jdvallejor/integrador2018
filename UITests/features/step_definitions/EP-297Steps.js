'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var EP323Steps = function () {

    this.Before(function () {
        browser.ignoreSynchronization = true;
    });
    //---------------------------------- Scenario 1 ----------------------------------//
    this.Given(/^I go to integrador2018frontendtest$/, function () {
        return browser.get('https://integrador2018frontendtest.herokuapp.com/');
    });

    //---------------------------------- Scenario 2 ----------------------------------//
    this.Given(/^The page has a button Groups to open$/, function () {
        var menuitem = element(by.xpath("/html/body/app-root/nav/ul/li[1]/a/span"));
        return expect(menuitem.getText()).to.eventually.contain("Groups to open");
    });

    this.When(/^I click the button Groups to open$/, function () {
        browser.driver.sleep(500);
        var menuitem = element(by.xpath("/html/body/app-root/nav/ul/li[1]/a/span"));
        return menuitem.click();
    });

    this.Then(/^The app shows the Groups to open page$/,function(){
        var content = element(by.xpath("/html/body/app-root/app-groups-to-be-open"));
        return expect(content.getTagName()).to.eventually.contain("app-groups-to-be-open");
    });

    //---------------------------------- Scenario 3 ----------------------------------//
    this.Given(/^The first topic that appears has a open button$/, function () {
        var openButton = element(by.xpath("/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr[1]/div/a[1]"));
        return expect(openButton.getText()).to.eventually.contain("Open");
    });

    this.When(/^I click the open button$/, function () {
        browser.driver.sleep(500);
        var openButton = element(by.xpath("/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr[1]/div/a[1]"));
        return openButton.click();
    });

    this.Then(/^The app shows the pop-up window$/,function(){
        browser.driver.sleep(500);
        var porUp = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container"));
        return expect(porUp.getTagName()).to.eventually.contain("mat-dialog-container");
    });

    //---------------------------------- Scenario 4 ----------------------------------//
    this.Given(/^The pop-up has the required fields, "Description" and "Link"$/, function () {
        var fieldD = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-description-detail/div/form/mat-form-field[1]/div/div/div/span/label"));
        var fieldL = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-description-detail/div/form/mat-form-field[2]/div/div/div/span/label"));
        return (expect(fieldD.getText()).to.eventually.contain("Description") &&
                expect(fieldL.getText()).to.eventually.contain("Link"));
    });

};
module.exports = EP323Steps;
