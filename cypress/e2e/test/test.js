import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I visit baseurl', () => {
  cy.visit('/');
});

Then('I hit an error', () => {
  cy.get('.block-editor');
});
