
describe('Test Cases - LOGIN', () => {
    beforeEach(() => {
        cy.visit('login/'); // acessa a página de login
        cy.get('[data-testid="login-button"]').contains('Entrar'); // confere a existencia do botão que contém o texto entrar
        cy.get('.mat-button-wrapper').contains('Cadastre-se'); // confere a existencia desse elemento
    });
    describe('Negative Scenarios', () => {
        describe('Scenario 1- Login is not allowed when email and password fields are empty ', () => {
            context('Given user on the login screen', () => {
                context('WHEN he leaves email and password fields empty and clicks on "entrar" button', () => {
                        beforeEach(() => {
                            cy.get('[data-testid="email"]').should('be.empty');
                            cy.get('[data-testid="password"]').should('be.empty');
                            cy.screenshot('Scenario_01_before-click');
                            cy.get('[data-testid="login-button"]').click();
                        });

                        it('THEN a message error "Campo obrigatório" is displayed and login fail', () => {
                            cy.get('#mat-error-0 > .ng-star-inserted').contains('Campo obrigatório');
                            cy.get('#mat-error-1 > .ng-star-inserted').contains('Campo obrigatório');
                            cy.screenshot('Scenario_04_before-click');
                        });
                });
            });
        });     

        describe('Scenario 2- Login is not allowed WHEN the user puts the wrong password ', () => {
            context('GIVEN user is on login screen ', () => {
                context('WHEN he puts the correct email and wrong password and clicks on "Entrar" button ', () => {
                    beforeEach(() => {
                        cy.get('[data-testid="email"]').type(Cypress.env('user').email)
                        cy.fixture('logindata.json').then((logindata => {
                            cy.get('[data-testid="password"]').type(logindata.wrongPassword).type('{enter}')
                        }))
                        cy.screenshot('Scenario_02_before-click')
                    });

                    it('THEN the error message "Usuário e/ou senha incorreto(s). Por favor, tente novamente." is displayed and login fail', () => {
                        cy.get('#mat-error-5').contains('Usuário e/ou senha incorreto(s). Por favor, tente novamente.')
                    });
                });
                
            });
        });

        describe('Scenario 3- Login is not allowed WHEN the user puts the wrong email ', () => {
            context('GIVEN user is on login screen ', () => {
                context('WHEN he puts the correct password and correct password and clicks on "Entrar" button ', () => {
                    beforeEach(() => {
                        cy.get('[data-testid="password"]').type(Cypress.env('user').password)
                        cy.fixture('logindata.json').then((logindata => {
                            cy.get('[data-testid="email"]').type(logindata.wrongEmail).type('{enter}')
                        }))
                        cy.screenshot('Scenario_03_before-click')
                    });

                    it('THEN the error message "Usuário e/ou senha incorreto(s). Por favor, tente novamente." is displayed and login fail', () => {
                        cy.get('#mat-error-6').contains('Usuário e/ou senha incorreto(s). Por favor, tente novamente.')
                    });
                });
                
            });
        });

        describe('Scenario 4- Login is not allowed WHEN the user try use an invalid email', () => {
            context('GIVEN user is on login screen ', () => {
                context('WHEN he puts the invalid email AND correct password AND clicks on "Entrar" button ', () => {
                    beforeEach(() => {
                        cy.get('[data-testid="password"]').type(Cypress.env('user').password)
                        cy.fixture('logindata.json').then((logindata => {
                            cy.get('[data-testid="email"]').type(logindata.invalidEmail).type('{enter}')
                        }))
                        cy.screenshot('Scenario_03_before-click')
                    });

                    it('THEN the error message "Email inválido." is displayed and login fail', () => {
                        cy.get('#mat-error-0 > .ng-star-inserted').contains('Email inválido');
                    });
                });
                
            });
        });   
   });

   describe('Positive Scenarios', () => {
    describe('Scenario 5- The user registered forgot his password and try to recovered his password', () => {
        context('GIVEN user is on login screen ', () => {
            context('WHEN he puts correctly email AND clicks on "Esqueceu a senha?" routerlink', () => {
                beforeEach(() => {
                    cy.get('[data-testid="email"]').type(Cypress.env('user').email);
                    cy.get('.mat-body-2').click();
                });

                it('THEN he must be directed to the page recover-password', () => {
                    cy.url('login/recover-password');
                    cy.get('.auth-form > .ds-text-align-center').contains('E-mail para receber link de recuperação');
                    cy.get('.auth-form > .mat-focus-indicator > .mat-button-wrapper').contains('Enviar');
                    cy.get('#mat-input-2').type(Cypress.env('user').email);
                    cy.get('.auth-form > .mat-focus-indicator').click();
                    cy.get('.auth-form').contains('Verifique sua caixa de entrada e clique no link que enviamos para você redefinir sua senha.');
                });
                
            });
            
        });
    });

    describe('Scenario 6- Successfully login when the user puts the email and password correctly', () => {
        context('GIVEN user is on the login screen', () => {
            context('WHEN he puts the email AND password correctly AND clicks on "Entrar" button', () => {
                beforeEach(() => {
                    cy.get('[data-testid="email"]').type(Cypress.env('user').email);
                    cy.get('[data-testid="password"]').type(Cypress.env('user').password).type('{enter}');
                    
                });
                it('THEN he must be directed to the page "Varstation`s Dashboard"', () => {
                    cy.get('[data-testid="overview-button"] > .mat-button-wrapper').contains('Visão geral');
                    cy.get('[data-testid="routines-button"] > .mat-button-wrapper').contains('Rotinas');
                    cy.get('[data-testid="patient-button"] > .mat-button-wrapper').contains('Pacientes');
                    cy.get('.mat-button-wrapper > .mat-tooltip-trigger').contains('Fake Automatizado')
                });
            });
        });
        
    });
    
   });
    
});

