describe('template spec', () => {
  it('Test - Access Fundamentals Page', () => {
    cy.visit('http://localhost:3000/fundamentals')
    cy.get('[data-test="fundamentals-header"]').should('exist')
    cy.get('[data-test="fundamentals-header"]').should('contain', /Testing Fundamentals/i)
  })
})