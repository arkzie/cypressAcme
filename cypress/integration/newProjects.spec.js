/// <reference types="cypress" />

it('login-test', function () {

    cy.visit('/')
    cy.get('input[name=username]').type(Cypress.env('adminLogin'));
    cy.get('input[name=password]').type(Cypress.env('adminPassword'))
    cy.get('button').click()
    cy.get('[href="/projects"]').click()
    cy.get('.Projects__buttons > button').click()
    cy.get('.Projects__input').type('Iterators')
    cy.get('.Projects__form > button').click();
    cy.get('.Message').contains('Success!').should('be.visible')

})