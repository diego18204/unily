/// <reference types="cypress" />
// Load locators from JSON file
const locators = require('../../fixtures/locators.json');

describe('Automation Exercise Test 9', () => {
    it('should navigate to the home page', () => {
        cy.visit(locators.url);
        cy.get(locators.homePageBody).should('be.visible');
        cy.get(locators.productsButton).click();
        cy.url().should('include', locators.productsPageUrl);
        cy.get(locators.productsSection).should('be.visible');
        cy.get(locators.searchInput).type('Dress');
        cy.get(locators.searchButton).click();
        cy.get(locators.searchedProductsTitle).contains('Searched Products').should('be.visible');
        cy.get(locators.searchedProductsContainer).should('be.visible');
    });
});
