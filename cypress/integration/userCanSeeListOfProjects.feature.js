describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=projects-tab]").click();
  });

  it("displays the first project", () => {
    cy.get("[data-cy=project-1]").within(() => {
      cy.get("[data-cy=image]").should("exist");
      cy.get("[data-cy=card-header]").should("contain", "My First Website");
      cy.get("[data-cy=card-description]").should("contain", "This was my first project. Just put a random pic here to see if there will be a match made in 'cloud'.");
    });
  });

  it("displays the second project", () => {
    cy.get("[data-cy=project-2]").within(() => {
      cy.get("[data-cy=image]").should("exist");
      cy.get("[data-cy=card-header]").should("contain", "RvR");
      cy.get("[data-cy=card-description]").should("contain", "A Little simple ruby fighting game im currently working on the spare time.");
    });
  });

  it("displays the third project", () => {
    cy.get("[data-cy=project-3]").within(() => {
      cy.get("[data-cy=image]").should("exist");
      cy.get("[data-cy=card-header]").should("contain", "Library Challenge");
      cy.get("[data-cy=card-description]").should("contain", "This was our first challenge in the bootcamp.");
    });
  });
});