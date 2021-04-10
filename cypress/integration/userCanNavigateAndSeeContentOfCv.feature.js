describe("User can navigate to cv and see content", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=cv-tab]").click();
  });

  it("displays cv header", () => {
    cy.get("[data-cy=cv-tab]").should("contain", "CV");
  });
});