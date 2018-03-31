# Integrator 2018 UI Tests
 

**PREREQUISITES**:

1) Node js already installed: `https://nodejs.org/es/`
2) Go to this project's folder in a terminal.
- Install the required dependencies `npm install`
- Download Instance of Selenium Server: `webdriver-manager update`

**RUN THE TEST**:
To execute the test you must follow these steps:

1) Open a terminal and start the Instance of Selenium Server: `webdriver-manager start`
2) Go to this project's folder in another terminal
3) Execute this command: `protractor testthatyouwanttorun.js` 
(you can see the name of the files in the information of each person)
4) The test will run

Who made which test:

 **EP-323: Edwin Álvarez Pineda - Team 2**
 - https://mercurio.psl.com.co/jira/browse/EP-323
 - Verify that the topic list allow full navigation through the pages
 - I suppose that the app has more than 10 elements in Groups to open
 - File to execute the test: `EP323Config.js` 
 
 **EP-297: Ana Vásquez - Team 2**
 - https://mercurio.psl.com.co/jira/browse/EP-297
 - Verify that the administrator has the option to add a chat link for a new group.
 - I suppose that there is minimum one group to be open stored in the database.
 - File to execute the test: `EP297Config.js`  