import HomePage from "../../../page-objects/pages/HomePage";
import SignInForm from "../../../page-objects/components/forms/SignInForm";
import GaragePage from "../../../page-objects/pages/GaragePage";
import AddCarForm from "../../../page-objects/components/forms/AddCarForm";
import ExpenseForm from "../../../page-objects/components/forms/ExpenseForm";


describe('Add car and expense scenario', () => {

    beforeEach(() => {
        HomePage.open();
        HomePage.openSignInForm();
        SignInForm.logInWithCredentials('hubba.oljuna+t22@gmail.com', 'OHubba15');
        cy.get('h1').should('have.text', 'Garage');
    });


    describe('Add a car scenario', () => {

        it('Verify user is able to add a car', () => {

            GaragePage.openAddACarForm();
            AddCarForm.addACar('BMW', '3', '25');

        })

        after(() => {
            cy.wait(500);
            cy.get('.car-item').each((item) => {
                cy.wrap(item).find('.icon-edit').click();
                cy.get('.btn-outline-danger').click();
                cy.get('.btn-danger').click();

            })
        })

    })

    describe('Add a car expense scenario', () => {

        beforeEach(() => {

            GaragePage.openAddACarForm();
            AddCarForm.addACar('Audi', 'TT', '500');

        });

        it('Verify user is able to add an expense', () => {

            ExpenseForm.AddAnExpenseForm(600, 50, 40);

        })

        after(() => {

            cy.get('.panel-page').trigger('mouseover');
            cy.get('.icon-delete').click({ force: true });
            cy.get('.btn-danger').click();

        })

    })

})
