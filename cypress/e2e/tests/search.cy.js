import Authentication from '../pages/authentication.page'
import Search from '../pages/search.page'


describe('Search', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Should return exact results for a full name search', () => {

			// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

			//Search for the product "Red Couch"
		cy.get(Search.searchBar).type('Red Couch')
		cy.get(Search.redCouch).should('be.visible')
		cy.get(Search.redCouch).should('have.text','Red Couch')

  })


	it('Should return correct results for a partial name search', () => {

		// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

		//Search for "pants"
		cy.get(Search.searchBar).type('Pants')
		cy.get(Search.pinkPants).should('be.visible')
		cy.get(Search.cargoPants).should('be.visible')
		cy.get(Search.jeansPants).should('be.visible')

  })

	it('Should reset the search filter', () => {

		// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

		//Search for "Red Couch"
    cy.get(Search.searchBar).type('Red Couch')
		cy.get(Search.redCouch).should('be.visible')
		cy.get(Search.redCouch).should('have.text','Red Couch')

		//Reset the search
		cy.get(Search.resetBtn).click()
		cy.get(Search.allProducts).should('be.visible')
		cy.get(Search.allProducts).should('have.length',22)

  })

})