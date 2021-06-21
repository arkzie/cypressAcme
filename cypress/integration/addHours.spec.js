/// <reference types="cypress" />

describe('Insert data', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('input[name=username]').type(Cypress.env('user'));
        cy.get('input[name=password]').type(Cypress.env('password'));
        cy.get('button').click()

    }),


        it('Adding value to Calendar', () => {
            cy.get('.Calendar__new').click()
            cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
            cy.get('input[name=reportedHours]').type('8')
            cy.get('input[name=taskId]').type('1')
            cy.get('textarea[name=taskDescription]').type('projekt')
            cy.get('.Button__save').click()
            cy.get('.Message__titles').contains('Success!').should('be.visible')
        })

    it('Adding value to Calendar with empty hours', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]')
        cy.get('input[name=taskId]').type('1')
        cy.get('textarea[name=taskDescription]').type('projekt')
        cy.get('.Button__save').click()
        cy.get('.Calendar__inputError').contains('Required').should('be.visible')
    })

    it('Trying adding data to Calendar without single value', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]')
        cy.get('input[name=taskId]')
        cy.get('textarea[name=taskDescription]')
        cy.get('.Button__save').should('be.disabled')
    })
    it('Adding value to Calendar with empty description', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]').type('8')
        cy.get('input[name=taskId]').type('1')
        cy.get('textarea[name=taskDescription]')
        cy.get('.Button__save').click()
        cy.get('.Calendar__inputError').contains('Required').should('be.visible')
    })

    it('Adding value to Calendar with negative number in Hours Reported', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]').type('-2')
        cy.get('input[name=taskId]').type('1')
        cy.get('textarea[name=taskDescription]').type('projekt')
        cy.get('.Button__save').click()
        cy.get('.Calendar__inputError').contains('Should be greater than 0').should('be.visible')

    })

    it('Adding value to Calendar with words in Hours Reported', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]').type('osiem')
        cy.get('input[name=taskId]').type('1')
        cy.get('textarea[name=taskDescription]').type('projekt')
        cy.get('.Button__save').click()
        cy.get('.Calendar__inputError').contains('Use proper format').should('be.visible')

    })

    it('Adding value to Calendar with digit over 24', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]').type('25')
        cy.get('input[name=taskId]').type('1')
        cy.get('textarea[name=taskDescription]').type('projekt')
        cy.get('.Button__save').click()
        cy.get('.Calendar__inputError').contains('Should be smaller than 24').should('be.visible')
    })
})
