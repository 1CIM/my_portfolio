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

    it("displays about background image", () => {
      cy.get("[data-cy=bg-container-2]").should("exist");
    });

    it("displays components name in URL", () => {
      cy.url().should("contain", "about");
    });

    it("dose not display My Projects header", () => {
      cy.get("[data-cy=projects-header]").should("not.exist");
    });

    it("dose not display home page background image", () => {
      cy.get("[data-cy=bg-container-1]").should("not.exist");
    });

    it("dose not display projects background image", () => {
      cy.get("[data-cy=bg-container-3]").should("not.exist");
    });
  });
  
  describe("to My Projects tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy=projects-tab]").click();
    });

    it("displays about background image", () => {
      cy.get("[data-cy=bg-container-3]").should("exist");
    });

    it("displays My Projects header", () => {
      cy.get("[data-cy=projects-header]").should("contain", "My Projects");
    });

    it("displays components name in URL", () => {
      cy.url().should("contain", "projects");
    });

    it("dose not display My Projects header", () => {
      cy.get("[data-cy=about-header]").should("not.exist");
    });

    it("dose not display home page background image", () => {
      cy.get("[data-cy=bg-container-1]").should("not.exist");
    });

    it("dose not display projects background image", () => {
      cy.get("[data-cy=bg-container-2]").should("not.exist");
    });
  });

  describe("back to My Portfolio/Hello tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy=about-tab]").click();
      cy.get("[data-cy=header]").click();
    });

    it("displays background image", () => {
      cy.get("[data-cy=bg-container-1]").should("exist");
    });

    it("displays correct URL", () => {
      cy.url()
        .should("not.contain", "projects")
        .and("not.contain", "about");
    });

    it("dose not display About Me header", () => {
      cy.get("[data-cy=about-header]").should("not.exist");
    });
    
    it("dose not display My Projects header", () => {
      cy.get("[data-cy=projects-header]").should("not.exist");
    });

    it("dose not display home page background image", () => {
      cy.get("[data-cy=bg-container-2]").should("not.exist");
    });

    it("dose not display projects background image", () => {
      cy.get("[data-cy=bg-container-3]").should("not.exist");
    });
  });
});