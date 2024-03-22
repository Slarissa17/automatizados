/// <reference types="cypress" />

describe('Test cases- PATIENT', () => {
    
    beforeEach(() => {
        cy.Login();
        cy.visit('dashboard');
        cy.get('[data-testid="patient-button"] > .mat-button-wrapper').contains('Paciente').click();
    })

    describe('Negatives Scenarios', () => {
        describe('Scenario 1 - Register patient is not allowed when name and birth date fields are empty ', () => {
            context('GIVEN user is on the patient screen  ', () => {
                context('WHEN he leaves name AND birth date fields empty and clicks on "Salvar" button', () => {
                    beforeEach(() => {
                        cy.get('[data-testid="save-button"]').contains('Salvar').click();
                        
                    });
                    it('THEN the fields turn into red and the saving fail', () => {
                        cy.get('[data-testid="name-patient"] > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').contains('Nome *');
                        cy.get(':nth-child(2) > .mat-form-field-invalid > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').contains('Data de nascimento *')
                        
                    });
                });
                
            });
        });

        describe('Scenario 2 - Register patient is not allowed when only one mandatory is filled with the others fields', () => {
            context('GIVEN user is on patient screen', () => {
                context('WHEN he filled only one mandatory field AND the others fields AND clicks on "Salvar" button', () => {
                    beforeEach(() => {
                        cy.fixture('patientdata.json').then((patientdata => {
                            cy.get('[data-testid="input-name"]').type(patientdata.name);
                            cy.get('.mat-select-placeholder').click();
                            cy.get('#mat-option-22 > .mat-option-text').click();
                            cy.get('[data-testid="patient-secondaryId"]').type(patientdata.secondaryId);
                            cy.get('[data-testid="patient-otherInformation"]').type(patientdata.otherInformation);
                            cy.screenshot('Scenario_02_before-click')
                            cy.get('[data-testid="save-button"]').click();
                        }))
                        
                        
                    });
                    it('THEN the another mandatory fields turn into red and the saving fail', () => {
                        cy.get('[data-testid="input-datebirth"]').should('be.empty');
                        cy.get('.mat-form-field-invalid > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').contains('Data de nascimento *')
                        
                    });
                });
                
            });
        });
    });
    describe('Positives Scenarios', () => {
        describe('Scenario 03 - Register patient is allowed when name and birth date fields (mandatories) are filled', () => {
            context('GIVEN user is on patient screen', () => {
                context('WHEN he filled name AND birth date fields AND clicks on "Salvar" button', () => {
                    
                    beforeEach(() => {
                        cy.fixture('patientdata.json').then((patientdata => {
                            cy.get('[data-testid="input-name"]').type(patientdata.name);
                            cy.get('[data-testid="patient-secondaryId"]').type(patientdata.secondaryId);
                            cy.get('[data-testid="patient-sex"]').click()
                            cy.get('.mat-option-text').contains('Feminino').click();
                            cy.get('[data-testid="input-datebirth"]').click()
                            .get('.mat-calendar-content').contains('2001').click()
                            .get('.mat-calendar-content').contains('ABR').click()
                            .get('.mat-calendar-content').contains('20').click()
                            cy.get('[data-testid="patient-otherInformation"]').type(patientdata.otherInformation);
                            cy.get('.ng-input > input').click().type(patientdata.HPO)
                            .get('.ds-stack--xs').click();
                            cy.screenshot('Scenario_03_before-click')
                            cy.get('[data-testid="save-button"]').click();
                        }))
                    });

                    it('THEN the patient must have be created', () => {
                        cy.get('#toast-container > .ng-trigger').contains('Sucesso');
                        cy.get('.mat-expansion-panel-header').contains('Teste Automatizado')
                        cy.get('.sex-badge').contains('Fem')
                        cy.get('[id=mat-tab-content-1-0]').contains('Teste Automatizado');
                        cy.get('[id=mat-tab-content-1-0]').contains('Feminino');
                        cy.get('[id=mat-tab-content-1-0]').contains('ID: 17022023');
                        cy.get('[id=mat-tab-content-1-0]').contains('20/04/2001');
                        
                    });
                });
            });
            
        });

        describe('Scenario 4 - Edit a patient is allowed when he already exists in the system', () => {
            context('GIVEN user is on patient screen', () => {
                context('WHEN he found the patient AND clicks on "Editar" button', () => {
                    beforeEach(() => {
                        cy.get('[data-testid="search-input"]').click()
                        .type('Teste Automatizado').type('{enter}');
                        cy.get('.mat-content').contains('Teste Automatizado').click();
                        cy.get('.sex-badge').contains('Fem');
                        cy.get('.mat-expansion-panel-header').contains('Teste Automatizado')
                        cy.get('[id=mat-tab-content-1-0]').contains('Feminino');
                        cy.get('[id=mat-tab-content-1-0]').contains('ID: 17022023');
                        cy.get('[id=mat-tab-content-1-0]').contains('20/04/2001');
                        cy.screenshot('Scenario_04_before-click')
                        cy.get('.mat-button-wrapper').contains('edit').click()
                        
                    });

                    it('THEN the patient is modified', () => {
                        cy.fixture('patientdata.json').then((patientdata =>{
                            cy.get('[data-testid="patient-otherInformation"]')
                            .should('have.value', patientdata.otherInformation).clear();
                            cy.get('[data-testid="patient-otherInformation"]').type(patientdata.otherInformationEdit);
                        }))
                        cy.get('[data-testid="save-button"]').click();
                        cy.get('.app-toast-container').contains('Sucesso');               
                        cy.screenshot('Scenario_04_after-click');
                        
                    });
                    
                });
                
            });
            
        });

        describe('Scenario 5 - Delete a patient is allowed when he already exists in the system', () => {
            context('GIVEN user is on patient screen', () => {
                context('WHEN he found the patient AND clicks on "Deletar" button', () => {
                    beforeEach(() => {
                        cy.get('[data-testid="search-input"]').click()
                        .type('Teste Automatizado').type('{enter}');
                        cy.get('.mat-content').contains('Teste Automatizado').click();
                        cy.get('.sex-badge').contains('Fem');
                        cy.get('.mat-expansion-panel-header').contains('Teste Automatizado')
                        cy.get('[id=mat-tab-content-1-0]').contains('Feminino');
                        cy.get('[id=mat-tab-content-1-0]').contains('ID: 17022023');
                        cy.get('[id=mat-tab-content-1-0]').contains('20/04/2001');
                        cy.screenshot('Scenario_05_before-click')
                        cy.get('[aria-label="Delete this patient"] > .mat-button-wrapper > .mat-icon').click();
                        
                    });

                    it('THEN the patient is deleted', () => {
                        cy.get('[id=mat-dialog-0]').contains('Você tem certeza que deseja excluir este paciente?')
                        cy.get('[id=mat-dialog-0]').contains('Você não pode desfazer esta ação')
                        cy.get('.mat-button-wrapper').contains('Excluir').click()
                        cy.get('.list-container').not('Teste Automatizado').wait(1000)
                        cy.screenshot('Scenario_05_after-click')
                        
                    });
                    
                });
            });
        });
        
    });

   
    
});
