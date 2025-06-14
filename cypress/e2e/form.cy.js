describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })

  it('Test - Access Form Page', () => {
    cy.contains(/Testing Forms/i)
    cy.get('[data-test="subscribe-form"]').should('exist')
    cy.get('[data-test="subscribe-form"]').find('input').should('exist')
    cy.contains(/Successfully subbed: tommaso@yahoo.com/i).should('not.exist')
    cy.get('[data-test="subscribe-form"]').find('input').type('tommaso@yahoo.com')
    cy.get('[data-test="subscribe-button"]').should('exist')
    cy.get('[data-test="subscribe-button"]').contains(/Subscribe/i)
    cy.get('[data-test="subscribe-button"]').click()
    cy.contains(/Successfully subbed: tommaso@yahoo.com/i).should('be.visible')
    cy.wait(3000)
    cy.contains(/Successfully subbed: tommaso@yahoo.com/i).should('not.exist')
  })
  })