import Authentication from '../pages/authentication.page'
import AddToCart from '../pages/addtocart.page'
import Cart from '../pages/cart.page'
import Checkout from '../pages/checkout.page'
import BillingData from '../data/billing.data'


describe('Data Driven Billing Information', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Add Complete Billing Information', () => {

			// Login with valid credentials
		cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')

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

			//Enter billing information
    cy.get(Checkout.fullName).type(BillingData.valid.fullname)
		cy.get(Checkout.emailAddress).type(BillingData.valid.email)
		cy.get(Checkout.streetAddress).type(BillingData.valid.streetaddress)
		cy.get(Checkout.aptNumber).type(BillingData.valid.Apt)
		cy.get(Checkout.city).type(BillingData.valid.City)
		cy.get(Checkout.country).select('Japan')
		cy.get(Checkout.province).type(BillingData.valid.Province)
		cy.get(Checkout.zipCode).type(BillingData.valid.ZipCode)
		cy.get(Checkout.paymentBtn).click()
		cy.get(Checkout.paymentHeader).scrollIntoView()
		cy.get(Checkout.paymentHeader).should('be.visible')


	})


	it('Omit Full Name from Billing Information', () => {

		// Login with valid credentials
		cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')

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

		//Enter billing information without full name
		cy.get(Checkout.emailAddress).type(BillingData.missingname.email)
		cy.get(Checkout.streetAddress).type(BillingData.missingname.streetaddress)
		cy.get(Checkout.aptNumber).type(BillingData.missingname.Apt)
		cy.get(Checkout.city).type(BillingData.missingname.City)
		cy.get(Checkout.country).select('Namibia')
		cy.get(Checkout.province).type(BillingData.missingname.Province)
		cy.get(Checkout.zipCode).type(BillingData.missingname.ZipCode)
		cy.get(Checkout.paymentBtn).click({force:true})

  })


	it('Omit Email Address from Billing Information', () => {

			// Login with valid credentials
		cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')

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

	it('Omit Zip Code from Billing Information', () => {
			// Login with valid credentials
		cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')

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

				//Enter billing information without zipcode
		cy.get(Checkout.fullName).type(BillingData.missingzipcode.fullname)
		cy.get(Checkout.emailAddress).type(BillingData.missingzipcode.email)
		cy.get(Checkout.streetAddress).type(BillingData.missingzipcode.streetaddress)
		cy.get(Checkout.aptNumber).type(BillingData.missingzipcode.Apt)
		cy.get(Checkout.city).type(BillingData.missingzipcode.City)
		cy.get(Checkout.country).select('Brazil')
		cy.get(Checkout.province).type(BillingData.missingzipcode.Province)
		cy.get(Checkout.paymentBtn).click()
		cy.get(Checkout.zipcodeError).scrollIntoView()
		cy.get(Checkout.zipcodeError).should('be.visible')

	})

})