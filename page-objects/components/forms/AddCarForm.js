/// <reference types="cypress" />

class AddACarForm {
    get brandField() {
        return cy.get('#addCarBrand');
    }

    get modelField() {
        return cy.get('#addCarModel');
    }

    get mileageField() {
        return cy.get('#addCarMileage');
    }

    get addButton(){
        return cy.get('.modal-footer > .btn-primary');
    }

    addACar(brand, model, mileage) {
        this.brandField.select(brand);
        this.modelField.select(model);
        this.mileageField.type(mileage).blur();
       this.addButton.click();
    }
}

export default new AddACarForm();