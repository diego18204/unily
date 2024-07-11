/// <reference types="cypress" />
// Load locators from JSON file
const locators = require('../../fixtures/locators.json');

describe('Automation Exercise Test 13', () => {
    it('should navigate to the home page', () => {
        cy.visit(locators.url);
        cy.get(locators.homePageBody).should('be.visible');
        cy.get(locators.productDetailsButton).first().click();
        cy.get(locators.productDetailPage).should('be.visible');
        cy.get(locators.quantityInput).clear().type('4');
        cy.get(locators.addToCartButton).click();
        cy.get(locators.productAddedSuccessButton).click();
        cy.get(locators.viewCartButton).click();
        cy.url().should('include', locators.cartPageUrl);
        cy.get(locators.cartItems).should('have.length', 1);
        cy.get(locators.cartQuantity).first().contains('4');
    });
});
