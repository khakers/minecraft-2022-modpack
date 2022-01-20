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
	event.create('hot_cocoa', fluid => {
		fluid.textureThick(0x533c2f)
		fluid.bucketColor(0x533c2f)
		fluid.displayName('Hot Cocoa')
	})
	event.create('apple_cider', fluid => {
		fluid.textureThin(0x86462A)
		fluid.bucketColor(0x86462A)
		fluid.displayName('Apple Cider')
	})
	event.create('melon_juice', fluid => {
		fluid.textureThin(0xe11a2b)
		fluid.bucketColor(0xe11a2b)
		fluid.displayName('Melon Juice')
	})
})