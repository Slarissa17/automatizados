/// <reference types="cypress" />

/// <reference types="cypress" />

describe('Test cases - CNV and SV sample filters', () => {
    beforeEach(() => {
        cy.visit('login/');
        cy.get('[data-testid="email"]').type(Cypress.env('user').email);
        cy.get('[data-testid="password"]').type(Cypress.env('user').password).type('{enter}');
        cy.url().should('include', 'dashboard');
    });

    describe('As a Varstation user analyst, I want to access general CNV and SV filters.', () => {
        describe('Scenario 01 - General filters modal is opened when clicking the "+" general filters button ', () => {
            context('GIVEN user on the routines screen', () => {
                context('WHEN he clicks on the ‘+’ button “General Filters”', () => {   
                    beforeEach(() => {
                        cy.get('[data-testid="routines-button"] > .mat-button-wrapper').click();
                        cy.url().should('include', 'routines');
                        cy.get('[data-testid="search-input"]').click().type('Germinativo - CNV e SV');
                        cy.get('[data-testid="submit-button"]').click();
                        cy.get('.mat-content').contains('Germinativo - CNV e SV').click();
                        cy.get('[data-testid="selected-sample"]').click();
                         
                    });
                    it('THEN the general filters modal opens', () => {
                        cy.get('.ds-stack--sm > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();  
                        cy.get('#mat-dialog-0').should('exist');
                    });
                });
                
            });
        });
    });

    describe.only('As a Varstation analyst user, I want to access, create or modify general  CNV and SV filters.', () => {
        beforeEach(() => {
            cy.get('[data-testid="routines-button"] > .mat-button-wrapper').click();
            cy.url().should('include', 'routines');
            cy.get('[data-testid="search-input"]').click().type('Germinativo - CNV e SV');
            cy.get('[data-testid="submit-button"]').click();
            cy.get('.mat-content').contains('Germinativo - CNV e SV').click();
            cy.get('[data-testid="selected-sample"]').click();
            cy.get('.ds-stack--sm > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();  
            cy.get('#mat-dialog-0').should('exist');
        });
        describe('Scenario 02 - All change filters are selected when clicking the select all button ', () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN clicks on the "select all" button', () => {
                    beforeEach(() => {
                        cy.get('.ds-stack--md > :nth-child(1) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                    });
                    it('THEN all location filters are selected', () => {
                        cy.get('.mat-chip-selected').should('exist');
                    });
                    
                });
                
            });
            
        });
        describe('Scenario 03 - location filter is applied when selected ', () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN clicks on the change filter', () => {
                    beforeEach(() => {
                        cy.get('[aria-describedby="cdk-describedby-message-ng-1-78"]').click();
                        cy.get('[aria-describedby="cdk-describedby-message-ng-1-79"]').click();

                    });
                    it('THEN all change filters must be selected', () => {
                        cy.get('[aria-describedby="cdk-describedby-message-ng-1-78"]').contains('GAIN');
                        cy.get('.mat-chip-selected').contains('LOSS');
                    });
                });
            }); 
        });
        describe('Scenario 04 - If the "select all" button is checked, when you click it again, all filters should be deselected', () => {
            context('GIVEN THAT the Varstation user analyst is on the change filter screen and the "select all" button is checked', () => {
                context('WHEN he clicks the "Select all" button', () => {
                    beforeEach(() => {
                        // clica no botao selecionar todos
                        cy.get('.ds-stack--md > :nth-child(1) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                        // verifica se os filtros foram selecionados
                        cy.get('[aria-describedby="cdk-describedby-message-ng-1-78"]').contains('GAIN');
                        cy.get('.mat-chip-selected').contains('LOSS');
                        // clica novamente no botão selecionar todos
                        cy.get('.ds-stack--md > :nth-child(1) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                    });
                    it('THEN all change filters must be unchecked.', () => {
                        // verifica se os filtros foram desmarcadas
                        cy.get('[aria-describedby="cdk-describedby-message-ng-1-78"]').contains('GAIN');
                        cy.get('[aria-describedby="cdk-describedby-message-ng-1-79"]').contains('LOSS');
                    });
                });
            });  
        }); 
        
        describe('Scenario 05 - When the "Select All" button is checked and the user clicks the "Clear Filters" button, all change filters must be removed.', () => {
            context('GIVEN THAT the Varstation user analyst is on the filter screen in the changes table', () => {
                context('WHEN he clicks the "clear filters" button', () => {
                    beforeEach(() => {
                        cy.get('.ds-stack--md > :nth-child(1) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                        cy.get('[data-testid="clear-operations-btn"]')
                    });
                    it('THEN all change filters are removed', () => {
                        cy.get('[aria-describedby="cdk-describedby-message-ng-1-78"]').contains('GAIN');
                        cy.get('[aria-describedby="cdk-describedby-message-ng-1-79"]').contains('LOSS');      
                    });
                });
            });
        });
        describe('Scenario 6 - All chromosome filters are selected when clicking the select all button', () => {
            context('GIVEN THAT the Varstation user analyst is on the chromosome filter screen', () => {
                context('WHEN he clicks the "Select all" button', () => {
                    beforeEach(() => {
                        cy.get('.ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                    });
                    it('THEN all chromosome filters are selected', () => {
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('25'); 
                    });
                });   
            });
        });

        describe('Scenario 7 - WHEN the “Select all” button is checked and the user clicks the “Clear filters” button, all chromosome filters should be removed.', () => {
            context('GIVEN THAT the Varstation user analyst is on the filter screen in the chrmosome table', () => {
                context('WHEN he clicks the "Clear filters" button', () => {
                    beforeEach(() => {
                        cy.get('.ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('25'); 
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN all chromosome filters are removed', () => {
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });

        describe('Scenario 8 - Chromosome filters must be applied when selecting filter options.', () => {
            context('GIVEN THAT the Varstation user analyst is on the filter screen in the chrmosome table', () => {
                context('WHEN he clicks on the chromosome filters', () => {
                    beforeEach(() => {
                        const nCromossomosSelecionar = 5;
                        for(let x = 0; x < nCromossomosSelecionar; x++ ){
                            const numeroAleatório = Math.floor(Math.random () * 25 + 1)
                            cy.get(`#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(${numeroAleatório})`).click();    
                        }
                    });
                    it('THEN chromosome filters are selected', () => {
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('5');
                    });
                    
                });
                
            });
        });
        describe('Scenario 9 - Chromosome filters must be removed by deselecting them with a second click.', () => {
            context('GIVEN THAT the Varstation user analyst is on the filter screen in the chrmosome table', () => {
                context('WHEN you click again on the chromosome filter that is already selected', () => {
                    beforeEach(() => {
                        const nCromossomosSelecionar = 5;
                        for(let x = 0; x < nCromossomosSelecionar; x++ ){
                            const numeroAleatório = Math.floor(Math.random () * 25 + 1)
                            cy.get(`#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(${numeroAleatório})`).click(); 
                            cy.get(`#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(${numeroAleatório})`).click(); 
                        }
                    });
                    it('THEN the chromosome filter is removed', () => {
                        
                        
                    });
                });
                
            });
            
        });
    });
});



