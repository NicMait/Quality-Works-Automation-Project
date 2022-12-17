import Authentication from '../pages/authentication.page'
import Wishlist from '../pages/wishlist.page'
import Gallery from '../pages/productgallery.page'
import AddToCart from '../pages/addtocart.page'

describe('Wishlist', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Add a product to favorites from the product gallery', () => {
			// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

		//Add a product to favorites from the product gallery
		cy.get(Wishlist.mousepadFave).should('be.visible')
		cy.get(Wishlist.mousepadFave).click()
		cy.get(Wishlist.faveNotification).should('be.visible')

		//confirm addition to favorites
		cy.get(Wishlist.faveCount).should('have.text',"Favorites [1]")

	})

	it('Add a product to favorites from the product details page', () => {
		// Login with valid credentials
	  cy.get(Authentication.signInRegisterBtn).should('be.visible')
	  cy.get(Authentication.signInRegisterBtn).click()
	  Authentication.login('marsenal2@yopmail.com', 'Password123!')
	  cy.url().should('contain', 'products')

	  //View product details
    cy.get(Gallery.vneckDetails).click()
	  cy.url().should('contain', 'quality-tshirt-vneck')

	  //Add item to faves
	  cy.get(Wishlist.vneckFave).should('be.visible')
	   cy.wait(3000)
	  cy.get(Wishlist.vneckFave).click()//add vneck to favorites
		cy.get(Wishlist.faveNotification).should('be.visible')

	 //confirm addition to faves
	  cy.get(Wishlist.faveCount).should('have.text',"Favorites [1]")

  })

  it.only('Remove an item from favorites', () => {
	   // Login with valid credentials
   cy.get(Authentication.signInRegisterBtn).should('be.visible')
   cy.get(Authentication.signInRegisterBtn).click()
   Authentication.login('marsenal2@yopmail.com', 'Password123!')
   cy.url().should('contain', 'products')

   //Add a product to favorites
   Wishlist.fave()

   //Remove item
   cy.get(Wishlist.removeFave).should('be.visible')
   cy.get(Wishlist.removeFave).click()
	 cy.get(Wishlist.removeNotification).should('be.visible')
   cy.get(Wishlist.emptyFave).should('have.text',"No favorites added!")

  })

  it('Add multiple items to favorites', () => {
	    // Login with valid credentials
   cy.get(Authentication.signInRegisterBtn).should('be.visible')
   cy.get(Authentication.signInRegisterBtn).click()
   Authentication.login('marsenal2@yopmail.com', 'Password123!')
   cy.url().should('contain', 'products')

     //Add products to favorites
   cy.get(Wishlist.mousepadFave).should('be.visible')
   cy.get(Wishlist.mousepadFave).click()
   cy.get(Wishlist.faveCount).should('have.text',"Favorites [1]")
   cy.get(Wishlist.pillowFave).should('be.visible')
   cy.get(Wishlist.pillowFave).click()
   cy.get(Wishlist.faveCount).should('have.text',"Favorites [2]")

	   //Confirm the additions
	  cy.get(Wishlist.faveBtn).click()


	})

	it('Add a product to cart from favorites', () => {
		// Login with valid credentials
    cy.get(Authentication.signInRegisterBtn).should('be.visible')
    cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
    cy.url().should('contain', 'products')

	    //Add a products to favorites
    Wishlist.fave()

	    //Add to cart
	  cy.get(Wishlist.addToCart).click()
    cy.get(AddToCart.cartSummary).should('be.visible')
	  cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')
	  cy.get(Wishlist.mouseHeader).should('be.visible')
	  cy.get(Wishlist.mouseHeader).should('have.text'," Quality Mousepad ")


  })

})