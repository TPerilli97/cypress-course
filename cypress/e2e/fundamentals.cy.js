describe('template spec', () => {
  it('Test - Access Fundamentals Page', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').should('exist')
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })
})