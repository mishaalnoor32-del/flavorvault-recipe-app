import { Recipe } from '../../types';

export const BREAKFAST_RECIPES: Recipe[] = [
  {
    id: 'bf-pancakes',
    title: 'Japanese Cloud Soufflé Pancakes',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 2,
    rating: 4.9,
    reviewsCount: 382,
    difficulty: 'Medium',
    calories: 360,
    description: 'Sky-high, ultra-fluffy Japanese soufflé pancakes that jiggle with delicate steam, served with whipped cultured butter, pure Canadian maple syrup, and fresh berries.',
    featured: true,
    tags: ['Ultra Fluffy', 'Japanese Cafe', 'Soufflé Meringue', 'Sweet Morning'],
    ingredients: [
      { id: 'bp1', name: 'Fresh Farm Egg Whites (chilled)', amount: 3, unit: 'whites' },
      { id: 'bp2', name: 'Farm Egg Yolks', amount: 2, unit: 'yolks' },
      { id: 'bp3', name: 'Cake Flour (sifted)', amount: 40, unit: 'g' },
      { id: 'bp4', name: 'Whole Milk', amount: 25, unit: 'ml' },
      { id: 'bp5', name: 'Fine Caster Sugar', amount: 35, unit: 'g' },
      { id: 'bp6', name: 'Pure Madagascar Vanilla Extract', amount: 0.5, unit: 'tsp' },
      { id: 'bp7', name: 'Pure Grade-A Canadian Maple Syrup', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Whisk egg yolks, whole milk, and vanilla until pale. Gently fold in sifted cake flour to form a smooth batter without lumps.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'In a chilled stainless bowl, whip egg whites while gradually adding caster sugar until glossy stiff peaks form (meringue).', durationMinutes: 6, tip: 'Stiff meringue is the secret to tall pancakes that do not deflate.' },
      { stepNumber: 3, instruction: 'Gently fold 1/3 of meringue into yolk mixture, then fold back into remaining meringue with slow cutting strokes.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Preheat non-stick electric griddle to 140°C (285°F). Scoop tall mounds of batter, add 1 tsp water to griddle, cover with lid, and steam-cook for 5 mins per side.', durationMinutes: 10 },
      { stepNumber: 5, instruction: 'Stack pancakes high, crown with whipped cultured butter, dust powdered sugar, and pour warm maple syrup.', durationMinutes: 2 }
    ]
  },
  {
    id: 'bf-shakshuka',
    title: 'Artisan Mediterranean Shakshuka',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 3,
    rating: 4.8,
    reviewsCount: 295,
    difficulty: 'Easy',
    calories: 340,
    description: 'Farm eggs gently poached in a sizzling cast-iron skillet of spiced San Marzano tomato sauce, sweet bell peppers, smoked paprika, cumin, and creamy feta cheese.',
    featured: true,
    tags: ['Cast Iron', 'Poached Eggs', 'Spiced Tomato', 'Vegetarian'],
    ingredients: [
      { id: 'sh1', name: 'Fresh Free-Range Eggs', amount: 4, unit: 'pcs' },
      { id: 'sh2', name: 'Whole San Marzano Tomatoes (hand-crushed)', amount: 400, unit: 'g' },
      { id: 'sh3', name: 'Red & Yellow Sweet Bell Peppers', amount: 2, unit: 'pcs', notes: 'Thinly sliced' },
      { id: 'sh4', name: 'Crumbled Greek Sheep Milk Feta', amount: 80, unit: 'g' },
      { id: 'sh5', name: 'Ground Toasted Cumin & Smoked Spanish Paprika', amount: 1.5, unit: 'tbsp' },
      { id: 'sh6', name: 'Crusty Sourdough Boule slices', amount: 3, unit: 'slices', notes: 'Toasted with olive oil' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat olive oil in a 10-inch cast iron skillet; sauté sliced bell peppers, onions, and minced garlic for 8 minutes until softened and sweet.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Add ground cumin, smoked paprika, coriander, and chili flakes. Toast spices for 1 minute until fragrant.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Pour hand-crushed tomatoes; simmer on medium-low for 10 minutes until thick and aromatic.', durationMinutes: 10 },
      { stepNumber: 4, instruction: 'Create small wells with back of a spoon and gently slide whole eggs into each well.', durationMinutes: 2 },
      { stepNumber: 5, instruction: 'Cover skillet and cook gently for 5-7 minutes until whites are just set and yolks remain liquid gold. Crumble feta and fresh cilantro on top.', durationMinutes: 6 }
    ]
  },
  {
    id: 'bf-toast',
    title: 'Poached Egg & Truffle Avocado Brioche',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    servings: 2,
    rating: 4.8,
    reviewsCount: 210,
    difficulty: 'Easy',
    calories: 420,
    description: 'Thick griddled butter brioche toast crowned with smashed Hass avocado, silky 63°C soft-poached eggs, white truffle oil, and Japanese togarashi chili flakes.',
    featured: false,
    tags: ['Artisan Brioche', 'Jammy Poached Egg', 'Truffle Infusion', '15 Min'],
    ingredients: [
      { id: 'av1', name: 'Thick Cut Artisan Brioche Bread', amount: 2, unit: 'slices' },
      { id: 'av2', name: 'Ripe Hass Avocados', amount: 2, unit: 'pcs', notes: 'Slightly chunky smash' },
      { id: 'av3', name: 'Fresh Organic Eggs', amount: 2, unit: 'pcs', notes: 'For soft poaching' },
      { id: 'av4', name: 'Cold-Pressed White Truffle Oil', amount: 1, unit: 'tsp' },
      { id: 'av5', name: 'Microgreens & Aleppo Chili Flakes', amount: 1, unit: 'tbsp' },
      { id: 'av6', name: 'Flaky Maldon Sea Salt & Fresh Lime Juice', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Toast thick-cut brioche slices in foaming butter in a pan until golden and caramelized on both edges.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Roughly mash avocados with lime juice, flaky sea salt, and freshly cracked black pepper.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Poach eggs in simmering water with a drop of white vinegar for exactly 3 minutes 30 seconds until whites are set and yolks are runny.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Spread avocado across warm brioche, crown each with a poached egg, drizzle white truffle oil, and scatter microgreens.', durationMinutes: 2 }
    ]
  },
  {
    id: 'bf-halwa-puri',
    title: 'Lahori Halwa Puri Chana Platter',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "/recipes/bf-halwa-puri.jpg",
    prepTimeMinutes: 25,
    cookTimeMinutes: 25,
    servings: 4,
    rating: 5.0,
    reviewsCount: 460,
    difficulty: 'Medium',
    calories: 680,
    description: 'Puffed, paper-thin golden fried puris served with fragrant cardamom-saffron sooji halwa, tangy Lahori chana tarkari, and spiced pickled mangoes.',
    featured: false,
    tags: ['Traditional Feast', 'Puffed Puris', 'Saffron Halwa', 'Lahori Heritage'],
    ingredients: [
      { id: 'hp1', name: 'All-Purpose Flour (Maida) for Puris', amount: 350, unit: 'g' },
      { id: 'hp2', name: 'Fine Semolina (Sooji) for Halwa', amount: 150, unit: 'g' },
      { id: 'hp3', name: 'Boiled Chickpeas (Chana tarkari)', amount: 300, unit: 'g' },
      { id: 'hp4', name: 'Pure Desi Ghee', amount: 100, unit: 'g' },
      { id: 'hp5', name: 'Kewra Water, Cardamom & Saffron', amount: 1, unit: 'tsp' },
      { id: 'hp6', name: 'Mustard Oil Mango Achar', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Knead maida dough with a touch of ghee and salt; rest for 20 minutes under a damp cloth.', durationMinutes: 20 },
      { stepNumber: 2, instruction: 'Roast sooji in desi ghee until aromatic; add hot saffron-cardamom sugar water and stir vigorously until smooth and glossy.', durationMinutes: 10 },
      { stepNumber: 3, instruction: 'Simmer chickpeas with kalonji, crushed fenugreek, turmeric, and dried mango powder (amchur) into a tangy gravy.', durationMinutes: 15 },
      { stepNumber: 4, instruction: 'Roll dough into thin discs and flash fry in smoking ghee for 8 seconds per side until puffed and golden.', durationMinutes: 8 }
    ]
  },
  {
    id: 'bf-acai-bowl',
    title: 'Amazonian Açaí Superfood Breakfast Bowl',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "/recipes/bf-acai-bowl.jpg",
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    servings: 1,
    rating: 4.8,
    reviewsCount: 195,
    difficulty: 'Easy',
    calories: 310,
    description: 'Thick frozen wild Amazonian açaí blended with ripe bananas and coconut water, topped with crunchy honey oat granola, fresh strawberries, blueberries, chia seeds, and raw honey.',
    featured: false,
    tags: ['Antioxidant Rich', 'Superfood Bowl', 'Vegan Friendly', 'No Cooking'],
    ingredients: [
      { id: 'ab1', name: 'Organic Pure Frozen Açaí Puree', amount: 100, unit: 'g' },
      { id: 'ab2', name: 'Frozen Bananas & Mixed Berries', amount: 1.5, unit: 'cups' },
      { id: 'ab3', name: 'Raw Coconut Water', amount: 80, unit: 'ml' },
      { id: 'ab4', name: 'Artisan Honey Almond Granola', amount: 0.5, unit: 'cup' },
      { id: 'ab5', name: 'Fresh Strawberries, Blueberries & Chia Seeds', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Add frozen açaí pack, frozen bananas, and coconut water into high-powered blender.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Blend using tamper on high speed until ultra-thick soft-serve consistency.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Spoon into a chilled bowl and smooth surface with back of spoon.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Artfully arrange granola, fresh sliced berries, chia seeds, and drizzle with raw wildflower honey.', durationMinutes: 3 }
    ]
  },
  {
    id: 'bf-belgian-waffle',
    title: 'Golden Crisp Belgian Buttermilk Waffles',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 3,
    rating: 4.9,
    reviewsCount: 310,
    difficulty: 'Easy',
    calories: 450,
    description: 'Deep-pocketed Liege-inspired Belgian waffles with a light, airy center and shatteringly crisp golden crust, served with whipped maple cinnamon butter and warm fruit compote.',
    featured: false,
    tags: ['Deep Pockets', 'Extra Crisp', 'Whipped Butter', 'Weekend Brunch'],
    ingredients: [
      { id: 'bw1', name: 'All-Purpose Flour & Cornstarch', amount: 2, unit: 'cups' },
      { id: 'bw2', name: 'Cultured Whole Buttermilk', amount: 1.75, unit: 'cups' },
      { id: 'bw3', name: 'Melted European Butter', amount: 80, unit: 'g' },
      { id: 'bw4', name: 'Separated Eggs (whites whipped to stiff peaks)', amount: 2, unit: 'pcs' },
      { id: 'bw5', name: 'Pure Maple Syrup & Whipped Cinnamon Butter', amount: 1, unit: 'serving' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Whisk dry ingredients in large bowl; whisk egg yolks, buttermilk, and melted butter in another bowl.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Whip egg whites until stiff peaks form; fold into batter gently to preserve airy bubbles.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Ladle batter into screaming hot preheated Belgian waffle iron; cook for 4-5 minutes until deep golden brown and steam ceases.', durationMinutes: 6 },
      { stepNumber: 4, instruction: 'Transfer to a wire rack to maintain crispness; top with whipped butter and pure maple syrup.', durationMinutes: 2 }
    ]
  },
  {
    id: 'bf-croque-madame',
    title: 'Parisian Croque Madame with Silky Béchamel',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "/recipes/bf-croque-madame.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 2,
    rating: 4.9,
    reviewsCount: 265,
    difficulty: 'Medium',
    calories: 610,
    description: 'Artisan levain sourdough sandwich layered with French jambon de Paris and cave-aged Gruyère, smothered in nutmeg béchamel and crowned with a sunny-side up egg.',
    featured: false,
    tags: ['French Bistro', 'Gruyère Cheese', 'Nutmeg Béchamel', 'Sunny Egg'],
    ingredients: [
      { id: 'cm1', name: 'Country Sourdough Bread Slices', amount: 4, unit: 'slices' },
      { id: 'cm2', name: 'French Smoked Ham (Jambon de Paris)', amount: 150, unit: 'g' },
      { id: 'cm3', name: 'Grated Cave-Aged Gruyère Cheese', amount: 150, unit: 'g' },
      { id: 'cm4', name: 'Velvety Béchamel Sauce with Fresh Nutmeg', amount: 1, unit: 'cup' },
      { id: 'cm5', name: 'Dijon Mustard & 2 Farm Eggs', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Lightly toast sourdough; spread thin layer of Dijon mustard and warm béchamel inside.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Layer ham and plenty of shredded Gruyère; close sandwich and ladle béchamel across top.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Broil in 220°C oven for 6-8 minutes until top béchamel and cheese are bubbling with bronzed blisters.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Fry eggs in butter sunny-side up with liquid runny yolks; slide one egg onto each sandwich.', durationMinutes: 3 }
    ]
  },
  {
    id: 'bf-eggs-benedict',
    title: 'Classic Eggs Benedict with Lemon Hollandaise',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 2,
    rating: 4.8,
    reviewsCount: 340,
    difficulty: 'Hard',
    calories: 540,
    description: 'Toasted fork-split English muffins topped with seared Canadian bacon, delicate poached eggs, warm velvety lemon butter hollandaise, and fresh chives.',
    featured: false,
    tags: ['Warm Hollandaise', 'Poached Eggs', 'English Muffin', 'Brunch Royalty'],
    ingredients: [
      { id: 'eb1', name: 'English Muffins, split and toasted', amount: 2, unit: 'muffins' },
      { id: 'eb2', name: 'Canadian Bacon or Thick Ham steaks', amount: 4, unit: 'slices' },
      { id: 'eb3', name: 'Fresh Farm Eggs for poaching', amount: 4, unit: 'pcs' },
      { id: 'eb4', name: 'Egg Yolks for Hollandaise', amount: 3, unit: 'yolks' },
      { id: 'eb5', name: 'Clarified Warm Butter & Fresh Lemon Juice', amount: 120, unit: 'ml' },
      { id: 'eb6', name: 'Cayenne Pepper & Fresh Chives', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Whisk egg yolks and lemon juice over a gentle water bath; slowly stream warm clarified butter while whisking vigorously until hollandaise is thick and silky.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Sear Canadian bacon slices on griddle until lightly browned.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Poach eggs in gentle simmering water for 3.5 minutes until whites set around runny yolks.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Assemble on toasted muffin halves: bacon, poached egg, generous blanket of warm hollandaise, and snips of chives.', durationMinutes: 2 }
    ]
  },
  {
    id: 'bf-french-toast',
    title: 'Brioche Cinnamon Swirl French Toast',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    servings: 2,
    rating: 4.9,
    reviewsCount: 380,
    difficulty: 'Easy',
    calories: 490,
    description: 'Thick slabs of rich egg brioche soaked in vanilla bean custard, pan-caramelized in golden butter with cinnamon sugar, and crowned with whipped mascarpone.',
    featured: false,
    tags: ['Vanilla Custard', 'Caramelized Brioche', 'Cinnamon Sugar', 'Whipped Mascarpone'],
    ingredients: [
      { id: 'ft1', name: 'Thick-Cut Brioche Loaf slices', amount: 4, unit: 'slices' },
      { id: 'ft2', name: 'Large Whole Eggs & Egg Yolk', amount: 3, unit: 'pcs' },
      { id: 'ft3', name: 'Heavy Cream & Whole Milk', amount: 0.75, unit: 'cup' },
      { id: 'ft4', name: 'Ceylon Cinnamon & Pure Vanilla Extract', amount: 1, unit: 'tbsp' },
      { id: 'ft5', name: 'Salted European Butter & Mascarpone', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Whisk eggs, cream, milk, vanilla, cinnamon, and a pinch of salt in a wide dish.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Submerge thick brioche slices for 40 seconds per side until custard is fully absorbed into crumb.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Melt generous butter in a heavy skillet over medium heat; cook toast for 3-4 minutes per side until deeply golden and custardy.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Dust with powdered sugar, top with a quenelle of whipped mascarpone and warm maple syrup.', durationMinutes: 2 }
    ]
  },
  {
    id: 'bf-chia-pudding',
    title: 'Coconut Vanilla Chia Seed Pudding with Mango',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "/recipes/bf-chia-pudding.jpg",
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    servings: 2,
    rating: 4.7,
    reviewsCount: 180,
    difficulty: 'Easy',
    calories: 240,
    description: 'Black organic chia seeds soaked overnight in creamy coconut milk and Madagascar vanilla bean paste, layered with fresh Alphonso mango puree and toasted coconut flakes.',
    featured: false,
    tags: ['Overnight Prep', 'Omega-3 Rich', 'Dairy-Free', 'Tropical Flavors'],
    ingredients: [
      { id: 'cp1', name: 'Organic Black Chia Seeds', amount: 6, unit: 'tbsp' },
      { id: 'cp2', name: 'Full-Fat Coconut Milk & Almond Milk', amount: 1.5, unit: 'cups' },
      { id: 'cp3', name: 'Pure Vanilla Bean Paste', amount: 1, unit: 'tsp' },
      { id: 'cp4', name: 'Fresh Ripe Mango Puree', amount: 1, unit: 'cup' },
      { id: 'cp5', name: 'Toasted Unsweetened Coconut Flakes', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Whisk chia seeds, coconut milk, maple syrup, and vanilla bean paste in a bowl.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Let sit for 10 minutes and whisk again to prevent seeds from settling at bottom.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Cover and refrigerate for at least 4 hours (or overnight) until thick and gelatinous.', durationMinutes: 240 },
      { stepNumber: 4, instruction: 'Layer in parfait glasses alternating chia pudding and sweet fresh mango puree; finish with toasted coconut.', durationMinutes: 3 }
    ]
  },
  {
    id: 'bf-breakfast-burrito',
    title: 'Loaded Santa Fe Chorizo Breakfast Burrito',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 2,
    rating: 4.9,
    reviewsCount: 320,
    difficulty: 'Easy',
    calories: 680,
    description: 'Giant warm flour tortilla packed with crispy spiced Mexican chorizo, soft scrambled eggs, crispy hash brown cubes, melted Monterey Jack cheese, and charred salsa verde.',
    featured: false,
    tags: ['Spiced Chorizo', 'Crispy Hashbrowns', 'Melted Monterey Jack', 'Salsa Verde'],
    ingredients: [
      { id: 'bb1', name: 'Large Flour Tortillas (12-inch)', amount: 2, unit: 'tortillas' },
      { id: 'bb2', name: 'Spiced Mexican Pork or Soy Chorizo', amount: 200, unit: 'g' },
      { id: 'bb3', name: 'Farm Fresh Eggs (soft scrambled with cream)', amount: 4, unit: 'eggs' },
      { id: 'bb4', name: 'Crispy Diced Hash Brown Potatoes', amount: 1, unit: 'cup' },
      { id: 'bb5', name: 'Shredded Monterey Jack Cheese & Salsa Verde', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Brown Mexican chorizo in a skillet until crisp; fry hash brown cubes in oil until crunchy golden.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Gently scramble eggs in butter over low heat until velvety and just set.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Warm tortillas on comal; layer shredded cheese, warm hash browns, chorizo, scrambled eggs, and salsa verde.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Fold in sides and roll tightly; griddle seam-side down on hot dry skillet for 1 minute for a toasted seal.', durationMinutes: 3 }
    ]
  },
  {
    id: 'bf-granola-parfait',
    title: 'Honey Nut Granola & Greek Yogurt Berry Parfait',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 8,
    cookTimeMinutes: 0,
    servings: 2,
    rating: 4.8,
    reviewsCount: 160,
    difficulty: 'Easy',
    calories: 280,
    description: 'Tall glasses layered with thick strained authentic Greek yogurt, house-toasted maple pecan granola, macerated blackberry compote, and wild thyme honey.',
    featured: false,
    tags: ['High Protein', 'Greek Yogurt', 'Toasted Pecans', 'Wild Thyme Honey'],
    ingredients: [
      { id: 'gp1', name: 'Whole Milk Greek Strained Yogurt', amount: 2, unit: 'cups' },
      { id: 'gp2', name: 'Maple Toasted Pecan Granola', amount: 1, unit: 'cup' },
      { id: 'gp3', name: 'Fresh Raspberries, Blackberries & Blueberries', amount: 1.5, unit: 'cups' },
      { id: 'gp4', name: 'Wild Thyme Raw Honey', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Whisk Greek yogurt with a splash of vanilla and 1 tsp honey until glossy and smooth.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Macerate half the berries with a squeeze of lemon juice for 5 minutes to release sweet juices.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Layer yogurt, crunchy granola, and berry compote in glass tumblers twice.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Finish with whole fresh berries and a generous spiral of golden raw honey.', durationMinutes: 1 }
    ]
  },
  {
    id: 'bf-spanish-tortilla',
    title: 'Traditional Spanish Tortilla Española',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "/recipes/bf-spanish-tortilla.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    servings: 4,
    rating: 4.9,
    reviewsCount: 310,
    difficulty: 'Medium',
    calories: 380,
    description: 'Authentic Spanish potato and sweet onion omelette slow-confit in fragrant olive oil, mixed with whisked eggs and cooked to a creamy, juicy center.',
    featured: false,
    tags: ['Slow Olive Oil Confit', 'Creamy Center', 'Spanish Tapas Classic', 'Potato & Onion'],
    ingredients: [
      { id: 'te1', name: 'Yukon Gold Potatoes', amount: 600, unit: 'g', notes: 'Peeled & thinly sliced' },
      { id: 'te2', name: 'Yellow Sweet Onions', amount: 2, unit: 'pcs', notes: 'Thinly sliced' },
      { id: 'te3', name: 'Spanish Extra Virgin Olive Oil', amount: 1, unit: 'cup' },
      { id: 'te4', name: 'Large Farm Eggs', amount: 6, unit: 'pcs' },
      { id: 'te5', name: 'Flaky Sea Salt', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Slowly confit potatoes and onions in olive oil over medium-low heat for 20 minutes until tender without browning.', durationMinutes: 20 },
      { stepNumber: 2, instruction: 'Drain potatoes and onion, reserving aromatic oil; fold gently into whisked salted eggs and rest 10 minutes.', durationMinutes: 10 },
      { stepNumber: 3, instruction: 'Heat 2 tbsp oil in nonstick skillet; pour egg mixture, cook for 3 minutes shaking pan.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Flip tortilla using a flat plate, slide back into pan, and cook 2 more minutes to retain juicy custardy center.', durationMinutes: 4 }
    ]
  },
  {
    id: 'bf-turkish-eggs',
    title: 'Cilbir Turkish Poached Eggs in Garlic Yogurt',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "/recipes/bf-turkish-eggs.jpg",
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    servings: 2,
    rating: 4.9,
    reviewsCount: 290,
    difficulty: 'Easy',
    calories: 340,
    description: 'Warm runny poached eggs nestled in room-temperature garlicky Greek yogurt with fresh dill, drizzled with sizzling Aleppo pepper chili butter and warm pita.',
    featured: false,
    tags: ['Aleppo Chili Butter', 'Garlic Dill Yogurt', 'Turkish Heritage', 'Runny Poached Eggs'],
    ingredients: [
      { id: 'tb1', name: 'Thick Greek Yogurt (room temperature)', amount: 1.5, unit: 'cups' },
      { id: 'tb2', name: 'Fresh Garlic Cloves (grated finely)', amount: 2, unit: 'cloves' },
      { id: 'tb3', name: 'Fresh Farm Eggs', amount: 4, unit: 'pcs' },
      { id: 'tb4', name: 'Unsalted Butter', amount: 50, unit: 'g' },
      { id: 'tb5', name: 'Aleppo Pepper Flakes (Pul Biber) & Smoked Paprika', amount: 1.5, unit: 'tsp' },
      { id: 'tb6', name: 'Fresh Dill Sprigs & Warm Simit/Pita', amount: 1, unit: 'serving' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Whisk yogurt with grated garlic, sea salt, and finely chopped dill; spread across wide shallow bowls.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Poach eggs in gentle simmering water for 3 minutes until whites are set and yolks remain liquid.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Melt butter in a small pan until foaming; stir in Aleppo pepper flakes until oil turns deep ruby red.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Nestle poached eggs onto yogurt bed, drizzle sizzling spiced butter all over, and serve with warm bread.', durationMinutes: 2 }
    ]
  },
  {
    id: 'bf-masala-dosa',
    title: 'Crispy South Indian Masala Dosa with Chutneys',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 3,
    rating: 5.0,
    reviewsCount: 410,
    difficulty: 'Medium',
    calories: 380,
    description: 'Paper-thin golden fermented rice & urad dal crepe cooked in ghee, rolled around tempered mustard-turmeric spiced potato palya, served with coconut chutney.',
    featured: false,
    tags: ['Fermented Batter', 'Crispy Golden', 'Tempered Potatoes', 'Fresh Coconut Chutney'],
    ingredients: [
      { id: 'md1', name: 'Fermented Dosa Batter (Rice & Urad Dal)', amount: 500, unit: 'ml' },
      { id: 'md2', name: 'Spiced Potato Masala (potatoes, onions, mustard seeds, curry leaves)', amount: 2, unit: 'cups' },
      { id: 'md3', name: 'Pure Desi Ghee for frying', amount: 4, unit: 'tbsp' },
      { id: 'md4', name: 'Fresh Coconut Chutney & Vegetable Sambar', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat a heavy cast iron tawa; rub with onion slice and drizzle of water to regulate temperature.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Pour a ladle of batter in center; spread outward in rapid spiral strokes into a paper-thin disc.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Drizzle pure ghee along edges; cook on medium-high until base turns reddish-brown and crisp.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Place potato masala in center, roll dosa into a cylinder or triangle cone, and serve with chutneys.', durationMinutes: 2 }
    ]
  },
  {
    id: 'bf-smoked-salmon-bagel',
    title: 'New York Toasted Everything Bagel with Nova Lox',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "/recipes/bf-smoked-salmon-bagel.jpg",
    prepTimeMinutes: 10,
    cookTimeMinutes: 3,
    servings: 1,
    rating: 4.9,
    reviewsCount: 330,
    difficulty: 'Easy',
    calories: 460,
    description: 'Fresh boiled-then-baked everything bagel toasted and slathered with whipped scallion cream cheese, paper-thin smoked Scottish salmon, capers, and pickled red onions.',
    featured: false,
    tags: ['NYC Classic', 'Scottish Nova Salmon', 'Scallion Schmear', 'Everything Seasoning'],
    ingredients: [
      { id: 'sb1', name: 'Artisan Everything Bagel', amount: 1, unit: 'bagel', notes: 'Split & toasted golden' },
      { id: 'sb2', name: 'Smoked Salmon (Nova Lox)', amount: 100, unit: 'g', notes: 'Paper thin' },
      { id: 'sb3', name: 'Whipped Scallion Cream Cheese (Schmear)', amount: 3, unit: 'tbsp' },
      { id: 'sb4', name: 'Capers, Thin Red Onion Rings & Persian Cucumber', amount: 1, unit: 'serving' },
      { id: 'sb5', name: 'Fresh Dill Sprigs & Lemon Wedge', amount: 1, unit: 'sprig' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Toast split everything bagel until exterior has a crunch while inside remains chewy.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Generously spread whipped scallion cream cheese across both halves.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Ribbon slices of smoked salmon generously over bottom half.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Top with thinly sliced red onions, cucumber ribbons, capers, fresh dill, and a squeeze of fresh lemon.', durationMinutes: 2 }
    ]
  },
  {
    id: 'bf-baghrir',
    title: 'Moroccan Semolina 1000-Hole Pancakes (Baghrir)',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "/recipes/bf-baghrir.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 4,
    rating: 4.8,
    reviewsCount: 220,
    difficulty: 'Medium',
    calories: 290,
    description: 'Traditional North African honeycomb semolina pancakes cooked on one side only, creating hundreds of tiny pockets that drink up warm butter and orange blossom honey.',
    featured: false,
    tags: ['1000 Hole Pancake', 'Fine Semolina', 'Melted Honey Butter', 'North African Heritage'],
    ingredients: [
      { id: 'bg1', name: 'Fine Semolina (Extra Fine)', amount: 250, unit: 'g' },
      { id: 'bg2', name: 'All-Purpose Flour', amount: 60, unit: 'g' },
      { id: 'bg3', name: 'Active Dry Yeast & Baking Powder', amount: 2, unit: 'tsp' },
      { id: 'bg4', name: 'Warm Water (38°C / 100°F)', amount: 450, unit: 'ml' },
      { id: 'bg5', name: 'Melted Butter & Orange Blossom Honey sauce', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Blend fine semolina, flour, yeast, baking powder, and warm water in blender for 2 minutes until frothy.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Rest batter in a warm spot for 15 minutes until bubbles cover surface.', durationMinutes: 15 },
      { stepNumber: 3, instruction: 'Pour ladle into cold/lukewarm dry nonstick pan over medium heat; cook on one side only without flipping until hundreds of holes appear and top is dry.', durationMinutes: 10 },
      { stepNumber: 4, instruction: 'Dip warm pancakes directly into warm melted butter and honey syrup mixture.', durationMinutes: 2 }
    ]
  },
  {
    id: 'bf-steel-cut-oats',
    title: 'Apple Cinnamon Spiced Steel Cut Oats',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "/recipes/bf-steel-cut-oats.jpg",
    prepTimeMinutes: 5,
    cookTimeMinutes: 25,
    servings: 3,
    rating: 4.7,
    reviewsCount: 165,
    difficulty: 'Easy',
    calories: 310,
    description: 'Nutty, toothsome Irish steel-cut oats toasted in butter, slow-simmered in almond milk with cinnamon and nutmeg, topped with caramelized apples and pecans.',
    featured: false,
    tags: ['Steel-Cut Texture', 'Caramelized Apples', 'Heart Healthy', 'Warm Comfort'],
    ingredients: [
      { id: 'sc1', name: 'Irish Steel Cut Oats', amount: 1, unit: 'cup' },
      { id: 'sc2', name: 'Unsweetened Almond Milk & Water', amount: 3.5, unit: 'cups' },
      { id: 'sc3', name: 'Honeycrisp Apple (diced)', amount: 1, unit: 'pc' },
      { id: 'sc4', name: 'Pure Maple Syrup & Ceylon Cinnamon', amount: 2, unit: 'tbsp' },
      { id: 'sc5', name: 'Toasted Pecans & European Butter', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Melt 1 tbsp butter in pot; add steel-cut oats and toast for 3 minutes until fragrant and nutty.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Add milk, water, cinnamon, and salt; bring to boil, then simmer on low for 20 minutes stirring occasionally.', durationMinutes: 20 },
      { stepNumber: 3, instruction: 'Sauté diced apples in a separate pan with maple syrup and cinnamon until caramelized and soft.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Ladle creamy oats into bowls and spoon warm caramelized apples and toasted pecans over top.', durationMinutes: 2 }
    ]
  },
  {
    id: 'bf-chilaquiles',
    title: 'Crispy Salsa Verde Chilaquiles with Fried Eggs',
    category: 'breakfast',
    categoryLabel: 'Artisan Breakfast',
    imageUrl: "/recipes/bf-chilaquiles.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 2,
    rating: 4.9,
    reviewsCount: 290,
    difficulty: 'Easy',
    calories: 520,
    description: 'Thick fried corn totopos simmered briefly in tangy roasted tomatillo salsa verde until tender-crisp, topped with sunny eggs, Mexican crema, and crumbled Cotija.',
    featured: false,
    tags: ['Roasted Tomatillo', 'Sunny Fried Eggs', 'Cotija Cheese', 'Mexican Street Classic'],
    ingredients: [
      { id: 'cq1', name: 'Thick Corn Tortilla Chips (Totopos)', amount: 250, unit: 'g' },
      { id: 'cq2', name: 'Roasted Tomatillo Salsa Verde', amount: 1.5, unit: 'cups' },
      { id: 'cq3', name: 'Fresh Farm Eggs', amount: 2, unit: 'pcs' },
      { id: 'cq4', name: 'Mexican Crema & Crumbled Cotija Cheese', amount: 0.5, unit: 'cup' },
      { id: 'cq5', name: 'Shaved Red Onions, Fresh Cilantro & Radish', amount: 1, unit: 'serving' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat roasted salsa verde in a wide skillet until simmering gently.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Toss in tortilla totopos, stirring gently for 2 minutes so chips absorb salsa while maintaining crunch.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'In a separate skillet, fry two eggs in olive oil until whites are lace-edged and yolks remain runny.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Plate chilaquiles immediately, top with fried eggs, zig-zag Mexican crema, crumble cotija, and scatter cilantro.', durationMinutes: 2 }
    ]
  }
];
