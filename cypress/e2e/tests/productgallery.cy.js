{/* <reference types="cypress" /> */}
import Authentication from '../pages/authentication.page'
import Gallery from '../pages/productgallery.page'
import AddToCart from '../pages/addtocart.page'



describe('Add To Cart', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('View Product Details', () => {

			  // Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

			//View product details
		cy.get(Gallery.vneckDetails).click()
		cy.url().should('contain', 'quality-tshirt-vneck')
		cy.get(Gallery.vneckHeader).should('be.visible')

  })

  it('Should increase the quantity of a product', () => {

	    // Login with valid credentials
	  cy.get(Authentication.signInRegisterBtn).should('be.visible')
	  cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
	  cy.url().should('contain', 'products')

	    //Increase the quantity of a product
    cy.get(Gallery.productIncrease).should('be.visible')
	  cy.get(Gallery.productIncrease).click()
    cy.get(Gallery.clickArea).click()

	    //Add to cart to confirm that the quantity has been recorded
    cy.get(Gallery.hoodyAddToCart).scrollIntoView()
	    cy.wait(1500)
	  cy.get(Gallery.hoodyAddToCart).click()
    cy.get(AddToCart.cartSummary).should('be.visible')
	  cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')
	  cy.get(Gallery.cartQuantity).should('have.text'," 2 ")
  })

  it('Should sign out from the product gallery page', () => {

	     // Login with valid credentials
    cy.get(Authentication.signInRegisterBtn).should('be.visible')
	  cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
	  cy.url().should('contain', 'products')

     	//Sign out from the home page/product gallery
    cy.get(Gallery.logOut).should('be.visible')
	  cy.get(Gallery.logOut).click()
	  cy.get(Authentication.signInRegisterBtn).should('be.visible')


  })

})