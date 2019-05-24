it('delayed response brings state out of sync', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/brouwers',
      status: 200,
      response: 'fixture:brouwers.json'
    });
    cy.route({
      delay: 2000,
      method: 'GET',
      url: '/api/recipes/?name=ba',
      status: 200,
      response: 'fixture:BabAdmin.json'
    }).as('getBAbrouwers');
    cy.route({
      method: 'GET',
      url: '/api/recipes/?name=br',
      status: 200,
      response: 'fixture:brouwer1.json'
    }).as('getBRbrouwers');

    cy.visit('/lijst');
  cy.get('[data-cy=filterInput]').type('ba');
  cy.wait(300);
  cy.get('[data-cy=filterInput]').type('{backspace}{backspace}br');
  cy.wait(['@getBAbrouwers', '@getBRbrouwers']);
  cy.get('[data-cy=recipeCard]').should('have.length', 1);
  cy.get('[data-cy=recipe-title]').should('contain', 'Lasagna');

  
  cy.get('[data-cy=bierCard]').should('have.length', 1);
  cy.get('[data-cy=brouwer-naam]').should('contain', 'Lasagna');
  });