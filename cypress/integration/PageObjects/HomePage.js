class Home_Page {

    getLink() {
        return cy.get('#content > ul > li');
    }

    getDeleteButton() {
        return cy.get('button.added-manually');
    }
    getCheckboxInput() {
        return cy.get('#checkbox > input');
    }
    getHeader(header) {
        return cy
            .contains('.heading', header);
    }
    getTitle(Title) {
        return cy
            .contains('h3', Title);
    }
    geth4Title(Title) {
        return cy
            .contains('h4', Title);
    }
    getAddElement() {
        return cy
            .contains('button', 'Add Element');
    }
    getCheckboxButton() {
        return cy.get('#checkbox-example > button');
    }
    getMessage() {
        return cy.get('#message');
    }

    getInputExampleButton() {
        return cy.get('#input-example > button');
    }

    getInputExample() {
        return cy.get('#input-example > input');
    }

}
export default Home_Page