class Gallery{

	get vneckDetails  () { return ('.chakra-image.css-2i84d9[src="/images/quality-tshirt-vneck.jpg"]')}
	get vneckHeader () { return ('div[class="chakra-stack css-84zodg"] h2[class="chakra-heading css-1dklj6k"]')}
  get productIncrease () { return ('#product-5-increase')}
	get clickArea () { return ('#product-5 > .css-n21gh5 > .css-46p1lt')}
	get hoodyAddToCart () { return ('#product-5 > #add-to-cart')}
	get cartQuantity () { return ('.snipcart-cart-header__option')}
	get logOut () { return ('#top-sign-out')}

}


export default new Gallery()