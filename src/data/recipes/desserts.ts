import { Recipe } from '../../types';

export const DESSERT_RECIPES: Recipe[] = [
  {
    id: 'ds-tiramisu',
    title: 'Venetian Espresso & Mascarpone Tiramisu',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 25,
    cookTimeMinutes: 0,
    servings: 6,
    rating: 5.0,
    reviewsCount: 388,
    difficulty: 'Medium',
    calories: 420,
    description: 'Delicate Savoiardi ladyfingers soaked in dark Italian espresso and Marsala wine, layered with whipped zabaione mascarpone cream and Valrhona cocoa.',
    featured: true,
    tags: ['No-Bake Classic', 'Espresso Soaked', 'Whipped Mascarpone'],
    ingredients: [
      { id: 'tm1', name: 'Italian Savoiardi Ladyfingers', amount: 24, unit: 'pcs' },
      { id: 'tm2', name: 'Lombardy Mascarpone Cheese', amount: 450, unit: 'g', notes: 'Chilled' },
      { id: 'tm3', name: 'Fresh Organic Egg Yolks & Sugar', amount: 4, unit: 'yolks' },
      { id: 'tm4', name: 'Freshly Brewed Dark Espresso', amount: 300, unit: 'ml', notes: 'Cooled' },
      { id: 'tm5', name: 'Dutch Cocoa Powder for dusting', amount: 3, unit: 'tbsp' },
      { id: 'tm6', name: 'Marsala Wine or Amaretto', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Whisk egg yolks and fine sugar over a gentle double boiler until pale, thick, and ribbon-stage (zabaione). Cool to room temp.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Gently fold mascarpone cheese and whipped heavy cream into the yolk base until smooth and cloud-like.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Quickly dip Savoiardi ladyfingers (1 second per side) in cooled espresso-Marsala mixture. Arrange snugly in baking dish.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Spread half mascarpone cream; repeat with second layer of dipped cookies and remaining cream.', durationMinutes: 4 },
      { stepNumber: 5, instruction: 'Refrigerate for at least 6 hours. Dust heavily with Dutch cocoa powder just before slicing.', durationMinutes: 360 }
    ]
  },
  {
    id: 'ds-lava-cake',
    title: 'Molten Belgian Dark Chocolate Lava Cake',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 2,
    rating: 4.9,
    reviewsCount: 295,
    difficulty: 'Easy',
    calories: 490,
    description: 'Individual warm chocolate cakes with delicate cake edges and a flowing river of warm molten Valrhona dark chocolate inside.',
    featured: true,
    tags: ['Flowing Molten Core', '70% Dark Chocolate', 'Warm Decadence'],
    ingredients: [
      { id: 'lc1', name: '70% Belgian Dark Chocolate Callets', amount: 120, unit: 'g' },
      { id: 'lc2', name: 'Unsalted European Butter', amount: 100, unit: 'g' },
      { id: 'lc3', name: 'Powdered Sugar & Pinch of Sea Salt', amount: 60, unit: 'g' },
      { id: 'lc4', name: 'Fresh Eggs + Egg Yolks', amount: 2, unit: 'pcs' },
      { id: 'lc5', name: 'All-Purpose Flour', amount: 30, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Butter and dust two ramekins with cocoa powder thoroughly.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Melt chocolate and butter gently in microwave or double boiler until silky smooth.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Whisk in eggs, powdered sugar, sea salt, and gently fold in flour.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Bake at 210°C (410°F) for exactly 11-12 minutes until sides are set but center remains soft and jiggling. Invert onto plate.', durationMinutes: 12 }
    ]
  },
  {
    id: 'ds-gulab-jamun',
    title: 'Saffron Cardamom Shahi Gulab Jamun',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/shahi_gulab_jamun.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    servings: 4,
    rating: 4.9,
    reviewsCount: 340,
    difficulty: 'Medium',
    calories: 380,
    description: 'Melt-in-mouth milk solid (khoya) dumplings fried slowly in pure desi ghee, soaked in hot saffron, rose water, and green cardamom sugar syrup.',
    featured: false,
    tags: ['Pure Desi Ghee', 'Rose & Saffron Syrup', 'Melt in Mouth'],
    ingredients: [
      { id: 'gj1', name: 'Fresh Unsweetened Mawa / Khoya', amount: 200, unit: 'g' },
      { id: 'gj2', name: 'Fine Chenna / Paneer', amount: 50, unit: 'g' },
      { id: 'gj3', name: 'All-Purpose Maida & Pinch of Baking Soda', amount: 3, unit: 'tbsp' },
      { id: 'gj4', name: 'Sugar Syrup infused with Saffron, Rose & Cardamom', amount: 2, unit: 'cups' },
      { id: 'gj5', name: 'Pure Desi Ghee for deep frying', amount: 500, unit: 'ml' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Knead khoya and crumbled chenna with heels of palms until completely smooth with no grains.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Roll into small crack-free balls without applying excessive pressure.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Fry balls on very low heat in pure ghee, swirling the ghee continuously until dark golden brown.', durationMinutes: 12 },
      { stepNumber: 4, instruction: 'Drop hot fried jamuns directly into warm saffron-cardamom syrup; soak for at least 45 minutes.', durationMinutes: 45 }
    ]
  },
  {
    id: 'ds-cheesecake',
    title: 'Basque Burnt Caramelized Cheesecake',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 45,
    servings: 8,
    rating: 4.8,
    reviewsCount: 270,
    difficulty: 'Easy',
    calories: 460,
    description: 'San Sebastián style crustless cheesecake baked at high heat for a deeply caramelized, scorched bittersweet top and a gooey, custard center.',
    featured: false,
    tags: ['San Sebastián', 'Custard Center', 'Caramelized Top', 'Crustless'],
    ingredients: [
      { id: 'bc1', name: 'Full Fat Cream Cheese', amount: 600, unit: 'g', notes: 'Room temperature' },
      { id: 'bc2', name: 'Heavy Whipping Cream', amount: 300, unit: 'ml' },
      { id: 'bc3', name: 'Granulated White Sugar', amount: 160, unit: 'g' },
      { id: 'bc4', name: 'Large Farm Eggs', amount: 4, unit: 'pcs' },
      { id: 'bc5', name: 'Flour & Pure Vanilla Bean Paste', amount: 1.5, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Line a 9-inch springform pan with crumpled parchment paper allowing edges to spill over.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Beat cream cheese and sugar until creamy; incorporate eggs one at a time, followed by cream and flour.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Bake at 220°C (430°F) for 40-45 minutes until top is dark mahogany brown and center wobbles.', durationMinutes: 45 },
      { stepNumber: 4, instruction: 'Cool completely on wire rack, then chill in fridge for 4 hours to set the creamy custard texture.', durationMinutes: 240 }
    ]
  },
  {
    id: 'ds-creme-brulee',
    title: 'Classic Madagascar Vanilla Bean Crème Brûlée',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-creme-brulee.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    servings: 4,
    rating: 5.0,
    reviewsCount: 360,
    difficulty: 'Medium',
    calories: 390,
    description: 'Silky rich egg yolk and heavy cream custard infused with real Madagascar vanilla bean caviar, topped with a glass-like caramelized sugar crust you crack with a spoon.',
    featured: false,
    tags: ['Vanilla Caviar', 'Crackable Sugar Glass', 'French Patisserie', 'Silky Custard'],
    ingredients: [
      { id: 'cb1', name: 'Heavy Whipping Cream (36% fat)', amount: 450, unit: 'ml' },
      { id: 'cb2', name: 'Madagascar Vanilla Bean pod', amount: 1, unit: 'pod', notes: 'Split & seeds scraped' },
      { id: 'cb3', name: 'Egg Yolks', amount: 5, unit: 'yolks' },
      { id: 'cb4', name: 'Fine Granulated Sugar', amount: 60, unit: 'g' },
      { id: 'cb5', name: 'Turbinado / Raw Sugar for caramelizing', amount: 4, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Warm cream with scraped vanilla seeds and pod until steaming; steep for 15 minutes.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Whisk egg yolks with sugar gently without creating bubbles; temper with warm vanilla cream and strain.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Pour into shallow ramekins and bake in a hot water bath (bain-marie) at 150°C for 30-35 minutes until just set.', durationMinutes: 35 },
      { stepNumber: 4, instruction: 'Chill completely. Sprinkle raw sugar evenly and torch with blowtorch until golden amber glass forms.', durationMinutes: 4 }
    ]
  },
  {
    id: 'ds-baklava',
    title: 'Pistachio & Honey Crisp Filo Pastry Baklava',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-baklava.jpg",
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    servings: 8,
    rating: 4.9,
    reviewsCount: 310,
    difficulty: 'Hard',
    calories: 410,
    description: 'Thirty paper-thin layers of crisp golden buttered filo pastry packed with finely crushed Gaziantep pistachios and soaked in orange blossom honey syrup.',
    featured: false,
    tags: ['30 Filo Layers', 'Gaziantep Pistachio', 'Orange Blossom Honey', 'Crisp Crackle'],
    ingredients: [
      { id: 'bk1', name: 'Filo Pastry Sheets', amount: 1, unit: 'box (450g)', notes: 'Thawed' },
      { id: 'bk2', name: 'Clarified Butter (Ghee)', amount: 200, unit: 'g', notes: 'Melted' },
      { id: 'bk3', name: 'Raw Pistachios', amount: 300, unit: 'g', notes: 'Finely minced' },
      { id: 'bk4', name: 'Pure Honey & Sugar Syrup', amount: 1.5, unit: 'cups' },
      { id: 'bk5', name: 'Orange Blossom Water & Lemon Juice', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Layer 15 filo sheets in buttered baking dish, brushing melted clarified butter generously between each sheet.', durationMinutes: 12 },
      { stepNumber: 2, instruction: 'Spread minced pistachios in an even emerald layer; top with remaining 15 buttered filo sheets.', durationMinutes: 10 },
      { stepNumber: 3, instruction: 'Pre-cut into diamond shapes using a sharp knife; bake at 175°C for 45 mins until deeply puffed and golden.', durationMinutes: 45 },
      { stepNumber: 4, instruction: 'Pour cold honey-orange blossom syrup immediately over hot baked baklava and let sizzle and absorb.', durationMinutes: 5 }
    ]
  },
  {
    id: 'ds-churros',
    title: 'Crispy Spanish Churros with Spiced Chocolate Dip',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-churros.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 4,
    rating: 4.9,
    reviewsCount: 320,
    difficulty: 'Easy',
    calories: 380,
    description: 'Fluted extruded dough fried until golden and crunchy outside and pillowy inside, rolled in cinnamon sugar and dunked in thick bittersweet Spanish hot chocolate.',
    featured: false,
    tags: ['Star Fluted Shape', 'Cinnamon Sugar', 'Thick Chocolate Dip', 'Spanish Street Sweet'],
    ingredients: [
      { id: 'ch1', name: 'All-Purpose Flour & Butter', amount: 1, unit: 'cup' },
      { id: 'ch2', name: 'Cinnamon Sugar blend for rolling', amount: 0.5, unit: 'cup' },
      { id: 'ch3', name: 'Dark Bittersweet Chocolate', amount: 150, unit: 'g', notes: 'Melted with cream & cornstarch' },
      { id: 'ch4', name: 'Pure Vanilla Extract & Sea Salt', amount: 1, unit: 'tsp' },
      { id: 'ch5', name: 'Oil for deep frying', amount: 500, unit: 'ml' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Boil water, butter, and sugar; stir in flour all at once until a glossy dough ball forms and pulls away from pan.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Transfer choux dough to a piping bag fitted with a large closed star tip.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Pipe 5-inch strips directly into 190°C hot oil, snipping ends with scissors; fry 3-4 mins until golden.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Drain and roll immediately in cinnamon sugar; serve warm with thick glossy chocolate dipping sauce.', durationMinutes: 3 }
    ]
  },
  {
    id: 'ds-knafeh',
    title: 'Warm Nabulsi Sweet Cheese Knafeh with Blossom Syrup',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-knafeh.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    servings: 4,
    rating: 5.0,
    reviewsCount: 390,
    difficulty: 'Medium',
    calories: 490,
    description: 'Crispy shredded kataifi pastry crisped in golden clarified butter with a molten layer of sweet Akkawi cheese, drenched in orange blossom syrup and pistachios.',
    featured: false,
    tags: ['Molten Sweet Cheese', 'Crispy Kataifi', 'Orange Blossom', 'Middle Eastern Legend'],
    ingredients: [
      { id: 'kn1', name: 'Shredded Kataifi Dough', amount: 300, unit: 'g', notes: 'Finely chopped' },
      { id: 'kn2', name: 'Sweet Desalted Akkawi or Fresh Mozzarella', amount: 300, unit: 'g' },
      { id: 'kn3', name: 'Melted Ghee / Clarified Butter', amount: 120, unit: 'g' },
      { id: 'kn4', name: 'Sugar Syrup with Rose and Orange Blossom Water', amount: 1, unit: 'cup' },
      { id: 'kn5', name: 'Crushed Green Pistachios for garnish', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Toss shredded kataifi pastry with melted ghee until thoroughly saturated.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Press 2/3 of pastry firmly into bottom of round metal pan; distribute shredded cheese evenly, leaving rim clear.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Top with remaining kataifi; bake at 200°C for 20 minutes until crust is crispy and golden.', durationMinutes: 20 },
      { stepNumber: 4, instruction: 'Invert onto serving platter, pour warm floral syrup over top, and scatter crushed pistachios.', durationMinutes: 3 }
    ]
  },
  {
    id: 'ds-macarons',
    title: 'Parisian Raspberry & Dark Chocolate Macarons',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 30,
    cookTimeMinutes: 16,
    servings: 6,
    rating: 4.8,
    reviewsCount: 240,
    difficulty: 'Hard',
    calories: 220,
    description: 'Delicate almond flour meringue cookies with ruffled feet and crisp shells, sandwiched around tart raspberry pâte de fruit and 70% dark chocolate ganache.',
    featured: false,
    tags: ['Almond Flour Meringue', 'Ruffled Macaron Feet', 'Tart Raspberry', 'French Elegance'],
    ingredients: [
      { id: 'mc1', name: 'Superfine Blanched Almond Flour', amount: 150, unit: 'g' },
      { id: 'mc2', name: 'Powdered Confectioners Sugar', amount: 150, unit: 'g' },
      { id: 'mc3', name: 'Aged Egg Whites', amount: 110, unit: 'g' },
      { id: 'mc4', name: 'Dark Chocolate Ganache & Raspberry Jam', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Sift almond flour and powdered sugar twice; whip egg whites with sugar to stiff glossy meringue.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Macaronage: Fold dry ingredients into meringue until batter flows like molten lava in ribbons.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Pipe rounds onto silicone mats; tap tray hard to release air bubbles and rest 30 mins until skin forms.', durationMinutes: 30 },
      { stepNumber: 4, instruction: 'Bake at 150°C for 14-16 minutes until ruffled feet form; cool and sandwich with ganache.', durationMinutes: 16 }
    ]
  },
  {
    id: 'ds-rasmalai',
    title: 'Kolkata Saffron Rasmalai in Cardamom Rabri',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-rasmalai.jpg",
    prepTimeMinutes: 25,
    cookTimeMinutes: 30,
    servings: 4,
    rating: 5.0,
    reviewsCount: 375,
    difficulty: 'Hard',
    calories: 320,
    description: 'Spongy, pillowy cottage cheese discs poached in light syrup, steeped in thickened saffron rabri milk perfumed with rose water, cardamom, and almond flakes.',
    featured: false,
    tags: ['Pillowy Chenna', 'Saffron Rabri', 'Royal Bengali Sweet', 'Chilled Luxury'],
    ingredients: [
      { id: 'rm1', name: 'Fresh Soft Cow Milk Chenna', amount: 250, unit: 'g' },
      { id: 'rm2', name: 'Full Cream Milk for Rabri', amount: 1000, unit: 'ml', notes: 'Reduced by half' },
      { id: 'rm3', name: 'Kashmiri Saffron & Green Cardamom', amount: 1, unit: 'tsp' },
      { id: 'rm4', name: 'Slivered Almonds & Pistachios', amount: 3, unit: 'tbsp' },
      { id: 'rm5', name: 'Sugar for syrup & rabri', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Knead fresh chenna with palms for 7 minutes until completely smooth; shape into flattened discs.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Poach discs in boiling thin sugar syrup for 12 minutes under covered lid until doubled in size.', durationMinutes: 12 },
      { stepNumber: 3, instruction: 'Simmer whole milk with saffron and cardamom until thickened into luscious rabri.', durationMinutes: 20 },
      { stepNumber: 4, instruction: 'Gently squeeze syrup from spongy discs, immerse in warm saffron rabri, and chill for 4 hours.', durationMinutes: 10 }
    ]
  },
  {
    id: 'ds-apple-pie',
    title: 'Salted Caramel Dutch Apple Pie with Streusel',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-apple-pie.jpg",
    prepTimeMinutes: 25,
    cookTimeMinutes: 50,
    servings: 6,
    rating: 4.9,
    reviewsCount: 295,
    difficulty: 'Medium',
    calories: 440,
    description: 'Flaky all-butter pie shell mounded with spiced Granny Smith apples, covered in cinnamon oat streusel crunch and warm salted caramel drizzle.',
    featured: false,
    tags: ['All-Butter Crust', 'Spiced Granny Smith', 'Oat Streusel Crunch', 'Salted Caramel'],
    ingredients: [
      { id: 'ap1', name: 'All-Butter Pie Dough Crust', amount: 1, unit: 'crust (9-inch)' },
      { id: 'ap2', name: 'Granny Smith & Honeycrisp Apples', amount: 6, unit: 'pcs', notes: 'Peeled & sliced thin' },
      { id: 'ap3', name: 'Brown Sugar, Cinnamon, Nutmeg & Lemon', amount: 0.5, unit: 'cup' },
      { id: 'ap4', name: 'Brown Sugar Cinnamon Oat Streusel', amount: 1, unit: 'cup' },
      { id: 'ap5', name: 'Warm Homemade Salted Caramel Sauce', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Toss sliced apples with brown sugar, cinnamon, nutmeg, lemon juice, and a spoon of flour.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Pile apples tightly into chilled butter pie shell in a dome.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Cover completely with buttery cinnamon oat streusel crumb topping.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Bake at 190°C for 45-50 minutes until apples are tender and streusel is deep amber; drizzle with salted caramel.', durationMinutes: 50 }
    ]
  },
  {
    id: 'ds-panna-cotta',
    title: 'Silky Vanilla Panna Cotta with Strawberry Coulis',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-panna-cotta.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    servings: 4,
    rating: 4.8,
    reviewsCount: 190,
    difficulty: 'Easy',
    calories: 270,
    description: 'Wobbly, melt-on-the-tongue Italian cooked cream scented with vanilla bean, paired with a tart, vibrant strawberry basil coulis.',
    featured: false,
    tags: ['Delicate Wobble', 'Real Vanilla Bean', 'Tart Strawberry Coulis', 'Piedmont Origin'],
    ingredients: [
      { id: 'pc1', name: 'Heavy Cream & Whole Milk', amount: 400, unit: 'ml' },
      { id: 'pc2', name: 'Granulated Sugar', amount: 60, unit: 'g' },
      { id: 'pc3', name: 'Gelatin Powder or Sheets', amount: 2.5, unit: 'tsp', notes: 'Bloomed in cold water' },
      { id: 'pc4', name: 'Real Vanilla Bean Paste', amount: 1, unit: 'tsp' },
      { id: 'pc5', name: 'Fresh Strawberry Puree Coulis', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Warm cream, milk, sugar, and vanilla paste in a saucepan until sugar dissolves (do not boil).', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Remove from heat, stir in bloomed gelatin until dissolved; pour into glasses or molds.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Chill in refrigerator for 4 hours until gently set with a delicate wobble.', durationMinutes: 240 },
      { stepNumber: 4, instruction: 'Top each glass with vibrant chilled strawberry coulis and fresh mint leaf.', durationMinutes: 2 }
    ]
  },
  {
    id: 'ds-mochi',
    title: 'Strawberry Cheesecake Ice Cream Mochi',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-mochi.jpg",
    prepTimeMinutes: 25,
    cookTimeMinutes: 5,
    servings: 4,
    rating: 4.9,
    reviewsCount: 235,
    difficulty: 'Medium',
    calories: 190,
    description: 'Chewy, stretchy sweet glutinous rice mochi dough wrapped around frozen spheres of strawberry cheesecake ice cream with graham cracker swirl.',
    featured: false,
    tags: ['Chewy Mochi Skin', 'Mochiko Rice Flour', 'Ice Cream Center', 'Japanese Sweet'],
    ingredients: [
      { id: 'mc1', name: 'Sweet Glutinous Rice Flour (Mochiko)', amount: 100, unit: 'g' },
      { id: 'mc2', name: 'Sugar & Water', amount: 150, unit: 'ml' },
      { id: 'mc3', name: 'Strawberry Cheesecake Ice Cream', amount: 8, unit: 'small scoops', notes: 'Frozen rock solid' },
      { id: 'mc4', name: 'Cornstarch / Katakuriko for dusting', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Scoop 8 ice cream balls onto a parchment tray and freeze for 1 hour until rock-solid.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Mix mochiko flour, sugar, and water; microwave for 2 minutes, stir, and microwave 1 more minute until translucent and stretchy.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Dust surface generously with cornstarch; roll out warm mochi dough thin and cut into 8 discs.', durationMinutes: 6 },
      { stepNumber: 4, instruction: 'Wrap cold dough discs around frozen ice cream balls, pinch bottom seams tight, and freeze until ready.', durationMinutes: 8 }
    ]
  },
  {
    id: 'ds-brownie',
    title: 'Fudgy Espresso Dark Chocolate Brownie with Sea Salt',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-brownie.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 8,
    rating: 5.0,
    reviewsCount: 460,
    difficulty: 'Easy',
    calories: 360,
    description: 'Dense, fudgy brownies with paper-thin shiny crinkly tops, loaded with dark chocolate chunks, espresso powder, and flaky Maldon sea salt.',
    featured: false,
    tags: ['Shiny Crinkle Top', 'Dense & Fudgy', 'Espresso Infused', 'Flaky Sea Salt'],
    ingredients: [
      { id: 'br1', name: '70% Dark Chocolate Chunks', amount: 200, unit: 'g' },
      { id: 'br2', name: 'Unsalted Butter', amount: 150, unit: 'g' },
      { id: 'br3', name: 'Granulated & Brown Sugar', amount: 180, unit: 'g' },
      { id: 'br4', name: 'Large Eggs', amount: 3, unit: 'pcs', notes: 'Beaten vigorously with sugar' },
      { id: 'br5', name: 'Flour, Espresso Powder & Maldon Salt', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Melt chocolate and butter together until silky smooth.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Whip eggs and sugars on high speed for 5 full minutes until thick and pale (this creates the shiny crinkle top!).', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Fold chocolate into egg foam; sift in cocoa, espresso powder, flour, and fold gently.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Bake at 175°C for 22-25 minutes; sprinkle flaky sea salt immediately and chill before slicing clean squares.', durationMinutes: 25 }
    ]
  },
  {
    id: 'ds-cannoli',
    title: 'Sicilian Crispy Pistachio & Chocolate Cannoli',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-cannoli.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 4,
    rating: 4.8,
    reviewsCount: 210,
    difficulty: 'Medium',
    calories: 310,
    description: 'Blistered crispy Marsala pastry shells piped to order with sweet sheep milk ricotta, candied orange peel, mini chocolate chips, and crushed Sicilian pistachios.',
    featured: false,
    tags: ['Blistered Shells', 'Sheep Milk Ricotta', 'Sicilian Pistachio', 'Piped to Order'],
    ingredients: [
      { id: 'cn1', name: 'Fried Cannoli Shells', amount: 8, unit: 'shells' },
      { id: 'cn2', name: 'Drained Sheep Milk Ricotta Cheese', amount: 400, unit: 'g' },
      { id: 'cn3', name: 'Powdered Confectioners Sugar', amount: 100, unit: 'g' },
      { id: 'cn4', name: 'Mini Dark Chocolate Chips & Candied Orange Peel', amount: 0.5, unit: 'cup' },
      { id: 'cn5', name: 'Crushed Bronte Pistachios', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Whip drained sheep milk ricotta with powdered sugar and vanilla until silky and lump-free.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Fold in mini chocolate chips and finely diced candied orange peel.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Transfer ricotta cream into a piping bag fitted with an open round tip.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Pipe cream into both ends of crispy shells right before serving; dip exposed ends in crushed pistachios.', durationMinutes: 3 }
    ]
  },
  {
    id: 'ds-crepes',
    title: 'French Crêpes Suzette with Caramelized Orange Butter',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 3,
    rating: 4.9,
    reviewsCount: 180,
    difficulty: 'Medium',
    calories: 340,
    description: 'Paper-thin delicate French crêpes simmered in a pan sauce of caramelized sugar, fresh tangerine-orange juice, orange zest, and sweet French butter.',
    featured: false,
    tags: ['Paper Thin Crêpes', 'Orange Butter Sauce', 'French Classic', 'Caramelized Citrus'],
    ingredients: [
      { id: 'cs1', name: 'Delicate Egg Crêpes', amount: 6, unit: 'pcs', notes: 'Cooked thin' },
      { id: 'cs2', name: 'Fresh Orange Juice & Grated Zest', amount: 1, unit: 'cup' },
      { id: 'cs3', name: 'European Butter', amount: 60, unit: 'g' },
      { id: 'cs4', name: 'Granulated Sugar', amount: 50, unit: 'g' },
      { id: 'cs5', name: 'Grand Marnier or Orange Blossom', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Melt sugar in a wide skillet until it turns pale golden caramel.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Add butter, orange juice, and grated zest; simmer vigorously until a glossy orange syrup forms.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Fold crêpes into quarters (triangles) and lay them into bubbling sauce, basting with syrup.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Serve warm directly from skillet with orange segments and extra sauce.', durationMinutes: 2 }
    ]
  },
  {
    id: 'ds-tres-leches',
    title: 'Authentic Mexican Tres Leches Pastel',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    servings: 8,
    rating: 4.9,
    reviewsCount: 310,
    difficulty: 'Medium',
    calories: 390,
    description: 'Light sponge cake pierced with a fork and soaked in three rich milks (evaporated, sweetened condensed, and heavy cream), topped with whipped cinnamon cream.',
    featured: false,
    tags: ['Three Milks Soak', 'Light Sponge', 'Whipped Cream Topping', 'Ultra Moist'],
    ingredients: [
      { id: 'tl1', name: 'Sponge Cake Base', amount: 1, unit: 'cake (9x13)' },
      { id: 'tl2', name: 'Evaporated Milk', amount: 1, unit: 'can (354ml)' },
      { id: 'tl3', name: 'Sweetened Condensed Milk', amount: 1, unit: 'can (396ml)' },
      { id: 'tl4', name: 'Heavy Whipping Cream', amount: 1, unit: 'cup' },
      { id: 'tl5', name: 'Pure Vanilla, Cinnamon & Fresh Strawberries', amount: 1, unit: 'serving' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Bake light airy sponge cake; let cool for 15 minutes, then pierce thoroughly with fork tines.', durationMinutes: 30 },
      { stepNumber: 2, instruction: 'Whisk evaporated milk, condensed milk, and heavy cream with vanilla extract.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Slowly pour three-milk blend all over cake; cover and chill in fridge for 4 hours to soak completely.', durationMinutes: 240 },
      { stepNumber: 4, instruction: 'Spread pillowy whipped cream on top, dust with ground cinnamon, and garnish with fresh strawberries.', durationMinutes: 5 }
    ]
  },
  {
    id: 'ds-sticky-toffee',
    title: 'Warm British Sticky Toffee Pudding',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-sticky-toffee.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    servings: 6,
    rating: 5.0,
    reviewsCount: 340,
    difficulty: 'Medium',
    calories: 520,
    description: 'Moist steamed Medjool date sponge cake drenched in molten brown sugar toffee sauce and served warm with rich English clotted cream or custard.',
    featured: false,
    tags: ['Medjool Dates', 'Molten Toffee Sauce', 'British Pub Classic', 'Warm Comfort'],
    ingredients: [
      { id: 'st1', name: 'Soft Medjool Dates', amount: 200, unit: 'g', notes: 'Pitted & soaked in boiling water' },
      { id: 'st2', name: 'Dark Muscovado Brown Sugar', amount: 150, unit: 'g' },
      { id: 'st3', name: 'Butter, Eggs & Self-Rising Flour', amount: 200, unit: 'g' },
      { id: 'st4', name: 'Toffee Sauce (Butter, heavy cream, dark brown sugar, golden syrup)', amount: 1.5, unit: 'cups' },
      { id: 'st5', name: 'Clotted Cream or Vanilla Bean Custard', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Puree soaked Medjool dates with baking soda and water into a smooth paste.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Cream butter and dark brown sugar; beat in eggs, date puree, and flour.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Bake in buttered pudding dish at 180°C for 32-35 minutes until springy to the touch.', durationMinutes: 35 },
      { stepNumber: 4, instruction: 'Simmer butter, cream, and brown sugar into toffee sauce; poke warm pudding and ladle warm sauce generously.', durationMinutes: 5 }
    ]
  },
  {
    id: 'ds-mango-kulfi',
    title: 'Traditional Matka Malai & Mango Kulfi',
    category: 'desserts',
    categoryLabel: 'Desserts & Sweets',
    imageUrl: "/recipes/ds-mango-kulfi.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    servings: 4,
    rating: 4.9,
    reviewsCount: 280,
    difficulty: 'Easy',
    calories: 280,
    description: 'Traditional slow-reduced dense Indian ice cream infused with caramelized milk solids (rabri), Alphonso mango pulp, green cardamom, and pistachios.',
    featured: false,
    tags: ['Slow Reduced Rabri', 'Alphonso Mango', 'No Churn Needed', 'Dense & Creamy'],
    ingredients: [
      { id: 'kf1', name: 'Whole Buffalo / Full Cream Milk', amount: 1000, unit: 'ml' },
      { id: 'kf2', name: 'Sweet Mango Puree', amount: 1, unit: 'cup' },
      { id: 'kf3', name: 'Condensed Milk & Khoya', amount: 0.5, unit: 'cup' },
      { id: 'kf4', name: 'Cardamom Powder & Kewra Water', amount: 1, unit: 'tsp' },
      { id: 'kf5', name: 'Crushed Almonds & Pistachios', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Simmer full cream milk in a heavy kadai for 25 minutes, scraping dried milk solids from the edges until thick.', durationMinutes: 25 },
      { stepNumber: 2, instruction: 'Stir in condensed milk, cardamom, and nuts; cool rabri to room temperature.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Whisk in smooth mango puree until homogeneous.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Pour into traditional clay matkas or kulfi cones; freeze for 8 hours until solid.', durationMinutes: 480 }
    ]
  }
];
