// class NPC {
//   constructor(name, favorite_things, img_src) {
//     this.name = name;
//     this.favorite_things = favorite_things;
//     this.img_src = img_src
//   }
// }

function NPC(name, favorite_things, img_src) {
  this.name = name;
  this.favorite_things = favorite_things;
  this.img_src = img_src;
}

const Alex = new NPC('Alex', ['Complete Breakfast', 'Salmon Dinner'], 'https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png');

const Elliot = new NPC('Elliot', ['Crab Cakes', 'Duck Feather', 'Lobster', 'Pomegranate', 'Tom Kha Soup'], 'https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png');

const Harvey = new NPC('Harvey', ['Coffee', 'Pickles', 'Super Meal', 'Truffle Oil', 'Wine'], 'https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png');

const Sam = new NPC('Sam', ['Cactus Fruit', 'Maple Bar', 'Pizza', 'Tigerseye'], 'https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png');

const Sebastian = new NPC('Sebastian', ['Frozen Tear', 'Obsidian', 'Pumpkin Soup', 'Sashami', 'Void Egg'], 'https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png');

const Shane = new NPC('Shane', ['Beer', 'Hot Pepper', 'Pepper Poppers', 'Pizza'], 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png');

const Abigal = new NPC('Abigal', ['Amethyst', 'Blackberry Cobbler', 'Chocolate Cake', 'Pufferfish', 'Pumpkin', 'Spicy Eel'], 'https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png');

const Emily = new NPC('Emily', ['Amethyst', 'Aquamarine', 'Cloth', 'Emerald', 'Jade', 'Ruby', 'Survivial Burger', 'Topaz', 'Wool'], 'https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png');

const Haley = new NPC('Haley', ['Coconut', 'Fruit Salad', 'Pink Cake', 'Sunflower'], 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png');

const Leah = new NPC('Leah', ['Goat Cheese', 'Poppyseed Muffin', 'Salad', 'Stir Fry', 'Truffle', 'Vegetable Medley', 'Wine'], 'https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png');

const Maru = new NPC('Maru', ['Battery Pack', 'Cauliflower', 'Cheese Cauliflower', 'Diamond', 'Gold Bar', 'Iridium Bar', 'Miner\'s Treat', 'Pepper Poppers', 'Rhubard Pie', 'Strawberry'], 'https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png');

const Penny = new NPC('Penny', ['Diamond', 'Emerald', 'Melon', 'Poppy', 'Poppyseed Muffin', 'Red Plate', 'Roots Platter', 'Sandfish', 'Tom Kha Soup'], 'https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png')

module.exports = [
  Alex,
  Elliot,
  Harvey,
  Sam, 
  Sebastian,
  Shane,
  Abigal,
  Emily,
  Haley,
  Leah,
  Maru,
  Penny
]