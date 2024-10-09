/// <reference types="cypress" />

class AddAnExpenseForm {
    get vehicleField() {
        return cy.get('#addExpenseCar');
    }

    get reportDateField() {
        return cy.get('#addExpenseDate');
    }

    get mileageField() {
        return cy.get('#addExpenseMileage');
    }

    get numberOfLitersField() {
        return cy.get('#addExpenseLiters');
    }

    get totalCostsField() {
        return cy.get('#addExpenseTotalCost');
    }

    get addButton(){
        return cy.get('app-add-expense-modal .btn-primary');
    }

    get addAnExpenseButton(){
        return cy.get('.btn-success');
    }

    AddAnExpenseForm(mileage,numberOfLiters, totalCosts) {
        this.addAnExpenseButton.click();
        this.mileageField.clear().type(mileage);
        this.numberOfLitersField.type(numberOfLiters);
        this.totalCostsField.type(totalCosts);
        this.addButton.click();
        cy.get('.panel-page_heading h1').should('have.text', 'Fuel expenses');
    }
}

export default new AddAnExpenseForm();