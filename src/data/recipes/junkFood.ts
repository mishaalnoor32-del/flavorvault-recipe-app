import { Recipe } from '../../types';

export const JUNK_FOOD_RECIPES: Recipe[] = [
  {
    id: 'jf-burger',
    title: 'Signature Smash Double Bacon Cheeseburger',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 1,
    rating: 5.0,
    reviewsCount: 512,
    difficulty: 'Easy',
    calories: 820,
    description: 'Crispy lacy-edged beef patties smashed onto a ripping hot flat top, melted American cheese, thick-cut smoky bacon, secret burger spread, and toasted brioche.',
    featured: true,
    tags: ['Crispy Lacy Edges', 'Melted American Cheese', 'Double Smash'],
    ingredients: [
      { id: 'bg1', name: '80/20 Fresh Ground Beef Chuck', amount: 200, unit: 'g', notes: 'Divided into two loose balls' },
      { id: 'bg2', name: 'Artisan Potato or Brioche Bun', amount: 1, unit: 'pc', notes: 'Buttered and griddled' },
      { id: 'bg3', name: 'Deluxe American Cheese Slices', amount: 2, unit: 'slices' },
      { id: 'bg4', name: 'Crispy Applewood Smoked Bacon', amount: 2, unit: 'strips' },
      { id: 'bg5', name: 'Vault Secret Sauce (Mayo, Relish, Mustard, Paprika)', amount: 2, unit: 'tbsp' },
      { id: 'bg6', name: 'Dill Pickle Chips & Shaved Iceberg', amount: 1, unit: 'serving' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat cast-iron skillet or griddle until smoking hot. Toast buttered brioche bun until deep golden brown.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Place cold beef balls on griddle. Using a heavy spatula and parchment, smash down firmly into paper-thin patties.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Season with coarse salt and pepper. Fry for 2 minutes until edges are crispy brown. Scrape underneath, flip, and immediately top each with American cheese.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Stack double patties together. Smear bottom bun with secret sauce, add pickles, stacked patties, bacon, and crown with top bun.', durationMinutes: 1 }
    ]
  },
  {
    id: 'jf-fries',
    title: 'Loaded Truffle Garlic Parmesan Fries',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 2,
    rating: 4.8,
    reviewsCount: 290,
    difficulty: 'Easy',
    calories: 520,
    description: 'Double-fried hand-cut Russet fries tossed in roasted garlic herb butter, white truffle oil, shaved aged Parmesan, and fresh curly parsley.',
    featured: true,
    tags: ['Double Fried', 'Truffle Glaze', 'Parmesan Loaded'],
    ingredients: [
      { id: 'fr1', name: 'Large Russet Potatoes', amount: 4, unit: 'pcs', notes: 'Cut into 1/4 inch batons' },
      { id: 'fr2', name: 'Aged Shaved Parmesan Cheese', amount: 60, unit: 'g' },
      { id: 'fr3', name: 'White Truffle Oil', amount: 1.5, unit: 'tbsp' },
      { id: 'fr4', name: 'Roasted Minced Garlic', amount: 1, unit: 'tbsp' },
      { id: 'fr5', name: 'Finely Chopped Fresh Parsley & Sea Salt Flakes', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Soak cut potato batons in ice water for 30 minutes to wash off excess starch. Pat completely dry.', durationMinutes: 30 },
      { stepNumber: 2, instruction: 'First fry: Fry potatoes in oil at 150°C (300°F) for 5 minutes until soft but pale. Drain on paper towels.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Second fry: Crank oil to 190°C (375°F) and fry for 3-4 minutes until ultra-crispy and amber golden.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Transfer immediately to a metal bowl; toss with roasted garlic, truffle oil, sea salt flakes, and mountain of shaved parmesan.', durationMinutes: 2 }
    ]
  },
  {
    id: 'jf-wings',
    title: 'Crispy Nashville Hot Buffalo Wings',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 3,
    rating: 4.9,
    reviewsCount: 340,
    difficulty: 'Medium',
    calories: 740,
    description: 'Extra crispy buttermilk-brined chicken wings dunked in a fiery cayenne-brown sugar spiced butter glaze, served with cool blue cheese dip.',
    featured: false,
    tags: ['Fiery Spice', 'Extra Crunch', 'Game Day Favorite'],
    ingredients: [
      { id: 'wg1', name: 'Fresh Chicken Party Wings (Flats & Drums)', amount: 1000, unit: 'g' },
      { id: 'wg2', name: 'Buttermilk & Pickle Brine', amount: 1, unit: 'cup' },
      { id: 'wg3', name: 'Nashville Spiced Glaze (Cayenne, Brown Sugar, Smoked Paprika, Hot Oil)', amount: 0.5, unit: 'cup' },
      { id: 'wg4', name: 'Dill Pickle Slices & Ranch Dip', amount: 1, unit: 'serving' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Brine chicken wings in seasoned buttermilk for 30 minutes.', durationMinutes: 30 },
      { stepNumber: 2, instruction: 'Dredge wings in seasoned cornstarch and flour; double-fry at 180°C until crust is shatteringly crisp.', durationMinutes: 15 },
      { stepNumber: 3, instruction: 'Ladle hot spicy chili oil glaze over fried wings in a bowl and shake gently until coated.', durationMinutes: 2 }
    ]
  },
  {
    id: 'jf-nachos',
    title: 'Supreme Loaded Cheesy Fiesta Nachos',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 4,
    rating: 4.8,
    reviewsCount: 215,
    difficulty: 'Easy',
    calories: 690,
    description: 'Crispy stone-ground tortilla chips layered with molten queso cheese, seasoned taco beef, pickled jalapeños, pico de gallo, and fresh guacamole.',
    featured: false,
    tags: ['Molten Queso', 'Guacamole & Salsa', 'Party Platter'],
    ingredients: [
      { id: 'nc1', name: 'Stone-Ground Corn Tortilla Chips', amount: 300, unit: 'g' },
      { id: 'nc2', name: 'Homemade Warm Cheddar Queso Sauce', amount: 1.5, unit: 'cups' },
      { id: 'nc3', name: 'Seasoned Ground Taco Beef / Black Beans', amount: 250, unit: 'g' },
      { id: 'nc4', name: 'Fresh Chunky Guacamole & Sour Cream', amount: 0.5, unit: 'cup' },
      { id: 'nc5', name: 'Pickled Jalapeño Rings & Pico de Gallo', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Arrange tortilla chips on a large oven-safe platter in two layered tiers.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Ladle warm melted queso cheese and spoon seasoned taco beef across each layer.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Bake for 5 minutes at 200°C until chips are hot and cheese is gooey.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Top with scoops of fresh guacamole, cool sour cream, jalapeños, and fresh pico de gallo.', durationMinutes: 2 }
    ]
  },
  {
    id: 'jf-mozzarella-sticks',
    title: 'Stretchy Golden Fried Mozzarella Sticks',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 8,
    servings: 3,
    rating: 4.9,
    reviewsCount: 310,
    difficulty: 'Easy',
    calories: 460,
    description: 'Thick batons of whole-milk mozzarella double-breaded in seasoned Italian herb panko, flash-fried to crunchy perfection with epic cheese pulls and warm marinara.',
    featured: false,
    tags: ['Epic Cheese Pull', 'Double Breaded', 'Herb Marinara Dip', 'Crispy Golden'],
    ingredients: [
      { id: 'ms1', name: 'Whole Milk Low-Moisture Mozzarella Block', amount: 350, unit: 'g', notes: 'Cut into 1/2 inch sticks' },
      { id: 'ms2', name: 'Italian Herb Seasoned Breadcrumbs & Panko', amount: 1.5, unit: 'cups' },
      { id: 'ms3', name: 'All-Purpose Flour & Garlic Powder', amount: 0.5, unit: 'cup' },
      { id: 'ms4', name: 'Large Eggs, whisked', amount: 2, unit: 'pcs' },
      { id: 'ms5', name: 'Warm Garlic Basil Marinara Sauce', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Dredge mozzarella sticks in seasoned flour, dip in beaten egg, and press firmly in herb panko breadcrumbs.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Dip back into egg and breadcrumb a second time to build a leak-proof crust.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Freeze sticks for at least 45 minutes to prevent cheese from blowing out in the fryer.', durationMinutes: 45 },
      { stepNumber: 4, instruction: 'Deep fry in hot oil at 190°C for 90 to 120 seconds until golden; drain and serve immediately with hot marinara.', durationMinutes: 3 }
    ]
  },
  {
    id: 'jf-bbq-sliders',
    title: 'Texas Pulled Pork Sliders with Tangy Slaw',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "/recipes/jf-bbq-sliders.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 4,
    rating: 4.9,
    reviewsCount: 280,
    difficulty: 'Easy',
    calories: 620,
    description: 'Sweet Hawaiian roll sliders packed with slow-smoked pulled pork smothered in sweet hickory BBQ sauce, topped with crunchy cider vinegar coleslaw and dill pickles.',
    featured: false,
    tags: ['Hawaiian Rolls', 'Hickory BBQ', 'Crisp Apple Cider Slaw', 'Game Day'],
    ingredients: [
      { id: 'ps1', name: 'Tender Smoked Pulled Pork', amount: 500, unit: 'g' },
      { id: 'ps2', name: 'Sweet Hawaiian Slider Buns (12-pack)', amount: 1, unit: 'pack' },
      { id: 'ps3', name: 'Smoky Texas BBQ Sauce', amount: 1, unit: 'cup' },
      { id: 'ps4', name: 'Crisp Cabbage Coleslaw with Cider Dressing', amount: 1.5, unit: 'cups' },
      { id: 'ps5', name: 'Melted Butter & Garlic Salt for bun tops', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Slice slider rolls horizontally as a connected slab; toast bottom half lightly.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Warm pulled pork in BBQ sauce until juicy and glossy; pile high over bottom buns.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Top with crunchy coleslaw and sliced pickles; cover with bun top slab.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Brush tops with garlic herb melted butter; bake at 180°C for 8 minutes until tops are golden and glazed.', durationMinutes: 8 }
    ]
  },
  {
    id: 'jf-onion-rings',
    title: 'Crispy Beer-Battered Colossal Onion Rings',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "/recipes/jf-onion-rings.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 3,
    rating: 4.8,
    reviewsCount: 195,
    difficulty: 'Easy',
    calories: 390,
    description: 'Thick slices of sweet Vidalia onions soaked in buttermilk, dredged in airy craft ale batter, and fried into shatteringly crisp golden halos.',
    featured: false,
    tags: ['Shatteringly Crisp', 'Craft Beer Batter', 'Sweet Vidalia', 'Comeback Sauce'],
    ingredients: [
      { id: 'or1', name: 'Large Sweet Vidalia Onions', amount: 2, unit: 'large pcs', notes: 'Cut into 1/2 inch rings' },
      { id: 'or2', name: 'Cold Craft Beer (Lager or Pale Ale)', amount: 1, unit: 'cup' },
      { id: 'or3', name: 'All-Purpose Flour & Cornstarch', amount: 1.5, unit: 'cups' },
      { id: 'or4', name: 'Baking Powder, Smoked Paprika & Garlic Salt', amount: 1, unit: 'tbsp' },
      { id: 'or5', name: 'Zesty Comeback Dipping Sauce', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Separate onion rings and remove the thin inner papery membrane so batter clings tightly.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Whisk cold beer, flour, cornstarch, baking powder, paprika, and salt into a smooth pancake-like batter.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Dust onion rings in dry flour, dip into beer batter, and drop carefully into 190°C hot oil.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Fry for 2-3 minutes until golden and puffy; drain on a wire rack and dust with sea salt.', durationMinutes: 4 }
    ]
  },
  {
    id: 'jf-philly-cheesesteak',
    title: 'Authentic Philly Ribeye Cheesesteak Sub',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "/recipes/jf-philly-cheesesteak.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 2,
    rating: 4.9,
    reviewsCount: 380,
    difficulty: 'Easy',
    calories: 780,
    description: 'Shaved prime ribeye seared on a sizzling flat top with sweet griddled onions, smothered in molten Cheez Whiz or sharp provolone on an authentic Amoroso roll.',
    featured: false,
    tags: ['Thin Shaved Ribeye', 'Griddled Onions', 'Molten Cheese Whiz', 'Philly Legend'],
    ingredients: [
      { id: 'cs1', name: 'Prime Beef Ribeye Steak (Semi-frozen)', amount: 450, unit: 'g', notes: 'Shaved paper thin' },
      { id: 'cs2', name: 'Sweet Yellow Onions', amount: 2, unit: 'pcs', notes: 'Diced small' },
      { id: 'cs3', name: 'Warm Cheez Whiz or Sliced Provolone', amount: 1, unit: 'cup' },
      { id: 'cs4', name: 'Authentic Soft Hoagie / Amoroso Rolls', amount: 2, unit: 'rolls', notes: 'Split' },
      { id: 'cs5', name: 'Salt & Fresh Coarse Black Pepper', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Sauté diced onions in oil on flat griddle until caramelized and sweet; push to cooler side.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Crank griddle heat high, toss shaved ribeye on, chopping rapidly with metal spatulas as it sears.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Mix onions back into the chopped steak; shape into roll-length portions and drape with provolone or ladle Whiz.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Place opened hoagie roll face-down over the cheesy meat pile, scoop underneath with spatula, and flip upright.', durationMinutes: 1 }
    ]
  },
  {
    id: 'jf-mac-bites',
    title: 'Deep Fried Bacon Mac & Cheese Bites',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "/recipes/jf-mac-bites.jpg",
    prepTimeMinutes: 25,
    cookTimeMinutes: 10,
    servings: 4,
    rating: 4.8,
    reviewsCount: 225,
    difficulty: 'Medium',
    calories: 540,
    description: 'Scoops of chilled extra-cheesy macaroni studded with smoky bacon bits, coated in panko breadcrumbs and fried into crunchy handheld spheres.',
    featured: false,
    tags: ['Triple Cheese', 'Smoky Bacon', 'Crunchy Shell', 'Finger Food'],
    ingredients: [
      { id: 'mb1', name: 'Thick Macaroni and Cheese (Cheddar & Gouda)', amount: 3, unit: 'cups', notes: 'Chilled firm' },
      { id: 'mb2', name: 'Crisp Crumbled Bacon Bits', amount: 0.5, unit: 'cup' },
      { id: 'mb3', name: 'Panko Breadcrumbs & Garlic Powder', amount: 2, unit: 'cups' },
      { id: 'mb4', name: 'Beaten Eggs & Flour for coating', amount: 2, unit: 'eggs' },
      { id: 'mb5', name: 'Chipotle Ranch Dipping Sauce', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Mix cold thick mac & cheese with crumbled bacon bits; use a cookie scoop to form firm golf-ball sized rounds.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Freeze balls on a parchment sheet for 30 minutes until solid.', durationMinutes: 30 },
      { stepNumber: 3, instruction: 'Dredge in flour, beaten egg, and press firmly into seasoned panko breadcrumbs.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Deep-fry at 180°C for 3-4 minutes until golden brown outside with molten gooey cheese inside.', durationMinutes: 4 }
    ]
  },
  {
    id: 'jf-corn-dogs',
    title: 'Golden Honey Batter Corn Dogs on a Stick',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "/recipes/jf-corn-dogs.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 4,
    rating: 4.8,
    reviewsCount: 240,
    difficulty: 'Easy',
    calories: 420,
    description: 'Juicy jumbo all-beef franks skewered and dipped into a thick sweet honey cornmeal batter, deep fried to a deep golden amber crust.',
    featured: false,
    tags: ['Carnival Classic', 'Sweet Honey Cornmeal', 'All-Beef Franks', 'Crispy Golden'],
    ingredients: [
      { id: 'cd1', name: 'Jumbo All-Beef Frankfurters', amount: 6, unit: 'pcs' },
      { id: 'cd2', name: 'Yellow Cornmeal & All-Purpose Flour', amount: 1.5, unit: 'cups' },
      { id: 'cd3', name: 'Wildflower Honey & Sugar', amount: 3, unit: 'tbsp' },
      { id: 'cd4', name: 'Buttermilk & 1 Egg', amount: 1, unit: 'cup' },
      { id: 'cd5', name: 'Wooden Skewers & Classic Yellow Mustard', amount: 6, unit: 'skewers' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Insert wooden skewers 3/4 way through beef franks; pat completely dry with paper towels.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Whisk cornmeal, flour, honey, buttermilk, egg, and baking powder in a tall drinking glass to create a thick batter.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Dip skewers straight down into the tall glass until hot dogs are coated evenly.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Spin directly into 180°C hot oil and fry for 4-5 minutes until deep golden brown all over.', durationMinutes: 5 }
    ]
  },
  {
    id: 'jf-tenders',
    title: 'Crispy Buttermilk Chicken Tenders with Honey Mustard',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 12,
    servings: 3,
    rating: 4.9,
    reviewsCount: 365,
    difficulty: 'Easy',
    calories: 560,
    description: 'Whole chicken tenderloins brined in seasoned pickle buttermilk, dredged in flaky seasoned flour flakes, and fried into craggy, juicy strips.',
    featured: false,
    tags: ['Craggy Crust', 'Buttermilk Brined', 'House Honey Mustard', 'Ultra Tender'],
    ingredients: [
      { id: 'ct1', name: 'Fresh Chicken Tenderloins', amount: 600, unit: 'g' },
      { id: 'ct2', name: 'Buttermilk & Pickle Juice', amount: 1, unit: 'cup' },
      { id: 'ct3', name: 'Flour & Cornstarch with Garlic & Onion Powder', amount: 2, unit: 'cups' },
      { id: 'ct4', name: 'Honey Mustard Sauce (Dijon, Mayo, Honey, Lemon)', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Marinate chicken tenders in buttermilk, pickle juice, and paprika for 20 minutes.', durationMinutes: 20 },
      { stepNumber: 2, instruction: 'Drizzle a few tablespoons of buttermilk marinade into the dry seasoned flour to create craggy flakes.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Press tenders firmly into seasoned flour flakes until densely coated.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Fry in 175°C oil for 5-6 minutes until craggy, crunchy, and golden brown.', durationMinutes: 6 }
    ]
  },
  {
    id: 'jf-calamari',
    title: 'Crispy Salt & Pepper Fried Calamari with Garlic Aioli',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "/recipes/jf-calamari.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    servings: 3,
    rating: 4.8,
    reviewsCount: 195,
    difficulty: 'Easy',
    calories: 410,
    description: 'Tender squid rings and tentacles dusted in a light cornstarch sea salt crust, flash-fried for two minutes, and served with roasted garlic aioli.',
    featured: false,
    tags: ['Tender Squid', 'Light & Crunchy', 'Garlic Aioli Dip', 'Quick Fry'],
    ingredients: [
      { id: 'sq1', name: 'Fresh Squid Tubes & Tentacles', amount: 500, unit: 'g', notes: 'Cut into rings' },
      { id: 'sq2', name: 'Cornstarch & Rice Flour blend', amount: 1.5, unit: 'cups' },
      { id: 'sq3', name: 'Sichuan Pepper, White Pepper & Sea Salt', amount: 1.5, unit: 'tbsp' },
      { id: 'sq4', name: 'Sliced Red Jalapeños & Scallions', amount: 0.5, unit: 'cup' },
      { id: 'sq5', name: 'Roasted Garlic Mayo Aioli & Lemon Wedges', amount: 1, unit: 'serving' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Soak calamari rings in milk for 10 minutes to tenderize; drain well.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Toss rings in seasoned cornstarch and rice flour mix, shaking in a wire strainer to discard excess.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Drop into 195°C hot oil in batches for just 90 to 120 seconds until crisp and pale golden.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Toss immediately with sea salt flakes, sliced fresh chilies, scallions, and serve with lemon aioli.', durationMinutes: 2 }
    ]
  },
  {
    id: 'jf-pizza-pockets',
    title: 'Deep Dish Stuffed Pepperoni Pizza Pockets',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    rating: 4.9,
    reviewsCount: 275,
    difficulty: 'Medium',
    calories: 580,
    description: 'Flaky golden pizza dough stuffed with spiced pepperoni slices, mozzarella, ricotta cheese, and zesty marinara, baked until puffy and brushed with garlic butter.',
    featured: false,
    tags: ['Cheesy Pocket', 'Spiced Pepperoni', 'Garlic Butter Glaze', 'Snack Attack'],
    ingredients: [
      { id: 'pp1', name: 'Artisan Pizza Dough', amount: 500, unit: 'g', notes: 'Divided into 4 portions' },
      { id: 'pp2', name: 'Sliced Spiced Pepperoni', amount: 150, unit: 'g' },
      { id: 'pp3', name: 'Shredded Low-Moisture Mozzarella', amount: 200, unit: 'g' },
      { id: 'pp4', name: 'Zesty Pizza Sauce & Whole Milk Ricotta', amount: 1, unit: 'cup' },
      { id: 'pp5', name: 'Melted Garlic Herb Butter & Parmesan', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Roll each dough ball into an oval disc on a floured surface.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Spread pizza sauce on one half; pile pepperoni, ricotta dollops, and mozzarella generously.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Fold other half over, crimp edges tightly with a fork, and cut three steam vents on top.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Bake at 220°C for 14-16 minutes until golden brown; brush with garlic butter and dust parmesan immediately.', durationMinutes: 15 }
    ]
  },
  {
    id: 'jf-chili-dog',
    title: 'Loaded Coney Island Beef Chili Cheese Dog',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 2,
    rating: 4.8,
    reviewsCount: 210,
    difficulty: 'Easy',
    calories: 640,
    description: 'Griddled beef franks nestled in steamed buns, smothered with rich spiced no-bean Coney Island beef chili, shredded cheddar, and minced sweet onions.',
    featured: false,
    tags: ['Coney Island Chili', 'Griddled Franks', 'Sharp Cheddar', 'Boardwalk Classic'],
    ingredients: [
      { id: 'cd1', name: 'Jumbo Natural Casing Beef Hot Dogs', amount: 4, unit: 'pcs' },
      { id: 'cd2', name: 'Coney Island Spiced Ground Beef Chili', amount: 1.5, unit: 'cups' },
      { id: 'cd3', name: 'Freshly Shredded Sharp Cheddar Cheese', amount: 1, unit: 'cup' },
      { id: 'cd4', name: 'Steamed Hot Dog Buns', amount: 4, unit: 'buns' },
      { id: 'cd5', name: 'Diced White Onions & Yellow Mustard', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Sear beef hot dogs on a medium-hot buttered griddle until casings snap and brown.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Steam hot dog buns until soft and warm.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Nestle hot dogs into buns, ladle piping-hot meaty Coney chili down the center.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Top generously with shredded cheddar, diced raw onions, and a zigzag of yellow mustard.', durationMinutes: 2 }
    ]
  },
  {
    id: 'jf-waffle-fries',
    title: 'Loaded Cajun Pulled Chicken Waffle Fries',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 3,
    rating: 4.9,
    reviewsCount: 230,
    difficulty: 'Easy',
    calories: 610,
    description: 'Crisp criss-cut waffle fries seasoned with spicy Cajun dust, topped with shredded barbecue pulled chicken, creamy white queso, scallions, and bacon.',
    featured: false,
    tags: ['Criss-Cut Waffle Fries', 'Cajun Dust', 'White Queso', 'Pulled Chicken'],
    ingredients: [
      { id: 'wf1', name: 'Frozen or Hand-cut Waffle Cut Potatoes', amount: 500, unit: 'g' },
      { id: 'wf2', name: 'Cajun Blackened Seasoning', amount: 1.5, unit: 'tbsp' },
      { id: 'wf3', name: 'Shredded BBQ Chicken', amount: 250, unit: 'g' },
      { id: 'wf4', name: 'Melted White Queso Blanco Cheese Sauce', amount: 1, unit: 'cup' },
      { id: 'wf5', name: 'Crumbled Bacon, Sliced Jalapeños & Scallions', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Deep fry waffle fries at 190°C until extra crispy and golden; drain on rack and toss with Cajun seasoning.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Spread spiced waffle fries onto a cast-iron skillet or baking sheet.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Layer warm shredded BBQ chicken across the fries and drizzle hot white queso blanco generously.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Garnish with crispy bacon crumbles, pickled jalapeño coins, and sliced green scallions.', durationMinutes: 2 }
    ]
  },
  {
    id: 'jf-nashville-sandwich',
    title: 'Giant Nashville Crispy Fried Chicken Sandwich',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 2,
    rating: 5.0,
    reviewsCount: 480,
    difficulty: 'Medium',
    calories: 790,
    description: 'Jumbo buttermilk-brined chicken breast fried into a rugged crunchy exterior, dunked in scorching cayenne-brown sugar chili oil on toasted brioche with slaw and pickles.',
    featured: false,
    tags: ['Nashville Heat', 'Giant Fried Cutlet', 'Sweet Heat Chili Oil', 'Toasted Brioche'],
    ingredients: [
      { id: 'ns1', name: 'Large Chicken Breasts', amount: 2, unit: 'pcs', notes: 'Brined in buttermilk' },
      { id: 'ns2', name: 'Nashville Hot Oil Glaze (Cayenne, Brown Sugar, Garlic, Hot Oil)', amount: 0.5, unit: 'cup' },
      { id: 'ns3', name: 'Brioche Burger Buns', amount: 2, unit: 'buns', notes: 'Buttered & toasted' },
      { id: 'ns4', name: 'Creamy Apple Cider Coleslaw', amount: 1, unit: 'cup' },
      { id: 'ns5', name: 'Thick-cut Dill Pickle Chips', amount: 8, unit: 'chips' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Dredge buttermilk-soaked chicken breasts in seasoned flour with cornstarch, creating crunchy crags.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Fry in oil at 175°C for 7-8 minutes until golden and internal temperature reads 74°C (165°F).', durationMinutes: 8 },
      { stepNumber: 3, instruction: 'Whisk hot frying oil with cayenne, brown sugar, and spices; dip hot fried chicken entirely into spicy red glaze.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Assemble on griddled brioche with bottom mayo, pickles, giant chicken breast, and creamy slaw.', durationMinutes: 2 }
    ]
  },
  {
    id: 'jf-jalapeno-poppers',
    title: 'Bacon & Cheddar Stuffed Fried Jalapeño Poppers',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "/recipes/jf-jalapeno-poppers.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 4,
    rating: 4.8,
    reviewsCount: 220,
    difficulty: 'Easy',
    calories: 430,
    description: 'Fresh green jalapeño peppers hollowed and stuffed with a rich blend of cream cheese, sharp cheddar, smoked bacon, and chives, encased in a crispy panko shell.',
    featured: false,
    tags: ['Cream Cheese Filled', 'Spicy Jalapeño', 'Panko Crust', 'Party Appetizer'],
    ingredients: [
      { id: 'jp1', name: 'Fresh Jalapeño Peppers', amount: 10, unit: 'pcs', notes: 'Halved lengthwise & seeded' },
      { id: 'jp2', name: 'Philadelphia Cream Cheese', amount: 200, unit: 'g', notes: 'Softened' },
      { id: 'jp3', name: 'Shredded Sharp Cheddar & Crispy Bacon', amount: 1, unit: 'cup' },
      { id: 'jp4', name: 'Seasoned Breadcrumbs & Beaten Eggs', amount: 1.5, unit: 'cups' },
      { id: 'jp5', name: 'Cool Buttermilk Ranch Dressing for dipping', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Mix cream cheese, shredded cheddar, crumbled cooked bacon, garlic powder, and chives until smooth.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Stuff filling firmly into hollowed jalapeño halves.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Dredge filled jalapeños in flour, egg wash, and coat thoroughly with panko breadcrumbs.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Fry in 180°C hot oil for 3-4 minutes until golden brown; serve hot with cold buttermilk ranch.', durationMinutes: 4 }
    ]
  },
  {
    id: 'jf-deep-dish-slice',
    title: 'Chicago Deep Dish Meat Lovers Pizza Slice',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 30,
    cookTimeMinutes: 35,
    servings: 4,
    rating: 4.9,
    reviewsCount: 310,
    difficulty: 'Medium',
    calories: 720,
    description: 'Buttery cornmeal-infused crust pressed high into a deep cake pan, loaded with pounds of mozzarella, Italian fennel sausage, pepperoni, and chunky crushed tomato sauce.',
    featured: false,
    tags: ['Chicago Style', 'Cornmeal Butter Crust', 'Fennel Sausage', 'Gooey Cheese'],
    ingredients: [
      { id: 'dd1', name: 'Cornmeal & Butter Yeast Dough', amount: 450, unit: 'g' },
      { id: 'dd2', name: 'Sliced Whole Milk Mozzarella', amount: 350, unit: 'g', notes: 'Layered at base' },
      { id: 'dd3', name: 'Raw Italian Sweet Fennel Sausage', amount: 250, unit: 'g', notes: 'Patted flat' },
      { id: 'dd4', name: 'Pepperoni Slices', amount: 100, unit: 'g' },
      { id: 'dd5', name: 'Chunky Crushed San Marzano Tomatoes with Oregano & Garlic', amount: 2, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Press butter dough into bottom and 2 inches up the walls of a deep oiled round cake pan.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Layer sliced mozzarella directly on the dough base (prevents crust sogginess).', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Cover cheese with flattened Italian sausage and pepperoni slices.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Ladle thick chunky tomato sauce over meats, sprinkle grated parmesan, and bake at 220°C for 35 mins until crust is deep golden.', durationMinutes: 35 }
    ]
  },
  {
    id: 'jf-fried-pickles',
    title: 'Crispy Beer-Battered Fried Pickle Chips with Ranch',
    category: 'junk-food',
    categoryLabel: 'Junk Food',
    imageUrl: "/recipes/jf-fried-pickles.jpg",
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    servings: 3,
    rating: 4.7,
    reviewsCount: 180,
    difficulty: 'Easy',
    calories: 320,
    description: 'Crinkle-cut kosher dill pickle chips soaked in buttermilk, tossed in seasoned cajun flour, and fried until extra crisp and tangy.',
    featured: false,
    tags: ['Kosher Dill', 'Tangy & Salty', 'Buttermilk Ranch Dip', 'Bar Snack'],
    ingredients: [
      { id: 'fp1', name: 'Crinkle-Cut Kosher Dill Pickle Chips', amount: 2, unit: 'cups', notes: 'Patted dry' },
      { id: 'fp2', name: 'Buttermilk', amount: 0.5, unit: 'cup' },
      { id: 'fp3', name: 'All-Purpose Flour & Cornmeal', amount: 1.5, unit: 'cups' },
      { id: 'fp4', name: 'Cajun Seasoning & Garlic Powder', amount: 1, unit: 'tbsp' },
      { id: 'fp5', name: 'Homemade Herb Buttermilk Ranch', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Pat pickle chips thoroughly between layers of paper towels to remove brine moisture.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Dip pickles into buttermilk and dredge in cornmeal flour spice mix, tossing until separated.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Drop into 190°C hot oil for 2-3 minutes until golden brown and floating.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Drain on wire rack and serve piping hot with chilled homemade ranch dip.', durationMinutes: 2 }
    ]
  }
];
