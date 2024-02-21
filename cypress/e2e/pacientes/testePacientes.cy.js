/// <reference types="cypress" />

import { login } from "../filtros/fazerLogin";

describe('Cenários de teste tela pacientes', () => {

    before(() => {
        login();
    });

    it('Criando um paciente', () => {
        cy.get('[data-testid="patient-button"] > .mat-button-wrapper').should('be.visible', 'aguardando o botão paciente carregar na página').click();
        //cy.get('.ds-inline-group--sm > .ds-pointer-cursor').should('be.visible', 'aguardando o carregamento do botão + na tela de pacientes').click(); 
        // funcao do botao + ?
        cy.get('[data-testid="input-name"]').type('teste');
        cy.get('[data-testid="input-datebirth"]').click();
        cy.get(':nth-child(1) > [data-mat-col="0"] > .mat-calendar-body-cell').click();
        cy.get(':nth-child(2) > [data-mat-col="0"] > .mat-calendar-body-cell').click();
        cy.get(':nth-child(2) > [data-mat-col="0"] > .mat-calendar-body-cell').click();
        cy.get('[data-testid="save-button"]').click();


    });
    
});
