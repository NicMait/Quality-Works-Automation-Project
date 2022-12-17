class Wishlist{

	get faveBtn () { return ('#top-favorite')}
	get faveHeader () { return ('.chakra-heading.css-11cq7yk')}
	get mousepadFave () { return ('div[id="product-2"] div[class="css-1m8iww1"]')}
	get pillowFave () { return ('div[id="product-4"] div[class="css-1m8iww1"]')}
	get faveCount () { return ('button[id="top-favorite"] p[class="chakra-text css-0"]')}
	get vneckFave () { return ('.css-1m8iww1')}

	fave(){
    cy.get(this.fullName).type('Martin Odegaard')
		cy.get(this.emailAddress).type('marsenal2@yopmail.com')
		cy.get(this.streetAddress).type('Gokasho')
		cy.get(this.aptNumber).type('41')
		cy.get(this.city).type('Higashiomi')
		cy.get(this.country).select('Japan')
		cy.get(this.province).type('Shiga')
		cy.get(this.zipCode).type('529-1000')

}


export default new Wishlist()