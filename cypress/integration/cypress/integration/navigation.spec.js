describe("Navigation", () => {

  beforeEach(()=> {
    // cy.visit("http://localhost:8001/api/debug/reset")
    // cy.visit("http://localhost:8000/");
    cy.visit("/");
  })

  it("should visit root", () => {
    // cy.visit("/");
  });

  it("should navigate to Tuesday", () => {
    // cy.visit("/");
    // cy.get("li").contains('Tuesday').click()
    cy.contains("li", "Tuesday")
      .click()
      // .should("have.css", "background-color", "rgb(242, 242, 242)");
      .should('have.class', 'day-list__item--selected');
  });



});