class Wishlist{

	get faveBtn () { return ('#top-favorite')}
	get faveHeader () { return ('.chakra-heading.css-11cq7yk')}
	get mousepadFave () { return ('div[id="product-2"] div[class="css-1m8iww1"]')}
	get pillowFave () { return ('div[id="product-4"] div[class="css-1m8iww1"]')}
	get faveCount () { return ('button[id="top-favorite"] p[class="chakra-text css-0"]')}
	get vneckFave () { return ('.css-1m8iww1')}
	get removeFave () { return ('#remove-favorite-btn')}
	get emptyFave () { return ('div[class="chakra-stack css-owjkmg"] h2[class="chakra-heading css-kmq9po"]')}
	get mousepad () { return ('div[class="css-12qzrsi"] div:nth-child(1) div:nth-child(1) p:nth-child(1)')}
	get addToCart () { return ('#add-to-cart')}
	get mouseHeader () { return ('.snipcart-item-line__title.snipcart__font--xlarge')}

	fave(){
    cy.get(this.mousepadFave).click()
		cy.get(this.faveCount).should('be.visible')
		cy.get(this.faveCount).should('have.text',"Favorites [1]")
		cy.get(this.faveBtn).click()
		cy.get(this.faveHeader).should('have.text', "Favorites")
	}

}

export default new Wishlist()