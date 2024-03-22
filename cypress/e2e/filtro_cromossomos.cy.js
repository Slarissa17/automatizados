/// <reference types="cypress" />

/// <reference types="cypress" />

describe('Test cases - CNV and SV sample filters', () => {
    beforeEach(() => {
        cy.Login();
        cy.visit('dashboard');
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

    describe('As a Varstation analyst user, I want to access or modify general  CNV and SV filters.', () => {
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
                        cy.get('.ds-stack--md > :nth-child(1) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('2');
                        // clica novamente no botão selecionar todos
                        cy.get('.ds-stack--md > :nth-child(1) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                    });
                    it('THEN all change filters must be unchecked.', () => {
                        // verifica se os filtros foram desmarcadas
                        cy.get('.ds-stack--md > :nth-child(1) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
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
                        cy.get('.ds-stack--md > :nth-child(1) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');      
                    });
                });
            });
        });
        describe('Scenario 6 - All chromosome filters are selected when clicking the "select all" button', () => {
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
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                        
                    });
                });
         
            });
            
        });
        describe('Scenario 10 - Clicking the "Select All" button should add all sorting filters from ClinGen.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks the 'select all' button", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(3) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                    });
                    it('Then all Clingen classification filters are selected.', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('5');
                    });
                });
                
            });
        });
        describe("Scenario 11 - The 'Select All' checkbox is checked, and when the user clicks it again, all Clingen classification filters are unchecked.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('When the "Select All" checkbox is checked and the user clicks again,', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(3) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('5');
                        cy.get(':nth-child(3) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();

                    });
                    it('"then all Clingen classification filters are unchecked.', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
                
            });
        });
        describe('Scenario 12 - The user selects all filters by clicking on the "Select All" button and then presses the "Clear Filters" button, thereby removing all Clingen classification filters.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user selects all filters by clicking on the "Select All" button and then presses the "Clear Filters" button', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(3) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN all Clingen classification filters are removed', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0'); 
                    });
                });
            }); 
        });
        describe('Scenario 13 - Clingen classification filters must be applied when selecting filter options.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he clicks on the Clingen classification filters', () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${1})`).click(); 
                        cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${2})`).click(); 
                        cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${3})`).click(); 
                    });
                    it('THEN the filters are selected', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('3');
                    });
                });
            }); 
        });
        describe('Scenario 14 - The user selects a ClinGen classification filter, and upon clicking again, the filter should be deselected', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he clicks on the ClinGen classification filter and clicks again', () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${3})`).dblclick(); 
                        cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${4})`).dblclick(); 
                        cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${5})`).dblclick(); 
                    });
                    it('THEN the selected filters are removed', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            }); 
        });
        describe("Scenario 15 - The user selects Clingen classification filters, and by clicking the 'Clear Filters' button, the filters are removed.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he selects the ClinGen classification filter and clicks the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${3})`).click(); 
                        cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${4})`).click(); 
                        cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${5})`).click(); 
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the selected filters are removed', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    }); 
                });
            });
        });
        describe('Scenario 16 - All AnnotSV filters are selected when clicking the "Select All" button.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('"WHEN he clicks the "Select All" button', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(4) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                    });
                    it('THEN all AnnotSV filters are selected.', () => {
                        cy.get(':nth-child(4) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('5');
                    });
                });
            }); 
        });
        describe("Scenario 17 - The 'Select All' checkbox is checked, and when the user clicks it again, all AnnotSV filters are removed.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks the 'Select All' button again", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(4) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').dblclick();
                    })
                    it("THEN all AnnotSV filters are removed.", () => {
                        cy.get(':nth-child(4) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });;
                });
            });
            
        });
        describe("Scenario 18 - When clicking the 'Select All' button and then clicking 'Clear Filters,' all AnnotSV filters are removed." , () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he selects the 'Select All' button and clicks on 'Clear Filters.'", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(4) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                        cy.get(':nth-child(4) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('5');
                        cy.get(':nth-child(4) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN all AnnotSV filters are removed.', () => {
                        cy.get(':nth-child(4) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 19 - AnnotSV classification filters must be applied when selecting filter options.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the AnnotSV filters", () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(${1})`).click(); 
                        cy.get(`#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(${2})`).click(); 
                        cy.get(`#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(${3})`).click(); 
                    });
                    it('THEN the filters are selected.', () => {
                        cy.get(':nth-child(4) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('3');
                    });
                });
            });
        });
        describe('Scenario 20 - The user selects an AnnotSV filter, and upon clicking again, the filter should be deselected', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he clicks on the AnnotSV filters again, they are removed.', () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(${3})`).dblclick(); 
                        cy.get(`#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(${4})`).dblclick(); 
                        cy.get(`#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(${5})`).dblclick(); 
                    });
                    it('THEN the AnnotSV filters are removed', () => {
                        cy.get(':nth-child(4) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 21 - The user selects AnnotSV filters, and upon clicking the "Clear Filters" button, they are removed.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he selects the AnnotSV filter and clicks 'Clear Filters.'", () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(${3})`).click(); 
                        cy.get(`#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(${4})`).click(); 
                        cy.get(`#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(${5})`).click(); 
                        cy.get(':nth-child(4) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filters are removed.", () => {
                        cy.get(':nth-child(4) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0'); 
                    });
                });
            });
            
        });
        describe('Scenario 22 - All zygosity filters are applied when clicking the "Select All" button.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks the 'Select All' button.", () => {
                    beforeEach(() => {
                        cy.get('.ds-stack--sm.ds-flex-align-items-start > app-categorical-choices-field.ds-full-width > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                    });
                    it("THEN all zygosity filters are selected.", () => {
                        cy.get(':nth-child(5) > .ds-stack--sm.ds-flex-align-items-start > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('4');
                    });
                });
                
            });
        });
        describe("Scenario 23 - The 'Select All' checkbox is checked, and when the user clicks it again, all zygosity filters are removed.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks the 'Select All' button again.", () => {
                    beforeEach(() => {
                        cy.get('.ds-stack--sm.ds-flex-align-items-start > app-categorical-choices-field.ds-full-width > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').dblclick();
                    });
                    it('"THEN all zygosity filters are removed."', () => {
                        cy.get(':nth-child(5) > .ds-stack--sm.ds-flex-align-items-start > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 24 - When clicking the 'Select All' button and then clicking 'Clear Filters,' all zygosity filters are removed.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN clicking the 'Select All' button and then clicking 'Clear Filters'", () => {
                    beforeEach(() => {
                        cy.get('.ds-stack--sm.ds-flex-align-items-start > app-categorical-choices-field.ds-full-width > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                        cy.get(':nth-child(5) > .ds-stack--sm.ds-flex-align-items-start > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('4');
                        cy.get(':nth-child(5) > .ds-stack--sm.ds-flex-align-items-start > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN all zygosity filters are removed.", () => {
                        cy.get(':nth-child(5) > .ds-stack--sm.ds-flex-align-items-start > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 25 - zygosity filters must be applied when selecting filter options.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he selects the zygosity filters.", () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(${2})`).click(); 
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(${1})`).click(); 
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(${3})`).click();
                    });
                    it('THEN all zygosity filters are selected.', () => {
                        cy.get(':nth-child(5) > .ds-stack--sm.ds-flex-align-items-start > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('3');
                    });
                });
            });
        });
        describe("Scenario 26 - The user selects a zygosity filter, and upon clicking again, the filter should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks again on the selected zygosity filter.", () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(${2})`).dblclick(); 
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(${3})`).dblclick(); 
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(${4})`).dblclick();
                    });
                    it("THEN the zygosity filters are removed.", () => {
                        cy.get(':nth-child(5) > .ds-stack--sm.ds-flex-align-items-start > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 27 - The user selects zygosity filters, and upon clicking the 'Clear Filters' button, they are removed.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he selects the zygosity filters and clicks the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(${2})`).click(); 
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(${3})`).click(); 
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(${4})`).click();
                        cy.get(':nth-child(5) > .ds-stack--sm.ds-flex-align-items-start > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN all selected filters are removed.", () => {
                        cy.get(':nth-child(5) > .ds-stack--sm.ds-flex-align-items-start > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 28 - The "Unaffected" option of the exon status should be selected when clicked.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks 'Unaffected' in the exon status.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-9 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true}); 
                    });
                    it("THEN the 'Unaffected' option is selected.", () => {
                        cy.get(':nth-child(6) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 29 - The 'Unaffected' option in the exon status should remain selected when clicked again.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks 'Unaffected' again.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-9 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick({force: true}); 
                    });
                    it('THEN the "Unaffected" option is selected.', () => {
                        cy.get(':nth-child(6) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 30 - The 'Unaffected' option in the exon status is selected; then, the user clicks the 'Clear Filters' button, thus deselecting the filter.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he selects the 'Unaffected' option and clicks 'Clear Filters'", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-9 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true}); 
                        cy.get(':nth-child(6) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filter is removed.', () => {
                        cy.get(':nth-child(6) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 31 - When selecting the 'Unaffected' option in the exon status and then clicking the 'Affected' option, the 'Unaffected' option should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN selecting the "Unaffected" option in the exon status and then clicking the "Affected" option', () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-9 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true}); 
                        cy.get('#mat-radio-10 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN only one option is selected', () => {
                        cy.get(':nth-child(6) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe('Scenario 32 -  The "Affected" option of the exon status should be selected when clicked', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks 'Affected' in the exon status.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-10 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force:true});
                    });
                    it("THEN the 'Affected' option is selected.", () => {
                        cy.get(':nth-child(6) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 33 - The 'Affected' option in the exon status should remain selected when clicked again.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he clicks "Affected" again.', () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-10 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick({force:true});
                    });
                    it('THEN the "Unaffected" option is selected.', () => {
                        cy.get(':nth-child(6) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
            
        });
        describe("Scenario 34 - The 'Unaffected' option in the exon status is selected; then, the user clicks the 'Clear Filters' button, thus deselecting the filter.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he selects the 'Unaffected' option and clicks 'Clear Filters'", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-10 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force:true});
                        cy.get(':nth-child(6) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN filter is removed', () => {
                        cy.get(':nth-child(6) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 35 - When selecting the 'Affected' option in the exon status and then clicking the 'Unaffected' option, the 'Affected' option should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN selecting the "Affected" option in the exon status and then clicking the "Unaffected" option', () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-10 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get('#mat-radio-9 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true}); 
                    });
                    it('THEN only one option is selected', () => {
                        cy.get(':nth-child(6) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 36 - The 'No frameshift' option in the Frameshift filter should be selected when clicked.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on 'No frameshift'.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it("THEN the filter is selected.", () => {
                        cy.get(':nth-child(7) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1'); 
                    });
                });
            });
        });
        
        describe("Scenario 37 - The 'No frameshift' option in the Frameshift filter should remain selected when clicked again.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on 'No frameshift' again.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick({force: true});
                    });
                    it("THEN the filter remains selected.", () => {
                        cy.get(':nth-child(7) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1'); 
                    });
                });
            });
        });
        describe("Scenario 38 - The 'No frameshift' option in the frameshift filter is selected; then, the user clicks the 'Clear Filters' button, thus deselecting the filter.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on 'No frameshift' and then presses the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true})
                        cy.get(':nth-child(7) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click()
                    });
                    it("THEN the filters are removed.", () => {
                        cy.get(':nth-child(7) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0'); 
                    });
                });
            });
        });
        describe("Scenario 39 - When selecting the 'No frameshift' option in the frameshift filter and then clicking on the 'With frameshift' option, the 'No frameshift' option should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN selecting the 'No frameshift' option in the frameshift filter and then clicking on the 'With frameshift' option.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get('#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it("THEN the 'No frameshift' option should be deselected.", () => {
                        cy.get(':nth-child(7) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1'); 
                    });
                });
            });
        });
        describe("Scenario 40 - The 'With frameshift' option in the Frameshift filter should be selected when clicked.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on 'With frameshift'.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it("THEN the 'No frameshift' option should be deselected.", () => {
                        cy.get(':nth-child(7) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1'); 
                    });
                });
            });
        });
        describe("Scenario 41 - The 'With frameshift' option in the Frameshift filter should remain selected when clicked again.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on 'With frameshift' again.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick({force: true});
                    });
                    it("THEN the filter remains selected.", () => {
                        cy.get(':nth-child(7) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1'); 
                    });
                });
            });
        });
        describe("Scenario 42 - The 'With frameshift' option in the frameshift filter is selected; then, the user clicks the 'Clear Filters' button, thus deselecting the filter.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on 'With frameshift' and then presses the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true})
                        cy.get(':nth-child(7) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click()
                    });
                    it("THEN the filters are removed.", () => {
                        cy.get(':nth-child(7) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0'); 
                    });
                });
            });
        });
        describe("Scenario 43 - When selecting the 'With frameshift' option in the frameshift filter and then clicking on the 'No frameshift' option, the 'No frameshift' option should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN selecting the 'With frameshift' option in the frameshift filter and then clicking on the 'No frameshift' option.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it("THEN the 'With frameshift' option should be deselected.", () => {
                        cy.get(':nth-child(7) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1'); 
                    });
                });
            });
        });
        describe("Scenario 44 - The 'No events' option in the Pathogenic Gain Events filter should be selected when clicked.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'No events' option.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-13 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the filter is selected', () => {
                        cy.get(':nth-child(8) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 45 - The 'No events' option in the Gain Pathogenic Events filter should remain selected when clicked again.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks 'No events' again.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-13 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick({force: true});
                    });
                    it('THEN the filter remains selected', () => {
                        cy.get(':nth-child(8) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        
        describe("Scenario 46 - The 'No events' option in the Gain Pathogenic Events filter is selected; then, the user clicks the 'Clear Filters' button, deselecting the filter.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on 'No events' and then clicks the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-13 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get(':nth-child(8) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filter is removed', () => {
                        cy.get(':nth-child(8) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 47 - When selecting the 'No events' option in the Gain Pathogenic Events filter and then clicking on the 'Contains events' option, the 'No events' option should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('When selecting the "No events" option in the Gain Pathogenic Events filter and then clicking on the "Contains events" option', () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-13 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get('#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the "no events" filter is removed', () => {
                        cy.get(':nth-child(8) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        
        describe("Scenario 48 - The 'Contains events' option in the Pathogenic Gain Events filter should be selected when clicked.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'Contains events' option.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the filter is selected', () => {
                        cy.get(':nth-child(8) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 49 - The 'Contains events' option in the Gain Pathogenic Events filter should remain selected when clicked again.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks 'Contains events' again.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick({force: true});
                    });
                    it('THEN the filter remains selected', () => {
                        cy.get(':nth-child(8) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        
        describe("Scenario 50 - The 'Contains events' option in the Gain Pathogenic Events filter is selected; then, the user clicks the 'Clear Filters' button, deselecting the filter.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on 'contains events' and then clicks the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get(':nth-child(8) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filter is removed', () => {
                        cy.get(':nth-child(8) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 51 - When selecting the 'Contains events' option in the Gain Pathogenic Events filter and then clicking on the 'No events' option, the 'No events' option should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('When selecting the "Contains events" option in the Gain Pathogenic Events filter and then clicking on the "No events" option', () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get('#mat-radio-13 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the "Contains events" filter is removed', () => {
                        cy.get(':nth-child(8) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 52 - The 'No events' option in the Loss Pathogenic Events filter should be selected when clicked.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'No events' option.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-15 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the filter is selected', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 53 - The 'No events' option in the Loss Pathogenic Events filter should remain selected when clicked again.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'No events' option again.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-15 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick({force: true});
                    });
                    it('THEN the filter remains selected', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 54 - The 'No events' option in the Loss Pathogenic Events filter is selected; then, the user clicks the 'Clear Filters' button, deselecting the filter.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'No events' option and then clicks the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-15 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filter is removed', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
       
        describe("Scenario 55 - When selecting the 'No events' option in the Loss Pathogenic Events filter and then clicking on the 'Contains events' option, the 'No events' option should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('When selecting the "No events" option in the Loss Pathogenic Events filter and then clicking on the "Contains events" option', () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-15 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get('#mat-radio-16 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the "Contains events" filter is removed', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        
        describe("Scenario 56 - The 'Contains events' option in the Loss Pathogenic Events filter should be selected when clicked.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'Contains events' option.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-16 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the filter is selected', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 57 - The 'Contains events' option in the Loss Pathogenic Events filter should remain selected when clicked again.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'Contains events' option again.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-16 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick({force: true});
                    });
                    it('THEN the filter remains selected', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 58 - The 'Contains events' option in the Loss Pathogenic Events filter is selected; then, the user clicks the 'Clear Filters' button, deselecting the filter.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'Contains events' option and then clicks the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-16 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filter is removed', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 59 - When selecting the 'Contains events' option in the Loss Pathogenic Events filter and then clicking on the 'No events' option, the 'No events' option should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('When selecting the "Contains events" option in the Loss Pathogenic Events filter and then clicking on the "No events" option', () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-16 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get('#mat-radio-15 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the "Contains events" filter is removed', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 60 - The 'No events' option in the Insertion Pathogenic Events filter should be selected when clicked", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'No events' option.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-17 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the filter is selected', () => {
                        cy.get(':nth-child(10) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 61 - The 'No events' option in the Insertion Pathogenic Events filter should remain selected when clicked again.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'No events' option again.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-17 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick({force: true});
                    });
                    it('THEN the filter remains selected', () => {
                        cy.get(':nth-child(10) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 62 - The 'No events' option in the Insertion Pathogenic Events filter is selected; then, the user clicks the 'Clear Filters' button, deselecting the filter.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'No events' option and then clicks the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-17 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get(':nth-child(10) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filter is removed', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 63 - When selecting the 'No events' option in the Insertion Pathogenic Events filter and then clicking on the 'Contains events' option, the 'No events' option should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN selecting the "No events" Insertion in the Loss Pathogenic Events filter and then clicking on the "Contains events" option', () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-17 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get('#mat-radio-18 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the "Contains events" filter is removed', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 64 - The 'Contains events' option in the Insertion Pathogenic Events filter should be selected when clicked", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'Contains events' option.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-18 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the filter is selected', () => {
                        cy.get(':nth-child(10) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 65 - The 'Contains events' option in the Insertion Pathogenic Events filter should remain selected when clicked again.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'Contains events' option again.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-18 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick({force: true});
                    });
                    it('THEN the filter remains selected', () => {
                        cy.get(':nth-child(10) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 66 - The 'Contains events' option in the Insertion Pathogenic Events filter is selected; then, the user clicks the 'Clear Filters' button, deselecting the filter.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the 'Contains events' option and then clicks the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-18 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get(':nth-child(10) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filter is removed', () => {
                        cy.get(':nth-child(9) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 67 - When selecting the 'Contains events' option in the Insertion Pathogenic Events filter and then clicking on the 'No events' option, the 'No events' option should be deselected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN selecting the "No events" Insertion in the Loss Pathogenic Events filter and then clicking on the "Contains events" option', () => {
                    beforeEach(() => {
                        cy.get('#mat-radio-18 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                        cy.get('#mat-radio-17 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true});
                    });
                    it('THEN the "Contains events" filter is removed', () => {
                        cy.get(':nth-child(10) > .ds-stack--sm > app-filter-section-title.ds-full-width > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 68 - The user clicks on the population frequency filters and they are selected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he selects the population frequency filters.", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex').click();
                        cy.get('#mat-option-24 > .mat-option-text').click();
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-parameter > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-option-33 > .mat-option-text').click();
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .ds-inline-group--xs > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-input-8').type('1');
                    });
                    it("THEN the population frequency filters are selected.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > .numeric-title-container > .ds-inline-group--sm > .ds-badge--xs').contains('1');
                    });
                });
            });
        });
        describe("Scenario 69 - The user clicks on the population frequency filters and then on the 'Clear Filters' button; thus, the filters are removed.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he selects the population frequency filters and clicks on the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex').click();
                        cy.get('#mat-option-27 > .mat-option-text').click();
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-parameter > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-option-32 > .mat-option-text').click();
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .ds-inline-group--xs > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-input-8').type('1');
                        cy.get(':nth-child(1) > :nth-child(1) > .numeric-title-container > .badge-btn').click();
                    });
                    it("THEN all population frequency filters are removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > .numeric-title-container > .ds-inline-group--sm > .ds-badge--xs').contains('0');
                    });
                });
            });
        });
        describe("Scenario 70 - The user selects all properties in the properties field of the population frequency filter, and all of them are selected.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he selects all properties.", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-option-22').click();
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-parameter > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-option-33 > .mat-option-text').click();
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .ds-inline-group--xs > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-input-8').type('5');
                        
                    });
                    it("THEN all population frequency properties are selected.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > .numeric-title-container > .ds-inline-group--sm > .ds-badge--xs').contains('7');
                    });
                });
            });
        });
        describe("Scenario 71 - When the user clicks on the '+' button in the population frequency filter, another field for property, parameter, and value is generated.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the '+' button.", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .add-filter > .ds-inline-group--sm > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
                    });
                    it("THEN new fields are added.", () => {
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex').should('be.exist');
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .form-parameter > .mat-form-field-wrapper > .mat-form-field-flex').should('be.exist');
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .ds-inline-group--xs > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.exist');    
                    });
                   
                });
            });
        });
        describe("Scenario 72 - The user clicks on the '+' button in the population frequency filter, generating another field for property, parameter, and value. Then, upon clicking the remove button, the fields are removed.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN The user clicks on the "+" button in the population frequency filter, generating another field for property, parameter, and value. Then, upon clicking the remove button,', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .numeric-form > .add-filter > .ds-inline-group--sm > :nth-child(1) > .mat-button-wrapper > .mat-icon').click();
                        cy.get(':nth-child(2) > .numeric-form > .add-filter > .ds-inline-group--sm > [data-testid="delete-button"] > .mat-button-wrapper > .mat-icon').click()
                    });
                    it("THEN the fields are removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.exist');
                    });
                });
                
            });
        });
        describe('Scenario 73 - The quality filters are added when the user selects them.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context("WHEN he clicks on the quality filter and fills in the fields.", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-option-38 > .mat-option-text').click();
                        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-parameter > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-option-45 > .mat-option-text').click();
                        cy.get('#mat-input-9').type('3');
                    });
                    it("THEN the quality filters are added.", () => {
                        cy.get(':nth-child(2) > :nth-child(1) > .numeric-title-container > .ds-inline-group--sm > .ds-badge--xs').contains('1');
                    });
                });
            });
        });
        describe("Scenario 74 - The user selects the quality filters and then clicks on the 'Clear Filters' button, so all selected filters are removed.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN The user selects the quality filters and then clicks on the "Clear Filters" button', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-option-39 > .mat-option-text').click();
                        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-parameter > .mat-form-field-wrapper > .mat-form-field-flex').click();
                        cy.get('#mat-option-45').click();
                        cy.get('#mat-input-9').type('4');
                        cy.get(':nth-child(2) > :nth-child(1) > .numeric-title-container > .ds-inline-group--sm > .ds-badge--xs').contains('1');
                        cy.get(':nth-child(2) > :nth-child(1) > .numeric-title-container > .badge-btn').click();
                    });
                    it("THEN the quality filters are removed.", () => {
                        cy.get(':nth-child(2) > :nth-child(1) > .numeric-title-container > .ds-inline-group--sm > .ds-badge--xs').contains('0');
                    });
                });
            });
        });
        describe("Scenario 75 - When the user clicks the '+' button in the quality filter, another field for property, parameter, and value is generated.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he clicks on the "+" button.', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .add-filter > .ds-inline-group--sm > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
                        
                    });
                    it('THEN the quality filters are added.', () => {
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.exist');
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.exist');
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .ds-inline-group--xs > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').should('be.exist');
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .add-filter > .ds-inline-group--sm > [data-testid="delete-button"] > .mat-button-wrapper > .mat-icon').click();
                    });
                });
            });
        });
        describe('Scenario 76 - The user clicks on the "+" button of the quality filter, generating another field for property, parameter, and value. Then, upon clicking the remove button, the fields are removed.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN The user clicks on the "+" button in the population frequency filter, generating another field for property, parameter, and value. Then, upon clicking the remove button', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .add-filter > .ds-inline-group--sm > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .add-filter > .ds-inline-group--sm > [data-testid="delete-button"] > .mat-button-wrapper > .mat-icon').click();
                    });
                    it('', () => {
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('not.exist');
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .form-property > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('not.exist');
                        cy.get('[_ngcontent-ng-c4195521875=""][style=""] > .numeric-form > .ds-inline-group--xs > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').should('not.exist');
                    });
                });
            });
        });
        describe("Scenario 77 - When the user selects the 'between' option in the parameter field of the population frequency filter, two value input fields should appear.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he selects the "between" option in the parameter field of the frequency filter.', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-parameter > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-option-36').click();                  
                    });
                    it('THEN two value input fields should appear', () => {
                        cy.get(':nth-child(1) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .ds-inline-group--xs > .numerical-form-field > .mat-form-field-wrapper > .mat-form-field-flex').should('be.exist');
                        cy.wait(2000);
                        cy.get('.mat-form-field.ng-tns-c3437332814-105 > .mat-form-field-wrapper > .mat-form-field-flex').should('be.exist');
                    });
                });
            });
        });
        describe("Scenario 78 - When the user selects the 'between' option in the parameter field of the Quality filter, two value input fields should appear.", () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he selects the "between" option in the parameter field of the Quality filter.', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .form-parameter > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
                        cy.get('#mat-option-48').click();               
                    });
                    it('THEN two value input fields should appear', () => {
                        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="filter-option"] > .numeric-form > .ds-inline-group--xs > .numerical-form-field > .mat-form-field-wrapper > .mat-form-field-flex').should('be.exist');
                        cy.wait(2000);
                        cy.get('.mat-form-field.ng-tns-c3437332814-107 > .mat-form-field-wrapper > .mat-form-field-flex').should('be.exist');
                    });
                });
            });
        });
    });
    describe("As a Varstation analyst user, I want to create general CNV and SV filters.", () => {
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
        describe('Positives Scenarios', () => {
            describe('Scenario 79 - "A filter is successfully created."', () => {
                context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                    context("WHEN he selects the filters, names them, and clicks the 'Save' button.", () => {
                        beforeEach(() => {
                            cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(1)').click();
                            cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(9)').click();
                            cy.get('#mat-input-7').type('Teste automatizado');
                            cy.get('.mat-flat-button').click();
                        });
                        it("THEN the filter is successfully created.", () => {
                            cy.get('.app-toast-container').contains('Filtro salvo com sucesso');
                        });
                    });
                });
                
            });
            describe('Scenario 80 - A created filter is edited.', () => {
                context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                    context("WHEN he clicks on the edit and adds a new filter.", () => {
                        beforeEach(() => {
                            cy.get('.mat-list-item-content').contains('Teste automatizado')
                            .click();
                            cy.get('#mat-input-10').type(' editado')
                            cy.get('.mat-flat-button').click();
                        });
                        it("THEN the filter is successfully edited.", () => {
                            cy.get('.app-toast-container').contains('Filtro salvo com sucesso');
                            
                        });
                    });
                });
            });
            describe('Scenario 81 - A previously created filter is successfully deleted.', () => {
                context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                    context("WHEN he clicks on the delete button.", () => {
                        beforeEach(() => {
                            cy.get('.mat-list-text > .ds-inline-group--md > .mat-icon').click();
                            cy.get('.mat-menu-content > :nth-child(3)').click();
                            cy.get('app-confirmation-dialog.ng-star-inserted > .ds-stack--sm').contains('Você deseja remover o filtro?');
                            cy.get('.mat-dialog-actions > .mat-raised-button > .mat-button-wrapper').click();
                        });
                        it("THEN the filter is successfully deleted.", () => {
                            cy.get('#mat-input-6').type('Teste automatizado editado');
                            cy.get('.ds-caption').contains('Nenhum resultado encontrado.')
                        });
                    });
                });
                
            });
        
        });
        describe('Negatives Scenarios', () => {
            describe('Scenario 82 - The filters are selected, but since they are not named, the filter is not created', () => {
                context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                    context("WHEN he selects the filters but does not provide a name.", () => {
                        beforeEach(() => {
                            cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(1)').click();
                            cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(9)').click();
                            cy.wait(2000);
                            cy.get('.mat-flat-button').click()
                         
                        });
                        it("THEN a modal informs that it is not possible to create without naming it.", () => {
                            cy.get('.app-toast-container').should('exist');
                        });
                    });
                });
            });
            describe("Scenario 83 - The user attempts to create a filter with the same name as an existing filter in their organization, and a modal informs that this filter already exists in their organization.", () => {
                context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                    context("WHEN he creates a new filter and then attempts to create a filter with the same name.", () => {
                        beforeEach(() => {
                            // cria pela primeira vez o filtro 
                            cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(1)').click();
                            cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(9)').click();
                            cy.get('#mat-input-7').type('Teste 2');
                            cy.wait(2000);
                            cy.get('.mat-flat-button').click()
                             // tenta criar um filtro com o mesmo nome
                             cy.get('#mat-input-7').clear();
                             cy.get(':nth-child(4) > app-categorical-choices-field > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                             cy.get('#mat-input-7').type('Teste 2');
                             cy.wait(2000);
                             cy.get('.mat-flat-button').click()
                        });
                       
                        it("THEN a modal informs that this filter already exists in your organization.", () => {
                            cy.get('.ds-stack--sm > .ds-text--xs').contains('Um filtro com esse nome já existe na sua organização');
                            // exclui o filtro depois de exceutar os testes
                            cy.get(':nth-child(1) > .mat-list-item > .mat-list-item-content > .mat-list-text > .ds-inline-group--md > .mat-icon').click();
                            cy.get('.mat-menu-content > :nth-child(3)').click();
                            cy.get('.mat-dialog-actions > .mat-raised-button').click();
                            cy.get('app-confirmation-dialog.ng-star-inserted > .ds-stack--sm').contains('Você deseja remover o filtro?');
                        });
                    });
                });
            });
            
        });
    });
});



