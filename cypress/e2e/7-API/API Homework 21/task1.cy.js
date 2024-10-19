/*Завдання 1:

Напишіть мінімум 5 будь-яких API тестів на одну із сторінок сайту(Garage, Fuel Expenses, Instructions, User Sign Up/Sign In). 
Тести повинні робити GET/POST/PUT/DELETE запити та перевіряти відповідь*/

describe('Cars tests', () => {

    let cookiesValue;
    let carID;

    before(() => {

        const userInfo = {
            "email": "hubba.oljuna+t22@gmail.com",
            "password": "OHubba15",
            "remember": false
        }

        cy.request({
            method: 'POST',
            url: '/api/auth/signin',
            body: userInfo,
            failOnStatusCode: false,

        }).then((response) => {

            const cookies = response.headers['set-cookie'][0];
            cookiesValue = cookies.split(';')[0];
            cy.log(JSON.stringify(cookiesValue));

        })
    })

    it('Create a new car', () => {

        const carInfo = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 1000
        }

        cy.request({

            method: 'POST',
            url: '/api/cars',
            body: carInfo,
            failOnStatusCode: false,
            headers: { 'Cookie': cookiesValue }

        }).then((response) => {

            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(201);
            expect(response.body.data.carBrandId).to.eq(carInfo.carBrandId);
            expect(response.body.data.carModelId).to.eq(carInfo.carModelId);
            expect(response.body.data.mileage).to.eq(carInfo.mileage);

            carID = response.body.data.id;

        })
    })

    it('Get users cars', () => {

        cy.request({
            url: '/api/cars',
            failOnStatusCode: false,
            headers: { 'Cookie': cookiesValue }

        }).then((response) => {

            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            const createdCar = response.body.data.find(car => car.id === carID);
            expect(createdCar).to.exist;
            expect(createdCar.carBrandId).to.eq(1);
            expect(createdCar.carModelId).to.eq(1);
            expect(createdCar.mileage).to.eq(1000);
        })

    })

    it('Edit car info', () => {

        const carInfo = {
            "carBrandId": 1,
            "carModelId": 2,
            "mileage": 2500
        }

        cy.request({

            method: 'PUT',
            url: `/api/cars/${carID}`,
            body: carInfo,
            failOnStatusCode: false,
            headers: { 'Cookie': cookiesValue }

        }).then((response) => {

            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.data.carBrandId).to.eq(carInfo.carBrandId);
            expect(response.body.data.carModelId).to.eq(carInfo.carModelId);
            expect(response.body.data.mileage).to.eq(carInfo.mileage);

        })
    })

    it('Delete a  car', () => {

        cy.request({

            method: 'DELETE',
            url: `/api/cars/${carID}`,
            failOnStatusCode: false,
            headers: { 'Cookie': cookiesValue }

        }).then((response) => {

            expect(response.status).to.eq(200);

        })
    })

    it('Check users cars after deletion', () => {

        cy.request({

            url: '/api/cars',
            failOnStatusCode: false,
            headers: { 'Cookie': cookiesValue }

        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.data).to.be.an('array').to.be.empty;
        })

    })
})