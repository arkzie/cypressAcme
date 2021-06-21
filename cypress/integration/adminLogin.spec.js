/// <reference types="cypress" />

it('login into page', function () {

    cy.visit('/')

    cy.get('input[name=username]').type(Cypress.env('user'));
    cy.get('input[name=password]').type(Cypress.env('password'));
    cy.get('button').click()
}),
    it('Check if user is logged and the url is correct', function () {
        cy.get('input[name=username]').should('not.exist')
        cy.url().should('eq', 'https://acme.iterato.rs/hours')
    })

it('Insert login without password', function () {
    cy.visit('/')
    cy.get('input[name=username]').type('anowak');
    cy.get('input[name=password]')
    cy.get('button').click()
    cy.get('.Error').contains('Required')
})
it('Try to login without username and password', function () {
    cy.visit('/')

    cy.get('input[name=username]')
    cy.get('input[name=password]')
    cy.get('button').click()
    cy.get('form > :nth-child(1) > :nth-child(1)').contains('Required')
})
it('Try to login with incorrect password', function () {
    cy.visit('/')
    cy.get('input[name=username]').type('anowak');
    cy.get('input[name=password]').type('dsadasdsa')
    cy.get('button').click()
    cy.get('.Login__error').contains('Something went wrong')
})
it('Check if the page is secured by htttps protocol', () => {
    cy.visit('/')
    cy.location('protocol').should('contains', 'https')
})


