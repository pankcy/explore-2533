/// <reference types="cypress" />

import NL_Navigation_PO from "../../support/pageObject/noLogin/explore/NL_Navigation_PO.test";
import NL_Hero_PO from "../../support/pageObject/noLogin/explore/NL_Hero_PO.test";
import NL_Footer_PO from "../../support/pageObject/noLogin/explore/NL_Footer_PO.test";
import NL_ContactusPopup from "../../support/pageObject/noLogin/explore/NL_ContactusPopup.test";
import NL_Courses_PO from "../../support/pageObject/noLogin/explore/NL_Courses_PO.test";

describe("Testing explroe page without login", () => {
  const navigation_PO = new NL_Navigation_PO();
  const hero_PO = new NL_Hero_PO();
  const footer_PO = new NL_Footer_PO();
  const contactusPopup_PO = new NL_ContactusPopup();
  const courses_PO = new NL_Courses_PO();

  // using before since we are not navigating to other pages
  before(() => {
    cy.fixture("siteData").then((data) => {
      globalThis.heroData = data.hero;
      globalThis.coursesData = data.courses;
      globalThis.categories = data.categories;
    });

    cy.viewport(1280, 800); // macbook-13
    cy.visit("/explore");
  });

  it("Testing Navigation Bar", () => {
    navigation_PO.verifyLogo();
    navigation_PO.verifyLinks();
  });

  it("Testing Hero Section", () => {
    const { title, description } = globalThis.heroData;

    hero_PO.testHeroTitle(title);
    hero_PO.testHeroDescription(description);
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

  it("Testing Courses Section", () => {
    // const { course1, course2 } = globalThis.coursesData;
    // const { category1, category2 } = globalThis.categories;

    // test particular categories
    for (let key in globalThis.categories) {
      let categoryToTest = globalThis.categories[key];
      courses_PO.checkCategorizedCourses(categoryToTest);
      // courses_PO.checkCategorizedCourses(category2);
    }

    // test particular courses
    for (let key in globalThis.coursesData) {
      let courseToTest = globalThis.coursesData[key];
      courses_PO.checkCourseTitleAndDesc(courseToTest);
      // courses_PO.checkCourseTitleAndDesc(course2);
    }

    // test common properties
    courses_PO.checkCourses();

    // test course count on the featured course section
    courses_PO.checkFeaturedCoursesCount(6);
  });

  // testing contact us popup
  it("Testing ContactUs PopUp", () => {
    contactusPopup_PO.checkContactUsPopup();
  });
});
