/*Завдання 2:

Використовуючи підміну(intercepting), зробіть так, щоб при відкритті сторінки Profile 
ім'я користовуча змінювалось з реального на Happy Unicorn. Зробіть перевірку, що через UI відображається дійно змінене ім'я.*/


import HomePage from "../../../../page-objects/pages/HomePage";
import SignInForm from "../../../../page-objects/components/forms/SignInForm";

it('Change the profile name using intercept', () => {

    cy.intercept('GET', '/api/users/profile', (req) => {
        req.reply({
            status: "ok",
            data: {
                name: 'Happy',
                lastName: 'Unicorn',
                photoFilename: "default-user.png",
                userId: 152723
            }
        })
    });

    HomePage.open();
    HomePage.openSignInForm();
    SignInForm.logInWithCredentials('hubba.oljuna+t22@gmail.com', 'OHubba15');
    cy.get('[routerlink=profile]').click();
    cy.get('p.profile_name.display-4').should('have.text', 'Happy Unicorn');

});