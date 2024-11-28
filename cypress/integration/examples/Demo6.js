describe("Validate data from Tabel Cell", function(){

    it("Data Table Cell", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($el, index,$list)=>{
            const text = $el.text()
            if(text.includes("Python"))
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                }
            )
            }
        })

    })
})