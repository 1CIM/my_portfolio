describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "My First Website");
      cy.get(".description").should("contain", "This was my first project. Just put a random pic here to see if there will be a match made in 'cloud'.");
    });
  });

  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "RvR");
      cy.get(".description").should("contain", "A Little simple ruby fighting game im currently working on the spare time.");
    });
  });

  it("displays the third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Library Challenge");
      cy.get(".description").should("contain", "This was our first challenge in the bootcamp.");
    });
  });
});