describe("My first testsuite", function(){

    it("My first test case", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // handel checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])


        //static Dropdown
        cy.get('select').select('option2').should('have.value','option2')

        // Dynamic Dropdown

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()=="India"){
            cy.wrap($el).click()
            }

        })
        cy.get('#autocomplete').should('have.value','India')

        // visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio button
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio2"]').check()
        cy.get('[value="radio3"]').check().should('be.checked')

    })
})