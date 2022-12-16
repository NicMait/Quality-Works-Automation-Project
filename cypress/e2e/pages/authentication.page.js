class Authentication{

	get signInRegisterBtn () { return ('#signInOrRegister')}
	get signUp () { return ('div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')}
	get emailField () { return ('[type=email]')}
	get passwordField () { return ('[type=password]')}
	get submitBtn () { return ('[type=submit]')}
	get banner () { return ('.chakra-heading.css-1jhlc8u')}
	get errorMsg () { return ('.auth0-global-message.auth0-global-message-error')}
	get forgotPassword () { return ('.auth0-lock-alternative-link')}
	get resetMsg () { return ('.auth0-global-message.auth0-global-message-success')}
	get emailError () { return ('.auth0-lock-error-invalid-hint')}
	get passwordError () { return ('.auth0-lock-error-invalid-hint')}

login(email,password){
  cy.get(this.emailField).type(email)
  cy.get(this.passwordField).type(password)
  cy.get(this.submitBtn).click()
}

}

export default new Authentication()