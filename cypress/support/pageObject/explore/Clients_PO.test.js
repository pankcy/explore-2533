/*
    1. verify My Happy Clients text
    2. Verify Customer2 and Customer 1
*/
class Client_PO {
  verifyClientTexts() {
    cy.get(".py-10").should("contain", "My Happy Clients");
  }

  verifyCustomers() {
    cy.get(".py-10 img[alt='Customer 2'] ").should("exist");
    cy.get(".py-10 img[alt='Customer 1'] ").should("exist");
  }
}

export default Client_PO;
