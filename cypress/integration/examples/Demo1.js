describe("My first testsuite", function(){

    it("My first test case", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(3000)
        // selenium get hit url in browser, cypress get acts like findelement of selenium
        cy.get('.product:visible').should('have.length',4)
       
        console.log("hello")
        cy.log("hi")

        // Parent child chaninning
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
       
        cy.log("test")

        // Giving one id multiple time use aliase instead of element name
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
       


        cy.get('.products').find('.product').each(($el,index,$list) =>{
            const vegName = $el.find('h4.product-name').text()
            if(vegName.includes('Cashews'))
            {
                //$el.find('button').click()  Upgraded version below
                cy.wrap($el).find('button').click()
            }

        })

        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
       
    
    })
    it("My second test case"),function(){
        cy.wait(3000)
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // This is handle by cypress so you no need to handle because all together.
        // This one is not work because text() is not child method of cypress. But this is jquery method.
        cy.get('.brand').text()

    //But if you write seperate command then you need to handle by yourself, cypress will not understand throw error
        const logo = cy.get('.brand')
        const val = logo.text()


    // you need to resolve by this code only    
    cy.get('.brand').then(function(logoel)
    {
       cy.log(logoel.text())
    })
    }
})