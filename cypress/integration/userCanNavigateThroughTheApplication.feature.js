describe("User can navigate to the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("to About tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy=about-tab]").click();
    });

    it("displays About Me header", () => {
      cy.get("[data-cy=about-header]").should("contain", "About Me");
    });

    it("displays components name in URL", () => {
      cy.url().should("contain", "about");
    });

    it("displays background image", () => {
      cy.get("[data-cy=about-bg]").should("exist");
    });

    it("don't displays home background image", () => {
      cy.get("[data-cy=home-bg]").should("not.exist");
    });

    it("don't displays projects background image", () => {
      cy.get("[data-cy=projects-bg]").should("not.exist");
    });

    it("dose not display My Projects header", () => {
      cy.get("[data-cy=projects-header]").should("not.exist");
    });

    it("dose not display Hello World", () => {
      cy.get("[data-cy=bg-container]").should("not.exist");
    });
  });
  
  describe("to My Projects tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy=projects-tab]").click();
    });

    it("displays My Projects header", () => {
      cy.get("[data-cy=projects-header]").should("contain", "My Projects");
    });

    it("displays components name in URL", () => {
      cy.url().should("contain", "projects");
    });

    it("displays background image", () => {
      cy.get("[data-cy=projects-bg]").should("exist");
    });

    it("don't displays about tabs background image", () => {
      cy.get("[data-cy=about-bg]").should("not.exist");
    });

    it("don't displays home tabs background image", () => {
      cy.get("[data-cy=home-bg]").should("not.exist");
    });

    it("dose not display My Projects header", () => {
      cy.get("[data-cy=about-header]").should("not.exist");
    });

    it("dose not display Hello World", () => {
      cy.get("[data-cy=bg-container]").should("not.exist");
    });
  });

  describe("back to My Portfolio/Hello tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy=about-tab]").click();
      cy.get("[data-cy=header]").click();
    });

    it("displays background image", () => {
      cy.get("[data-cy=home-bg]").should("exist");
    });

    it("displays correct URL", () => {
      cy.url()
        .should("not.contain", "projects")
        .and("not.contain", "about");
    });

    it("don't displays about background image", () => {
      cy.get("[data-cy=about-bg]").should("not.exist");
    });

    it("don't displays projects background image", () => {
      cy.get("[data-cy=projects-bg]").should("not.exist");
    });

    it("dose not display About Me header", () => {
      cy.get("[data-cy=about-header]").should("not.exist");
    });

    it("dose not display My Projects header", () => {
      cy.get("[data-cy=projects-header]").should("not.exist");
    });
  });
});