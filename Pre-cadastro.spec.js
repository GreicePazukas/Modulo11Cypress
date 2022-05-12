/// <reference types="cypress" />


context('Funcionalidade Pré cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/') 
    }); 
    
    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Greice')
        cy.get('#account_last_name').type('Macedo')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });
});

