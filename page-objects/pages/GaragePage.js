/// <reference types="cypress" />

class GaragePage {
    get addCarButton(){
        return cy.get('.btn-primary');
    }

    get addFuelExpenceButton(){
        return cy.get('.btn btn-success');
    }

    openAddACarForm() {
        this.addCarButton.click();
       cy.get('.modal-title').should('have.text', 'Add a car');
    }

    openAddAnExpenceForm() {
        this.addFuelExpenceButton.click();
       cy.get('.modal-title').should('have.text', 'Add an expense');
    }
}

export default new GaragePage();