import { getElementByDataId } from "../utils";

context('Home', () => {
  it('lists jobs', () => {
    cy.intercept('GET', '/api/jobs', { fixture: 'jobs.json' });
    cy.visit('/');

    getElementByDataId('list-item-title').should('contain', 'Staff Software Engineer, Data Platform');
    getElementByDataId('list-item-details').should('contain', 'CircleCI - remote');
  });

  it('lists jobs on search', () => {
    cy.visit('/');

    cy.intercept('GET', '/api/jobs/?search=developer', { fixture: 'search.json' });

    getElementByDataId('search-input').type('developer');
    getElementByDataId('search-button').click();

    getElementByDataId('list-item-title').should('contain', 'Frontend Developer');
    getElementByDataId('list-item-details').should('contain', 'CircleCI - remote');
  });

  it.only('clears list on search clear button click', () => {
    cy.intercept('GET', '/api/jobs', { fixture: 'jobs.json' });
    cy.visit('/');

    cy.intercept('GET', '/api/jobs/?search=developer', { fixture: 'search.json' });

    getElementByDataId('search-input').type('developer');
    getElementByDataId('search-button').click();

    cy.intercept('GET', '/api/jobs', { fixture: 'jobs.json' });
    getElementByDataId('search-reset-button').click();

    getElementByDataId('list-item-title').should('contain', 'Staff Software Engineer, Data Platform');
    getElementByDataId('list-item-details').should('contain', 'CircleCI - remote');
  })
});
