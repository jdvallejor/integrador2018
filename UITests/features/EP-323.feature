Feature: Testing EP-323
  https://mercurio.psl.com.co/jira/browse/EP-323
  Verify that the topic list allow fully navigation through all pages
  I suppose that the app has more than 10 elements in Groups to open

  Scenario: Should go to integrador2018frontendtest
    Given I go to integrador2018frontendtest

  Scenario: Should go to the Groups to open page
    Given The page has a button Groups to open
    When I click the button Groups to open
    Then The app shows the Groups to open page

  Scenario: Should verify the items per page
    Given The page has a selectSize drop-down list
    When I click the drop-down list Items per page
    Then The app shows the list of items 10, 20, 30

  Scenario: Should verify the items in the page when I choose 10
    Given The page has a 10 value item in the drop-down-list
    When I click on 10 in the drop-down list Items per page
    Then The app shows 10 elements in the page

  Scenario: Should move to the second page
    Given The page has a submenu for move between pages with at least 2 pages
    Then I click on 2 in the submenu

  Scenario: Should move to the first page
    Then I click on 1 in the submenu

  Scenario: Should move to the next page
    Then I click on next in the submenu

  Scenario: Should move to the previous page
    Then I click on previous in the submenu

