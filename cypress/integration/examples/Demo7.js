describe("Handle mohuse hover elment", function(){

    it("Mouse hover menu case", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Cypress doesn't have function to handle mouse hover menu but through jquery show() method we can do it
        cy.get('#mousehover').invoke('show')
        // Perform forceflly click on hidden element add {force: true} in click method. you can also handle through jquery as well
        cy.contains('Top').click({force: true})
        cy.url().should("include",'top')

        cy.contains('Reload').click({force: true})
        
        })
    })