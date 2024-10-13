/*авдання 3:

Встановіть будь-який плагін для API тестів 

Напишіть 3 будь-які API тести за допомогою методу плагіну*/

describe('Plugin tests', () => {

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

    it("Get car brands", () => {

        cy.api("GET", "/api/cars/brands").should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.length).to.eq(5);
            expect(response.body.data[0].title).to.eq('Audi');

        });

    });

    it("Get car models", () => {

        cy.api("GET", "/api/cars/models").should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.length).to.eq(23);
            expect(response.body.data[0].title).to.eq('TT');

        });

    });

    it('Create a new car', () => {

        const carInfo = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 1000
        }

        cy.api({

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

    it('Create an expense', () => {

        const carExpense = {
            "carId": carID,
            "reportedAt": "2024-10-13",
            "mileage": 2000,
            "liters": 11,
            "totalCost": 11,
            "forceMileage": false
        }

        cy.api({

            method: 'POST',
            url: '/api/expenses',
            body: carExpense,
            failOnStatusCode: false,
            headers: { 'Cookie': cookiesValue }

        }).then((response) => {

            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.data.carId).to.eq(carExpense.carId);
            expect(response.body.data.mileage).to.eq(carExpense.mileage);
            expect(response.body.data.liters).to.eq(carExpense.liters);
            expect(response.body.data.totalCost).to.eq(carExpense.totalCost);

        })
    })

    /*it("Get car expenses", () => {

        cy.api("GET", "/api/cars//api/expenses?carId=94&page=54").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.length).to.eq(23);
            expect(response.body.data[0].title).to.eq('TT');

        });

    });*/
})

