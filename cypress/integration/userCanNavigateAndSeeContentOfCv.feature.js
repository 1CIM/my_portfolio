describe("User can navigate to cv and see content", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=cv-tab]").click();
  });
  
  it("displays components name in URL", () => {
    cy.url().should("contain", "cv")
  });

  it("displays cv header", () => {
    cy.get("[data-cy=cv-tab]").should("contain", "CV");
  });

  it("displays job experiences", () => {
    cy.get("[data-cy=job-xp]")
    .should("contain", "Tinsmith, Bartender, Waiter");
  });

  it("displays previous education", () => {
    cy.get("[data-cy=prev-educ]")
    .should("contain", "Electrical automation, Bartender & Waiter, Sommelier step 1, Korean");
  });

  it("displays background image", () => {
    cy.get("[data-cy=cv-bg]").should("exist");
  });

  it("dose not display my portfolio background image", () => {
    cy.get("[data-cy=home-bg]").should("not.exist");
  });

});