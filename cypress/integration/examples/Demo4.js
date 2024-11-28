describe("Alert Popup", function(){

    it("Handling Alert Popup", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Cypress auto handle popup and alert. you can't change behaviour but if you want to validate  alert text or anything cypress have capablity of browser events. window alert is the event which get fired on alert open.
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // so you are firing the event through cypress to get alert.
        cy.on('window:alert',(str) => {

            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })

        cy.on('window:confirm',(str) => {

            // asserion can be done by Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })
})