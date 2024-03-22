/// <reference types="cypress" />

describe('Test cases - SNIV sample filters', () => {
    beforeEach(() => {
        cy.Login();
        cy.visit('dashboard');
        cy.url().should('include', 'dashboard');
    });
    describe('As a Varstation user analyst, I want to access general SNV/Indel filters.', () => {
        describe('Scenario 01 - General filters modal is opened when clicking the "+" general filters button', () => {
            context('GIVEN user on the routines screen', () => {
                context('WHEN he clicks on the ‘+’ button “General Filters”', () => {
                    beforeEach(() => {
                        cy.get('[data-testid="routines-button"] > .mat-button-wrapper').click();
                        cy.url().should('include', 'routines');
                        cy.get('[data-testid="search-input"]').click().type('Germinativo - SNV/Indel');
                        cy.get('[data-testid="submit-button"]').click();
                        cy.get('.mat-content').contains('Germinativo - SNV/Indel').click();
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
    describe('As a Varstation analyst user, I want to access or modify general  SNV/Indel filters.', () => {
        beforeEach(() => {
            cy.get('[data-testid="routines-button"] > .mat-button-wrapper').click();
            cy.url().should('include', 'routines');
            cy.get('[data-testid="search-input"]').click().type('Germinativo - SNV/Indel');
            cy.get('[data-testid="submit-button"]').click();
            cy.get('.mat-content').contains('Germinativo - SNV/Indel').click();
            cy.get('[data-testid="selected-sample"]').click();
            cy.get('.ds-stack--sm > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
             
        });
        describe("Scenario 02 - All location filters should be selected when the user clicks on the 'Select All' checkbox.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN he clicks on the 'Select All' checkbox", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(2) > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                    });
                    it('THEN all the location filters are selected', () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('11')
                    });
                });
            });
        });
        describe('Scenario 03 - The user double-clicks on the "Select All" checkbox of the location filter, and all filters are removed.', () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN he double-clicks on the 'Select All' checkbox", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(2) > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').dblclick();
                    });
                    it('THEN all the location filters are removed', () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0')
                    });
                });
            });
        });
        describe("Scenario 04 - All filters should be removed when the user clicks on the 'Select All' checkbox and then clicks on the 'Clear Filters' button.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("when the user clicks on the 'Select All' checkbox and then clicks on the 'Clear Filters' button", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(2) > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN all the filters are removed', () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0')
                    });
                });
            });
        });
        describe('Scenario 05 - All effect filters must be selected when the user selects the exonic option in the location filter', () => {
            context('GIVEN user on the general filters screen', () => {
                context('GIVEN THAT the varstation user analyst selects the exonic option in the location filter', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(1)').click();
                    });
                    it('THEN all effect filters are selected', () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('10');
                    });
                });
                
            });
            
        });
        describe("Scenario 06 - All effect filters and the exonic option should be unchecked when clicking 'exonic' twice.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN he double-clicks on the exonic option in the location filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(1)').click();
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('10');
                    });
                    it('THEN all the filters are removed', () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 07 - When selecting the exonic option in the location filter and clicking on the 'Clear Filters' button, only the location filter is unchecked, while all effect filters remain selected.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN selecting the exonic option in the location filter and clicking on the 'Clear Filters' button", () => {
                     beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(1)').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                     });
                     it('THEN only the location filter is unchecked, while all effect filters remain selected', () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('9');
                     });
                });
            });
            
        });
        describe("Scenario 08 - When selecting the exonic option in the location filter and clicking the 'Clear Filters' button to remove the effect filters, only the location filter remains selected, while all effect filters are deselected.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN  selecting the exonic option in the location filter and clicking the "Clear Filters" button to remove the effect filters', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(1)').click();
                        cy.get(':nth-child(3) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click()
                    });
                    it("THEN all effect filters are deselected, leaving only the exonic location filter selected.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe('Scenario 09 - The "Splicing Canonical Site" filter should be activated when the user selects the "Splicing" option in the location filter.', () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN the Varstation user selects the "Splicing" option in the location filter.', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(2)').click();

                    });
                    it("THEN the 'Canonical Splicing Site' option is selected.", () => {
                        cy.get('.mat-chip-selected').should('be.exist');
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('2');
                    });
                });
            });
            
        });
        describe("Scenario 10 - With a double click on the 'Splicing' option in the location filter, both 'Splicing' and 'Canonical Splicing Site' are deselected.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation user double-clicks on 'Splicing' in the location filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(2)').dblclick();
                    });
                    it("THEN both 'Splicing' and 'Canonical Splicing Site' are unchecked.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 11 - When clicking on 'Splicing' and then on 'Clear Filters', all selected filters are removed.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN clicking on "Splicing" and then on "Clear Filters"', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(2)').click();
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('2');
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN all selected filters are removed', () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 12 - When the user adds the "Splicing" location filter, the "Canonical Splicing Site" filter is automatically selected. If the user unchecks the "Canonical Splicing Site" filter, the "Splicing" filter is also unchecked.', () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the user selects the 'Splicing' location filter and then removes the 'Canonical Splicing Site' filter", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(2)').click();
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(3)').click();
                    });
                    it("THEN the splicing filter is also removed", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        /////// 
        describe("Scenario 13 - The 'Canonical Splicing Site' filter is added when the user clicks on it.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation user clicks on the 'Canonical Splicing Site' location filter", () => {
                    beforeEach(() => {
                        
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(3)').click();
                    });
                    it("THEN the splicing filter is also removed", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 14 - When double-clicked on the 'Canonical Splicing Site' filter, it is removed.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN double-clicked on the 'Canonical Splicing Site' filter", () => {
                    beforeEach(() => {
                        
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(3)').dblclick();
                    });
                    it("THEN the Canonical Splicing Site filter is removed", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 15 - The 'Splicing Canonical Site' location filter is removed when the user selects it and then clicks the 'Clear Filters' button.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN the Varstation analyst user selects the "Splicing Canonical Site" location filter and clicks the "Clear Filters" button', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(3)').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the Canonical Splicing Site filter is removed", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        
        describe("Scenario 16 - When clicking on the 'Intronic' location filter, it should be added.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN clicking on the "Intronic" location filter', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(4)').click();
                    });
                    it("THEN the filter is added.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 17 - When double-clicking the intronic location filter, the filter should be removed.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN the Varstation analyst user double-clicks the intronic filter.', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(4)').dblclick();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 18 - WHEN the Varstation analyst user selects the 'Intronic' location filter and clicks the 'Clear Filters' button.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN the Varstation analyst user double-clicks the intronic filter.', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(4)').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        
        describe("Scenario 19 - When clicking on the 'Upstream' location filter, it should be added.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN clicking on the "Upstream" location filter', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(5)').click();
                    });
                    it("THEN the filter is added.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 20 - When double-clicking the Upstream location filter, the filter should be removed.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN the Varstation analyst user double-clicks the Upstream filter.', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(5)').dblclick();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 21 - WHEN the Varstation analyst user selects the 'Upstream' location filter and clicks the 'Clear Filters' button.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN the Varstation analyst user double-clicks the Upstream filter.', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(5)').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        
        describe("Scenario 22 - When clicking on the 'Downstream' location filter, it should be added.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN clicking on the "Downstream" location filter', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(6)').click();
                    });
                    it("THEN the filter is added.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 23 - When double-clicking the Downstream location filter, the filter should be removed.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN the Varstation analyst user double-clicks the Downstream filter.', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(6)').dblclick();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 24 - WHEN the Varstation analyst user selects the 'Downstream' location filter and clicks the 'Clear Filters' button.", () => {
            context('GIVEN user on the general filters screen', () => {
                context('WHEN the Varstation analyst user double-clicks the Downstream filter.', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(6)').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        
        describe("Scenario 25 - When clicking on the '5'UTR' location filter, it should be added.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN clicking on the \"5'UTR\" location filter", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(7)').click();
                    });
                    it("THEN the filter is added.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 26 - When double-clicking the \"5'UTR\" location filter, the filter should be removed.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation analyst user double-clicks the \"5'UTR\" filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(7)').dblclick();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 27 - WHEN the Varstation analyst user selects the \"5'UTR\" location filter and clicks the 'Clear Filters' button.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation analyst user double-clicks the \"5'UTR\" filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(7)').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 28 - When clicking on the '3'UTR' location filter, it should be added.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN clicking on the \"3'UTR\" location filter", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(8)').click();
                    });
                    it("THEN the filter is added.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 29 - When double-clicking the \"3'UTR\" location filter, the filter should be removed.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation analyst user double-clicks the \"3'UTR\" filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(8)').dblclick();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 30 - WHEN the Varstation analyst user selects the \"3'UTR\" location filter and clicks the 'Clear Filters' button.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation analyst user double-clicks the \"3'UTR\" filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(8)').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        
        describe("Scenario 31 - When clicking on the Regulatory region location filter, it should be added.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN clicking on the Regulatory region location filter", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(9)').click();
                    });
                    it("THEN the filter is added.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 32 - When double-clicking the Regulatory region location filter, the filter should be removed.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation analyst user double-clicks the Regulatory region filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(9)').dblclick();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 33 - WHEN the Varstation analyst user selects the Regulatory region location filter and clicks the 'Clear Filters' button.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation analyst user double-clicks the Regulatory region filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(9)').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        
        describe("Scenario 34 - When clicking on the ncRNA location filter, it should be added.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN clicking on the ncRNA location filter", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(10)').click();
                    });
                    it("THEN the filter is added.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 35 - When double-clicking the ncRNA location filter, the filter should be removed.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation analyst user double-clicks the ncRNA filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(10)').dblclick();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 36 - WHEN the Varstation analyst user selects the ncRNA location filter and clicks the 'Clear Filters' button.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation analyst user double-clicks the ncRNA filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(10)').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        //////////
        describe("Scenario 37 - When clicking on the Intergenic location filter, it should be added.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN clicking on the Intergenic location filter", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(11)').click();
                    });
                    it("THEN the filter is added.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 38 - When double-clicking the Intergenic location filter, the filter should be removed.", () => {
            context('GIVEN user on the general filters screen', () => {
                context("WHEN the Varstation analyst user double-clicks the Intergenic filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(11)').dblclick();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 39 - WHEN the Varstation analyst user selects the Intergenic location filter and clicks the 'Clear Filters' button.", () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context("WHEN the Varstation analyst user double-clicks the Intergenic filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(11)').click();
                        cy.get(':nth-child(1) > .ds-stack--md > .ds-stack--xs > :nth-child(1) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 40 - All effect filters should be selected when the user clicks on 'select all'. ", () => {
            context('GIVEN THAT  user on the general filters screen', () => {
                context("WHEN the Varstation analyst user clicks on 'select all'.", () => {
                    beforeEach(() => {
                        cy.get(':nth-child(4) > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
                    });
                    it("THEN all the filters are added.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('9');
                    });
                });
            });
        });
        describe("Scenario 41 - If the user double-clicks on the 'select all' checkbox, all effect filters should be removed. ", () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context('WHEN the user double-clicks on the "select all" checkbox', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(4) > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').dblclick()
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 42 - All effect filters are removed when the user checks the "select all" checkbox, and then clicks the "clear filters" button.', () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context('WHEN the user clicks on "select all" and then on the "clear filters" button', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(4) > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
                        cy.get(':nth-child(3) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filter is removed.', () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 43 - The effect filters should be added when clicked.", () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context("When the user clicks on the effect filter.", () => {
                    beforeEach(() => {
                        const nEfeitosSelecionar = 5;
                        for(let x = 0; x < nEfeitosSelecionar; x++ ){
                            const numeroAleatorio = Math.floor(Math.random () * 9 + 1)
                            cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${numeroAleatorio})`).click();    
                        }
                    });
                    it("THEN the filters are selected.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('5');
                    });
                });
            });
        });

        describe("Scenario 44 - The effect filters are deselected when the user double-clicks on the filter option.", () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context("WHEN the user double-clicks on the filter.", () => {
                    beforeEach(() => {
                        const nEfeitosSelecionar = 5;
                        for(let x = 0; x < nEfeitosSelecionar; x++ ){
                            const numeroAleatorio = Math.floor(Math.random () * 9 + 1)
                            cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${numeroAleatorio})`).dblclick();    
                        }
                    });
                    it("THEN the filters are removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 45 - All selected filters should be removed when the user clicks the 'Clear Filters' button.", () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context("WHEN the user selects the filters and clicks the 'Clear Filters' button.", () => {
                    beforeEach(() => {
                        const nEfeitosSelecionar = 5;
                        for(let x = 0; x < nEfeitosSelecionar; x++ ){
                            const numeroAleatorio = Math.floor(Math.random () * 9 + 1)
                            cy.get(`#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(${numeroAleatorio})`).click();    
                        }
                        cy.get(':nth-child(3) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filters are removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 46 - The 'Other Changes' filter should be added when clicked.", () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context("WHEN the user clicks on 'Other Changes'", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-5 > .mat-chip-list-wrapper > [data-testid="categorical-chip-btn"]').click();
                    });
                    it("THEN the filter is added.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe("Scenario 47 - The 'Other Changes' filter should be removed with a double click.", () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context("WHEN the user double-clicks on the 'Other Changes' filter.", () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-5 > .mat-chip-list-wrapper > [data-testid="categorical-chip-btn"]').dblclick();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 48 - The 'Other Changes' filter should be removed when the user clicks on the 'Clear Filters' button", () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context('WHEN the user selects "other changes" and then clicks on "clear filters"', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-5 > .mat-chip-list-wrapper > [data-testid="categorical-chip-btn"]').click();
                        cy.get(':nth-child(5) > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it("THEN the filter is removed.", () => {
                        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe("Scenario 49 - All impact filters are selected when clicking on the 'Select All' checkbox.", () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context('WHEN the user clicks on "select all"', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(2) > .ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
                    });
                    it("THEN the filters are selected .", () => {
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('4');
                    });
                });
            });
        });
        describe('Scenario 50 - All impact filters should be removed when the user selects all filters and then clicks on the "Clear Filters" button.', () => {
            context('GIVEN THAT user on the general filters screen', () => {
                context('WHEN the user double-clicks on the "select all" button', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(2) > .ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
                        cy.get('.ds-p-b-md > :nth-child(1) > :nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN all impact filters are removed', () => {
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 51 - The impact filters should be selected when clicked.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he clicks on the impact filter', () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(1)`).click();      
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(2)`).click();
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(3)`).click();
                    });
                    it('THEN the filters are selected', () => {
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('3');
                    });
                });
            });
        });
        describe('Scenario 52 - When the user double-clicks on the impact filters, they are unchecked.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he double-clicks on the impact filter', () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(4)`).dblclick();      
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(1)`).dblclick();
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(2)`).dblclick();
                    });
                    it('THEN the filters are removed', () => {
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 53 - All selected impact filters should be removed when the user clicks the "Clear Filters" button.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user selects the filters and then clicks the "Clear Filters" button', () => {
                    beforeEach(() => {
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(4)`).click();      
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(1)`).click();
                        cy.get(`#mat-chip-list-6 > .mat-chip-list-wrapper > :nth-child(3)`).click();
                        cy.get('.ds-p-b-md > :nth-child(1) > :nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filters are removed', () => {
                        cy.get(':nth-child(2) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        })
        describe('Scenario 54 - All chromosomes are selected when the user clicks the "Select All" checkbox.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user clicks the "Select All" checkbox', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(3) > .ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                    });
                    it('THEN all the chromosomes are selected', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('25');
                    });
                });
            });
        });
        describe('Scenario 55 - All chromosome filters are removed when the user double-clicks the "Select All" checkbox.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user double-clicks the "Select All" checkbox', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(3) > .ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').dblclick();
                    });
                    it('THEN all the chromosomes are removed', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 56 - All chromosome filters should be removed when the user clicks on the "Select All" checkbox and then clicks on the "Clear Filters" button.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user selects all filters and clicks on "Clear Filters".', () => {
                    beforeEach(() => {
                        cy.get(':nth-child(3) > .ds-m-b-md > .ds-stack--sm > .ds-inline-stack--xs > .ds-inline-group--sm > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                        cy.get('.ds-p-b-md > :nth-child(1) > :nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN all the chromosomes are removed', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 57 - The chromosome filter should be selected when the user clicks on it.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user selects a chromosome filter.', () => {
                    beforeEach(() => {
                        const nCromossomosSelecionar = 10;
                            for(let x = 0; x < nCromossomosSelecionar; x++ ){
                                const numeroAleatório = Math.floor(Math.random () * 25 + 1)
                                cy.get(`#mat-chip-list-7 > .mat-chip-list-wrapper > :nth-child(${numeroAleatório})`).click();
      
                            }
                    });
                    it('THEN all the chromosomes are removed', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('10');
                    });
                });
            });
        });
        describe('Scenario 58 - The chromosome filter should be selected when the user clicks on it.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user selects a chromosome filter.', () => {
                    beforeEach(() => {
                        const nCromossomosSelecionar = 10;
                            for(let x = 0; x < nCromossomosSelecionar; x++ ){
                                const numeroAleatório = Math.floor(Math.random () * 25 + 1)
                                cy.get(`#mat-chip-list-7 > .mat-chip-list-wrapper > :nth-child(${numeroAleatório})`).click();
                            }
                    });
                    it('THEN all the chromosomes are selected', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('10');
                    });
                });
            });
        });
        describe('Scenario 59 - The selected chromosome filters should be removed when the user double-clicks on them.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user double-clicks on the chromosome filter.', () => {
                    beforeEach(() => {
                        const nCromossomosSelecionar = 10;
                            for(let x = 0; x < nCromossomosSelecionar; x++ ){
                                const numeroAleatório = Math.floor(Math.random () * 25 + 1)
                                cy.get(`#mat-chip-list-7 > .mat-chip-list-wrapper > :nth-child(${numeroAleatório})`).dblclick();
                            }
                    });
                    it('THEN all the chromosomes are removed', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 60 - All selected chromosome filters are removed when the user clicks the "Clear Filters" button.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user selects the chromosome filters and clicks the "Clear Filters" button.', () => {
                    beforeEach(() => {
                        const nCromossomosSelecionar = 10;
                            for(let x = 0; x < nCromossomosSelecionar; x++ ){
                                const numeroAleatório = Math.floor(Math.random () * 25 + 1)
                                cy.get(`#mat-chip-list-7 > .mat-chip-list-wrapper > :nth-child(${numeroAleatório})`).click();
                            }
                            cy.get('.ds-p-b-md > :nth-child(1) > :nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN all the chromosomes are removed', () => {
                        cy.get(':nth-child(3) > app-filter-section-title > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 61 - The ACMG classification filter must be activated when the user selects it.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user selects an ACMG classification filter', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-8 > .mat-chip-list-wrapper > [style="color: rgb(255, 69, 69); border-color: rgb(255, 69, 69);"]').click();
                        cy.get('#mat-chip-list-8 > .mat-chip-list-wrapper > [style="color: rgb(255, 162, 162); border-color: rgb(255, 162, 162);"]').click();
                        cy.get('#mat-chip-list-8 > .mat-chip-list-wrapper > [style="color: rgb(111, 110, 255); border-color: rgb(111, 110, 255);"]').click();
                    });
                    it('THEN the filters are selected', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('3');
                    });
                });
            });
        });
        describe('Scenario 62 - All ACMG classification filters must be removed when the user double-clicks on them.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user double-clicks on the ACMG filters', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-8 > .mat-chip-list-wrapper > [style="color: rgb(129, 200, 199); border-color: rgb(129, 200, 199);"]').dblclick();
                        cy.get('#mat-chip-list-8 > .mat-chip-list-wrapper > [style="color: rgb(19, 101, 95); border-color: rgb(19, 101, 95);"]').dblclick();
                    });
                    it('THEN the filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 63 - All selected filters should be removed when the user clicks the "Clear Filters" button.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user selects the ACMG classification filters and then clicks on the "Clear Filters" button.', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-8 > .mat-chip-list-wrapper > [style="color: rgb(129, 200, 199); border-color: rgb(129, 200, 199);"]').click();
                        cy.get('#mat-chip-list-8 > .mat-chip-list-wrapper > [style="color: rgb(19, 101, 95); border-color: rgb(19, 101, 95);"]').click();
                        cy.get('.ds-m-b-md > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 64 - A filter should be added when the user selects the "No entry" checkbox in the ClinVar classification filter.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user selects the "No entry" checkbox', () => {
                    beforeEach(() => {
                        cy.get('#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container').click({force: true});
                    });
                    it('THEN the filters are selected', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe('Scenario 65 - The "no entry" checkbox in the ClinVar classification filter should be unchecked when the user double-clicks on it.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user double-clicks on the checkbox', () => {
                    beforeEach(() => {
                        cy.get('#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container').dblclick({force: true});
                    });
                    it('THEN the filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 66 - All filters that were added when the user checks the "no entry" checkbox in the ClinVar classification filter should be removed when the user clicks the "Clear Filters" button.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user double-clicks on the checkbox', () => {
                    beforeEach(() => {
                        cy.get('#mat-checkbox-25 > .mat-checkbox-layout > .mat-checkbox-inner-container').click({force: true});
                        cy.get('.ds-m-b-md > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 67 - All ClinVar classification filters are selected when the user checks the "with entry" checkbox.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user checks the "with entry" checkbox.', () => {
                    beforeEach(() => {
                        cy.get('.ds-inline-stack--sm > :nth-child(2) > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                    });
                    it('THEN all ClinVar classification filters are selected.', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('8');
                    });
                });
            });
        });
        describe('Scenario 68 -All ClinVar classification filters are removed when the user double-clicks on the "with input" checkbox.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user double-clicks', () => {
                    beforeEach(() => {
                        cy.get('.ds-inline-stack--sm > :nth-child(2) > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').dblclick();
                    });
                    it('THEN the ClinVar classification filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 69 - All ClinVar classification filters should be removed when the user clicks the "Clear Filters" button.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he checks the "with entry" checkbox and then clicks "Clear Filters"', () => {
                    beforeEach(() => {
                        cy.get('.ds-inline-stack--sm > :nth-child(2) > [data-testid="select-categorical-checkbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
                        cy.get(':nth-child(2) > app-filter-section-title.ds-full-width > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the ClinVar classification filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 70 - The ClinVar classification filters should be added when the user selects them.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user selects the ClinVar classification filter', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(1)').click();
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(2)').click();
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(3)').click();
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(4)').click();
                    });
                    it('THEN the ClinVar classification filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('4');
                    });
                });
            });
        });
        describe('Scenario 71 - "When the user double-clicks on a ClinVar classification filter, that filter is removed', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user double-clicks on a filter', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(5)').dblclick();
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(6)').dblclick();
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(7)').dblclick();
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(8)').dblclick();
                    });
                    it('THEN the ClinVar classification filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 72 - All selected ClinVar classification filters are removed when the user clicks the "Clear Filters" button.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he selects the filters and then clicks the clear filters button', () => {
                    beforeEach(() => {
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(5)').click();
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(6)').click();
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(7)').click();
                        cy.get('#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(8)').click();
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('4');
                        cy.get(':nth-child(2) > app-filter-section-title.ds-full-width > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the ClinVar classification filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe('Scenario 73 - The MitoTIP classification filter is selected when the user checks the "no input" checkbox.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN he checks the "no input" checkbox.', () => {
                    beforeEach(() => {
                        cy.get('#mat-checkbox-7 > .mat-checkbox-layout > .mat-checkbox-inner-container').click({force: true});
                    });
                    it('THEN the ClinVar classification filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('1');
                    });
                });
            });
        });
        describe('Scenario 74 - The "no input" checkbox in the MitoTIP classification filter must be unchecked when the user double-clicks on it.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user double-clicks on the "no input" checkbox', () => {
                    beforeEach(() => {
                        cy.get('#mat-checkbox-7 > .mat-checkbox-layout > .mat-checkbox-inner-container').dblclick({force: true});
                    });
                    it('THEN the ClinVar classification filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
        describe.only('Scenario 75 - The "no input" MitoTIP classification filter is removed when the user clicks the "clear filters" button.', () => {
            context('GIVEN THAT the Varstation analyst user is on the general filters screen', () => {
                context('WHEN the user checks the "no input" checkbox and then clicks "clear filters".', () => {
                    beforeEach(() => {
                        cy.get('#mat-checkbox-7 > .mat-checkbox-layout > .mat-checkbox-inner-container').click({force: true});
                        cy.get('.ds-stack--xs.ng-star-inserted > app-filter-section-title.ds-full-width > .ds-border-b--neutral-500 > .ds-inline-group--sm > [data-testid="clear-operations-btn"]').click();
                    });
                    it('THEN the ClinVar classification filters are removed', () => {
                        cy.get(':nth-child(4) > :nth-child(1) > .ds-color--brand-dark > .ds-inline-group--sm > [data-testid="badge-length"]').contains('0');
                    });
                });
            });
        });
    });
});