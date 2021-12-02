class NL_Navigation_PO {
  verifyLogo() {
    cy.get("[data-cy=siteLogo]").as("siteLogo").should("exist");
  }

  verifyLinks() {
    cy.get("[data-cy=navLinks] a[href='/explore']")
      .as("homePage")
      .should("exist");
    cy.get("[data-cy=navLinks] a[href='/blog?page=1']")
      .as("blog")
      .should("exist");
    cy.get("[data-cy=navLinks] a[href='/hands_on_lab?page=1']")
      .as("handsOnLab")
      .should("exist");
    cy.get("[data-cy=navLinks] a[href='/login']")
      .as("LoginButton")
      .should("exist");
    cy.get("[data-cy=navLinks] a[href='/signup']")
      .as("sigUpButton")
      .should("exist");
  }
}

export default NL_Navigation_PO;
