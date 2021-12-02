// testing hero title works
Cypress.Commands.add("testHeroTitle", (heroTitle) => {
  cy.get("[data-cy=homePageTitle]")
    .as("homePageTitle")
    .should("contain", `${heroTitle}`);
});

// testing hero description works
Cypress.Commands.add("testHeroDescription", (heroDesc) => {
  cy.get("[data-cy=homePageDescription]")
    .as("homePageDescription")
    .should("contain", `${heroDesc}`);
});

// testing categories works
Cypress.Commands.add("testCategories", (category) => {
  /*
  cy.get("[data-cy=categoryName]")
    .as(`${category}`)
    .contains(`${category}`)
    .should("exist");
*/

  cy.contains(`${category}`).as(`${category}`).should("exist");
});

// test course name works
Cypress.Commands.add("testCourseName", (course) => {
  /*
  cy.get("[data-cy=courseLink]")
    .as(`${course.courseName}`)
    .contains(`${course.courseName}`)
    .should("exist");
*/

  cy.contains(`${course.courseName}`)
    .as(`${course.courseName}`)
    .should("exist");
});

// check course description
Cypress.Commands.add("checkCourseDescription", (course) => {
  /*
  cy.get("[data-cy=courseDescription]")
    .as("courseDescription")
    .contains(`${course.courseDesc}`)
    .should("exist");
*/

  cy.contains(`${course.courseDesc}`)
    .as(`${course.courseName} Description`)
    .should("exist");
});
