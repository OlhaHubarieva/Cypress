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
    cy.get('#signupName').type('Maria');
    cy.get('#signupLastName').type('Doe');
    cy.get('#signupEmail').type('hubba.oljuna+t21@gmail.com');
    cy.get('#signupPassword').type('OHubba15');
    cy.get('#signupRepeatPassword').type('OHubba15');
    cy.get('.modal-footer>[type=button]').click();
    cy.get('#userNavDropdown').click();
    cy.get('[routerlink=profile]').click();
    cy.get('.profile_name').should('have.text', 'Maria Doe');
  })

  it('Verify Name is required error message is shown', () => {
    cy.get('#signupName').click();
    cy.get('#signupLastName').click();
    cy.get('#signupName').should('have.value', '').and('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Name required');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Name is invalid error message is shown', () => {
    cy.get('#signupName').type('sd4').click();
    cy.get('#signupLastName').click();
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Name is invalid');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Name length validation (min 2 char) error message is shown', () => {
    cy.get('#signupName').type('O').click();
    cy.get('#signupLastName').click();
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Name has to be from 2 to 20 characters long');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Name length validation (max 20 char) error message is shown', () => {
    cy.get('#signupName').type('Olhanclepfmrjhebvlena').click();
    cy.get('#signupLastName').click();
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Name has to be from 2 to 20 characters long');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Last Name is required error message is shown', () => {
    cy.get('#signupName').type('Alice').click();
    cy.get('#signupLastName').click();
    cy.get('#signupEmail').click();
    cy.get('#signupLastName').should('have.value', '').and('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Last name required');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Last Name is invalid error message is shown', () => {
    cy.get('#signupName').type('Alice').click();
    cy.get('#signupLastName').type('fan14').click();
    cy.get('#signupEmail').click();
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Last name is invalid');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Last Name length validation (min 2 char) error message is shown', () => {
    cy.get('#signupName').type('Ivan').click();
    cy.get('#signupLastName').type('x').click();
    cy.get('#signupEmail').click();
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Last name has to be from 2 to 20 characters long');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Last Name length validation (max 20 char) error message is shown', () => {
    cy.get('#signupName').type('Ivan').click();
    cy.get('#signupLastName').type('xnlpoidfgrnkytrsblres').click();
    cy.get('#signupEmail').click();
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Last name has to be from 2 to 20 characters long');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Email required error message is shown', () => {
    cy.get('#signupName').type('Jane').click();
    cy.get('#signupLastName').type('Doe').click();
    cy.get('#signupEmail').click();
    cy.get('#signupPassword').click();
    cy.get('#signupEmail').should('have.value', '').and('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Email required');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Email is incorrect error message is shown', () => {
    cy.get('#signupName').type('John').click();
    cy.get('#signupLastName').type('Doe').click();
    cy.get('#signupEmail').type('glog@ee').click();
    cy.get('#signupPassword').click();
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Email is incorrect');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Password required error message is shown', () => {
    cy.get('#signupName').type('Rob').click();
    cy.get('#signupLastName').type('Robson').click();
    cy.get('#signupEmail').type('olgagub@icloud.com').click();
    cy.get('#signupPassword').click();
    cy.get('#signupRepeatPassword').click();
    cy.get('#signupPassword').should('have.value', '').and('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password required');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Wrong Password (min 8 char) error message is shown', () => {
    cy.get('#signupName').type('Rob').click();
    cy.get('#signupLastName').type('Robson').click();
    cy.get('#signupEmail').type('olgagub@icloud.com').click();
    cy.get('#signupPassword').type('Qwertu1').click();
    cy.get('#signupRepeatPassword').click();
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Wrong Password ((max 15 char) error message is shown', () => {
    cy.get('#signupName').type('Silia').click();
    cy.get('#signupLastName').type('Surana').click();
    cy.get('#signupEmail').type('ssur+1@icloud.com').click();
    cy.get('#signupPassword').type('Qwertu1enc4gNlap').click();
    cy.get('#signupRepeatPassword').click();
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Wrong Password ((min 1 int) error message is shown', () => {
    cy.get('#signupName').type('Jack').click();
    cy.get('#signupLastName').type('Antic').click();
    cy.get('#signupEmail').type('lela@gmail.com').click();
    cy.get('#signupPassword').type('Qwadrocmp').click();
    cy.get('#signupRepeatPassword').click();
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Wrong Password ((min 1 Cap letter) error message is shown', () => {
    cy.get('#signupName').type('John').click();
    cy.get('#signupLastName').type('Bon').click();
    cy.get('#signupEmail').type('jb+12@gmail.com').click();
    cy.get('#signupPassword').type('kamr1v5g9').click();
    cy.get('#signupRepeatPassword').click();
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Wrong Password ((min 1 Small letter) error message is shown', () => {
    cy.get('#signupName').type('Jade').click();
    cy.get('#signupLastName').type('Smith').click();
    cy.get('#signupEmail').type('js+2@gmail.com').click();
    cy.get('#signupPassword').type('NUL83PO7C9').click();
    cy.get('#signupRepeatPassword').click();
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Re-enter password required error message is shown', () => {
    cy.get('#signupName').type('Mary').click();
    cy.get('#signupLastName').type('Johnson').click();
    cy.get('#signupEmail').type('mj+32@icloud.com').click();
    cy.get('#signupPassword').type('Parabola25').click();
    cy.get('#signupRepeatPassword').click();
    cy.get('.modal-footer').click();
    cy.get('#signupRepeatPassword').should('have.value', '').and('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Re-enter password required');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

  it('Verify Passwords do not match error message is shown', () => {
    cy.get('#signupName').type('Lora').click();
    cy.get('#signupLastName').type('Lane').click();
    cy.get('#signupEmail').type('l+47@icloud.com').click();
    cy.get('#signupPassword').type('Testing12Cool').click();
    cy.get('#signupRepeatPassword').type('Testing13Cool').click();
    cy.get('.modal-footer').click();
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback>p').should('have.text', 'Passwords do not match');
    cy.get('.modal-footer>[type=button]').should('have.attr', 'disabled');
  })

after(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  })

})

