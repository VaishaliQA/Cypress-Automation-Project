describe("Calender Date Validation", function(){

    it("Calender date test case", function(){
        const monthNumber ="6"
        const year ="2027"
        const date ="15"
        const expectedList =[monthNumber,date,year]
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("[href*=offers").invoke('removeAttr','target').click()
        cy.get(".react-date-picker__inputGroup").click()
        cy.get(".react-calendar__navigation__label").click()
        cy.get(".react-calendar__navigation__label").click()
        cy.contains("button",year).click()
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click()
        cy.contains("abbr",date).click()

        //assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
        {
            cy.wrap($el).invoke('val').should('eq',expectedList[index])
        })
      

    })
})