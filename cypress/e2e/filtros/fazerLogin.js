export function login(){
    cy.visit('https://homologation.varstation.varsomics-sandbox.com/#/login');
    cy.get('[data-testid="email"]').type('fake.automatizado@varsomics.com');
    cy.get('[data-testid="password"]').type('Vars@123');
    cy.get('[data-testid="login-button"] > .mat-button-wrapper').click();
}


export function modalFiltos(){
    cy.get('[data-testid="routines-button"] > .mat-button-wrapper').click(); // ROTINAS
    cy.get('.ds-sidemenu-card-header > .mat-body-1').click();
    cy.get('[data-testid="selected-sample"] > .mat-tooltip-trigger').click();
    cy.wait(5000);
    cy.get('.ds-stack--sm > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
}