/// <reference types="cypress" />

describe("Test description", () => {
  before(() => {
    cy.visit("/blog");
  });

  it("Test block", () => {
    // cy.contains("Home").should("exist");
  });
});
