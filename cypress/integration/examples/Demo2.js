describe("My first testsuite", function(){

    it("My first test case", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(3000)
        

        
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
       
        cy.get('.products').find('.product').each(($el,index,$list) =>{
            const vegName = $el.find('h4.product-name').text()
            if(vegName.includes('Cashews'))
            {
                //$el.find('button').click()  Upgraded version below
                cy.wrap($el).find('button').click()
            }

        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


      
    
    })
   
})