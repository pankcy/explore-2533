class NL_Hero_PO {
  testHeroTitle(title) {
    cy.testHeroTitle(title);

    /*
    Cy.VerifyHomepageTitle("Pankaj");
    cy.get("[data-cy=homePageTitle]").as("homePageTitle").should("exist");
    */
  }

  testHeroDescription(description) {
    cy.testHeroDescription(description);

    /*
    cy.get("[data-cy=homePageDescription]")
      .as("homePageDescription")
      .should("exist");
    */
  }

  verifyAllCoursesPath() {
    cy.get("[data-cy=allCoursesPath]").as("allCoursesPath").should("exist");
  }
}

export default NL_Hero_PO;
