// priority: 0
//server_script

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
	"Hello, World! (You will see this line every time server resources reload)"
);

const cider_fluid = "kubejs:apple_cider"
const cider_item = "farmersdelight:apple_cider"

const melon_fluid = "kubejs:melon_juice"
const melon_item = "farmersdelight:melon_juice"

const glass_bottle = 'minecraft:glass_bottle';
onEvent("recipes", (event) => {
	// Change recipes here
	event.recipes.createFilling("farmersdelight:milk_bottle", [
		"minecraft:glass_bottle",
		Fluid.of("minecraft:milk", 250),
	]);

	// 
	// Hot Cocoa
	//

	event.recipes
		.createMixing(Fluid.of("kubejs:hot_cocoa", 250), [
			Fluid.of("minecraft:milk", 250),
			Fluid.of("create:chocolate", 250),
		])
		.heated();
	event.recipes.createFilling("farmersdelight:hot_cocoa", [
		"minecraft:glass_bottle",
		Fluid.of("kubejs:hot_cocoa", 250),
	]);

	event.recipes.createEmptying([
		glass_bottle,
		Fluid.of("kubejs:hot_cocoa", 250)
	],
		"farmersdelight:hot_cocoa"
	)

	// 
	// Apple Cider
	//

	event.recipes
		.createMixing(Fluid.of("kubejs:apple_cider", 250), [
			"minecraft:apple",
			"minecraft:apple",
			"minecraft:sugar",
		])
		.heated();

	event.recipes.createFilling("farmersdelight:apple_cider", [
		"minecraft:glass_bottle",
		Fluid.of("kubejs:apple_cider", 250),
	]);

	event.recipes.createEmptying([
		'minecraft:glass_bottle',
		Fluid.of(cider_fluid, 250)
	], 'farmersdelight:apple_cider')

	// 
	// Melon Juice
	//

	event.recipes.createMixing(Fluid.of("kubejs:melon_juice", 250), [
		"minecraft:melon_slice",
		"minecraft:melon_slice",
		"minecraft:melon_slice",
		"minecraft:melon_slice",
		"minecraft:sugar",
	]);
	event.recipes.createFilling("farmersdelight:melon_juice", [
		"minecraft:glass_bottle",
		Fluid.of("kubejs:melon_juice", 250),
	]);

	event.recipes.createEmptying([
		'minecraft:glass_bottle',
		Fluid.of(melon_fluid, 250)
	], melon_item)
});

onEvent("item.tags", (event) => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
