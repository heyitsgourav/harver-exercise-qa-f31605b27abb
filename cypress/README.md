# Get started

This is BDD based framework (Cypress+ Cucumber)

## Project Structure
### Cucumber-json: 
Run command “npx cypress open” and run .feature file HerokuApp.cucumber.json the file is generated under the below path.
“outputFolder”: “cypress/cucumber-json”

### fixtures:

While designing a Test Automation Framework, one of the primary requirements is to segregate the test scripts from the test data. Additionally, if the same framework can provide the functionality to mock the backend/third-party requests and offer the capability to test the frontend independently, it will be the icing on the cake. Cypress provides both of these functionalities, which we can quickly achieve with the help of Fixtures in Cypress.

### integration:
The integration folder provides a place that writes out test cases. We can also create our folder under the integration directory and add out test cases under that.
PageObjects: This is based on page object model design pattern for easy maintenance & Reusability. Each page will have seperate class.
StepDefs is a small piece of code with a design pattern attached to it. An annotation followed by the pattern that we have mentioned in the feature file links the Step Definition to all the matching Steps. Cucumber will execute the code when it sees a Gherkin Step mentioned in the feature file. Cucumber finds the corresponding Step Definition file with the help of the Glue code that we mention in Cucumber Options.
Feature File is the entry point to the Cucumber tests of your framework. It is a file where you will write your tests or acceptance criteria in Descriptive Gherkin language (Like English). It is an essential component of Cucumber, as it serves as an automation test script as well as live documentation containing the acceptance criteria. A feature file can include one or many scenarios that are in the form of Given-When-Then format.

### plugin
Plugins contain the plugins or listeners. By default, Cypress will automatically include the plugins file "cypress/plugins/index.js" before every test it runs. You can programmatically alter the resolved configuration and environment variables using plugins, Eg. If we have to inject customized options to browsers like accepting the certificate, or do any activity on test case pass or fail or to handle any other events like handling screenshots. They enable you to extend or modify the existing behavior of Cypress.


### support
Support writes customized commands or reusable methods that are available for usage in all of your spec/test files. This file runs before every single spec file. That's why you don’t have to import this file in every single one of your spec files.  The "support" file is a great place to put reusable behavior such as Custom Commands or global overrides that you want to be applied and available to all of your spec files.

### videos
This will contain the video of test's execution .

### Node_Modules 
Node_Modules in the default project structure is the heart of the cypress project. All the node packages will be installed in the node_modules directory and will be available in all the test files. So, in a nutshell, this is the folder where NPM installs all the project dependencies.

### Cypress.json 
Cypress.json is used to store different configurations. E.g., timeout, base URL, test files, or any other configuration that we want to override for tweaking the behavior of Cypress. We can also manage the customized folder structure because it is part of by default Cypress Configurations.

## How to run the tests

Run your Cypress Launcher the way you would usually do, for example:

```bash
./node_modules/.bin/cypress open
or
npx cypress open
```

click on a `.feature` file on the list of specs, and see the magic happening!

### Running tagged tests

```shell
  ./node_modules/.bin/cypress-tags run -e TAGS='@@heroku-App'
```

### Cucumber Report

Generate cucumber .html report
Simply run .js file (cucumber-html-report.js) created in above steps. commnd is below
```shell
node ./cypress/cucumber-html-report.js
```
report is generate under reportPath: “./reports/cucumber-htmlreport.html”,
