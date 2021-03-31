context('Home', () => {
  it('lists jobs', () => {
    cy.intercept('GET', '/api/jobs', { fixture: 'jobs.json' })
    cy.visit('/');
  });
})
