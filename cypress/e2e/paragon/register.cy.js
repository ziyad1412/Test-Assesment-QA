// <reference types="cypress" />
describe("Test Automation Register", () => {
  // Test Register
  it("Submit data via form register", () => {
    // Kunjungi halaman register
    cy.visit("https://recruitment-staging-queenbee.paradev.io/register");

    // Klik ikon close untuk menutup modal atau pop-up (dengan force untuk mengabaikan validasi lainnya)
    cy.get('svg[style="cursor: pointer;"]').click({ force: true });

    // Isi form dengan data pendaftaran
    cy.get('[name="name"]').type("Iriana"); // Isi nama
    cy.get('[name="phone"]').type("83293475896"); // Isi nomor telepon
    cy.get('[name="email"]').type("iria123@gmail.com"); // Isi email
    cy.get('[name="password"]').type("Iriana.123"); // Isi password

    // Klik tombol "Daftar" untuk mengirim form
    cy.get(":nth-child(3) > .chakra-button").click();

    // Klik tombol untuk verifikasi via WhatsApp
    cy.get("#chakra-modal--body-2 > .chakra-button").click();

    // Masukkan OTP yang diterima
    const otp = ["1", "2", "3", "4", "5", "6"]; // OTP yang akan dimasukkan
    otp.forEach((digit, index) => {
      cy.get(`#pin-input-10-${index}`).type(digit); // Loop melalui input OTP dan masukkan setiap digit
    });

    // Klik tombol "Verifikasi" setelah OTP dimasukkan
    cy.get(".css-15icixv > .chakra-button").click();

    // Klik tombol "Lanjutkan" untuk melanjutkan proses setelah verifikasi berhasil
    cy.get(".styles_verifSuccess-container__8mTVo > .chakra-button").click();
  });
});
