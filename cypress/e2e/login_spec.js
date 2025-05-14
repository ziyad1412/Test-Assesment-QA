describe("Login Test", () => {
  // should allow the user to register and login
  it("should allow the user to register and login", () => {
    cy.visit("https://recruitment-staging-queenbee.paradev.io/register ");
    // Fill in the registration form
    cy.get('input[name="name"]').type("Abdurrahman");
    cy.get('input[name="whatsapp"]').type("08123456789");
    cy.get('input[name="email"]').type("ziyad@gmail.com");
    cy.get('input[name="password"]').type("Ziyad.123");
    // Click the register button
    cy.get('button[type="submit"]').click();
    // Code Verification
    cy.get('input[name="verification_code"]').type("123456");
    cy.get('button[type="submit"]').click();

    // Check if the user is redirected to the dashboard
    cy.url().should("include", "/");
  });
});
