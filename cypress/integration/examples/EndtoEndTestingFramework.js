

describe("end to end ecommerce test suites", function () {

    before(function(){
        // runs once before all tests in this block
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
  it("Submit Order", function () {
    // If particular test case or step take more time then instead of define global you can define for particular that test case only
    Cypress.config('defaultCommandTimeout',7000)
    //const productName = "Nokia Edge";
    var sumofValue = 0;
    cy.visit(Cypress.env('url')+"/loginpagePractise/");
    cy.get("#username").type(this.data.username);
    cy.get("#password").type(this.data.password);
    cy.contains("Sign In").click();
    cy.contains("Shop Name").should("be.visible");
    cy.get("app-card").should("have.length", 4);
    cy.get("app-card")
      .filter(`:contains("${this.data.productName}")`)
      .then(($el) => {
        cy.wrap($el).should("have.length", 1);
        cy.wrap($el).contains("button", "Add").click();
      });
    cy.get("app-card").eq(0).contains("button", "Add").click();
    cy.contains("a", "Checkout").click();
    cy.get("tr td:nth-child(4) strong")
      .each(($el) => {
        //
        sumofValue += Number($el.text().split(" ")[1].trim());
      })
      .then(function () {
        expect(sumofValue).to.be.lessThan(200000);
      });
      cy.contains("button", "Checkout").click();
      cy.get('#country').type("India")
      cy.get('.suggestions > ul > li > a').click()
      cy.get('.ng-untouched > .btn').click()
      cy.get(".alert").should('contain','Success')
  });
});
