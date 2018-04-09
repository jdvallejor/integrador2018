Feature: Testing EP-303
  https://mercurio.psl.com.co/jira/browse/EP-303
  Verify that the Administrator can sort the list of topics by clicking on the column header in "Open groups" tab.

  Scenario: Go to "topic" name header
    Given active window "Open groups"
    When Click on "topic" name header
    Then the list of topics is update in alphabetically ascending order by the topic

  Scenario: Go to "Description" name header
    Given active window "Open groups"
    When Click on "Description" name header
    Then the list of topics is update in alphabetically ascending order by the description


  Scenario: Go to "Data open" name header
    Given active window "Open groups"
    When Click on "Data open" name header
    Then the list of topics is update by the creation date

  Scenario: Go to "Learning" name header
    Given active window "Open groups"
    When Click on "Learning" name header
    Then the list of topics is update in  ascending order by the numbers of learnings

  Scenario: Go to "Guiding" name header
    Given active window "Open groups"
    When Click on "Guiding" name header
    Then the list of topics is update in  ascending order by the numbers of Guidings

  Scenario: Go to "Chat" name header
    Given active window "Open groups"
    When Click on "Chat" name header
    Then the list of topics is update in  ascending order by the numbers of chats