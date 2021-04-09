describe("User can navigate to the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("to About tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
    });

    it("displays About Me header", () => {
      cy.get("#about-header").should("contain", "About Me");
    });

    it("displays components name in URL", () => {
      cy.url().should("contain", "about");
    });

    it("dose not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });

    it("dose not display Hello World", () => {
      cy.get("#hello").should("not.exist");
    });
  });
  
  describe("to My Projects tab and it", () => {
    beforeEach(() => {
      cy.get("#projects-tab").click();
    });

    it("displays My Projects header", () => {
      cy.get("#projects-header").should("contain", "My Projects");
    });

    it("displays components name in URL", () => {
      cy.url().should("contain", "projects");
    });

    it("dose not display My Projects header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("dose not display Hello World", () => {
      cy.get("#hello").should("not.exist");
    });
  });

  describe("back to My Portfolio/Hello tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
      cy.get("#header").click();
    });

    it("displays background image", () => {
      cy.get("#background").should("exist");
    });

    it("displays correct URL", () => {
      cy.url()
        .should("not.contain", "projects")
        .and("not.contain", "about");
    });

    it("dose not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("dose not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });
  });
});