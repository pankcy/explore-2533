class NL_ContactusPopup {
  checkContactUsPopup() {
    cy.get("[data-cy=ContactUsPopup]").as("contactusPopup").should("exist");
  }
}

export default NL_ContactusPopup;
