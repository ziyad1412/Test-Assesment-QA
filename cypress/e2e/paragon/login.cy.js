// <reference types="cypress" />
describe("Test Automation Register", () => {
  // Test Login
  it("Submit data via login", () => {
    //kunjungi website
    cy.visit("https://recruitment-staging-queenbee.paradev.io/login");
    cy.get('svg[style="cursor: pointer;"]').click({ force: true });
    cy.get("#page-login__tabs-email").click();
    cy.get('[name="email"]').type("ziyad@gmail.com");
    cy.get('[name="password"]').type("Ziyad.123");
    cy.get("#page-login__button-login").click();
  });
});
