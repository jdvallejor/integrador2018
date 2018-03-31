Feature: Testing EP-297
  https://mercurio.psl.com.co/jira/browse/EP-297
  Verify that the administrator has the option to add a chat link for a new group.
  I suppose that there is minimum one group to be open stored in the database.

  Scenario: Should go to integrador2018frontendtest
    Given I go to integrador2018frontendtest

  Scenario: Should go to the Groups to open page
    Given The page has a button Groups to open
    When I click the button Groups to open
    Then The app shows the Groups to open page

  Scenario: Should verify the pop-up window "Open"
    Given The first topic that appears has a open button
    When I click the open button
    Then The app shows the pop-up window

  Scenario: Should verify the pop-up window has 2 fields, "Description" and "Link"
    Given The pop-up has the required fields, "Description" and "Link"





