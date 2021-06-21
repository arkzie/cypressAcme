/// <reference types="cypress" />

it('Verify login access', () => {

    cy.visit('/')
    cy.get('input[name=username]').type(Cypress.env('user'));
    cy.get('input[name=password]').type(Cypress.env('password'));
    cy.get('button').click()
}),
    it('Verify user is logged and url is correct', () => {
        cy.get('input[name=username]').should('not.exist')
        cy.url().should('eq', 'https://acme.iterato.rs/hours')
    })

it('Verify show error"Requied" when password is empty', () => {
    cy.visit('/')
    cy.get('input[name=username]').type('anowak');
    cy.get('input[name=password]')
    cy.get('button').click()
    cy.get('.Error').contains('Required').should('be.visible')
})

it('Verify show error"Requied" when username and password are empty', () => {
    cy.visit('/')
    cy.get('input[name=username]')
    cy.get('input[name=password]')
    cy.get('button').click()
    cy.get('.Error').contains('Required').should('be.visible')
})

it('Verify show error "Something went wrong" when password is incorrect', () => {
    cy.visit('/')
    cy.get('input[name=username]').type('anowak');
    cy.get('input[name=password]').type('dsadasdsa')
    cy.get('button').click()
    cy.get('.Login__error').contains('Something went wrong').should('be.visible')
})

it('Verify page is secured by htttps protocol', () => {
    cy.visit('/')
    cy.location('protocol').should('contains', 'https')
})


