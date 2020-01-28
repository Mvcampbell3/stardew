import { Item } from './item';

const complete_breakfast = new Item('Complete Breakfast', true, false, 'This recipe is a difficult one to make a lot of because of the fact it needs hashbrowns and pancakes to make. The recipe comes from The Queen of the Sauce on 21st of Spring, year 2', 'https://stardewvalleywiki.com/mediawiki/images/3/3d/Complete_Breakfast.png', ['Alex'],
  [
    { name: 'Fried Egg', amt: 1 },
    { name: 'Milk', amt: 1 },
    { name: 'Hashbrowns', amt: 1 },
    { name: 'Pancakes', amt: 1 }
  ]
)

const salmon_dinner = new Item('Salmon Dinner', true, false, 'A fairly simple recipe. Salmon can be fished out of the river during the Fall, Aramanth grows in the Fall, and Kale grows in the Spring. The recipe comes from Gus at friendship level 3', 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Salmon_Dinner.png', ['Alex'],
  [
    { name: 'Salmon', amt: 1 },
    { name: 'Amaranth', amt: 1 },
    { name: 'Kale', amt: 1 }
  ]
)

const crab_cakes = new Item('Crab Cakes', true, false, 'You can get from Iridium Crabs in Skull Cavern. Crabs come from using the Crab Pot in the ocean. The recipe comes from The Queen of the Sauce on the 21st of Fall, year 2', 'https://stardewvalleywiki.com/mediawiki/images/7/70/Crab_Cakes.png', ['Elliot'],
  [
    { name: 'Crab', amt: 1 },
    { name: 'Wheat Flour', amt: 1 },
    { name: 'Egg', amt: 1 },
    { name: 'Oil', amt: 1 }
  ]
)

const duck_feather = new Item('Duck Feather', false, true, 'This is a simple item to get, it just takes time and money. Upgrade your coop to be able to have ducks live inside. Ducks will eventually drop duck feathers every now and then.', 'https://stardewvalleywiki.com/mediawiki/images/f/f9/Duck_Feather.png', ['Elliot'])

const lobster = new Item('Lobster', false, true, 'Lobster is a fish that can be caught in any season using a crab pot in the ocean.', 'https://stardewvalleywiki.com/mediawiki/images/9/9f/Lobster.png', ['Elliot'])

