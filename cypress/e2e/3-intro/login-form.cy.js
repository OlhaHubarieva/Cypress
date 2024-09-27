/// <reference types="cypress" />

describe('Saucedemo login form', () => {
  beforeEach(() => { 
    cy.visit('https://saucedemo.com/v1/');
  })

  it('Verify username is required error message', () => {
    cy.get('[data-test="password"]').type("qwerty");
    cy.get('[id="login-button"]').click();
    //cy.get('[data-test="error"]').should("have.text", 'Epic sadface: Username is required');
    cy.contains('Epic sadface: Username is required').should("be.visible");
  })


it('Verify password is required error message', () => {
  cy.get('[data-test="username"]').type("alice");
  cy.get('[id="login-button"]').click();
  cy.get('[data-test="error"]').should("have.text", 'Epic sadface: Password is required');
  //cy.contains('Epic sadface: Password is required').should("be.visible");
})

it('Verify incorrect password or username error message', () => {
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("qwerty");
  cy.get('[id="login-button"]').click();
  cy.get('[data-test="error"]').should("have.text", 'Epic sadface: Username and password do not match any user in this service');
  /*cy.contains('Epic sadface: Password is required').should("be.visible");*/
})
})
