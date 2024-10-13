import HomePage from "../../../page-objects/pages/HomePage";
import SignInForm from "../../../page-objects/components/forms/SignInForm";
import GaragePage from "../../../page-objects/pages/GaragePage";
import AddCarForm from "../../../page-objects/components/forms/AddCarForm";
import ExpenseForm from "../../../page-objects/components/forms/ExpenseForm";


describe('Request API tests', () => {

    it('GET + expect', () => {

        cy.request({
            method: 'GET',            // HTTP-метод (GET, POST, PUT, DELETE, ін.)
            url: '/api/cars/brands',        // URL-шлях
            /* qs: {                     // Параметри запиту (query string)
               page: 1,
               limit: 10,
             },
             headers: {                // Заголовки запиту
               Authorization: 'Bearer your_token',
             },
             body: {                   // Тіло запиту для POST або PUT
               key: 'value',
             },
             form: true,               // Вказує, що тіло запиту має бути оброблене як форма
             failOnStatusCode: false,  // Вимикає автоматичне викидання помилок на невдачу
             timeout: 10000,           // Таймаут на запит (в мілісекундах)
             responseTimeout: 30000,   // Таймаут на отримання відповіді (в мілісекундах)
             retryOnNetworkFailure: true,  // Повторювати запит у разі проблем з мережею
             retryOnStatusCodeFailure: true,  // Повторювати запит у разі невдачі за HTTP-статусом*/
        }).then((response) => {
            cy.log(JSON.stringify(response));// Тут ви можете виконати перевірки на отриману відповідь
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length(5);//або
            expect(response.body.data.length).to.eq(5);
            expect(response.body.data[0].title).to.eq('Audi');
        });

    })

    it('GET + wrap', () => {

        cy.request('GET', '/api/cars/brands').then((response) => {
            cy.log(JSON.stringify(response));
            cy.wrap(response.status).should('eq', 200);
        });

    })

    it('GET + its', () => {

        cy.request('GET', '/api/cars/brands').its('status').should('eq', 200);
        cy.request('GET', '/api/cars/brands').its('body.data').should('have.length', 5);
    })

    it('POST 400', () => {

        const userInfo = {
            "email": "test@test.com",
            "password": "Qwerty12345",
            "remember": false
        }

        cy.request('POST', '/api/auth/signin', userInfo).its('status').should('eq', 400);

    });

})

describe('Token tests', () => {

    let cookiesValue;
    before(() => {

        const userInfo = {
            "email": "hubba.oljuna+t22@gmail.com",
            "password": "OHubba15",
            "remember": false
        }

        cy.request({ method: 'POST', url: '/api/auth/signin', body: userInfo, failOnStatusCode: false, }).then((response) => {

            const cookies = response.headers['set-cookie'][0];
            cookiesValue = cookies.split(';')[0];
            cy.log(JSON.stringify(cookiesValue));//token

        })
    })

    it('Get users cars', () => {

        cy.request({ url: '/api/cars', failOnStatusCode: false, headers: { 'Cookie': cookiesValue } }).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.data.length).to.greaterThan(1);

        })
    })

    it.only('Create a new car', () => {

        const carInfo = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 122
          }

        cy.request({ method: 'POST', url: '/api/cars', body: carInfo, failOnStatusCode: false, headers: { 'Cookie': cookiesValue } }).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(201);
            expect(response.body.data.carBrandId).to.eq(carInfo.carBrandId);

        })
    })
})

// cy.request({ method: 'POST', url: '/api/auth/signin',  body: userInfo, failOnStatusCode: false,}).as('loginResponse');
//cy.get('@loginResponse').its('status').should('eq', 200);
//cy.get('@loginResponse').its('body.data').should('eq', 200);

//it('GET user cars', () => {

// cy.request({url:'/api/cars', failOnStatusCode: false, headers: {'Cookie': cookiesValue}}).its('status').should('eq', 200);

// })






