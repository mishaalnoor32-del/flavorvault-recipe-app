import { Recipe } from '../../types';

export const DRINK_RECIPES: Recipe[] = [
  {
    id: 'dr-matcha',
    title: 'Iced Ceremonial Matcha Cloud Latte',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 5,
    cookTimeMinutes: 2,
    servings: 1,
    rating: 4.9,
    reviewsCount: 412,
    difficulty: 'Easy',
    calories: 180,
    description: 'First-harvest Uji matcha hand-whisked with bamboo chasen over crystal clear ice, velvety oat milk, and topped with salted vanilla cold foam.',
    featured: true,
    tags: ['Ceremonial Uji Matcha', 'Cold Foam Cloud', 'Barista Craft'],
    ingredients: [
      { id: 'mt1', name: 'Ceremonial Grade Uji Matcha Powder', amount: 2, unit: 'tsp', notes: 'Sifted finely' },
      { id: 'mt2', name: 'Filtered Water (75°C / 167°F)', amount: 60, unit: 'ml' },
      { id: 'mt3', name: 'Barista Oat Milk', amount: 200, unit: 'ml' },
      { id: 'mt4', name: 'Pure Madagascar Vanilla Syrup', amount: 1.5, unit: 'tbsp' },
      { id: 'mt5', name: 'Heavy Cream for cold foam topper', amount: 40, unit: 'ml' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Sift ceremonial matcha powder into a chawan bowl; add 75°C warm water.', durationMinutes: 1 },
      { stepNumber: 2, instruction: 'Whisk in a rapid W-motion with a bamboo chasen until a thick, micro-bubble froth forms.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Fill glass with ice cubes, vanilla syrup, and cold barista oat milk.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Pour matcha froth slowly over milk, crown with lightly frothed vanilla sweet foam.', durationMinutes: 1 }
    ]
  },
  {
    id: 'dr-cold-brew',
    title: 'Nitro Vanilla Sweet Cream Cold Brew',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 1,
    rating: 4.8,
    reviewsCount: 198,
    difficulty: 'Easy',
    calories: 140,
    description: 'Smooth 18-hour cold steeped Ethiopian single-origin coffee poured over ice and crowned with cascading house-whipped vanilla sweet cream.',
    featured: true,
    tags: ['18-Hr Steeped', 'Cascading Cream', 'Smooth & Bold'],
    ingredients: [
      { id: 'cb1', name: 'Steeped Cold Brew Coffee Concentrate', amount: 180, unit: 'ml' },
      { id: 'cb2', name: 'House Sweet Cream (Heavy cream, whole milk, vanilla)', amount: 50, unit: 'ml' },
      { id: 'cb3', name: 'Solid Clear Ice Cubes', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Fill a tall Collins glass to the brim with clear ice cubes.', durationMinutes: 1 },
      { stepNumber: 2, instruction: 'Pour cold brew coffee concentrate until 85% full.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Gently float frothed vanilla sweet cream on top and watch it cascade through the dark coffee.', durationMinutes: 1 }
    ]
  },
  {
    id: 'dr-passionfruit',
    title: 'Tropical Passionfruit Mint Sparkler',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "/recipes/dr-passionfruit.jpg",
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 2,
    rating: 4.7,
    reviewsCount: 145,
    difficulty: 'Easy',
    calories: 120,
    description: 'Tart fresh passion fruit pulp muddled with garden spearmint and lime juice, shaken with cane sugar and topped with bubbly sparkling mineral water.',
    featured: false,
    tags: ['Effervescent', 'Passionfruit Crunch', 'Tropical Mocktail'],
    ingredients: [
      { id: 'pf1', name: 'Fresh Passionfruit pulp with seeds', amount: 3, unit: 'fruits' },
      { id: 'pf2', name: 'Fresh Garden Mint Leaves', amount: 10, unit: 'leaves' },
      { id: 'pf3', name: 'Fresh Key Lime Juice', amount: 2, unit: 'tbsp' },
      { id: 'pf4', name: 'Chilled Sparkling Mineral Water', amount: 300, unit: 'ml' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Muddle mint leaves, lime juice, and cane syrup gently in the bottom of a pitcher.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Stir in passionfruit pulp and fill glasses with crushed ice.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Top off with chilled sparkling water and stir lightly to swirl seeds.', durationMinutes: 1 }
    ]
  },
  {
    id: 'dr-chai',
    title: 'Karak Saffron & Cardamom Chai',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    servings: 3,
    rating: 5.0,
    reviewsCount: 420,
    difficulty: 'Easy',
    calories: 190,
    description: 'Robust Assam CTC black tea boiled down with crushed cardamom pods, cinnamon bark, whole evaporated milk, and steeped Kashmiri saffron threads.',
    featured: false,
    tags: ['Kadak Brew', 'Saffron Infusion', 'Velvety Creaminess'],
    ingredients: [
      { id: 'kc1', name: 'Assam CTC Black Tea Granules', amount: 3, unit: 'tbsp' },
      { id: 'kc2', name: 'Green Cardamom Pods (cracked)', amount: 6, unit: 'pods' },
      { id: 'kc3', name: 'Evaporated Whole Milk', amount: 250, unit: 'ml' },
      { id: 'kc4', name: 'Kashmiri Saffron Threads', amount: 8, unit: 'strands' },
      { id: 'kc5', name: 'Raw Cane Sugar or Jaggery', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Boil water with cracked cardamoms and cinnamon for 3 minutes to extract fragrant essential oils.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Add Assam tea granules and cane sugar; simmer vigorously for 5 minutes until deep reddish-brown.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Pour evaporated milk and saffron; bring to three consecutive rolling frothing boils.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Strain through fine mesh into clay kulhar cups from a height to form an airy top froth.', durationMinutes: 2 }
    ]
  },
  {
    id: 'dr-mango-lassi',
    title: 'Royal Saffron Alphonso Mango Lassi',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 2,
    rating: 5.0,
    reviewsCount: 430,
    difficulty: 'Easy',
    calories: 260,
    description: 'Luscious ripe Ratnagiri Alphonso mango pulp blended with thick Greek dahi yogurt, milk, a dash of cardamom, and garnished with saffron and pistachios.',
    featured: false,
    tags: ['Alphonso Mango', 'Creamy Yogurt', 'Saffron Pistachio', 'Refreshing Classic'],
    ingredients: [
      { id: 'ml1', name: 'Sweet Alphonso Mango Pulp', amount: 1.5, unit: 'cups' },
      { id: 'ml2', name: 'Thick Whole Milk Yogurt (Dahi)', amount: 1.5, unit: 'cups' },
      { id: 'ml3', name: 'Chilled Whole Milk', amount: 0.5, unit: 'cup' },
      { id: 'ml4', name: 'Cardamom Powder & Rose Water', amount: 0.5, unit: 'tsp' },
      { id: 'ml5', name: 'Crushed Pistachios & Saffron Strands', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Combine mango pulp, chilled dahi yogurt, milk, honey, and cardamom powder in a blender.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Blend on high speed for 60 seconds until thick, creamy, and velvety smooth.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Pour into tall glasses over ice cubes.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Garnish top with slivered green pistachios and fragrant Kashmiri saffron threads.', durationMinutes: 1 }
    ]
  },
  {
    id: 'dr-lemonade',
    title: 'Fresh Lavender Infused Sparkling Lemonade',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    servings: 4,
    rating: 4.8,
    reviewsCount: 190,
    difficulty: 'Easy',
    calories: 110,
    description: 'Freshly squeezed Meyer lemon juice mixed with fragrant culinary lavender simple syrup and cold sparkling club soda over crushed ice.',
    featured: false,
    tags: ['Culinary Lavender', 'Meyer Lemon', 'Sparkling Soda', 'Floral & Crisp'],
    ingredients: [
      { id: 'lm1', name: 'Fresh Squeezed Meyer Lemon Juice', amount: 1, unit: 'cup' },
      { id: 'lm2', name: 'Dried Culinary Lavender Buds', amount: 2, unit: 'tbsp' },
      { id: 'lm3', name: 'Cane Sugar & Water for syrup', amount: 1, unit: 'cup' },
      { id: 'lm4', name: 'Chilled Club Soda or Sparkling Water', amount: 3, unit: 'cups' },
      { id: 'lm5', name: 'Lemon Slices & Fresh Lavender Sprigs', amount: 4, unit: 'sprigs' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Simmer lavender buds in sugar and water for 5 minutes; strain and chill lavender syrup completely.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'In a glass pitcher, combine fresh lemon juice with chilled lavender syrup.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Fill glasses with crushed ice and pour 1/3 lemon-lavender base.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Top with sparkling soda and garnish with lemon wheel and a lavender sprig.', durationMinutes: 2 }
    ]
  },
  {
    id: 'dr-mojito',
    title: 'Classic Cuban Virgin Mint Lime Mojito',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 1,
    rating: 4.9,
    reviewsCount: 310,
    difficulty: 'Easy',
    calories: 90,
    description: 'Crisp garden spearmint leaves muddled with raw demerara sugar and lime wedges, topped with cracked crystal ice and effervescent soda.',
    featured: false,
    tags: ['Muddled Spearmint', 'Cracked Ice', 'Crisp Citrus', 'Non-Alcoholic'],
    ingredients: [
      { id: 'mj1', name: 'Fresh Garden Spearmint Leaves', amount: 12, unit: 'leaves' },
      { id: 'mj2', name: 'Fresh Juicy Lime Wedges', amount: 4, unit: 'wedges' },
      { id: 'mj3', name: 'Raw Turbinado / Demerara Sugar', amount: 2, unit: 'tsp' },
      { id: 'mj4', name: 'Crushed Clear Ice', amount: 1.5, unit: 'cups' },
      { id: 'mj5', name: 'Chilled Club Soda', amount: 180, unit: 'ml' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Place mint leaves, lime wedges, and raw sugar into a highball glass.', durationMinutes: 1 },
      { stepNumber: 2, instruction: 'Muddle firmly to release citrus juice and fragrant mint oils without shredding leaves.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Pack glass tightly with crushed ice.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Pour cold club soda to the top, churn with a bar spoon, and crown with a mint bouquet.', durationMinutes: 2 }
    ]
  },
  {
    id: 'dr-horchata',
    title: 'Mexican Cinnamon Rice & Almond Horchata',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "/recipes/dr-horchata.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 0,
    servings: 4,
    rating: 4.9,
    reviewsCount: 260,
    difficulty: 'Easy',
    calories: 210,
    description: 'Traditional Mexican agua fresca of long-grain rice and almonds soaked with Canela cinnamon sticks, blended silky smooth with vanilla and evaporated milk.',
    featured: false,
    tags: ['Canela Cinnamon', 'Soaked Almonds', 'Mexican Agua Fresca', 'Silky Sweet'],
    ingredients: [
      { id: 'hc1', name: 'Long Grain White Rice', amount: 1, unit: 'cup', notes: 'Rinsed' },
      { id: 'hc2', name: 'Raw Whole Almonds', amount: 0.5, unit: 'cup' },
      { id: 'hc3', name: 'Mexican Canela Cinnamon Sticks', amount: 2, unit: 'sticks' },
      { id: 'hc4', name: 'Evaporated Milk & Condensed Milk', amount: 1, unit: 'cup' },
      { id: 'hc5', name: 'Vanilla Extract & Ground Cinnamon for dusting', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Soak rice, almonds, and broken cinnamon sticks in 3 cups of hot water for 4 hours.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Blend mixture in high-powered blender for 3 minutes until completely pulverized.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Strain through a nut milk bag or fine cheesecloth into a pitcher, discarding solid grit.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Stir in evaporated milk, condensed milk, vanilla, and chill; serve over ice with cinnamon dust.', durationMinutes: 2 }
    ]
  },
  {
    id: 'dr-berry-smoothie',
    title: 'Wild Triple Berry Greek Yogurt Smoothie',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 2,
    rating: 4.8,
    reviewsCount: 230,
    difficulty: 'Easy',
    calories: 220,
    description: 'Thick antioxidant blend of wild blueberries, raspberries, and blackberries whirled with plain Greek yogurt, almond milk, chia seeds, and raw honey.',
    featured: false,
    tags: ['Antioxidant Rich', 'Wild Berries', 'Greek Yogurt Protein', 'Quick Breakfast'],
    ingredients: [
      { id: 'bs1', name: 'Frozen Wild Mixed Berries (Blueberry, Raspberry, Blackberry)', amount: 2, unit: 'cups' },
      { id: 'bs2', name: 'Plain Greek Yogurt (0% or 2%)', amount: 1, unit: 'cup' },
      { id: 'bs3', name: 'Unsweetened Vanilla Almond Milk', amount: 1, unit: 'cup' },
      { id: 'bs4', name: 'Raw Honey or Pure Maple Syrup', amount: 1.5, unit: 'tbsp' },
      { id: 'bs5', name: 'Black Chia Seeds', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Place almond milk and Greek yogurt at bottom of blender container.', durationMinutes: 1 },
      { stepNumber: 2, instruction: 'Add frozen berries, honey, and chia seeds on top.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Blend on high speed for 60 seconds until thick, frost-textured, and rich magenta.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Pour into glasses and top with a sprinkle of chia seeds and fresh berries.', durationMinutes: 1 }
    ]
  },
  {
    id: 'dr-boba-tea',
    title: 'Brown Sugar Tiger Milk Boba Tea',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "/recipes/dr-boba-tea.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 2,
    rating: 4.9,
    reviewsCount: 380,
    difficulty: 'Medium',
    calories: 340,
    description: 'Chewy warm tapioca pearls simmered in dark Muscovado brown sugar syrup, swirled along the inner walls of the cup with creamy cold fresh milk and cream.',
    featured: false,
    tags: ['Tiger Stripes', 'Chewy Boba', 'Muscovado Sugar', 'Taiwanese Classic'],
    ingredients: [
      { id: 'bb1', name: 'Black Tapioca Pearls (Boba)', amount: 100, unit: 'g' },
      { id: 'bb2', name: 'Dark Muscovado Brown Sugar', amount: 80, unit: 'g' },
      { id: 'bb3', name: 'Fresh Whole Milk or Oat Milk', amount: 350, unit: 'ml' },
      { id: 'bb4', name: 'Heavy Cream for cream cap', amount: 40, unit: 'ml' },
      { id: 'bb5', name: 'Crushed Ice Cubes', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Boil tapioca pearls in rolling water for 15 minutes; cover and rest for 15 minutes until chewy.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Simmer brown sugar with water until it forms a thick molasses syrup; stir warm drained pearls into syrup.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Spoon warm boba with syrup into glass; tilt and rotate glass to coat walls with dripping brown sugar stripes.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Add ice, pour cold fresh milk, float cream on top, and poke with giant boba straw.', durationMinutes: 2 }
    ]
  },
  {
    id: 'dr-hibiscus-tea',
    title: 'Egyptian Chilled Hibiscus Karkadeh Tea',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "/recipes/dr-hibiscus-tea.jpg",
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    servings: 4,
    rating: 4.8,
    reviewsCount: 165,
    difficulty: 'Easy',
    calories: 80,
    description: 'Deep ruby steeped dried hibiscus calyces (karkadeh) simmered with fresh mint, a touch of orange peel, and raw sugar, served ice-cold.',
    featured: false,
    tags: ['Deep Ruby', 'Tart & Sweet', 'Egyptian Heritage', 'Naturally Caffeine Free'],
    ingredients: [
      { id: 'hb1', name: 'Dried Hibiscus Flowers (Karkadeh)', amount: 1, unit: 'cup' },
      { id: 'hb2', name: 'Fresh Orange Peel strips', amount: 3, unit: 'strips' },
      { id: 'hb3', name: 'Fresh Spearmint Sprigs', amount: 5, unit: 'sprigs' },
      { id: 'hb4', name: 'Cane Sugar or Agave Nectar', amount: 0.5, unit: 'cup' },
      { id: 'hb5', name: 'Water & Clear Ice Cubes', amount: 4, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Bring water to a boil with orange peel; stir in dried hibiscus flowers and sugar.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Turn off heat, cover, and let steep for 15 minutes until broth is dark ruby red.', durationMinutes: 15 },
      { stepNumber: 3, instruction: 'Strain through fine sieve into a pitcher and chill thoroughly in refrigerator.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Serve over generous ice cubes with fresh mint sprigs and orange slices.', durationMinutes: 2 }
    ]
  },
  {
    id: 'dr-watermelon-cooler',
    title: 'Watermelon Mint Lime Agua Fresca',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "/recipes/dr-watermelon-cooler.jpg",
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    servings: 3,
    rating: 4.9,
    reviewsCount: 220,
    difficulty: 'Easy',
    calories: 95,
    description: 'Sweet seedless ripe watermelon cubes blitzed with fresh lime juice, sea salt, and garden mint, strained into a hyper-hydrating ruby elixir.',
    featured: false,
    tags: ['Hydrating', 'Zero Added Sugar', 'Fresh Mint', 'Summer Essential'],
    ingredients: [
      { id: 'wm1', name: 'Cold Seedless Watermelon Cubes', amount: 5, unit: 'cups' },
      { id: 'wm2', name: 'Fresh Lime Juice', amount: 3, unit: 'tbsp' },
      { id: 'wm3', name: 'Fresh Mint Leaves', amount: 10, unit: 'leaves' },
      { id: 'wm4', name: 'Pinch of Himalayan Pink Salt', amount: 1, unit: 'pinch' },
      { id: 'wm5', name: 'Crushed Ice Cubes', amount: 2, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Add chilled watermelon chunks and lime juice into blender.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Pulse on high for 45 seconds until completely pureed; strain through mesh strainer if pulp-free juice is desired.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Muddle fresh mint leaves gently in glasses with pink salt.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Pour watermelon juice over crushed ice and stir.', durationMinutes: 1 }
    ]
  },
  {
    id: 'dr-golden-milk',
    title: 'Ayurvedic Turmeric Golden Milk (Haldi Doodh)',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "/recipes/dr-golden-milk.jpg",
    prepTimeMinutes: 5,
    cookTimeMinutes: 8,
    servings: 2,
    rating: 4.8,
    reviewsCount: 180,
    difficulty: 'Easy',
    calories: 160,
    description: 'Warm soothing milk simmered with organic turmeric root, crushed black peppercorns (to activate curcumin), ginger, cinnamon, and raw honey.',
    featured: false,
    tags: ['Ayurvedic Healing', 'Anti-Inflammatory', 'Nighttime Ritual', 'Golden Glow'],
    ingredients: [
      { id: 'gm1', name: 'Whole Milk or Creamy Coconut Milk', amount: 2, unit: 'cups' },
      { id: 'gm2', name: 'Ground Turmeric Powder or Fresh Grated Root', amount: 1.5, unit: 'tsp' },
      { id: 'gm3', name: 'Fresh Ginger Root', amount: 1, unit: 'tsp', notes: 'Finely grated' },
      { id: 'gm4', name: 'Freshly Ground Black Pepper', amount: 0.25, unit: 'tsp', notes: 'Essential for absorption' },
      { id: 'gm5', name: 'Cinnamon Stick & Pure Honey', amount: 1.5, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat milk in a saucepan over medium-low heat.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Whisk in turmeric, grated ginger, black pepper, and cinnamon stick.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Gently simmer for 6 minutes without letting boil over so spices infuse.', durationMinutes: 6 },
      { stepNumber: 4, instruction: 'Strain into ceramic mugs and stir in honey when slightly cooled.', durationMinutes: 2 }
    ]
  },
  {
    id: 'dr-cucumber-detox',
    title: 'Crisp Cucumber Basil Detox Cooler',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "/recipes/dr-cucumber-detox.jpg",
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 2,
    rating: 4.7,
    reviewsCount: 135,
    difficulty: 'Easy',
    calories: 60,
    description: 'Refreshing cold-pressed English cucumber juice blended with Italian sweet basil leaves, green apple, lime juice, and coconut water.',
    featured: false,
    tags: ['Detox Cleanse', 'Hydrating Cucumber', 'Fresh Basil Note', 'Low Calorie'],
    ingredients: [
      { id: 'cd1', name: 'English Seedless Cucumbers', amount: 2, unit: 'pcs' },
      { id: 'cd2', name: 'Fresh Italian Sweet Basil Leaves', amount: 8, unit: 'leaves' },
      { id: 'cd3', name: 'Crisp Granny Smith Apple', amount: 0.5, unit: 'pc' },
      { id: 'cd4', name: 'Pure Coconut Water', amount: 1, unit: 'cup' },
      { id: 'cd5', name: 'Fresh Lime Juice', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Blend chopped cucumber, green apple, basil leaves, lime juice, and coconut water until smooth.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Strain juice through a fine mesh strainer into a pitcher.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Pour over ice with thin shaved cucumber ribbons pressed against the glass inside.', durationMinutes: 1 }
    ]
  },
  {
    id: 'dr-hot-chocolate',
    title: 'Rich Belgian Dark Hot Chocolate with Torched Mallow',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 5,
    cookTimeMinutes: 8,
    servings: 2,
    rating: 5.0,
    reviewsCount: 390,
    difficulty: 'Easy',
    calories: 380,
    description: '70% Valrhona dark chocolate callets melted slowly into whole milk and heavy cream with a pinch of sea salt, topped with torched vanilla marshmallow fluff.',
    featured: false,
    tags: ['70% Valrhona Dark', 'Torched Marshmallow', 'Decadent Winter', 'Velvet Smooth'],
    ingredients: [
      { id: 'hc1', name: '70% Belgian or Valrhona Dark Chocolate', amount: 120, unit: 'g', notes: 'Finely chopped' },
      { id: 'hc2', name: 'Whole Milk & Heavy Cream', amount: 1.5, unit: 'cups' },
      { id: 'hc3', name: 'Dutch-Process Cocoa Powder', amount: 1, unit: 'tbsp' },
      { id: 'hc4', name: 'Pure Vanilla Extract & Sea Salt', amount: 0.5, unit: 'tsp' },
      { id: 'hc5', name: 'Marshmallow Fluff or Giant Marshmallows', amount: 2, unit: 'scoops' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Warm milk and cream in saucepan with cocoa powder and pinch of salt over gentle heat.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Remove from heat, add chopped dark chocolate, and whisk vigorously until melted into a glossy velvet ganache.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Pour into warmed mugs; top with a generous mound of marshmallow fluff.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Caramelize the marshmallow with a culinary blowtorch until toasted golden brown.', durationMinutes: 1 }
    ]
  },
  {
    id: 'dr-acai-shake',
    title: 'Brazilian Amazon Acai Energy Shake',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "/recipes/dr-acai-shake.jpg",
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 1,
    rating: 4.9,
    reviewsCount: 210,
    difficulty: 'Easy',
    calories: 290,
    description: 'Frozen organic Amazonian açaí puree blended with guarana syrup, ripe frozen banana, almond butter, and oat milk into an energizing purple shake.',
    featured: false,
    tags: ['Organic Açaí', 'Guarana Energy', 'Brazilian Superfood', 'Nut Butter Boost'],
    ingredients: [
      { id: 'ac1', name: 'Frozen Unsweetened Açaí Packet', amount: 100, unit: 'g', notes: 'Broken into chunks' },
      { id: 'ac2', name: 'Frozen Ripe Banana', amount: 1, unit: 'pc' },
      { id: 'ac3', name: 'Creamy Almond Butter', amount: 1, unit: 'tbsp' },
      { id: 'ac4', name: 'Oat Milk or Coconut Milk', amount: 1, unit: 'cup' },
      { id: 'ac5', name: 'Raw Honey & Cacao Nibs for topping', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Break frozen açaí pack into high-speed blender.', durationMinutes: 1 },
      { stepNumber: 2, instruction: 'Add frozen banana chunks, almond butter, honey, and oat milk.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Blend until silky smooth and deep violet in color.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Pour into tall glass and sprinkle crunchy cacao nibs on top.', durationMinutes: 1 }
    ]
  },
  {
    id: 'dr-spanish-sangria',
    title: 'Non-Alcoholic Citrus Pomegranate Sangria',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    servings: 4,
    rating: 4.8,
    reviewsCount: 175,
    difficulty: 'Easy',
    calories: 130,
    description: 'Deep red pomegranate and black cherry juices steeped with sliced oranges, crisp Honeycrisp apples, cinnamon bark, and finished with sparkling water.',
    featured: false,
    tags: ['Pomegranate Ruby', 'Spiced Citrus', 'Macerated Fruit', 'Party Pitcher'],
    ingredients: [
      { id: 'sg1', name: 'Pure Tart Pomegranate Juice', amount: 2, unit: 'cups' },
      { id: 'sg2', name: 'Dark Tart Cherry Juice', amount: 1, unit: 'cup' },
      { id: 'sg3', name: 'Orange Slices & Honeycrisp Apple cubes', amount: 1.5, unit: 'cups' },
      { id: 'sg4', name: 'Cinnamon Sticks & Whole Cloves', amount: 2, unit: 'sticks' },
      { id: 'sg5', name: 'Chilled Ginger Ale or Club Soda', amount: 2, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'In a large glass pitcher, combine sliced fruits, cinnamon sticks, and juices.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Muddle lightly with a wooden spoon and refrigerate for 2 hours to infuse flavors.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Fill wine glasses with ice, spoon in macerated fruit, and fill halfway with sangria base.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Top with sparkling ginger ale and serve.', durationMinutes: 1 }
    ]
  },
  {
    id: 'dr-viet-coffee',
    title: 'Vietnamese Iced Condensed Milk Coffee (Cà Phê Sữa Đá)',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 5,
    cookTimeMinutes: 5,
    servings: 1,
    rating: 5.0,
    reviewsCount: 440,
    difficulty: 'Easy',
    calories: 220,
    description: 'Intense dark roast Robusta coffee slow-dripped through a stainless steel Phin filter over sweet creamy sweetened condensed milk and poured over crushed ice.',
    featured: false,
    tags: ['Phin Drip Brew', 'Robusta Roast', 'Sweet Condensed Milk', 'High Caffeine'],
    ingredients: [
      { id: 'vc1', name: 'Dark Roast Vietnamese Coffee (Trung Nguyen)', amount: 3, unit: 'tbsp' },
      { id: 'vc2', name: 'Sweetened Condensed Milk', amount: 2.5, unit: 'tbsp' },
      { id: 'vc3', name: 'Boiling Filtered Water', amount: 120, unit: 'ml' },
      { id: 'vc4', name: 'Crushed Ice Cubes', amount: 1.5, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Spoon condensed milk into bottom of heat-proof glass.', durationMinutes: 1 },
      { stepNumber: 2, instruction: 'Place Phin filter on top; add ground coffee and screw damper down lightly.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Pour 20ml water to bloom for 30 seconds, then fill filter to top and let slow drip through.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Stir dark coffee and condensed milk together until golden caramel, then pour over tall glass packed with crushed ice.', durationMinutes: 2 }
    ]
  },
  {
    id: 'dr-ginger-beer',
    title: 'Artisanal Spiced Ginger Beer with Lime & Mint',
    category: 'drinks',
    categoryLabel: 'Artisan Drinks',
    imageUrl: "/recipes/dr-ginger-beer.jpg",
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    servings: 3,
    rating: 4.8,
    reviewsCount: 190,
    difficulty: 'Easy',
    calories: 120,
    description: 'Fiery fresh ginger root simmered into a concentrated spiced syrup with lime zest and black peppercorns, charged with crisp club soda.',
    featured: false,
    tags: ['Fiery Fresh Ginger', 'Spiced Syrup', 'Copper Mug', 'Crisp Sparkle'],
    ingredients: [
      { id: 'gb1', name: 'Fresh Ginger Root', amount: 150, unit: 'g', notes: 'Grated unpeeled' },
      { id: 'gb2', name: 'Turbinado Brown Sugar & Water', amount: 1, unit: 'cup' },
      { id: 'gb3', name: 'Fresh Lime Juice & Zest', amount: 3, unit: 'tbsp' },
      { id: 'gb4', name: 'Cracked Black Peppercorn', amount: 0.5, unit: 'tsp' },
      { id: 'gb5', name: 'Chilled Sparkling Soda & Fresh Mint', amount: 3, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Simmer grated ginger, peppercorns, lime zest, sugar, and water in saucepan for 10 minutes.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Cover and steep for 20 minutes; press through fine sieve to extract pungent ginger syrup.', durationMinutes: 10 },
      { stepNumber: 3, instruction: 'Pour 3 tablespoons of chilled ginger syrup and fresh lime juice into a copper mug filled with ice.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Top with sparkling soda and clap mint between hands before garnishing.', durationMinutes: 1 }
    ]
  }
];
