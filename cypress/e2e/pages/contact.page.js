class Contact{

	get contactBtn () { return ('#top-contact')}
	get messageHeader () { return ('.chakra-heading.css-z59od')}
	get firstName () { return ('#firstName')}
	get lastName () { return ('#lastName')}
	get emailAddress () { return ('#email')}
	get subject () { return ('#subject')}
	get message () { return ('#message')}
	get sendMessage() { return ('button[class="chakra-button css-vs0e4t"]')}
	get confirmation () {return ('#toast-1')}
	get emailError () { return (' form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3)')}
	get firstNameError () { return ('form:nth-child(1) div:nth-child(1) > div:nth-child(1) > div:nth-child(3)')}
	get lastNameError () { return ('form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)')}
	get emailAddError () { return ('form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3)')}
	get subjectError () { return ('form:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3)')}
	get messageError () { return ('form:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3)')}



enterMessage() {
	cy.get(this.firstName).type('Levi')
	cy.get(this.lastName).type('Morgan')
	cy.get(this.emailAddress).type('maresenal2@yopmail.com')
	cy.get(this.subject).type('This is a test')
	cy.get(this.message).type('It is a test.')

	}
	
}

	export default new Contact()