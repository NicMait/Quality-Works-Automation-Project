class Cart{

	get cartBtn () { return ('#top-cart')}
	get deleteProduct() { return ('[title="Remove item"]')}
	get quantityIncrease() { return ('[title="Increment quantity"]')}
	get productQuantity() { return ('span[class="snipcart__font--secondary snipcart__font--regular"]')}
  get jeansInCart () { return (':nth-child(1) > .snipcart-item-line__container > .snipcart-item-line__product > .snipcart-item-line__header')}
	get heelsInCart () { return (':nth-child(2) > .snipcart-item-line__container > .snipcart-item-line__product > .snipcart-item-line__header > .snipcart-item-line__title')}

	cartDetails(){
		cy.get(this.cartBtn).scrollIntoView()
				cy.wait(1500)
		cy.get(this.cartBtn).click()

		}
}
export default new Cart()