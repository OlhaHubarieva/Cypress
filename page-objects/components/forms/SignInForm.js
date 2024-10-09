/// <reference types="cypress" />

class SignInForm {
    get emailField() {
        return cy.get('#signinEmail');
    }

    get passwordField() {
        return cy.get('#signinPassword');
    }

    get logInButton() {
        return cy.get('app-signin-modal .btn-primary');
    }

    logInWithCredentials(email, password) {
        this.emailField.type(email);
        this.passwordField.type(password);
        this.logInButton.click();
    }

}

export default new SignInForm();