describe('Examples Tests Page', () => {

    beforeEach(() => {
        cy.visit('/examples')
    })

    it('Multi-page test', () => {
        cy.get('[data-test="why-cypress"]').click()
        cy.location('pathname').should('eq', '/')
        cy.get('[data-test="overview"]').click()
        cy.location('pathname').should('eq', '/overview')
        cy.get('[data-test="fundamentals"]').click()
        cy.location('pathname').should('eq', '/fundamentals')
        cy.get('[data-test="forms"]').click()
        cy.location('pathname').should('eq', '/forms')
        cy.get('[data-test="examples"]').click()
        cy.location('pathname').should('eq', '/examples')
        cy.get('[data-test="component"]').click()
        cy.location('pathname').should('eq', '/component')
        cy.get('[data-test="best-practices"]').click()
        cy.location('pathname').should('eq', '/best-practices')

    })
    
    it.only('Intercepts', () => {
        cy.intercept('POST', 'http://localhost:3000/examples',{
            fixture: 'example.json'
        })
        cy.get('[data-test="post-button"]').click()

    })

})