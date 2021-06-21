/// <reference types="cypress" />



it('Verify login access', function () {
    cy.visit('/')
    cy.get('input[name=username]').type(Cypress.env('user'));
    cy.get('input[name=password]').type(Cypress.env('password'));
    cy.get('button').click()
})

it('Verify time tracker entry deleted', () => {
    cy.get('.fa-trash').first().click({ force: true })
    cy.get('button').contains('Ok').click()
    cy.get('.Message').contains('Success!').should('be.visible')
})
