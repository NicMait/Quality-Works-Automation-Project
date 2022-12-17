import Authentication from '../pages/authentication.page'
import AddToCart from '../pages/addtocart.page'
import Checkout from '../pages/checkout.page'
import BillingData from '../data/billing.data'

describe('Checkout', () => {
	beforeEach(() => {
			cy.visit('/')
		})



	it('Add Billing Information', () => {

			// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

			//Add products to the cart
		AddToCart.addToCart()
    cy.get (AddToCart.backToShopping).click()
	  AddToCart.addToCartTwo()
	  cy.get(AddToCart.cartSummary).should('be.visible')
    cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')

			//Navigate to checkout
		cy.get(Checkout.checkoutBtn).scrollIntoView()
			 cy.wait(1500)
		cy.get(Checkout.checkoutBtn).should('be.visible')
		cy.get(Checkout.checkoutBtn).click()

			//Enter billing information
    Checkout.billingInfo()

	})

  it('Omit Email Address from Billing Information', () => {

		// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

		//Add products to the cart
		AddToCart.addToCart()
		cy.get(AddToCart.backToShopping).should('be.visible')
		cy.get (AddToCart.backToShopping).click()
		AddToCart.addToCartTwo()
		cy.get(AddToCart.cartSummary).should('be.visible')
		cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')

		//Navigate to checkout
		cy.get(Checkout.checkoutBtn).scrollIntoView()
			 cy.wait(1500)
		cy.get(Checkout.checkoutBtn).should('be.visible')
		cy.get(Checkout.checkoutBtn).click()

		//Enter billing information without email address
		cy.get(Checkout.fullName).type(BillingData.missingemail.fullname)
		cy.get(Checkout.streetAddress).type(BillingData.missingemail.streetaddress)
		cy.get(Checkout.aptNumber).type(BillingData.missingemail.Apt)
		cy.get(Checkout.city).type(BillingData.missingemail.City)
		cy.get(Checkout.country).select('France')
		cy.get(Checkout.province).type(BillingData.missingemail.Province)
		cy.get(Checkout.zipCode).type(BillingData.missingemail.ZipCode)
		cy.get(Checkout.paymentBtn).click()
		cy.get(Checkout.emailError).scrollIntoView()
		cy.get(Checkout.emailError).should('be.visible')

	})

	it('Purchase a product', () => {

			// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

			//Add a product to the cart
		AddToCart.addToCart()

       //Navigate to checkout
		cy.get(Checkout.checkoutBtn).scrollIntoView()
		   cy.wait(1500)
	  cy.get(Checkout.checkoutBtn).should('be.visible')
	  cy.get(Checkout.checkoutBtn).click()

			//Enter Billing Information
		Checkout.billingInfo()

			//Enter payment information and checkout
		cy.get(Checkout.paymentBtn).click()
		cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
		cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type('1129')
		cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('123')
		cy.get(Checkout.placeOrder).click()

			//View invoice
		cy.get(Checkout.invoice).should('be.visible')
		cy.get(Checkout.invoice).should('have.text',"Thank you for your order")

	})

})




