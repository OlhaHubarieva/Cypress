/// <reference types="cypress" />

describe('Registration Form', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    cy.get('.hero-descriptor_btn').click();
  })

  it('Verify Registration For UI acc to design', () => {
    cy.get('.modal-content app-signup-modal').should('exist').and('be.visible');
    cy.get('h4').should('exist').and('be.visible').and('have.text', 'Registration');
    cy.get('form .ng-pristine').should('exist').and('be.visible').and('have.length', 5);
    cy.get('#signupName').should('exist').and('be.visible').and('have.value', '');
    cy.get('#signupLastName').should('exist').and('be.visible').and('have.value', '');
    cy.get('#signupEmail').should('exist').and('be.visible').and('have.value', '');
    cy.get('#signupPassword').should('exist').and('be.visible').and('have.value', '');
    cy.get('#signupRepeatPassword').should('exist').and('be.visible').and('have.value', '');
    cy.get('.modal-footer>[type=button]').should('exist').and('be.visible').and('have.text', 'Register').and('have.attr', 'disabled');
  })

  it('Verify User can be registered', () => {
    cy.get('#signupName').type('Mario');
    cy.get('#signupLastName').type('Doeo');
    cy.get('#signupEmail').type('hubba.oljuna+t22@gmail.com');
    cy.get('#signupPassword').type('OHubba15');
    cy.get('#signupRepeatPassword').type('OHubba15');
    cy.get('.modal-footer>[type=button]').click();
    cy.get('#userNavDropdown').click();
    cy.get('[routerlink=profile]').click();
    cy.get('.profile_name').should('have.text', 'Mario Doeo');
  })

  it('Verify Name is required error message is shown', () => {
    cy.get('#signupName').focus().blur();
    cy.get('#signupName').should('have.value', '').and('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Name required');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Name is invalid error message is shown', () => {
    cy.get('#signupName').type('sd4').blur();
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Name is invalid');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Name length validation (min 2 char) error message is shown', () => {
    cy.get('#signupName').type('O').blur();
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Name has to be from 2 to 20 characters long');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Name length validation (max 20 char) error message is shown', () => {
    cy.get('#signupName').type('Olhanclepfmrjhebvlena').blur();
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Name has to be from 2 to 20 characters long');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Last Name is required error message is shown', () => {
    cy.get('#signupLastName').focus().blur();
    cy.get('#signupLastName').should('have.value', '').and('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Last name required');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Last Name is invalid error message is shown', () => {
    cy.get('#signupLastName').type('fan14').blur();
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Last name is invalid');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Last Name length validation (min 2 char) error message is shown', () => {
    cy.get('#signupLastName').type('x').blur();
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Last name has to be from 2 to 20 characters long');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Last Name length validation (max 20 char) error message is shown', () => {
    cy.get('#signupLastName').type('xnlpoidfgrnkytrsblres').blur();
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Last name has to be from 2 to 20 characters long');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Email required error message is shown', () => {
    cy.get('#signupEmail').focus().blur();
    cy.get('#signupEmail').should('have.value', '').and('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Email required');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Email is incorrect error message is shown', () => {
    cy.get('#signupEmail').type('glog@ee').blur();
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Email is incorrect');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Password required error message is shown', () => {
    cy.get('#signupPassword').focus().blur();
    cy.get('#signupPassword').should('have.value', '').and('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password required');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Wrong Password (min 8 char) error message is shown', () => {
    cy.get('#signupPassword').type('Qwertu1').blur();
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Wrong Password ((max 15 char) error message is shown', () => {
    cy.get('#signupPassword').type('Qwertu1enc4gNlap').blur();
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Wrong Password ((min 1 int) error message is shown', () => {
    cy.get('#signupPassword').type('Qwadrocmp').blur();
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Wrong Password ((min 1 Cap letter) error message is shown', () => {
    cy.get('#signupPassword').type('kamr1v5g9').blur();
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Wrong Password ((min 1 Small letter) error message is shown', () => {
    cy.get('#signupPassword').type('NUL83PO7C9').blur();
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Re-enter password required error message is shown', () => {
    cy.get('#signupPassword').type('Parabola25').click();
    cy.get('#signupRepeatPassword').focus().blur();
    cy.get('#signupRepeatPassword').should('have.value', '').and('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Re-enter password required');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Passwords do not match error message is shown', () => {
    cy.get('#signupPassword').type('Testing12Cool').click();
    cy.get('#signupRepeatPassword').type('Testing13Cool').blur();
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Passwords do not match');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  after(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  })

})

