describe("Cypress API testing ", function(){
   
    it("Validate API response", function(){
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', 
            {
                "name":"Learn Appium Automation with JAVA",
                "isbn":"bcgg555",
                "aisle":"22s7",
                "author":"John Foe"
            }
        ).then(
            (response) => {
              // response.body is automatically serialized into JSON
              expect(response.body).to.have.property('Msg', 'successfully added') // true
            expect(response.status).to.eq(200)
            }
          )
    })
})