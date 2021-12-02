/// <reference types="cypress" />

import Navigation_PO from "../../support/pageObject/explore/Navigation_PO.test";
import Hero_PO from "../../support/pageObject/explore/Hero_PO.test";
import Client_PO from "../../support/pageObject/explore/Clients_PO.test";
import Courses_PO from "../../support/pageObject/explore/Courses_PO.test";

describe("Testing explore page on stage", () => {
  const navigation_PO = new Navigation_PO();
  const hero_PO = new Hero_PO();
  const client_PO = new Client_PO();
  const courses_PO = new Courses_PO();

  before(() => {
    cy.viewport(1280, 800); // macbook-13
    cy.visit("/");
  });

  it("testing navigation bar ", () => {
    navigation_PO.verifyLogo();
    navigation_PO.verifyLinks();
  });

  it("testing hero section ", () => {
    hero_PO.verifyHomePage();
    hero_PO.verifyGetStartedButton();
  });

  it("testing client section ", () => {
    client_PO.verifyClientTexts();
    client_PO.verifyCustomers();
  });

  it("testing course trainer section ", () => {
    cy.get(".container h2").should("contain", "Course Trainers");
  });
});
