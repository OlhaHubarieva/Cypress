it("GET API testing Using Cypress API Plugin", () => {
    cy.api("GET", "/api/cars/models").should((response) => {
      expect(response.status).to.eq(200);
    });
   });