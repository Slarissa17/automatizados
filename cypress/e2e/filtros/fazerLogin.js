export function modalFiltos(nomeAmostra){
    cy.get('[data-testid="routines-button"] > .mat-button-wrapper').click(); // ROTINA
    cy.get('[data-testid="search-input"]').type(nomeAmostra); // busca a amostra desejada
    cy.get('[data-testid="submit-button"] > .mat-button-wrapper').click(); // clica no botão 'buscar'
    cy.get('.mat-content').click(); // clica no conteudo correspondente a pesquisa
    cy.get('.ds-sidemenu-card-header > .mat-body-1', { multiple: true }).should('be.visible').click();  // clica na variante
    cy.get('[data-testid="selected-sample"] > .mat-tooltip-trigger').click(); // clica no botao + 
    cy.get('.ds-stack--sm > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('be.visible').click();
}