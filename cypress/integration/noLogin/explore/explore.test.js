/// <reference types="cypress" />

import NL_Navigation_PO from "../../../support/pageObject/noLogin/explore/NL_Navigation_PO.test";
import NL_Hero_PO from "../../../support/pageObject/noLogin/explore/NL_Hero_PO.test";
import NL_Footer_PO from "../../../support/pageObject/noLogin/explore/NL_Footer_PO.test";
import NL_ContactusPopup from "../../../support/pageObject/noLogin/explore/NL_ContactusPopup.test";

describe("Testing explroe page without login", () => {
  const navigation_PO = new NL_Navigation_PO();
  const hero_PO = new NL_Hero_PO();
  const footer_PO = new NL_Footer_PO();
  const contactusPopup = new NL_ContactusPopup();

  // using before since we are testing only single page and are not navigating to other pages
  before(() => {
    cy.visit("/");
  });

  it("Testing Navigation Bar", () => {
    navigation_PO.verifyLogo();
    navigation_PO.verifyLinks();
  });

  it("Testing Hero Section", () => {
    hero_PO.verifyhomePageTitle();
    hero_PO.verifyHomePageDescription();
    hero_PO.verifyAllCoursesPath();
  });

  it("Testing Footer Section", () => {
    footer_PO.checkQuickLinks();
    footer_PO.checkContactUs();
    footer_PO.checkNewsLetter();
    footer_PO.checkFormInput();
    footer_PO.checkFormSubmitBtn();
    footer_PO.checkCopyrightParagraph();
  });

  it.only("Testing ContactUs PopUp", () => {
    contactusPopup.checkContactUsPopup();
  });
});
