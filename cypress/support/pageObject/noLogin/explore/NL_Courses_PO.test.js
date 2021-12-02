class NL_Courses_PO {
  // properites related to categories are kept here while common porperties are kept on coures function
  checkCategorizedCourses(category) {
    cy.testCategories(category);
  }

  checkCourseTitleAndDesc(course) {
    cy.testCourseName(course);
    cy.checkCourseDescription(course);
  }

  checkCourses() {
    cy.get("[data-cy=coursesHeader]").as("coursesHeader").should("exist");
    // cy.get("[data-cy=courses]").as("courses").should("exist");
    cy.get("[data-cy=courseCard]").as("courseCarad").should("exist");
    cy.get("[data-cy=courseThumbnail]").as("courseThumbnail").should("exist");
    cy.get("[data-cy=courseTags]").as("courseTags").should("exist");
    cy.get("[data-cy=allCourses]").as("allCoursesLink").should("exist");
  }

  checkFeaturedCoursesCount(courseCount) {
    cy.get("[data-cy=featuredCourses] > div > [data-cy=courseCard]").should(
      "have.length",
      `${courseCount}`
    );
  }
}

export default NL_Courses_PO;
