Feature: Testing EP-299
  https://mercurio.psl.com.co/jira/browse/EP-299
  Verify that when a group is opened, it goes to the "Open groups" tab.

  Scenario: Should go to administrator window
    Then The administrator window must be shown

  Scenario: Should go to the Groups to open page
    Given The page has a button Groups to open
    When Click on the "Groups to open" tab
    Then The groups to be open appears in the list

  Scenario: Should verify the pop-up window Open
    Given The first topic that appears has a open button
    When Click on "Open" option
    Then Appears a pop-up window, with two text fields and a "Open group" button

  Scenario: Should verify the group disappears from the actual window list
    Given Fields with the group information
    When Click on "Open group" button
    Then The group disappears from the actual window list and appears in open groups








