import Authentication from '../pages/authentication.page'
import AddToCart from '../pages/addtocart.page'
import Cart from '../pages/cart.page'
import Gallery from '../pages/productgallery.page'

describe('Cart', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('View products in cart', () => {
			// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

			//Add products to the cart
		AddToCart.addToCart()
    cy.get(AddToCart.heelsHeader).should('be.visible')
	  cy.get(AddToCart.heelsHeader).should('have.text'," Quality Heal Shoes ")
	  cy.get(AddToCart.backToShopping).should('be.visible')
    cy.get (AddToCart.backToShopping).click()
	  AddToCart.addToCartTwo()
	  cy.get(AddToCart.cartSummary).should('be.visible')
    cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')
    cy.get(AddToCart.jeansHeader).should('be.visible')
	  cy.get(AddToCart.jeansHeader).should('have.text'," Quality Jeans Pants ")
		cy.get(AddToCart.backToShopping).should('be.visible')
    cy.get (AddToCart.backToShopping).click()
			//Navigate to cart
    Cart.cartDetails()
    cy.url().should('contain', 'cart')
			cy.wait(3000)
		cy.get(Cart.heelsInCart).should('be.visible')
	  cy.get(Cart.heelsInCart).should('have.text'," Quality Heal Shoes ")
		cy.get(Cart.jeansInCart).should('be.visible')
	  cy.get(Cart.jeansInCart).should('have.text'," Quality Jeans Pants ")
	})

	it('Delete a product from cart', () => {

		  // Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

	   	//Add a product to the cart
		AddToCart.addToCart()
		cy.get(AddToCart.backToShopping).should('be.visible')
		cy.get (AddToCart.backToShopping).click()

		  //Navigate to cart
		Cart.cartDetails()
		cy.get(Gallery.cartQuantity).should('have.text'," 1 ")

	   // Remove a product from the cart
    cy.get(Cart.deleteProduct).click()
		cy.get(Gallery.cartQuantity).should('have.text'," 0 ")
	})


	it('Increase the quantity of the product in the cart', () => {

		// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

		//Add a product to the cart
		AddToCart.addToCart()
		cy.get(AddToCart.backToShopping).should('be.visible')
		cy.get (AddToCart.backToShopping).click()

		//Navigate to cart
		Cart.cartDetails()

	    // Increase the product quantity
	  cy.get(Cart.quantityIncrease).should('be.visible')
		cy.get(Cart.quantityIncrease).click()
		cy.get(Cart.productQuantity).should('have.text', "2")
		cy.get('.snipcart-item-quantity__total-price').should('have.text'," $40.00 ")

	})

})