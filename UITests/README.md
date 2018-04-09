# Integrator 2018 UI Tests
 

**PREREQUISITES**:

1) Node js already installed: `https://nodejs.org/es/`.
2) Go to this test's folder in a terminal.
- Install the required dependencies `npm install`.
- Install protractor  `npm install -g protractor`.
- Download Instance of Selenium Server: `webdriver-manager update`.
3) Google Chrome already installed.
4) Mozilla Firefox already installed.

**RUN THE TEST**:
To execute the test you must follow these steps:

1) Open a terminal and start the Instance of Selenium Server: `webdriver-manager start`.
2) Go to this project's folder in another terminal.
3) Execute this command: `protractor testthatyouwanttorun.js` 
(you can see the name of the files in the information of each person).
4) The test will run.

Who made which test:
 
 **EP-297: Ana Vásquez - Team 2**
 - https://mercurio.psl.com.co/jira/browse/EP-297.
 - Verify that the administrator has the option to add a chat link for a new group.
 - I suppose that there is minimum one group to be open stored in the database.
 - File to execute the test: `EP297Config.js`. 
 
 **EP-299: Andres Camilo Aguirre - Team 2**
  - https://mercurio.psl.com.co/jira/browse/EP-299.
  - Verify that when a group is opened, it goes to the "Open groups" tab.
  - File to execute the test: `EP299Config.js`. 

  **EP-301: Daniel Cataño Restrepo - Team 2**
  - https://mercurio.psl.com.co/jira/browse/EP-301
  - Verify that the topics are highlighted when there are a minimum of collaborators interested in learn/guide.
  - File to execute the test: `EP301Config.js`.  
  
  **EP-303: Jose Alejandro Aristizabal Hoyos - Team 2**
  - https://mercurio.psl.com.co/jira/browse/EP-303
  - Verify that the Administrator can sort the list of topics by clicking on the column header.
  - File to execute the test: `EP303Config.js`.

   **EP-323: Edwin Álvarez Pineda - Team 2**
 - https://mercurio.psl.com.co/jira/browse/EP-323.
 - Verify that the topic list allow full navigation through the pages.
 - I suppose that the app has more than 10 elements in Groups to open.
 - File to execute the test: `EP323Config.js`. 