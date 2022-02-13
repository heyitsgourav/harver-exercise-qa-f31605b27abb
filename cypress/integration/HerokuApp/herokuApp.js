import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../PageObjects/HomePage';

//Object Creation for PageObject Page Class and assigning it to a constant variable

const homePage = new HomePage();

Given('I open the Welcome Page for Heroku App', () => {
    cy.visit('/');
})

And('Verify the header {string}', (header) => {
    homePage.getHeader(header)
        .should('be.visible')
})

And('I click to ABTest with {string} and {string} and {string}',
    (OptimizelyBuckets, OptimizelyEndUserId, OptimizelySegments) => {
        cy
            .setCookie('optimizelyBuckets', OptimizelyBuckets)
            .setCookie('optimizelyEndUserId', OptimizelyEndUserId)
            .setCookie('optimizelySegments', OptimizelySegments)
        homePage.getLink().contains('A/B Testing').click()
    })

Then('Verify details as {string}', (Title) => {

    homePage.getTitle(Title)
        .should('be.visible')
})

Then('Verify details as h4 {string}', (Title) => {

    homePage.geth4Title(Title)
        .should('be.visible')
})

And('I click on the {string}', (Link) => {
    homePage.getLink().contains(Link).click()
})

And('I redirect to {string}', (Link) => {
    cy
        .visit(Link)
})

And('I click on AddElement', () => {
    homePage.getAddElement()
        .click()
})

When('I click on DeleteButton', () => {
    homePage
        .getDeleteButton()
        .click()
})

And('Verify the count of Delete Button is {string}', (Count) => {
    homePage
        .getDeleteButton()
        .should('have.lengthOf', Count);
})

And('Verify Delete Button not exist', () => {
    homePage
        .getDeleteButton()
        .should('not.exist')
})

And('I redirect to basicauth with {string} and {string}', (Username, Password) => {
    cy
        .visit('/basic_auth', {
            auth: {
                username: Username,
                password: Password
            }
        })
})

And('Verify checkbox functionality', () => {
    homePage.getCheckboxInput()
        .check()
        .should('be.checked');

    homePage.getCheckboxInput()
        .uncheck()
        .should('not.be.checked');
})

And('Verifies the remove and add behavior', () => {
    homePage.getCheckboxButton()
        .click();
    //cy.get('checkbox')
    homePage.getCheckboxInput()
        .should('not.exist')
    homePage.getMessage()
        .should('contain', 'gone!')


    homePage.getCheckboxButton()
        .click();
    homePage.getCheckboxInput()
        .should('not.exist')
    homePage.getMessage()
        .should('contain', 'back!')

})

And('Verifies enable and disable behavior', () => {
    homePage.getInputExample()
        .should('be.disabled');


    homePage.getInputExampleButton()
        .click();
    homePage.getMessage()
        .should('contain', 'enabled!')

    homePage.getInputExample()
        .type('test');

    homePage.getInputExampleButton()
        .click();
    homePage.getInputExample()
        .should('be.disabled');
    homePage.getMessage()
        .should('contain', 'disabled!')
})

And('Verify checkbox checked and unchecked', () => {
    cy
        .get('input')
        .eq(0)
        .as('input0')
        .check()

    cy
        .get('@input0')
        .should('be.checked')

    cy
        .get('input')
        .eq(1)
        .as('input1')
        .uncheck()

    cy
        .get('@input1')
        .should('not.be.checked')
})

