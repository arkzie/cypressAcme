/// <reference types="cypress" />

describe('Insert data', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('input[name=username]').type(Cypress.env('user'));
        cy.get('input[name=password]').type(Cypress.env('password'));
        cy.get('button').click()

    }),

        it('Verify add value to Calendar with correct valid data', () => {
            cy.get('.Calendar__new').click()
            cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
            cy.get('input[name=reportedHours]').type('8')
            cy.get('input[name=taskId]').type('1')
            cy.get('textarea[name=taskDescription]').type('projekt')
            cy.get('.Button__save').click()
            cy.get('.Message__titles').contains('Success!').should('be.visible')
        })

    it('Verify show error "Required" when empty hours', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]')
        cy.get('input[name=taskId]').type('1')
        cy.get('textarea[name=taskDescription]').type('projekt')
        cy.get('.Button__save').click()
        cy.get('.Calendar__inputError').contains('Required').should('be.visible')
    })

    it('Verify disabled save button when no data', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]')
        cy.get('input[name=taskId]')
        cy.get('textarea[name=taskDescription]')
        cy.get('.Button__save').should('be.disabled')
    })
    it('Verify show error "Required" when empty decription', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]').type('8')
        cy.get('input[name=taskId]').type('1')
        cy.get('textarea[name=taskDescription]')
        cy.get('.Button__save').click()
        cy.get('.Calendar__inputError').contains('Required').should('be.visible')
    })

    it('Verify show error "Should be greater than 0" when number of hours is negative', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]').type('-2')
        cy.get('input[name=taskId]').type('1')
        cy.get('textarea[name=taskDescription]').type('projekt')
        cy.get('.Button__save').click()
        cy.get('.Calendar__inputError').contains('Should be greater than 0').should('be.visible')

    })

    it('Verify show error "Use proper format" when typed value is not a number', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]').type('osiem')
        cy.get('input[name=taskId]').type('1')
        cy.get('textarea[name=taskDescription]').type('projekt')
        cy.get('.Button__save').click()
        cy.get('.Calendar__inputError').contains('Use proper format').should('be.visible')

    })

    it('Verify show error "Should be smaller than 24" when number of hours is more than 24', () => {
        cy.get('.Calendar__new').click()
        cy.get('select[name=projectId]').select('DRUTEX / Obsługa bieżąca').should('have.value', '5429527e-4669-495a-9264-9039488ea2ac')
        cy.get('input[name=reportedHours]').type('25')
        cy.get('input[name=taskId]').type('1')
        cy.get('textarea[name=taskDescription]').type('projekt')
        cy.get('.Button__save').click()
        cy.get('.Calendar__inputError').contains('Should be smaller than 24').should('be.visible')
    })
})
