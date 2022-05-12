/// <reference types="cypress" />

context('', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/') 
});

it('Deve selecionar um produto da lista', () => {
    cy.get('.product-block')
    //.first()
    //.last()
    //.eq(3)
    .contains('Ariel Roll Sleeve Sweatshirt')
    .click()

});
    
it.only('Deve adicionar um produto ao carrinho ', () => {

    var quantidade =1
    cy.get('.product-block')
    .contains('Ariel Roll Sleeve Sweatshirt').click()
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Purple').click()
    cy.get('.button-variable-item-Purple').type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', ' foi adicionado no seu carrinho.')
});
});