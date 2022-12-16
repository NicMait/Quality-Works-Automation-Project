import Authentication from '../pages/authentication.page'
import Details from '../pages/details.page'
import AddToCart from '../pages/addtocart.page'


describe('Product Details', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Navigate to a related product', () => {
			// Login with valid credentials
    cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.get (Authentication.banner).should('be.visible')
		cy.get (Authentication.banner).should('have.text', "Products")

			//Select a product
		cy.get(Details.sweatShirt).should('be.visible')
		cy.get(Details.sweatShirt).click()
	  cy.url().should('contain', 'quality-sweatshirt')
		cy.get(Details.productHeader).should('have.text',"Quality Sweatshirt ")

	  	 //Related Products
		cy.get(Details.relatedHeader).scrollIntoView()
		cy.get(Details.relatedHeader).should('have.text',"Related Products")
		cy.get(Details.relatedProductName).should('have.text',"Quality Hooded Sweatshirt")
		cy.get(Details.relatedProduct).should('be.visible')
		cy.get(Details.relatedProduct).click()
		cy.url().should('contain', 'quality-sweatshirt-hooded')
		cy.get(Details.productHeader).should('have.text',"Quality Hooded Sweatshirt ")

	})

	it('Confirm that product description exists', () => {
				// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.get (Authentication.banner).should('be.visible')
		cy.get (Authentication.banner).should('have.text', "Products")

				//Select a product
		cy.get(Details.sweatShirt).should('be.visible')
		cy.get(Details.sweatShirt).click()
		cy.url().should('contain', 'quality-sweatshirt')
		cy.get(Details.productHeader).should('have.text',"Quality Sweatshirt ")

				 //Product Details
    cy.get(Details.productDescription).should('be.visible')
		cy.get(Details.productDescription).should('have.text',"Hanes Men's Sweatshirt, EcoSmart Fleece Crewneck Sweatshirt, Cotton-Blend Fleece Sweatshirt, Plush Fleece Pullover Sweatshirt")

	})

	it.only('Increase the quantity of a product from the details page and add item to cart', () => {
		// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.get (Authentication.banner).should('be.visible')
		cy.get (Authentication.banner).should('have.text', "Products")

		//Select a product
		cy.get(Details.sweatShirt).should('be.visible')
		cy.get(Details.sweatShirt).click()
		cy.url().should('contain', 'quality-sweatshirt')
		cy.get(Details.productHeader).should('have.text',"Quality Sweatshirt ")

		 //Increase product quantity
		 cy.get(Details.productIncrease).click()
		 cy.get(Details.productIncrease).click()
		 cy.get(Details.productIncrease).click()

		 //Add item to cart
    cy.get(Details.sweaterAddToCart).click()
		cy.get(AddToCart.cartSummary).should('be.visible')
	  cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')
		cy.get(Details.sweaterHeader).should('be.visible')
		cy.get(Details.sweaterHeader).should('have.text', " Quality Sweatshirt ")
		cy.get(Details.sweaterQty).should('have.text',"4")


  })

})