const pomegranate = new Item('Pomegranate', false, true, 'Grow a pomegranate tree. If you grow it inside your greenhouse, it will produce fruit all year round.', 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Pomegranate.png', ['Elliot'], null, 'Fall')

const tom_kha_soup = new Item('Tom Kha Soup', true, false, 'A recipe you get from becoming friends with Sandy.', 'https://stardewvalleywiki.com/mediawiki/images/3/3b/Tom_Kha_Soup.png', ['Elliot', 'Penny'], [
  { name: 'Coconut', amt: 1 },
  { name: 'Shrimp', amt: 1 },
  { name: 'Common Mushroom', amt: 1 }
])

const coffee = new Item('Coffee', true, false, 'You craft this recipe by putting coffee beans inside a Keg. You should be making a ton of this stuff anyways as it boosts your speed', 'https://stardewvalleywiki.com/mediawiki/images/e/e9/Coffee.png', ['Harvey'], [
  { name: 'Coffee Beans', amt: 5 }
])

const pickles = new Item('Pickles', true, false, 'You place any vegetable inside a perservers jar and you will get pickles', 'https://stardewvalleywiki.com/mediawiki/images/c/c7/Pickles.png', ['Harvey'], [
  { name: 'Any Vegetable', amt: 1 }
])

const super_meal = new Item('Super Meal', true, false, 'Bok Choy, Cranberries, and Artichoke all grow in the Fall. You can get the recipe for this meal from being friends with Kent', 'https://stardewvalleywiki.com/mediawiki/images/d/d2/Super_Meal.png', ['Harvey'], [
  { name: 'Bok Choy', amt: 1 },
  { name: 'Cranberries', amt: 1 },
  { name: 'Artichoke', amt: 1 }
])

const truffle_oil = new Item('Truffle Oil', true, false, 'Place truffles that your pigs dig up into an oil maker to make truffle oil, this item is also pretty valuable to sell', 'https://stardewvalleywiki.com/mediawiki/images/3/3d/Truffle_Oil.png', ['Harvey'], [
  { name: 'Truffle', amt: 1 }
])

const wine = new Item('Wine', true, false, 'Place any fruit into a keg for 7 days.', 'https://stardewvalleywiki.com/mediawiki/images/6/69/Wine.png', ['Harvey', 'Leah'], [
  { name: 'Any Fruit', amt: 1 }
])

const cactus_fruit = new Item('Cactus Fruit', false, true, 'Cactus fruit can be found year round in the desert area, or can be grown from cactus seeds', 'https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png', ['Linus', 'Pam', 'Sam'], null, 'Any Season');

const maple_bar = new Item('Maple Bar', true, false, 'Maple syrup can be gathered from maple trees after placing a tap on the tree. The recipe comes from the Queen of the Sauce on the 14th of Summer, year 2.', 'https://stardewvalleywiki.com/mediawiki/images/1/18/Maple_Bar.png', ['Sam'], [
  { name: 'Maple Syrup', amt: 1 },
  { name: 'Sugar', amt: 1 },
  { name: 'Wheat Flour', amt: 1 }
])

const pizza = new Item('Pizza', true, false, 'Pizza can be bought from Gus at the Stardrop Saloon. Tomatoes grow in the summer', 'https://stardewvalleywiki.com/mediawiki/images/f/f4/Pizza.png', ['Sam', 'Shane'], [
  { name: 'Wheat Flour', amt: 1 },
  { name: 'Cheese', amt: 1 },
  { name: 'Tomato', amt: 1 }
])

const tigerseye = new Item('Tigerseye', false, true, 'You can get Tigerseye from having Clint open Magma or Omni geodes', 'https://stardewvalleywiki.com/mediawiki/images/6/6e/Tigerseye.png', ['Sam']);

const frozen_tear = new Item('Frozen Tear', false, true, 'Mineral that can be found in the mines between levels 40 and 79. Also can be found inside Frozen and Omni geodes.', 'https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png', ['Sebastian']);

const obsidian = new Item('Obsidian', false, true, 'You can get Obsidian from having Clint open Magma or Omni geodes', 'https://stardewvalleywiki.com/mediawiki/images/2/23/Obsidian.png', ['Sebastian']);

const pumpkin_soup = new Item('Pumpkin Soup', true, false, 'Pumpkins grow in the fall. Robin will give you recipe at friendship level 7', 'https://stardewvalleywiki.com/mediawiki/images/5/59/Pumpkin_Soup.png', ['Sebastian'], [
  { name: 'Pumpkin', amt: 1 },
  { name: 'Milk', amt: 1 }
])

const sashimi = new Item('Sashimi', true, false, 'The recipe comes from being friends with Linus. This is a particularly good recipe to know early game for recovering health and energy', 'https://stardewvalleywiki.com/mediawiki/images/4/41/Sashimi.png', ['Sebastian'], [
  { name: 'Any Fish', amt: 1 }
])

const void_egg = new Item('Void Egg', false, true, 'Void eggs come from void chickens. You can buy void eggs from Krobus in the sewer and can hatch a void chicken to produce more eggs. Another way to get one is a random event caused by a witch flying over your Big or Deluxe Coop', 'https://stardewvalleywiki.com/mediawiki/images/5/58/Void_Egg.png', ['Krobus', 'Sebastian']);

const beer = new Item('Beer', true, false, 'Place wheat in a keg to make beer.', 'https://stardewvalleywiki.com/mediawiki/images/b/b3/Beer.png', ['Pam', 'Shane'], [
  { name: 'Wheat', amt: 1 }
])

const hot_pepper = new Item('Hot Pepper', false, true, 'Hot Peppers are grown in the Summer', 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png', ['Lewis', 'Shane'], null, 'Fall')

const pepper_poppers = new Item('Pepper Poppers', true, false, 'Hot Peppers are gown in the Summer. The recipe comes from being friends with Shane.', 'https://stardewvalleywiki.com/mediawiki/images/0/08/Pepper_Poppers.png', ['Maru', 'Shane'], [
  {name: 'Hot Pepper', amt: 1},
  {name: 'Cheese', amt: 1}
])

export default [
  complete_breakfast,
  salmon_dinner,
  crab_cakes,
  duck_feather,
  lobster,
  pomegranate,
  tom_kha_soup,
  coffee,
  pickles,
  super_meal,
  truffle_oil,
  wine,
  cactus_fruit,
  maple_bar,
  pizza,
  tigerseye,
  frozen_tear,
  obsidian,
  pumpkin_soup,
  sashimi,
  void_egg,
  beer,
  hot_pepper,
  pepper_poppers
]