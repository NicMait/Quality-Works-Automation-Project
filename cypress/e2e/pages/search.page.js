class Search{

	get searchBar () { return ('#search')}
	get redCouch () { return('.css-1oeb4ru > .chakra-text')}
	get pinkPants () { return('#product-0 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru')}
	get cargoPants () { return('#product-1 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .chakra-text')}
	get jeansPants () { return('#product-2 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .chakra-text')}
	get resetBtn () { return ('#reset')}
	get allProducts () { return (' [class="chakra-text css-1n64n71"]')}

}

export default new Search()