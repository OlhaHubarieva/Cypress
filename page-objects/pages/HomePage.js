/// <reference types="cypress" />

class HomePage {
    get signInButton() {
        return cy.get('.header_signin');
    }

    open() {
        cy.visit('', {
            auth: {
                username: Cypress.env('AUTH_USERNAME'),
                password: Cypress.env('AUTH_PASSWORD')
            }

        })};

    openSignInForm() {
            this.signInButton.click();
            cy.get('.modal-title').should('have.text', 'Log in');
        }
    }


export default new HomePage();
