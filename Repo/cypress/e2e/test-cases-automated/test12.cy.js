/// <reference types="cypress" />
// Load locators from JSON file
const locators = require('../../fixtures/locators.json');
const products = require('../../fixtures/products.json');

describe('Automation Exercise Test 12', () => {
    it('should navigate to the home page', () => {
        cy.visit(locators.url);
        cy.get(locators.homePageBody).should('be.visible');
        cy.get(locators.productsButton).click();
        cy.get(locators.firstProduct).first().trigger('mouseover');
        cy.get(locators.firstProduct).first().click();
        cy.get(locators.productAddedSuccessButton).click();
        cy.get(locators.secondProduct).first().trigger('mouseover');
        cy.get(locators.secondProduct).first().click();
        cy.get(locators.viewCartButton).click();
        cy.url().should('include', locators.cartPageUrl);
        cy.get(locators.cartItems).should('have.length', 2);
        cy.get(locators.cartProducts).each(($el) => {
            cy.wrap($el).find('.cart_price').should('be.visible');
            cy.wrap($el).find('.cart_quantity').should('be.visible');
            cy.wrap($el).find('.cart_total').should('be.visible');
        });

        cy.get(locators.firstItem).find('.cart_price').contains(products.firstProduct.Price);
        cy.get(locators.firstItem).find('.cart_quantity').contains(products.firstProduct.Quantity);
        cy.get(locators.firstItem).find('.cart_total_price').contains(products.firstProduct.TotalPrice);
        cy.get(locators.secondItem).find('.cart_price').contains(products.secondProduct.Price);
        cy.get(locators.secondItem).find('.cart_quantity').contains(products.secondProduct.Quantity);
        cy.get(locators.secondItem).find('.cart_total_price').contains(products.secondProduct.TotalPrice);
    });
});
