Feature: Testing EP-301
  https://mercurio.psl.com.co/jira/browse/EP-301
  Verify that the topics are highlighted when there are a minimum of collaborators interested in learn/guide
  I suppose that there is minimum one group to be open stored in the database.

  Scenario: Verify higlighted topics
    Given The topics to be open view is open
    When I verify that exist topics in the view
    And I verify that there are topics with the ready-to-open css class inserted 
    Then the topics has more than 10/1 students/teachers in the group