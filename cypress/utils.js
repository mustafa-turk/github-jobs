export function getElementByDataId(id) {
  return cy.get(`[data-cy=${id}]`);
}