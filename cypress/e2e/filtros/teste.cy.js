/// <reference types="cypress" />

import { login } from "./fazerLogin";
import { modalFiltos } from "./fazerLogin";

describe('Adicionando filtros', () => {
    before(() => {
        login();
        modalFiltos();
    });

    it('Selecinando todos os filtros de cromossomos', () => {
        cy.get('.ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        
    });
    
});