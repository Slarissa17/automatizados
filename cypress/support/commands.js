// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add('Login', (
    email = Cypress.env('user').email,
    password = Cypress.env('user').password
) => {
    cy.session([email, password],() => {
        cy.visit('login/');
        cy.get('[data-testid="email"]').type(Cypress.env('user').email);
        cy.get('[data-testid="password"]').type(Cypress.env('user').password).type('{enter}');
        cy.get('[data-testid="overview-button"] > .mat-button-wrapper').contains('Visão geral');
        cy.get('[data-testid="routines-button"] > .mat-button-wrapper').contains('Rotinas');
        cy.get('[data-testid="patient-button"] > .mat-button-wrapper').contains('Pacientes');
        cy.get('.mat-button-wrapper > .mat-tooltip-trigger').contains('Fake Automatizado')
        
    })
})