/// <reference types="cypress" />



it('Verify login access', () => {

    cy.visit('/')

    cy.get('input[name=username]').type(Cypress.env('user'));
    cy.get('input[name=password]').type(Cypress.env('password'));
    cy.get('button').click()
})

it('Verify if both password are the same', () => {
    cy.get('.Avatar__btn').click()
    cy.get('.Avatar__dropdown > a').click()
    cy.get('input[name=oldPassword]').type('d03676cd116b76b48ab4756232949f76');
    cy.get('input[name=newPassword]').type('12345678');
    cy.get('input[name=newPassword2]').type('12345678');
    cy.get('input[name=newPassword]').invoke('val').then(samePassword => {
        cy.get('input[name=newPassword2]').should('have.value', samePassword)
    })
})

it('Verify show error "passsword are not the same"', () => {
    cy.get('.Avatar__btn').click()
    cy.get('.Avatar__dropdown > a').click()
    cy.get('input[name=oldPassword]').type('d03676cd116b76b48ab4756232949f76');
    cy.get('input[name=newPassword]').type('12345678');
    cy.get('input[name=newPassword2]').type('123456789');
    cy.get('input[name=newPassword]').invoke('val').then(samePassword => {
        cy.get('input[name=newPassword2]').should('not.have.value', samePassword)
        cy.get('[type="submit"]').click()
        cy.get('.Error').should('contain', 'Passwords must be the same').should('be.visible')
    })
})