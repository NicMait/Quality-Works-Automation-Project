import Authentication from '../pages/authentication.page'
import Sort from '../pages/filter.page'


describe('Filter and Sort', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Should sort product list from A to Z', () => {
			// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//sort products from A to Z
		cy.get(Sort.sortOptions).scrollIntoView()
			 cy.wait(3000)
		cy.get(Sort.sortOptions).select('A to Z')
			 cy.wait(1000)

		var productList = ['Dell Laptop','Gray Couch','HP Laptop','Mackbook Pro','Quality Blue Shoes','Quality Cargo Pants','Quality Fitted Hat','Quality Heal Shoes','Quality Hooded Sweatshirt','Quality Jeans Pants','Quality Kids Tshirt','Quality Mousepad','Quality Mug','Quality Pillow','Quality Pink Pants','Quality Stylish Shoes','Quality Sweatshirt','Quality Trucker Hat','Quality Tshirt','Quality Vneck','Red Couch','White Couch']
        productList.sort()

    cy.get(Sort.productList).each(($elem, index) => {
      expect($elem.text()).equal(productList[index])
      })

  })

  it('Should sort product list from Z to A', () => {

			// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//sort products from Z to A
		cy.get(Sort.sortOptions).scrollIntoView()
			 cy.wait(3000)
		cy.get(Sort.sortOptions).select('Z to A')
			cy.wait(1000)

			var productList = ['Dell Laptop','Gray Couch','HP Laptop','Mackbook Pro','Quality Blue Shoes','Quality Cargo Pants','Quality Fitted Hat','Quality Heal Shoes','Quality Hooded Sweatshirt','Quality Jeans Pants','Quality Kids Tshirt','Quality Mousepad','Quality Mug','Quality Pillow','Quality Pink Pants','Quality Stylish Shoes','Quality Sweatshirt','Quality Trucker Hat','Quality Tshirt','Quality Vneck','Red Couch','White Couch']
        productList.sort().reverse()

    cy.get(Sort.productList).each(($elem, index) => {
      expect($elem.text()).equal(productList[index])
      })

	})

	it('Should sort product list by price from high to low', () => {

			// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//sort products by price from high to low
		cy.get(Sort.sortOptions).scrollIntoView()
			cy.wait(3000)
		cy.get(Sort.sortOptions).select('High to low')
			cy.wait(1000)

			var priceList = [2000,1000, 680, 550, 320, 234, 50, 44, 40, 30, 28, 24, 20, 20, 20, 20, 20, 20, 20, 17, 15, 15]

    priceList.sort(function(a, b) {
			return b - a;
			});
			cy.wait(1000)

		cy.get(Sort.priceList).each(($elem, index) => {
				expect(parseInt($elem.text().replace('$',''))).equal(priceList[index])
		})

  })

})

