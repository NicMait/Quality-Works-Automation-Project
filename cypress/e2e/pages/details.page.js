class Details{

	get sweatShirt () { return ('.chakra-image.css-2i84d9[src="/images/quality-sweatshirt.jpg"]')}
	get productHeader () { return ('div[class="chakra-stack css-84zodg"] h2[class="chakra-heading css-1dklj6k"]')}
	get relatedHeader () { return ('.css-ual471 > :nth-child(3)')}
	get relatedProduct () { return ('.chakra-image.css-138bbah[src="/images/quality-sweatshirt-hooded.jpg"]')}
	get relatedProductName () { return ('div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(1)')}
	get productDescription () { return ('div:nth-child(2) >p:nth-child(2)')}
	get productIncrease () { return ('#product-increase')}
	get sweaterAddToCart () { return ('#add-to-cart')}
  get sweaterHeader () { return ('ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(2)')}
	get sweaterQty () { return ('[class="snipcart__font--secondary snipcart__font--regular"]')}


}


export default new Details()