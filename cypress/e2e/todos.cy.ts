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
  it("should edit a todo item", () => {
    cy.get("input[placeholder='Enter todo task']").type("New Todo Item{enter}");
    cy.get("li").last().find("span").click().get("input").last().type("_edit");
    cy.get('button:contains("Save")').click();
    cy.get("li").last().should("contain.text", "New Todo Item_edit");
  });
  it("should delete a todo item", () => {
    cy.get("input[placeholder='Enter todo task']").type("New Todo Item{enter}");
    cy.get("li").last().find("span").click();
    cy.get('button:contains("Delete")').last().click();
    cy.get("li").last().should("not.contain.text", "New Todo Item");
  });
  it("should delete all todo items", () => {
    cy.get("input[placeholder='Enter todo task']").type("New Todo Item{enter}");
    cy.get("input[placeholder='Enter todo task']").type(
      "Another Todo Item{enter}"
    );
    cy.get("button:contains('Delete All')").click();
    cy.get("li").should("have.length", 0);
  });
  it("should load default todos", () => {
    cy.get("button:contains('Delete All')").click();
    cy.get("button:contains('Load Default Todos')").click();
    cy.get("li").should("have.length.greaterThan", 0);
  });
});
