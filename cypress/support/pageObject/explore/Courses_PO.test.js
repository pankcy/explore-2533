/*
	1. verify courses header and title on both basic, devops and quizes secations
	2. verify all quizes link
		-- no id or class for the verification of the card for the course neither for the basic nor for devops
		-- third of basic course has batch of docker other don't have
*/
class Courses_PO {
  // verify courses section
  verifyCoursesHeader() {
    cy.get("#courses h2").contains("basic").should("exist");
  }

  // verify courses title and description
  verifyCoursesTitleAndDescription() {
    cy.verifyCourseTitleAndDescription(
      "hemanth course ( only content without vm)",
      "hemanth course to test data of a normal course"
    );

    cy.verifyCourseTitleAndDescription(
      "container course hr",
      "container course"
    );

    cy.verifyCourseTitleAndDescription(
      "Pankaj course 1",
      "This course is all about docker foundation"
    );

    cy.verifyCourseTitleAndDescription(
      "Multiple choice question course",
      "Multiple choice question course description"
    );

    cy.verifyCourseTitleAndDescription(
      "CKA/CKAD Mock Exam 2 {staging}",
      "CKA/CKAD Mock Exam 2 description"
    );
  }

  verifyQuiz() {
    // verify quiz section header
    cy.get("#all-courses").should("contain", "Quizzes");

    // verify title and description of quiz
    cy.get(".quizzes h3").should("exist");
    cy.get(".quizzes p").should("exist");

    // verify link for all quizes
    cy.get('.container a[href="/all_quizzes"]').should("exist");
  }
}

export default Courses_PO;
