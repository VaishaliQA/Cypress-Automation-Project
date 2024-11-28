describe("Cypress Intercept", function(){
   
    it("Modify API response using Intercept", function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>
        {
            req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Pandya'

            req.continue((res)=>{
                expect(res.statusCode).equal(403)

            })
        }).as('dummyURL')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyURL')

    })
})