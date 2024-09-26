/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  })

  it('SignUp button test', () => {
    cy.get('.hero-descriptor_btn').as('signUpButton').should('be.visible');
    cy.get('@signUpButton').should("have.text", 'Sign up');
    cy.get('@signUpButton').click();
    cy.get('.modal-content app-signup-modal').as('signUpForm');
    cy.get('@signUpForm').within(($form) => {
      cy.get('h4').should("have.text", 'Registration');
    })
  })

  it('SignIn button test', () => {
    cy.get('.header_signin').as('signInButton').should('be.visible');
    cy.get('@signInButton').should("have.text", 'Sign In');
    cy.get('@signInButton').click();
    cy.get('.modal-content app-signin-modal').as('signInForm');
    cy.get('@signInForm').within(($form) => {
      cy.get('h4').should("have.text", 'Log in');
    })
  })

  it('Guest log in button test', () => {
    cy.get('.header-link.-guest').as('GuestButton').should('be.visible');
    cy.get('@GuestButton').should("have.text", 'Guest log in');
    cy.get('@GuestButton').click();
  })


  it('Header buttons', () => {
    cy.get('.header_inner').as('header').should('be.visible');
    cy.get('@header').find('a').should('be.visible');
    cy.get('@header').find('a').eq(1).should('have.text', 'Home');
    cy.get('@header').find('button').should('be.visible');
    cy.get('@header').find('button').eq(0).should('have.text', 'About');
    cy.get('@header').find('button').eq(1).should('have.text', 'Contacts');
    cy.get('@header').find('button').eq(2).should('have.text', 'Guest log in');
    cy.get('@header').find('button').eq(3).should('have.text', 'Sign In');
    cy.get('@header').each(($button) => {
      cy.wrap($button).click();
    })
  })

  it('Contacts buttons', () => {
    cy.get('#contactsSection').find('a').should('be.visible');
    cy.get('#contactsSection').find('a').each(($button) => {
      cy.wrap($button).click();
    })
  })

})
