describe('inputs and submit', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })
    
    it("adds text to register username", () => {
        cy.visit('http://localhost:3000/register') 
        cy.get("#name").type("Nothing").should("have.value", "Nothing")
      })
    
    it("adds text to register email", () => {
        cy.visit('http://localhost:3000/register') 
        cy.get("#mail").type("Nothing").should("have.value", "Nothing")
      })
    
    it("adds text to register password", () => {
        cy.visit('http://localhost:3000/register') 
        cy.get("#pass").type("Nothing").should("have.value", "Nothing")
      })

    it("adds text to login username", () => {
        cy.visit('http://localhost:3000/login') 
        cy.get("#logname").type("Nothing").should("have.value", "Nothing")
      })
    
    it("adds text to login password", () => {
        cy.visit('http://localhost:3000/login') 
        cy.get("#logpass").type("Nothing").should("have.value", "Nothing")
      })
    
    it("can register", () => {
        cy.visit('http://localhost:3000/register') 
        cy.get("#name").type("Nothing").should("have.value", "Nothing")
        cy.get("#mail").type("Nothing").should("have.value", "Nothing")
        cy.get("#pass").type("Nothing").should("have.value", "Nothing")
        cy.get("#regbtn").click()
      })
    
    it("can login", () => {
        cy.visit('http://localhost:3000/login') 
        cy.get("#logname").type("Nothing").should("have.value", "Nothing")
        cy.get("#logpass").type("Nothing").should("have.value", "Nothing")
        cy.get("#logbtn").click()
      })
}) 