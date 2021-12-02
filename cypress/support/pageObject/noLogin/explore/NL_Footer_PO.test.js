class NL_Footer_PO {
  checkQuickLinks() {
    cy.get("[data-cy=quickLinks]").as("quickLinks").should("exist");
  }

  checkContactUs() {
    cy.get("[data-cy=contactUs]").as("contactUs").should("exist");
  }

  checkJoinOurTeam() {
    cy.get("[data-cy=joinOurTeam]").as("joinOurTeam").should("exist");
  }

  checkNewsLetter() {
    cy.get("[data-cy=newsLetter]").as("newsLetter").should("exist");
  }

  checkFormInput() {
    cy.get("[data-cy=formInput]").as("formInput").should("exist");
  }

  checkFormSubmitBtn() {
    cy.get("[data-cy=formSubmitBtn]").as("formSubmitBtn").should("exist");
  }

  checkCopyrightParagraph() {
    cy.get("[data-cy=copyrightParagraph]")
      .as("copyrightParagraph")
      .should("exist");
  }
}

export default NL_Footer_PO;
