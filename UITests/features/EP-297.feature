Feature: Testing EP-297
  https://mercurio.psl.com.co/jira/browse/EP-297
  Verify that the pop-up window related with the "Open" button has Skype link field.
  I suppose that there is minimum one group to be open stored in the database.

  Scenario: Put Skype link on the field
    Given The pop-up window is open
    When I verify that exist the Link input field
    And I put on the link input field "www.skype.com"
    Then The Link field contains the link "www.skype.com"






