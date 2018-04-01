'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


var EP299Steps = function () {

    this.Before(function () {
        browser.ignoreSynchronization = true;
    });
    //---------------------------------- Scenario 1 ----------------------------------//
    this.Then(/^The administrator window must be shown$/, function () {
        return browser.get('https://integrador2018frontendtest.herokuapp.com');
    });

    //---------------------------------- Scenario 2 ----------------------------------//
    this.Given(/^The page has a button Groups to open$/, function () {
        var menuitem = element(by.xpath("/html/body/app-root/nav/ul/li[1]/a/span"));
        return expect(menuitem.getText()).to.eventually.contain("Groups to open");
    });

    this.When(/^Click on the "Groups to open" tab$/, function () {
        browser.driver.sleep(500);
        var groupsToOpen = element(by.xpath("/html/body/app-root/nav/ul/li[1]/a/span"));
        return groupsToOpen.click();
    });

    this.Then(/^The groups to be open appears in the list$/,function(){
        var content = element(by.xpath("/html/body/app-root/app-groups-to-be-open"));
        return expect(content.getTagName()).to.eventually.contain("app-groups-to-be-open");
    });

    //---------------------------------- Scenario 3 ----------------------------------//
    this.Given(/^The first topic that appears has a open button$/, function () {
        var openButton = element(by.xpath("/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr[1]/div/a[1]"));
        return expect(openButton.getText()).to.eventually.contain("Open");
    });

    this.When(/^Click on "Open" option$/, function () {
        browser.driver.sleep(500);
        var openButton = element(by.xpath("/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr[1]/div/a[1]"));
        return openButton.click();
    });

    this.Then(/^Appears a pop-up window, with two text fields and a "Open group" button$/,function(){
        browser.driver.sleep(500);
        var porUp = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container"));
        return expect(porUp.getTagName()).to.eventually.contain("mat-dialog-container");
    });

    //---------------------------------- Scenario 4 ----------------------------------//
    this.Given(/^Fields with the group information$/, function () {
        var fieldLink = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-description-detail/div/form/mat-form-field[2]/div/div/div/input"));
        global.fieldDescValue = element(by.xpath("/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr[1]/td[1]")).getText();
        fieldLink.sendKeys('https://www.skype.com/');

        return (expect( global.fieldDescValue).to.not.be.empty
                && expect(fieldLink.getText()).to.not.be.empty);
    });

    this.When(/^Click on "Open group" button$/, function () {
        browser.driver.sleep(500);
        var openButton = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-description-detail/div[2]/button[1]"));
        return openButton.click();
    });

    this.Then(/^The group disappears from the actual window list and appears in open groups$/,function(){
        var groupToOpenItem = '';
        groupToOpenItem =  element(by.xpath("/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr[1]/td[1]")).getText();
        var openGroups = element(by.xpath("/html/body/app-root/nav/ul/li[2]"));
        openGroups.click();        
        var openGroupItem =  element.all(by.xpath("/html/body/app-root/app-active-groups/div/table/tbody/tr")).last().all(by.xpath("./td[1]")).first().getText();
        browser.driver.sleep(3000);

        global.fieldDescValue.then(function(fieldDescValue) {
            groupToOpenItem.then(function(groupToOpenItem) {
                 openGroupItem.then(function(openGroupItem) {
                 return (expect(fieldDescValue).not.to.equal(groupToOpenItem) &&                      
                        expect(fieldDescValue).to.equal(openGroupItem) );
                });             
            });             
        });
    });

};
module.exports = EP299Steps;