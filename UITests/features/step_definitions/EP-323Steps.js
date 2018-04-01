'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var EP323Steps = function () {

    this.Before(function () {
        browser.ignoreSynchronization = true;
    });

    //---------------------------------- Given is the same for all scenarios ----------------------------------//
    this.Given(/^active window "Groups to open"$/, function () {
        //----------------------- Open App -----------------------//
        browser.get('https://integrador2018frontendtest.herokuapp.com/');
        //----------------------- Verify if exist and then click on Groups to open-----------------------//
        var menuitem = element(by.xpath("/html/body/app-root/nav/ul/li[1]/a/span"));
        expect(menuitem.getText()).to.eventually.contain("Groups to open");
        menuitem.click();
        //----------------------- Wait for the page load-----------------------//
        browser.driver.sleep(1000);
        //----------------------- Verify if exist and then click on drop-down list items per page-----------------------//
        var listButton = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/div[1]/mat-form-field/div/div[1]/div/mat-select/div/div/span'));
        expect(listButton.getText()).to.eventually.contain("Items per page");
        listButton.click();
        //----------------------- Wait for the groups load-----------------------//
        browser.driver.sleep(1000);
        //----------------------- Verify if exist and then click on 10 value in the drop-down list items per page-----------------------//
        var sizeitem1 = element(by.xpath('//*[@id="cdk-overlay-0"]/div/div/mat-option[1]/span'));
        expect(sizeitem1.getText()).to.eventually.contain("10");
        return sizeitem1.click();
    });

    this.Given(/^A submenu for move between pages with at least 2 pages$/, function () {
        var submenu = element.all(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li'));
        submenu.count().then(function(count) {
            return expect(count>=4).to.be.equal(true);
        });
    });

    //---------------------------------- Scenario 1 ----------------------------------//
    this.When(/^I click on 1 in the submenu$/, function () {
        var page1 = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li[2]/a'));
        return page1.click();
    });

    this.Then(/^The option 1 on the submenu is checked$/,function(){
        var page1 = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li[2]'));
        page1.getAttribute('class').then(function(classes) {
            return expect(classes.split(' ').indexOf('active') !== -1).to.be.equal(true);
        });
    });

    this.Then(/^The Groups to open window at page 1 shown at least one group$/,function(){
        browser.driver.sleep(500);
        var tablesize = element.all(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr'));
        tablesize.count().then(function(count) {
            return expect(count>0).to.be.equal(true);
        });
    });

    //---------------------------------- Scenario 2 ----------------------------------//

    this.When(/^I click on 2 in the submenu$/, function () {
        var page2 = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li[3]/a'));
        return page2.click();
    });

    this.Then(/^The option 2 on the submenu is checked$/,function(){
        var page2 = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li[3]'));
        page2.getAttribute('class').then(function(classes) {
            return expect(classes.split(' ').indexOf('active') !== -1).to.be.equal(true);
        });
    });

    this.Then(/^The Groups to open window at page 2 shown at least one group$/,function(){
        browser.driver.sleep(500);
        var tablesize = element.all(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr'));
        tablesize.count().then(function(count) {
            return expect(count>0).to.be.equal(true);
        });
    });

    //---------------------------------- Scenario 3 ----------------------------------//

    this.When(/^I click on arrow that goes to the right in the submenu$/, function () {
        var submenu = element.all(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li'));
        submenu.count().then(function(count) {
            var lastPage = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li['+count+']/a'));
            return lastPage.click();
        });
    });

    this.Then(/^The last number on the submenu is checked$/,function(){
        var submenu = element.all(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li'));
        submenu.count().then(function(count) {
            var lastNumber = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li['+(count-1)+']'));
            lastNumber.getAttribute('class').then(function(classes) {
                return expect(classes.split(' ').indexOf('active') !== -1).to.be.equal(true);
            });
        });
    });

    this.Then(/^The Groups to open window at last page shown at least one group$/,function(){
        browser.driver.sleep(500);
        var tablesize = element.all(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr'));
        tablesize.count().then(function(count) {
            return expect(count>0).to.be.equal(true);
        });
    });

    //---------------------------------- Scenario 4 ----------------------------------//

    this.When(/^I click on arrow that goes to the left in the submenu$/, function () {
        var firstPage = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li[1]/a'));
        return firstPage.click();
    });

    this.Then(/^The first number on the submenu is checked$/,function(){
        var firstNumber = element(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tfoot/td/mfbootstrappaginator/mfpaginator/ul[1]/li[2]'));
        firstNumber.getAttribute('class').then(function(classes) {
            return expect(classes.split(' ').indexOf('active') !== -1).to.be.equal(true);
        });
    });

    this.Then(/^The Groups to open window at first page shown at least one group$/,function(){
        browser.driver.sleep(500);
        var tablesize = element.all(by.xpath('/html/body/app-root/app-groups-to-be-open/section/div/table/tbody/tr'));
        tablesize.count().then(function(count) {
            return expect(count>0).to.be.equal(true);
        });
    });




};
module.exports = EP323Steps;
