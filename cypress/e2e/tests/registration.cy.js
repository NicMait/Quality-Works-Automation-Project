import Authentication from '../pages/authentication.page'
import { faker } from '@faker-js/faker'

describe('Authentication', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	const email = faker.internet.email();
	it('Should register a new user with email', () => {
			// Register using email
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
		cy.get(Authentication.signUp).should('be.visible')
		cy.get(Authentication.signUp).click()
		cy.get(Authentication.emailField).type(email);
		cy.get(Authentication.passwordField).type('Password123!')
		cy.get(Authentication.submitBtn).should('be.visible')
		cy.get(Authentication.submitBtn).click()
		cy.get (Authentication.banner).should('be.visible')
		cy.get (Authentication.banner).should('have.text', "Products")
	})

  it('Should throw an error for invalid email address', () => {

		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
		cy.get(Authentication.signUp).should('be.visible')
		cy.get(Authentication.signUp).click()
		cy.get(Authentication.emailField).type('ree@com')  //email is not  valid
		cy.get(Authentication.passwordField).type('Password123!')
		cy.get(Authentication.submitBtn).should('be.visible')
		cy.get(Authentication.submitBtn).click()
		cy.get (Authentication.emailError).should('be.visible')
		cy.get (Authentication.emailError).should('have.text', "Email is invalid")

  })

	it('Should throw an error when you register with invalid password', () => {

		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
		cy.get(Authentication.signUp).should('be.visible')
		cy.get(Authentication.signUp).click()
		cy.get(Authentication.emailField).type('marsenal2@yopmail.com')
		cy.get(Authentication.passwordField).type('password123') //password is not valid
		cy.get(Authentication.submitBtn).should('be.visible')
		cy.get(Authentication.submitBtn).click()
		cy.get (Authentication.passwordError).should('be.visible')
		cy.get (Authentication.passwordError).should('have.text', "Password is invalid")



	})

})