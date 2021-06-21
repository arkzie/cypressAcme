/// <reference types="cypress" />

it('Verify login acces ', () => {
    cy.visit('/')
    cy.get('input[name=username]').type(Cypress.env('adminLogin'));
    cy.get('input[name=password]').type(Cypress.env('adminPassword'))
    cy.get('button').click()
})

it('Verify add new project', () => {
    cy.get('[href="/projects"]').click()
    cy.get('button[title="Add new project"]').should('contain', 'Add New').click()
    cy.get('input[name="name"]').type('Polsat')
    cy.get('button[type="submit"]').click();
    cy.get('.Message').contains('Success!').should('be.visible')
})