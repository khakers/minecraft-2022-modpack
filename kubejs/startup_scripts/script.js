// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

/*onEvent('block.registry', event => {
  event.create('example_block', block => {
		  block.material('glass')
	  block.hardness(0.5)
	  block.displayName('Example Block')
  })
})*/


onEvent('item.registry', event => {
	// Register new items here
})

onEvent('block.registry', event => {
	// Register new blocks here
})

onEvent('fluid.registry', event => {
	event.create('hot_cocoa')
		.thickTexture(0x533c2f)
		.bucketColor(0x533c2f)
		.displayName('Hot Cocoa')

	event.create('apple_cider')
		.thickTexture(0x86462A)
		.bucketColor(0x86462A)
		.displayName('Apple Cider')

	event.create('melon_juice')
		.thickTexture(0xe11a2b)
		.bucketColor(0xe11a2b)
		.displayName('Melon Juice')
})