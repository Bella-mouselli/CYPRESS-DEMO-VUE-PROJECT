/// <reference types="cypress" />
// en test suite
describe('Regression test suite', function(){
// ett test case
    it('Perform valid login', function(){
     cy.visit('http://localhost:3000/')
     cy.title() .should('include' , 'Testers Hotel')
     cy.contains('Login')
     cy.get(':nth-child(1) > input') .type('tester01')
     cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
     cy.get('.btn') .click()
     cy.contains('Tester Hotel Overview')
     cy.get('.user > .btn') .click()
     cy.contains('Login')

    })

})