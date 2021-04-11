describe("User can navigate to contact form and use it", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=contact-tab]").click();
  });

  it("displays the content name in URL", () => {
    cy.url().should("contain", "contact");
  });

  it("displays Contact in header", () => {
    cy.get("[data-cy=contact-tab]").should("contain", "Contact");
  });

  it("displays contact form", () => {
    cy.get("[data-cy=contact-form]").should("exist")
  });

  describe("User can send message", () => {

    it("test the contact inputs", () => {
      cy.get("[data-cy=name-input]").type("Kim");
      cy.get("[data-cy=email-input]").type("kim.haaga@live.se");
      cy.get("[data-cy=msg-input]").type("Hello World");
      cy.get("[data-cy=submit-btn]").click();
    });

    it("displays success message", () => {
      cy.get("[cy.get=submit-success]")
      .should("contain", "Thanks for your message!");
    });
  });
});