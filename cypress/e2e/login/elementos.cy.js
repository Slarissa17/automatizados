describe('Testando os elementos da tela de login', () => {
    it('Elemento visualização de senha', () => {
        cy.visit('https://homologation.varstation.varsomics-sandbox.com/#/login');
        cy.get('[data-testid="password"]').type('123');
        cy.get('.mat-icon').click();
        cy.get('[data-testid="password"]').should('have.attr', 'type', 'text')
        
    });


    it('Redirecionamento ao clicar no botão esqueceu a senha', () => {
        cy.visit('https://homologation.varstation.varsomics-sandbox.com/#/login');
        cy.get('.mat-body-2').click();
        cy.url().should('include', 'https://homologation.varstation.varsomics-sandbox.com/#/login/recover-password')
        
    });

    it.only('Redirecionamento para a página principal da Varsomics', () => {
        cy.visit('https://homologation.varstation.varsomics-sandbox.com/#/login');
        cy.get('.ds-align-center > .mat-focus-indicator').click();

        //Aguarda que a URL seja alterada após o redirecionamento
       //cy.url().should('not.include', 'https://homologation.varstation.varsomics-sandbox.com/#/login');

        cy.visit('https://varsomics.com/varstation/');
        cy.url().should('include', 'https://varsomics.com/varstation/')
    });

    
});