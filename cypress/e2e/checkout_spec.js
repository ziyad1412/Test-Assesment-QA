describe("Checkout Test", () => {
  it("should complete the checkout process", () => {
    cy.visit("https://recruitment-staging-queenbee.paradev.io/login");
    // Fill in the login form
    cy.get('input[name="name"]').type("Abdurrahman");
    cy.get('input[name="password"]').type("Ziyad.123");
    // Click the login button
    cy.get('button[type="submit"]').click();

    // Check if the user is redirected to the dashboard
    cy.url().should("include", "/");

    // click product collagen drink and add to cart
    cy.contains("Collagen Drink").click();
    cy.get("button")
      .contains("Tambah ke Keranjang")
      .should("be.visible")
      .click();
    // click beli sekarang
    cy.get("button").contains("Beli Sekarang").should("be.visible").click();
    // isi alamat pengiriman, label alamat, nama penerima, no hp, provinsi, kota, kecamatan, kelurahan, alamat lengkap
    cy.get('input[name="label"]').type("Rumah");
    cy.get('input[name="recipient_name"]').type("Ziyad");
    cy.get('input[name="recipient_phone"]').type("08123456789");
    cy.get('input[name="province"]').type("Jawa Barat");
    cy.get('input[name="city"]').type("Bandung");
    cy.get('input[name="district"]').type("Cidadap");
    cy.get('input[name="sub_district"]').type("Cidadap");
    cy.get('input[name="address"]').type("Jl. Cidadap No. 123");
    // click simpan alamat
    cy.get("button").contains("Simpan Alamat").should("be.visible").click();
    // pilih jasa pengiriman jne
    cy.get('input[name="shipping_service"]').check("jne");
    // click kode vocher QRP-TEST-123
    cy.get('input[name="voucher_code"]').type("QRP-TEST-123");
    // click apply
    cy.get("button").contains("Cari").should("be.visible").click();
    // check if promo code applied
    cy.get(".text-success").should(
      "contain",
      "Promo code applied successfully"
    );
    // check if promo code not applied
    cy.get(".text-danger").should("not.exist");
    // klik pilih pembayaran
    cy.get("button").contains("Pilih Pembayaran").should("be.visible").click();
    // pilih bank transfer
    cy.get('input[name="payment_method"]').check("bank_transfer");
    //berhasil
    cy.get(".alert-success").should("contain", "Berhasil melakukan pembayaran");
  });
});
