/// <reference types="cypress" />

import { login } from "./fazerLogin";
import { modalFiltos } from "./fazerLogin";

describe('Adicionando filtros de Cromossomos', () => {
    beforeEach(() => {
        login();
        modalFiltos('CNV e SV');
    });

    it('Selecionando e desmarcando todos os filtros de cromossomos', () => {
        // Selecionando
        
        cy.get('.ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        
        // Verificando a seleção
        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').should('include.text', '25');
        
        // Desmarcando
        cy.get('.ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        
        // Verificando a desmarcação
        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').should('include.text', '0');
    });
    

    it('testando botão limpar filtros', () => {
        // selecionando todos 
        cy.get('.ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').should('include.text', '0');   
        
    });
 

    


    
});