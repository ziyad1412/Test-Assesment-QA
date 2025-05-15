// <reference types="cypress" />

describe("Test Automation Checkout", () => {
  // Test Login
  it("Checkout Product with voucher", () => {
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

    // 6. Tunggu 3 detik sebelum melanjutkan ke langkah berikutnya
    cy.wait(3000);

    // 7. Klik menu untuk membuka daftar produk
    cy.get(".icon-nav > ul > :nth-child(1)").click();

    // 8. Ketikkan kata kunci 'Collagen' di input pencarian
    cy.get(".chakra-input").type("Collagen");

    // 9. Tekan enter untuk melakukan pencarian produk
    cy.get(".chakra-input").type("{enter}");

    // 10. Tunggu beberapa detik agar hasil pencarian muncul
    cy.wait(5000);

    // 11. Klik pada produk yang sesuai (Fitclair Collagen Drink)
    cy.get("h2.styles_card-body-h2-grid__lzKGQ")
      .contains("Fitclair Collagen Drink")
      .click({ force: true });

    // 12. Tunggu beberapa detik untuk memastikan produk telah dipilih
    cy.wait(5000);

    // 13. Klik tombol penambah jumlah produk sebanyak 8 kali
    for (let i = 0; i < 8; i++) {
      cy.get("#productDetail-button-counter")
        .find("svg:nth-child(3)") // Pilih tombol penambah jumlah produk
        .should("be.visible") // Pastikan elemen terlihat
        .click({ force: true }); // Klik dengan force untuk mengabaikan animasi
    }

    // 14. Klik tombol untuk menambahkan produk ke keranjang
    cy.get(
      "#productDetail-button-cart > .productDetail_productDetail-btn-text__8_5iu"
    ).click({ force: true });

    // 15. Klik menu keranjang untuk melihat produk yang ditambahkan
    cy.get(".HeaderQbee_total-cart__Acy0A").click();

    // 16. Klik tombol untuk melanjutkan ke checkout
    cy.get(".css-1vd84sn > .chakra-button").click();

    // 17. Klik tombol beli sekarang
    cy.get(".css-sc8lxn").click();

    // 18. Klik tombol untuk memilih layanan pengiriman
    cy.get(".styles_pickDelivery-upper__V_Y4r").click();

    // 19. Pilih pengiriman biasa (Regular)
    cy.get(":nth-child(2) > .styles_regular-delivery-content__NySsb").click();

    // 20. Pilih layanan pengiriman JNE
    cy.get(":nth-child(1) > .pickCourier_courier-label__7rqUl").click();

    // 21. Klik untuk memasukkan kode promo
    cy.get(".style_promo-ticket-content__FBPEJ").click();

    // 22. Masukkan kode voucher promo
    cy.get(".chakra-input").type("QRP-TEST-123");

    // 23. Klik tombol untuk mencari promo
    cy.get(".style_input-promo-container__z9Pcp > .chakra-button").click();

    // 24. Klik tombol untuk menutup promo jika muncul
    cy.get('div[aria-label="Close button"]').find("svg").click({ force: true });

    // 25. Klik tombol untuk memilih metode pembayaran
    cy.get(".styles_checkout-total__4YPYF > .chakra-button").click();
  });
});
