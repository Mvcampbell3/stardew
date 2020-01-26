import { Item } from './item';

const complete_breakfast = new Item('Complete Breakfast', true, false, 'This recipe is a difficult one to make a lot of because of the fact it needs hashbrowns and pancakes to make.', 'https://stardewvalleywiki.com/mediawiki/images/3/3d/Complete_Breakfast.png', ['Alex'],
  [
    { name: 'Fried Egg', amt: 1 },
    { name: 'Milk', amt: 1 },
    { name: 'Hashbrowns', amt: 1 },
    { name: 'Pancakes', amt: 1 }
  ]
)

const salmon_dinner = new Item('Salmon Dinner', true, false, 'A fairly simple recipe. Salmon can be fished out of the river during the Fall, Aramanth grows in the Fall, and Kale grows in the Spring', 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Salmon_Dinner.png', ['Alex'],
  [
    { name: 'Salmon', amt: 1 },
    { name: 'Amaranth', amt: 1 },
    { name: 'Kale', amt: 1 }
  ]
)

const crab_cakes = new Item('Crab Cakes', true, false, 'You can cook this dish, or collect them from Iridium Crabs in Skull Cavern.', 'https://stardewvalleywiki.com/mediawiki/images/7/70/Crab_Cakes.png', ['Elliot'],
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
  truffle_oil
]