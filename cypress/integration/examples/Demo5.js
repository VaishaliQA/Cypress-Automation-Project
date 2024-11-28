describe("Handling Child window", function(){

    it("should handle child window", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // cypress handle child window/ child tab in same place. so if any link opend in diffrent tab you have to remove target attribute
        // There are 2 ways to handle
        //1. remove target attribute
        cy.get('#opentab').invoke('removeAttr','target').click()

        //if you have to cross origin url access then you have to set url of cross origin then you can access it
        cy.origin('https://www.qaclickacademy.com/',() =>{
            cy.get('#navbarSupportedContent a[href*="about"]').click()
          cy.get(".mt-50 h2").should('contain','QAClick Academy')


        })

        //2. Get href url and open in same window
        cy.get('#opentab').then(function(el){
            // using jquery prop method get the url from href attribute
            const url =el.prop('href')
            cy.visit(url)
            // another origin so if you want to perform any opteration you need to tell cypress
            cy.origin(url,()=>
            {
                cy.get("#navbarSupportedContent a[href*='about']").click()
            })
        })

       
    })
})