describe("Appointments", () => {

  beforeEach(()=> {
    // Reset the database values
    cy.request('http://localhost:8001/api/debug/reset')
    // Visits the root of our web server
    cy.visit("/");
    cy.contains("Monday");
  })

  it("should visit root", () => {
  });

  it('should book an interview', () => {
    
    cy.contains('Monday');
    // Clicks on the "Add" button in the second appointment
    cy.get("[alt=Add]")
    .first()
    .click();

    // Enters their name
    // cy.get("Form").find('Input')
    cy.get("[data-testid=student-name-input]")
    .type("Lydia Miller-Jones", {delay:100})

    // Chooses an interviewer
    cy.get('[alt="Sylvia Palmer"]')
    .click();

    // Clicks the save button
    cy.contains('Save')
    .click()

    // Sees the booked appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");

  });

  it('should edit an interview', () => {
    // Clicks the edit button for the existing appointment
    cy.get('[alt="Edit"]').first().click({ force: true })
    // Changes the name and interviewer
    cy.get("[data-testid=student-name-input]")
    .clear().type('Vince Emond', {delay:100})

    cy.get('[alt="Tori Malcolm"]').click()

    // Clicks the save button
    cy.contains('Save')
    .click()

    // Sees the edit to the appointment
    cy.contains(".appointment__card--show", "Vince Emond");
    cy.contains(".appointment__card--show", "Tori Malcolm");

  });

  it('should cancel an interview', () => {
    // Clicks the delete button for the existing appointment
    cy.get('[alt=Delete]').click({force: true});
    // Clicks the confirm button
    cy.get(".button").contains('Confirm').click();
    // Sees that the appointment slot is empty
    cy.contains(".appointment__card--show", "Archie Cohen")
    .should("not.exist");

  });

});