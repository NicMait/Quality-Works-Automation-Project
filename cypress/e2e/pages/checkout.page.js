class Checkout{

	get checkoutBtn () { return ('.snipcart-base-button__wrapper')}
	get fullName () { return ('input[name="name"]')}
	get emailAddress () { return ('input[name="email"]')}
	get streetAddress () { return ('.snipcart-form__address-autocomplete > :nth-child(2)')}
	get aptNumber () { return ('input[name="address2"]')}
	get city () { return ('input[name="city"]')}
	get country () { return ('select[class="snipcart-form__select snipcart__font--secondary snipcart__font--bold"]')}
	get province () { return ('div[class="snipcart-typeahead__content"] input[type="text"]')}
	get zipCode () { return ('input[name="postalCode"]')}
	get paymentBtn () { return ('.snipcart-base-button__label')}
	get paymentHeader () { return ('.snipcart-payment__header.snipcart__font--subtitle')}
	get emailError () { return ('div[data-for="email"]')}
  get cityError () { return ('div[data-for="city"]')}
	get zipcodeError () { return ('.snipcart-field-error')}
	get cardNumber () { return ('.snipcart-payment-card-form iframe')}
	get expiryDate () { return ('#expiry-date')}
	get cardCvv () { return ('#cvv')}
	get invoice () { return ('div[class="snipcart__box--title"] div h1[class="snipcart__font--subtitle"]')}
	get placeOrder () { return ('.snipcart-button-primary')}
	get editOrder () { return ('.snipcart-button-link')}


  billingInfo(){
    cy.get(this.fullName).type('Martin Odegaard')
		cy.get(this.emailAddress).type('marsenal2@yopmail.com')
		cy.get(this.streetAddress).type('Gokasho')
		cy.get(this.aptNumber).type('41')
		cy.get(this.city).type('Higashiomi')
		cy.get(this.country).select('Japan')
		cy.get(this.province).type('Shiga')
		cy.get(this.zipCode).type('529-1000')


    }

}

export default new Checkout()