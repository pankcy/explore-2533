/*
	1. verify the logo
	2. verify the links Home, Blog, Hands-on Lab, CloudYuga, Github, Login, Signup
*/

class Navigation_PO {
  // verifyNavbar() {
  // 	cy.get("header").should("exist");
  // }

  verifyLogo() {
    cy.get("header  img[alt='Site Logo']").should("exist");
  }

  verifyLinks() {
    cy.get('header a[href="/explore"]').should("exist");
    cy.get('header a[href="/blog?page=1"]').should("exist");
    cy.get('header a[href="/hands_on_lab?page=1"]').should("exist");
    cy.get('header a[href="http://cloudyuga.guru"]').should("exist");
    cy.get('header a[href="https://github.com/cloudyuga"]').should("exist");
    cy.get('header a[href="/login"]').should("exist");
    cy.get('header a[href="/signup"]').should("exist");
  }
}

export default Navigation_PO;
