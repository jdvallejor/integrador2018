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
    this.Given(/^The page has a selectSize drop-down list$/, function () {
        var listButton = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/div[1]/mat-form-field/div/div[1]/div/mat-select/div/div/span'));
        return expect(listButton.getText()).to.eventually.contain("Items per page");
    });

    this.When(/^I click the drop-down list Items per page$/, function () {
        var listButton = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/div[1]/mat-form-field/div/div[1]/div'));
        return listButton.click();
    });

    this.Then(/^The app shows the list of items 10, 20, 30$/,function(){
        browser.driver.sleep(500);
        var sizeitem1 = element(by.xpath('//*[@id="cdk-overlay-0"]/div/div/mat-option[1]/span'));
        var sizeitem2 = element(by.xpath('//*[@id="cdk-overlay-0"]/div/div/mat-option[2]/span'));
        var sizeitem3 = element(by.xpath('//*[@id="cdk-overlay-0"]/div/div/mat-option[3]/span'));
        return (expect(sizeitem1.getText()).to.eventually.contain("10") &&
                expect(sizeitem2.getText()).to.eventually.contain("20") &&
                expect(sizeitem3.getText()).to.eventually.contain("30"));
    });

    //---------------------------------- Scenario 4 ----------------------------------//
    this.Given(/^The page has a 10 value item in the drop-down-list$/, function () {
        var sizeitem1 = element(by.xpath('//*[@id="cdk-overlay-0"]/div/div/mat-option[1]/span'));
        return expect(sizeitem1.getText()).to.eventually.contain("10");
    });

    this.When(/^I click on 10 in the drop-down list Items per page$/, function () {
        var sizeitem1 = element(by.xpath('//*[@id="cdk-overlay-0"]/div/div/mat-option[1]/span'));
        return sizeitem1.click();
    });

    this.Then(/^The app shows 10 elements in the page$/,function(){
        browser.driver.sleep(500);
        var tablesize = element.all(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr'));
        tablesize.count().then(function(count) {
            return expect(count==10).to.be.equal(true);
        });
    });

    //---------------------------------- Scenario 5 ----------------------------------//
    this.Given(/^The page has a submenu for move between pages with at least 2 pages$/, function () {
        var submenu = element.all(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li'));
        submenu.count().then(function(count) {
            return expect(count>=4).to.be.equal(true);
        });
    });

    this.Then(/^I click on 2 in the submenu$/, function () {
        var page2 = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li[3]/a'));
        return page2.click();
    });

    //---------------------------------- Scenario 6 ----------------------------------//
    this.Then(/^I click on 1 in the submenu$/, function () {
        browser.driver.sleep(500);
        var page1 = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li[2]/a'));
        return page1.click();
    });

    //---------------------------------- Scenario 7 ----------------------------------//
    this.Then(/^I click on next in the submenu$/, function () {
        browser.driver.sleep(500);
        var nextPage = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li[4]/a'));
        return nextPage.click();
    });

    //---------------------------------- Scenario 8 ----------------------------------//
    this.Then(/^I click on previous in the submenu$/, function () {
        browser.driver.sleep(500);
        var previousPage = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li[1]/a'));
        return previousPage.click();
    });

};
module.exports = EP323Steps;
