Feature: Testing EP-323
  https://mercurio.psl.com.co/jira/browse/EP-323
  Verify that the topic list allow fully navigation through all pages
  I suppose that the app has more than 10 elements in Groups to open

  Scenario: Go to the page 1 on Groups to open window
    Given active window "Groups to open"
    And A submenu for move between pages with at least 2 pages
    When I click on 1 in the submenu
    Then The option 1 on the submenu is checked
    And  The Groups to open window at page 1 shown at least one group

  Scenario: Go to the page 2 on Groups to open window
    Given active window "Groups to open"
    And A submenu for move between pages with at least 2 pages
    When I click on 2 in the submenu
    Then The option 2 on the submenu is checked
    And  The Groups to open window at page 2 shown at least one group

  Scenario: Go to the last page on Groups to open window
    Given active window "Groups to open"
    And A submenu for move between pages with at least 2 pages
    When I click on arrow that goes to the right in the submenu
    Then The last number on the submenu is checked
    And  The Groups to open window at last page shown at least one group

  Scenario: Go to the first page on Groups to open window
    Given active window "Groups to open"
    And A submenu for move between pages with at least 2 pages
    When I click on arrow that goes to the left in the submenu
    Then The first number on the submenu is checked
    And  The Groups to open window at first page shown at least one group

