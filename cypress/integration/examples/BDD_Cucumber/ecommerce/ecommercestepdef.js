import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on ecommerce page", () => {
  cy.visit(Cypress.env("url") + "/loginpagePractise/");
});

When("I login to the application",function () {
  cy.get("#username").type(this.data.username);
  cy.get("#password").type(this.data.password);
  cy.contains("Sign In").click();
  cy.contains("Shop Name").should("be.visible");
  cy.get("app-card").should("have.length", 4);
});

When('I login to the application portal',function(dataTable){
  cy.get("#username").type(dataTable.rawTable[1][0]);
  cy.get("#password").type(dataTable.rawTable[1][1]);
  cy.contains("Sign In").click();
  cy.contains("Shop Name").should("be.visible");
  cy.get("app-card").should("have.length", 4);
})

When("I add items to cart and checkout", function() {
  cy.get("app-card")
    .filter(`:contains("${this.data.productName}")`)
    .then(($el) => {
      cy.wrap($el).should("have.length", 1);
      cy.wrap($el).contains("button", "Add").click();
    });
  cy.get("app-card").eq(0).contains("button", "Add").click();
  cy.contains("a", "Checkout").click();
});

When("Validate the total price limit", () => {
  var sumofValue = 0;
  cy.get("tr td:nth-child(4) strong")
    .each(($el) => {
      //
      sumofValue += Number($el.text().split(" ")[1].trim());
    })
    .then(function () {
      expect(sumofValue).to.be.lessThan(200000);
    });
});

Then("select the country submit and verify thankyou", () => {
  cy.contains("button", "Checkout").click();
  cy.get("#country").type("India");
  cy.get(".suggestions > ul > li > a").click();
  cy.get(".ng-untouched > .btn").click();
  cy.get(".alert").should("contain", "Success");
});
