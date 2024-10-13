import HomePage from "../../../page-objects/pages/HomePage";
import SignInForm from "../../../page-objects/components/forms/SignInForm";

describe('Intercept tests', () => {

    it('Check the response status, body', () => {

        cy.intercept('GET', '/api/cars').as('getCars');
        HomePage.open();
        HomePage.openSignInForm();
        SignInForm.logInWithCredentials('hubba.oljuna+t22@gmail.com', 'OHubba15');
        cy.get('h1').should('have.text', 'Garage');
        //cy.wait('@getCars').its('response.statusCode').should('eq', 200);
        //cy.wait('@getCars').its('response.body.data').should('not.be.null');
        cy.wait('@getCars').its('response.body.data[0]').should('have.property', 'brand', 'Audi');

    })

    it('Change the response body', () => {

        const body = {
            "status": "ok",
            "data": [
                {
                    "id": 196902,
                    "carBrandId": 2,
                    "carModelId": 9,
                    "initialMileage": 10000,
                    "updatedMileageAt": "2024-10-10T09:50:33.000Z",
                    "carCreatedAt": "2024-10-10T09:50:33.000Z",
                    "mileage": 10000,
                    "brand": "BMW",
                    "model": "X6",
                    "logo": "bmw.png"
                },
                {
                    "id": 196901,
                    "carBrandId": 4,
                    "carModelId": 16,
                    "initialMileage": 20000,
                    "updatedMileageAt": "2024-10-10T09:50:25.000Z",
                    "carCreatedAt": "2024-10-10T09:50:25.000Z",
                    "mileage": 20000,
                    "brand": "Porsche",
                    "model": "911",
                    "logo": "porsche.png"
                },
                {
                    "id": 196641,
                    "carBrandId": 1,
                    "carModelId": 1,
                    "initialMileage": 500,
                    "updatedMileageAt": "2024-10-09T16:42:28.000Z",
                    "carCreatedAt": "2024-10-09T16:42:27.000Z",
                    "mileage": 600,
                    "brand": "Audi",
                    "model": "TT",
                    "logo": "audi.png"
                }
            ]
        }

        cy.intercept('GET', '/api/cars', body);
        HomePage.open();
        HomePage.openSignInForm();
        SignInForm.logInWithCredentials('hubba.oljuna+t22@gmail.com', 'OHubba15');
        cy.get('h1').should('have.text', 'Garage');

    })
})

