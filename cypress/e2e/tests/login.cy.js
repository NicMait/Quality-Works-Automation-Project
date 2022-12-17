import Authentication from '../pages/authentication.page'

describe('Authentication', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Should log in a valid user', () => {
			// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')
		cy.url().should('contain', 'products')

	})

	it('Log in with invalid email', () => {
		// Login with invalid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
		cy.get(Authentication.emailField).type('blackinferno@yopmail.com');//email not registered
		cy.get(Authentication.passwordField).type('notTrue123!')
		cy.get(Authentication.submitBtn).should('be.visible')
		cy.get(Authentication.submitBtn).click()
		cy.get (Authentication.errorMsg).should('be.visible')
		cy.get (Authentication.errorMsg).should('have.text','Wrong email or password.')
	})


})