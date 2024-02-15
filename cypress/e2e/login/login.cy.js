describe('Teste login', () => {

     const baseUrl = 'https://homologation.varstation.varsomics-sandbox.com/#/login';

     const fazerLogin = (email, senha) => {
        cy.visit(baseUrl);
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="password"]').type(senha);
        cy.get('[data-testid="login-button"] > .mat-button-wrapper').click();
     }
    it('Login bem-sucedido', () => {
        fazerLogin('fake.automatizado@varsomics.com', 'Vars@123')
        //cy.get('[data-testid="overview-button"] > .mat-button-wrapper').should('exists');
        cy.url().should('include', 'https://homologation.varstation.varsomics-sandbox.com/#/dashboard');

    });

    it('login usuário incorreto', () => {

        fazerLogin('fake.automatizado@varsomics', 'Vars@123')
        cy.get('#mat-error-5').should('exist');
    });


    it('login senha incorreta', () => {
        fazerLogin('fake.automatizado@varsomics.com', 'senhaincorreta')
        
        // verifica a existencia da mensagem de erro
        cy.get('#mat-error-5').should('exist');
    });

    it('Deve exibir mensagem de erro ao tentar login com campos vazios', () => {
        cy.visit('https://homologation.varstation.varsomics-sandbox.com/#/login');
        cy.get('[data-testid="login-button"] > .mat-button-wrapper').click();
        
        // verifica a existencia da mensagem de erro
        cy.get('#mat-error-0 > .ng-star-inserted').should('exist');
        cy.get('#mat-error-1 > .ng-star-inserted').should('exist');
    });


});