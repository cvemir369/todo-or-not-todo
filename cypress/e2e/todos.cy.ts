describe("todo items", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("should add a new todo item", () => {
    cy.get("input[placeholder='Enter todo task']").type("New Todo Item{enter}");
    cy.get("li").last().should("exist");
    cy.get("li").last().should("contain.text", "New Todo Item");
  });
  it("should mark a todo item as completed", () => {
    cy.get("input[placeholder='Enter todo task']").type("New Todo Item{enter}");
    cy.get("li").last().find('button[title="Mark as complete"]').click();
    cy.get("li")
      .last()
      .find("button")
      .should("have.attr", "title", "Mark as incomplete");
  });
});
