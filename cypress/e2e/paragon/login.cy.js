// <reference types="cypress" />
describe("Test Automation Register", () => {
  // Test Login
  it("Submit data via login", () => {
    // 1. Kunjungi halaman login
    cy.visit("https://recruitment-staging-queenbee.paradev.io/login");

    // 2. Klik ikon untuk menutup popup atau modal jika ada
    cy.get('svg[style="cursor: pointer;"]').click({ force: true });

    // 3. Pilih tab login dengan email
    cy.get("#page-login__tabs-email").click();

    // 4. Masukkan email dan password untuk login
    cy.get('[name="email"]').type("ziyad@gmail.com");
    cy.get('[name="password"]').type("Ziyad.123");

    // 5. Klik tombol login
    cy.get("#page-login__button-login").click();
  });
});
