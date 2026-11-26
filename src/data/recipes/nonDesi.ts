import { Recipe } from '../../types';

export const NON_DESI_RECIPES: Recipe[] = [
  {
    id: 'nd-ramen',
    title: 'Tokyo Shoyu Pork Chashu Ramen',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 25,
    cookTimeMinutes: 35,
    servings: 2,
    rating: 4.9,
    reviewsCount: 375,
    difficulty: 'Medium',
    calories: 610,
    description: 'Deep umami dashi and chicken broth infused with aged shoyu tare, chewy wheat ramen noodles, tender pork chashu, jammy ajitsuke tamago, and nori.',
    featured: true,
    tags: ['Comfort Soup', 'Umami Rich', 'Japanese Masterpiece'],
    ingredients: [
      { id: 'rm1', name: 'Fresh Artisan Ramen Noodles', amount: 260, unit: 'g' },
      { id: 'rm2', name: 'Rich Chicken & Dashi Broth', amount: 800, unit: 'ml' },
      { id: 'rm3', name: 'Braised Pork Chashu Slices', amount: 6, unit: 'slices', notes: 'Lightly blowtorched' },
      { id: 'rm4', name: 'Ajitsuke Tamago (Marinated Soft Eggs)', amount: 2, unit: 'pcs', notes: 'Jammy yolks' },
      { id: 'rm5', name: 'Shoyu Ramen Tare (Soy, Mirin, Sake)', amount: 4, unit: 'tbsp' },
      { id: 'rm6', name: 'Scallions, Menma & Roasted Nori Sheets', amount: 1, unit: 'serving' },
      { id: 'rm7', name: 'Black Garlic Aromatics Oil (Mayu)', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Simmer broth and keep it piping hot. Prepare warmed ramen bowls with 2 tbsp of shoyu tare in each.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Boil fresh noodles in rolling water for 75 to 90 seconds. Strain hard to remove excess water.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Pour hot broth into bowls and fold noodles neatly with chopsticks.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Arrange chashu slices, halved marinated eggs, green scallions, bamboo shoots, and crisp nori sheets.', durationMinutes: 3 }
    ]
  },
  {
    id: 'nd-paella',
    title: 'Valencian Seafood & Saffron Paella',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    servings: 4,
    rating: 4.8,
    reviewsCount: 164,
    difficulty: 'Medium',
    calories: 550,
    description: 'Spanish Bomba rice simmered in saffron shellfish fumet, studded with jumbo tiger prawns, calamari rings, mussels, and roasted piquillo peppers with crispy socarrat.',
    featured: true,
    tags: ['Crispy Socarrat', 'Saffron Infused', 'Mediterranean'],
    ingredients: [
      { id: 'pl1', name: 'Spanish Bomba Rice', amount: 350, unit: 'g' },
      { id: 'pl2', name: 'Jumbo Tiger Prawns & Calamari', amount: 400, unit: 'g' },
      { id: 'pl3', name: 'Fresh Blue Mussels', amount: 300, unit: 'g', notes: 'Cleaned & debearded' },
      { id: 'pl4', name: 'Seafood Fumet with Crushed Saffron', amount: 850, unit: 'ml' },
      { id: 'pl5', name: 'Sofrito (Tomato, Sweet Paprika, Garlic)', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'In a wide steel paellera pan, sear prawns and calamari in olive oil for 2 minutes and set aside.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Fry sofrito, stir in Bomba rice to coat grains, and pour simmering saffron stock evenly.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Cook without stirring on medium for 10 minutes, then tuck seafood and mussels into the rice.', durationMinutes: 10 },
      { stepNumber: 4, instruction: 'Increase heat for last 2 minutes until rice crackles to form the golden crust (socarrat). Rest 5 minutes before serving.', durationMinutes: 7 }
    ]
  },
  {
    id: 'nd-tacos',
    title: 'Street Style Tacos al Pastor',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    servings: 4,
    rating: 4.8,
    reviewsCount: 220,
    difficulty: 'Easy',
    calories: 470,
    description: 'Thin-sliced pork marinated in achiote, guajillo chiles, and pineapple juice, seared with caramelized pineapple chunks on warm corn tortillas.',
    featured: false,
    tags: ['Smoky Achiote', 'Caramelized Pineapple', 'Mexican Street Food'],
    ingredients: [
      { id: 'tc1', name: 'Pork Shoulder thinly sliced', amount: 500, unit: 'g' },
      { id: 'tc2', name: 'Achiote paste & Guajillo marinade', amount: 4, unit: 'tbsp' },
      { id: 'tc3', name: 'Fresh Pineapple wedges', amount: 1, unit: 'cup' },
      { id: 'tc4', name: 'Warm White Corn Tortillas', amount: 8, unit: 'pcs' },
      { id: 'tc5', name: 'Diced White Onion, Cilantro & Lime', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Marinate pork slices in achiote, garlic, vinegar, and pineapple juice.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Sear pork on a smoking cast iron comal with pineapple slices until charred and smoky.', durationMinutes: 8 },
      { stepNumber: 3, instruction: 'Chop meat finely and assemble in double corn tortillas with chopped cilantro, onions, and spicy salsa.', durationMinutes: 5 }
    ]
  },
  {
    id: 'nd-tagine',
    title: 'Moroccan Apricot & Lamb Tagine',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    servings: 4,
    rating: 4.7,
    reviewsCount: 132,
    difficulty: 'Medium',
    calories: 590,
    description: 'Slow-simmered lamb stew braised with sweet dried Turkish apricots, toasted almonds, cinnamon, ras el hanout, and honey in a clay pot.',
    featured: false,
    tags: ['Aromatic Spices', 'Sweet & Savory', 'North African'],
    ingredients: [
      { id: 'tg1', name: 'Boneless Lamb leg cubes', amount: 700, unit: 'g' },
      { id: 'tg2', name: 'Ras El Hanout Moroccan Spice', amount: 1.5, unit: 'tbsp' },
      { id: 'tg3', name: 'Dried Apricots & Toasted Almonds', amount: 100, unit: 'g' },
      { id: 'tg4', name: 'Cinnamon Stick & Pure Honey', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Brown lamb pieces with red onions, garlic, and ras el hanout spices in olive oil.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Add broth, cover conical tagine pot, and braise gently on low flame for 40 minutes.', durationMinutes: 40 },
      { stepNumber: 3, instruction: 'Stir in sweet dried apricots and honey for last 10 minutes until meat is butter-tender. Top with toasted almonds.', durationMinutes: 10 }
    ]
  },
  {
    id: 'nd-pad-thai',
    title: 'Bangkok Street Style Chicken Pad Thai',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "/recipes/nd-pad-thai.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 2,
    rating: 4.9,
    reviewsCount: 350,
    difficulty: 'Easy',
    calories: 520,
    description: 'Stir-fried rice noodles with succulent chicken, pressed tofu, scrambled egg, garlic chives, crunchy peanuts, and authentic tamarind palm sugar sauce.',
    featured: false,
    tags: ['Tamarind Glaze', 'Wok Hei', 'Thai Street Classic', 'Quick 25 Min'],
    ingredients: [
      { id: 'pth1', name: 'Flat Rice Noodles (Sen Lek)', amount: 200, unit: 'g', notes: 'Soaked in warm water' },
      { id: 'pth2', name: 'Sliced Chicken Breast or Prawns', amount: 200, unit: 'g' },
      { id: 'pth3', name: 'Pad Thai Sauce (Tamarind paste, fish sauce, palm sugar)', amount: 4, unit: 'tbsp' },
      { id: 'pth4', name: 'Pressed Firm Tofu & Sweet Radish', amount: 80, unit: 'g' },
      { id: 'pth5', name: 'Crushed Roasted Peanuts, Lime Wedges & Fresh Bean Sprouts', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat oil in a hot wok. Fry diced tofu and chicken until golden; push aside and scramble 2 eggs.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Add drained rice noodles and pad thai sauce; stir fry on high heat until noodles absorb sweet-tangy sauce.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Toss in fresh bean sprouts and Chinese garlic chives for 30 seconds of smoky wok hei.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Serve hot with crushed peanuts, lime wedges, and Thai chili flakes on the side.', durationMinutes: 2 }
    ]
  },
  {
    id: 'nd-birria-tacos',
    title: 'Crispy Jalisco Beef Birria Quesa-Tacos',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 25,
    cookTimeMinutes: 75,
    servings: 4,
    rating: 5.0,
    reviewsCount: 460,
    difficulty: 'Hard',
    calories: 680,
    description: 'Slow-braised beef chuck and short ribs in guajillo-ancho chili broth, stuffed into broth-dipped corn tortillas with Oaxaca cheese, fried crispy and served with consomé.',
    featured: false,
    tags: ['Dip in Consomé', 'Oaxaca Cheese Melt', 'Slow Braised', 'Viral Hit'],
    ingredients: [
      { id: 'bt1', name: 'Beef Chuck Roast & Bone-in Short Ribs', amount: 900, unit: 'g' },
      { id: 'bt2', name: 'Dried Guajillo & Ancho Chilies', amount: 6, unit: 'chilies', notes: 'Stemmed & seeded' },
      { id: 'bt3', name: 'Melting Oaxaca or Monterey Jack Cheese', amount: 250, unit: 'g' },
      { id: 'bt4', name: 'Corn Tortillas', amount: 12, unit: 'pcs' },
      { id: 'bt5', name: 'Cilantro, Diced White Onion & Lime for Consomé', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Rehydrate dried chilies in hot broth, blend with tomatoes, garlic, apple cider vinegar, and oregano into smooth adobo.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Sear beef cuts, pour adobo broth over, and braise on low heat for 75 mins until beef shreds with forks.', durationMinutes: 75 },
      { stepNumber: 3, instruction: 'Dip tortillas into shimmering chili fat on top of the broth; griddle on flat top with shredded cheese and tender beef.', durationMinutes: 6 },
      { stepNumber: 4, instruction: 'Fold tacos and griddle until golden and crunchy. Serve piping hot with bowls of onion-cilantro consomé for dipping.', durationMinutes: 4 }
    ]
  },
  {
    id: 'nd-pho-bo',
    title: 'Hanoi Traditional Slow-Simmered Beef Pho Bo',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 25,
    cookTimeMinutes: 60,
    servings: 4,
    rating: 4.9,
    reviewsCount: 320,
    difficulty: 'Medium',
    calories: 490,
    description: 'Crystal-clear aromatic beef bone broth infused with charred ginger, star anise, cinnamon, and black cardamom, poured over flat rice noodles and thin sirloin slices.',
    featured: false,
    tags: ['Star Anise Broth', 'Vietnamese Heritage', 'Clean & Fragrant', 'Healing Bowl'],
    ingredients: [
      { id: 'ph1', name: 'Beef Marrow Bones & Brisket', amount: 1000, unit: 'g' },
      { id: 'ph2', name: 'Fresh Flat Pho Rice Noodles (Bánh Phở)', amount: 400, unit: 'g' },
      { id: 'ph3', name: 'Charred Yellow Onions & Fresh Ginger Knobs', amount: 2, unit: 'pcs' },
      { id: 'ph4', name: 'Toasted Spices (Star Anise, Cinnamon, Cloves, Cardamom)', amount: 2, unit: 'tbsp' },
      { id: 'ph5', name: 'Thin Raw Beef Sirloin Slices', amount: 200, unit: 'g', notes: 'Paper thin' },
      { id: 'ph6', name: 'Thai Basil, Jalapeño, Lime & Bean Sprouts', amount: 1, unit: 'platter' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Parboil bones for 10 minutes and rinse to ensure clear broth; roast charred ginger and onions on open flame.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Simmer bones, brisket, charred aromatics, and toasted spices gently for 45 minutes; season with premium fish sauce and rock sugar.', durationMinutes: 45 },
      { stepNumber: 3, instruction: 'Warm cooked rice noodles in bowls; arrange tender brisket slices and raw sirloin on top.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Ladle boiling broth directly over raw beef to flash cook instantly; serve with herbs and sriracha.', durationMinutes: 2 }
    ]
  },
  {
    id: 'nd-souvlaki',
    title: 'Greek Lemon Oregano Chicken Souvlaki Gyros',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 3,
    rating: 4.8,
    reviewsCount: 260,
    difficulty: 'Easy',
    calories: 510,
    description: 'Skewered chicken tenders marinated in Greek olive oil, wild oregano, garlic, and fresh lemon juice, char-grilled and wrapped in fluffy pita with garlicky tzatziki.',
    featured: false,
    tags: ['Wild Oregano', 'Fluffy Pita', 'Garlic Tzatziki', 'Mediterranean Street'],
    ingredients: [
      { id: 'sv1', name: 'Boneless Chicken Thighs', amount: 500, unit: 'g', notes: 'Cut into cubes' },
      { id: 'sv2', name: 'Extra Virgin Olive Oil & Lemon Juice', amount: 4, unit: 'tbsp' },
      { id: 'sv3', name: 'Dried Greek Oregano & Garlic Cloves', amount: 2, unit: 'tbsp' },
      { id: 'sv4', name: 'Fluffy Greek Pocketless Pita Breads', amount: 4, unit: 'pcs' },
      { id: 'sv5', name: 'Homemade Tzatziki (Greek yogurt, cucumber, dill)', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Marinate chicken pieces in olive oil, lemon juice, pressed garlic, oregano, and salt for 20 minutes.', durationMinutes: 20 },
      { stepNumber: 2, instruction: 'Thread onto wooden skewers and grill over high heat for 10-12 minutes until charred and cooked through.', durationMinutes: 12 },
      { stepNumber: 3, instruction: 'Warm pita bread on the grill with a brush of olive oil.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Smear pita with cold creamy tzatziki, slide grilled chicken off skewers, add sliced tomato, onion, and roll tightly.', durationMinutes: 3 }
    ]
  },
  {
    id: 'nd-gambas-al-ajillo',
    title: 'Sizzling Spanish Garlic Shrimp Gambas al Ajillo',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    servings: 2,
    rating: 4.9,
    reviewsCount: 280,
    difficulty: 'Easy',
    calories: 360,
    description: 'Plump wild prawns swimming in shimmering extra virgin olive oil infused with copious thinly sliced garlic, dried cayenne peppers, dry sherry, and flat parsley.',
    featured: false,
    tags: ['Sizzling Garlic', 'Tapas Bar', '15 Min', 'Crusty Bread Dip'],
    ingredients: [
      { id: 'gm1', name: 'Wild Jumbo Prawns or Shrimp', amount: 400, unit: 'g', notes: 'Peeled & deveined' },
      { id: 'gm2', name: 'Good Quality Spanish Extra Virgin Olive Oil', amount: 0.5, unit: 'cup' },
      { id: 'gm3', name: 'Garlic Cloves', amount: 10, unit: 'cloves', notes: 'Thinly sliced' },
      { id: 'gm4', name: 'Dried Guindilla or Red Chili Peppers', amount: 2, unit: 'pcs' },
      { id: 'gm5', name: 'Fino Dry Sherry & Chopped Fresh Parsley', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat olive oil in a terracotta cazuela or skillet over medium-low; add sliced garlic and chili.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Once garlic begins to sizzle and turn golden (do not burn), turn heat to high and add shrimp in a single layer.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Cook shrimp for 90 seconds per side; splash with dry sherry and season with sea salt.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Sprinkle fresh parsley and serve sizzling immediately with crusty warm baguette to mop the oil.', durationMinutes: 1 }
    ]
  },
  {
    id: 'nd-katsu-curry',
    title: 'Crispy Chicken Katsu with Japanese Golden Curry',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "/recipes/nd-katsu-curry.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    servings: 3,
    rating: 4.9,
    reviewsCount: 395,
    difficulty: 'Medium',
    calories: 680,
    description: 'Golden, extra-crunchy panko-crusted chicken cutlet served over steaming Japanese short-grain rice with a rich, caramelized onion and carrot curry roux.',
    featured: false,
    tags: ['Crispy Panko', 'Caramelized Curry', 'Japanese Comfort', 'Golden Crunch'],
    ingredients: [
      { id: 'kc1', name: 'Boneless Chicken Breasts', amount: 3, unit: 'pcs', notes: 'Lightly pounded' },
      { id: 'kc2', name: 'Japanese Panko Breadcrumbs', amount: 2, unit: 'cups' },
      { id: 'kc3', name: 'Japanese Curry Roux Blocks', amount: 100, unit: 'g' },
      { id: 'kc4', name: 'Onions, Carrots & Yukon Potatoes', amount: 2, unit: 'cups', notes: 'Chunky cut' },
      { id: 'kc5', name: 'Steamed Calrose Rice & Fukujinzuke pickles', amount: 2, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Sauté chopped onions, carrots, and potatoes in butter; add water and simmer until vegetables are tender.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Turn off heat, dissolve curry roux blocks into the stew, then simmer on low for 5 minutes until thick and glossy.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Dredge chicken cutlets in flour, egg, and press firmly into panko crumbs; deep-fry at 175°C until golden and crispy.', durationMinutes: 6 },
      { stepNumber: 4, instruction: 'Slice katsu into strips, plate alongside steaming rice, and ladle rich curry sauce over half the cutlet.', durationMinutes: 2 }
    ]
  },
  {
    id: 'nd-bibimbap',
    title: 'Sizzling Korean Dolsot Bibimbap with Gochujang',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    servings: 2,
    rating: 4.8,
    reviewsCount: 270,
    difficulty: 'Medium',
    calories: 540,
    description: 'Crisp scorched rice in a sizzling stone bowl topped with seasoned namul spinach, carrots, shiitake mushrooms, thinly sliced bulgogi beef, sunny egg, and sweet gochujang.',
    featured: false,
    tags: ['Sizzling Stone Bowl', 'Crispy Scorched Rice', 'Fermented Gochujang', 'Korean Classic'],
    ingredients: [
      { id: 'bb1', name: 'Short-Grain Korean Rice', amount: 2, unit: 'cups', notes: 'Cooked hot' },
      { id: 'bb2', name: 'Marinated Bulgogi Beef Slices', amount: 180, unit: 'g' },
      { id: 'bb3', name: 'Seasoned Namul (Spinach, Bean Sprouts, Carrots)', amount: 1.5, unit: 'cups' },
      { id: 'bb4', name: 'Sliced Shiitake Mushrooms', amount: 1, unit: 'cup' },
      { id: 'bb5', name: 'Fresh Eggs', amount: 2, unit: 'pcs' },
      { id: 'bb6', name: 'Bibimbap Sauce (Gochujang, Sesame Oil, Sugar, Garlic)', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Sauté seasoned vegetables and beef separately in toasted sesame oil.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Brush bottom and sides of a stone dolsot bowl with sesame oil; pack cooked rice firmly into the hot bowl.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Heat bowl on stovetop on medium heat until rice sizzles and forms a crispy golden crust (nurungji).', durationMinutes: 6 },
      { stepNumber: 4, instruction: 'Arrange vegetables and beef in colorful wedges; place sunny egg in center with gochujang and mix vigorously at the table.', durationMinutes: 3 }
    ]
  },
  {
    id: 'nd-french-onion',
    title: 'Parisian Gruyère Gratinated French Onion Soup',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "/recipes/nd-french-onion.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 60,
    servings: 4,
    rating: 4.9,
    reviewsCount: 310,
    difficulty: 'Medium',
    calories: 460,
    description: 'Slow-caramelized yellow onions melted down for an hour in butter, simmered in deep beef bone stock, topped with toasted French baguette and bubbling broiled cave-aged Gruyère.',
    featured: false,
    tags: ['Caramelized Onions', 'Broiled Gruyère', 'French Bistro', 'Rich Beef Stock'],
    ingredients: [
      { id: 'fo1', name: 'Yellow Sweet Onions', amount: 5, unit: 'large pcs', notes: 'Thinly sliced' },
      { id: 'fo2', name: 'European Butter & Olive Oil', amount: 3, unit: 'tbsp' },
      { id: 'fo3', name: 'Rich Dark Beef Broth', amount: 1200, unit: 'ml' },
      { id: 'fo4', name: 'Dry Sherry or Cognac', amount: 60, unit: 'ml' },
      { id: 'fo5', name: 'French Baguette Slices', amount: 4, unit: 'slices', notes: 'Toasted hard' },
      { id: 'fo6', name: 'Cave-Aged Gruyère Cheese', amount: 200, unit: 'g', notes: 'Grated' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Caramelize onions slowly in butter and salt over low heat for 45 minutes until dark amber and sweet.', durationMinutes: 45 },
      { stepNumber: 2, instruction: 'Deglaze pot with dry sherry; pour beef broth, fresh thyme bundle, and simmer gently for 20 minutes.', durationMinutes: 20 },
      { stepNumber: 3, instruction: 'Ladle hot soup into oven-safe bowls; float toasted baguette slice on each bowl.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Mound grated Gruyère generously over bread and bowl edges; broil on high for 4-5 minutes until bubbly and bronzed.', durationMinutes: 5 }
    ]
  },
  {
    id: 'nd-shawarma',
    title: 'Levantine Spiced Chicken Shawarma Platter with Toum',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 25,
    cookTimeMinutes: 25,
    servings: 4,
    rating: 4.9,
    reviewsCount: 380,
    difficulty: 'Medium',
    calories: 590,
    description: 'Tender spiced chicken thighs stacked and roasted with cumin, coriander, cardamom, and garlic, served with fluffy Arabic flatbread, pickled wild cucumbers, and whipped toum.',
    featured: false,
    tags: ['Aromatic Shawarma', 'Whipped Toum Garlic', 'Levantine Feast', 'Pickled Vegetables'],
    ingredients: [
      { id: 'shw1', name: 'Boneless Chicken Thighs', amount: 800, unit: 'g' },
      { id: 'shw2', name: 'Shawarma Spice Blend (Cardamom, Cumin, Smoked Paprika, Sumac)', amount: 2, unit: 'tbsp' },
      { id: 'shw3', name: 'Lemon Juice & Olive Oil', amount: 4, unit: 'tbsp' },
      { id: 'shw4', name: 'Toum Garlic Whip (Garlic, Oil, Lemon, Salt)', amount: 0.5, unit: 'cup' },
      { id: 'shw5', name: 'Warm Pita Breads & Pickled Turnips', amount: 1, unit: 'platter' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Marinate chicken thighs with spices, yogurt, lemon juice, and olive oil for at least 30 minutes.', durationMinutes: 30 },
      { stepNumber: 2, instruction: 'Roast in high heat oven at 220°C or sear in cast-iron skillet until exterior is deeply charred.', durationMinutes: 20 },
      { stepNumber: 3, instruction: 'Shred meat into thin ribbons on a cutting board.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Serve on warm flatbreads with generous swooshes of toum garlic whip, parsley, and pickled turnips.', durationMinutes: 3 }
    ]
  },
  {
    id: 'nd-feijoada',
    title: 'Brazilian Black Bean & Smoked Sausage Feijoada',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "/recipes/nd-feijoada.jpg",
    prepTimeMinutes: 25,
    cookTimeMinutes: 60,
    servings: 5,
    rating: 4.8,
    reviewsCount: 190,
    difficulty: 'Medium',
    calories: 640,
    description: 'Brazil’s national soul food stew of black beans, smoked calabresa sausage, pork shoulder, and bacon simmered with bay leaves and garlic, served with toasted farofa and orange slices.',
    featured: false,
    tags: ['Brazilian National Dish', 'Smoked Sausage', 'Toasted Farofa', 'Soul Comfort'],
    ingredients: [
      { id: 'fj1', name: 'Dried Black Beans (Feijão Preto)', amount: 400, unit: 'g', notes: 'Soaked overnight' },
      { id: 'fj2', name: 'Smoked Sausage (Calabresa/Chorizo)', amount: 300, unit: 'g', notes: 'Sliced' },
      { id: 'fj3', name: 'Pork Shoulder cubes & Bacon lardons', amount: 350, unit: 'g' },
      { id: 'fj4', name: 'Bay Leaves & Fresh Garlic', amount: 6, unit: 'cloves' },
      { id: 'fj5', name: 'Toasted Cassava Flour (Farofa) & Orange Slices', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Brown bacon and smoked sausage in a heavy pot; add pork shoulder cubes and sear until golden.', durationMinutes: 12 },
      { stepNumber: 2, instruction: 'Add soaked black beans, bay leaves, minced garlic, and water; cover and simmer for 50 minutes until beans are soft.', durationMinutes: 50 },
      { stepNumber: 3, instruction: 'Mash a ladle of black beans against the pot wall to enrich and thicken the stew.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Serve with steamed white rice, toasted buttery farofa, and fresh orange slices to balance the rich meats.', durationMinutes: 3 }
    ]
  },
  {
    id: 'nd-kofte',
    title: 'Turkish Charred Lamb & Beef Kofte',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 12,
    servings: 3,
    rating: 4.8,
    reviewsCount: 215,
    difficulty: 'Easy',
    calories: 480,
    description: 'Oval patties of ground lamb and beef seasoned with grated onion, cumin, allspice, and flat parsley, grilled over fire and served with sumac onion salad and lavash.',
    featured: false,
    tags: ['Turkish Grill', 'Sumac Onions', 'Charred Over Coals', 'Warm Lavash'],
    ingredients: [
      { id: 'kf1', name: 'Minced Lamb & Beef Blend', amount: 600, unit: 'g' },
      { id: 'kf2', name: 'Grated Onion (liquid squeezed out)', amount: 1, unit: 'pc' },
      { id: 'kf3', name: 'Turkish Spices (Cumin, Allspice, Urfa Biber)', amount: 2, unit: 'tsp' },
      { id: 'kf4', name: 'Soaked Breadcrumbs & Flat-Leaf Parsley', amount: 0.5, unit: 'cup' },
      { id: 'kf5', name: 'Sumac Onion Salad & Grilled Peppers', amount: 1, unit: 'serving' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Knead meat with breadcrumbs, squeezed onions, spices, and parsley for 8 minutes until tacky.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Shape into flat oval patties and chill for 15 minutes to firm up.', durationMinutes: 15 },
      { stepNumber: 3, instruction: 'Grill on high heat for 3-4 minutes per side until charred on exterior and juicy inside.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Serve warm on lavash flatbread with sumac-rubbed red onions and roasted hot peppers.', durationMinutes: 2 }
    ]
  },
  {
    id: 'nd-tom-yum',
    title: 'Spicy Lemongrass & Prawn Tom Yum Goong',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "/recipes/nd-tom-yum.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 3,
    rating: 4.9,
    reviewsCount: 240,
    difficulty: 'Easy',
    calories: 260,
    description: 'A hot and sour Thai soup bursting with fresh lemongrass stalks, kaffir lime leaves, galangal slices, bird’s eye chilies, straw mushrooms, and sweet tiger prawns.',
    featured: false,
    tags: ['Hot & Sour', 'Fragrant Lemongrass', 'Thai Herbs', 'Light & Vibrant'],
    ingredients: [
      { id: 'ty1', name: 'Fresh Jumbo Prawns with heads', amount: 400, unit: 'g' },
      { id: 'ty2', name: 'Lemongrass Stalks', amount: 3, unit: 'stalks', notes: 'Bruised & cut into batons' },
      { id: 'ty3', name: 'Fresh Galangal & Kaffir Lime Leaves', amount: 6, unit: 'slices' },
      { id: 'ty4', name: 'Thai Chili Jam (Nam Prik Pao)', amount: 2, unit: 'tbsp' },
      { id: 'ty5', name: 'Fresh Lime Juice, Fish Sauce & Straw Mushrooms', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Simmer shrimp heads in water for 5 minutes to create rich stock; strain broth.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Bring broth to rolling boil with bruised lemongrass, sliced galangal, and kaffir lime leaves.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Stir in chili jam, mushrooms, and prawns; cook for 3 minutes until prawns turn pink.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Turn off heat before seasoning with fresh lime juice, fish sauce, and fresh coriander.', durationMinutes: 1 }
    ]
  },
  {
    id: 'nd-steak-chimichurri',
    title: 'Argentine Charred Flank Steak with Fresh Chimichurri',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "/recipes/nd-steak-chimichurri.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 3,
    rating: 4.9,
    reviewsCount: 305,
    difficulty: 'Medium',
    calories: 530,
    description: 'Prime flank steak seasoned with coarse sea salt, seared over smoking cast-iron grates to medium-rare, sliced against the grain and topped with tangy herb chimichurri.',
    featured: false,
    tags: ['Argentine Asado', 'Medium Rare', 'Herby Chimichurri', 'High Protein'],
    ingredients: [
      { id: 'st1', name: 'Prime Beef Flank Steak', amount: 600, unit: 'g' },
      { id: 'st2', name: 'Fresh Italian Flat Parsley & Oregano', amount: 1, unit: 'cup', notes: 'Finely minced' },
      { id: 'st3', name: 'Red Wine Vinegar & Olive Oil', amount: 0.5, unit: 'cup' },
      { id: 'st4', name: 'Minced Garlic Cloves & Red Pepper Flakes', amount: 1, unit: 'tbsp' },
      { id: 'st5', name: 'Coarse Parrilla Salt', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Combine minced parsley, oregano, garlic, red wine vinegar, olive oil, and chili flakes; rest 20 minutes.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Pat flank steak dry and season generously with coarse sea salt.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Sear on a smoking cast-iron grill pan for 4-5 minutes per side until deeply crusted and internal temp hits 54°C (130°F).', durationMinutes: 10 },
      { stepNumber: 4, instruction: 'Rest steak for 8 minutes, carve across the grain into thin slices, and spoon chimichurri generously.', durationMinutes: 8 }
    ]
  },
  {
    id: 'nd-jerk-chicken',
    title: 'Jamaican Pimento Wood Smoked Jerk Chicken',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    servings: 4,
    rating: 4.9,
    reviewsCount: 260,
    difficulty: 'Medium',
    calories: 520,
    description: 'Bone-in chicken marinated in fiery Scotch bonnet peppers, allspice pimento berries, fresh thyme, scallions, and dark brown sugar, charred to perfection.',
    featured: false,
    tags: ['Scotch Bonnet', 'Allspice Berries', 'Smoky Caribbean', 'Rice & Peas Pairing'],
    ingredients: [
      { id: 'jc1', name: 'Bone-in Chicken Legs & Thighs', amount: 900, unit: 'g' },
      { id: 'jc2', name: 'Scotch Bonnet Peppers', amount: 2, unit: 'pcs', notes: 'Seeded for heat balance' },
      { id: 'jc3', name: 'Fresh Thyme & Green Scallions', amount: 1, unit: 'bunch' },
      { id: 'jc4', name: 'Ground Jamaican Allspice (Pimento) & Nutmeg', amount: 1.5, unit: 'tbsp' },
      { id: 'jc5', name: 'Dark Soy Sauce, Lime Juice & Brown Sugar', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Blend Scotch bonnet peppers, scallions, thyme, allspice, soy sauce, and lime into a thick aromatic marinade.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Score chicken pieces with deep diagonal cuts and massage marinade into meat; chill for at least 30 minutes.', durationMinutes: 30 },
      { stepNumber: 3, instruction: 'Grill over indirect medium-high heat with smoking wood chips for 30 minutes, turning once until charred.', durationMinutes: 30 },
      { stepNumber: 4, instruction: 'Finish directly over flame to caramelize skin; serve with traditional Caribbean rice and peas.', durationMinutes: 5 }
    ]
  },
  {
    id: 'nd-beef-bourguignon',
    title: 'Classic Burgundy Braised Beef Bourguignon',
    category: 'non-desi',
    categoryLabel: 'Global Non-Desi',
    imageUrl: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 25,
    cookTimeMinutes: 75,
    servings: 4,
    rating: 4.9,
    reviewsCount: 290,
    difficulty: 'Hard',
    calories: 650,
    description: 'French braised beef stew cooked in French Pinot Noir wine with smoked bacon lardons, pearl onions, baby carrots, button mushrooms, and aromatic bouquet garni.',
    featured: false,
    tags: ['French Haute Cuisine', 'Pinot Noir Braised', 'Smoked Lardons', 'Slow Food'],
    ingredients: [
      { id: 'bbg1', name: 'Beef Chuck Roast cubes', amount: 800, unit: 'g' },
      { id: 'bbg2', name: 'Smoked Bacon Lardons', amount: 150, unit: 'g' },
      { id: 'bbg3', name: 'Dry Red Burgundy Wine (Pinot Noir)', amount: 500, unit: 'ml' },
      { id: 'bbg4', name: 'Beef Bone Stock', amount: 400, unit: 'ml' },
      { id: 'bbg5', name: 'Baby Button Mushrooms & Glazed Pearl Onions', amount: 2, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Render bacon lardons in a Dutch oven until crisp; remove and sear beef cubes in batches until deeply browned.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Sauté carrots and onions; deglaze with Pinot Noir, scraping up browned fond from bottom.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Return beef and bacon, add stock and bouquet garni; cover and simmer gently for 65 minutes until fork tender.', durationMinutes: 65 },
      { stepNumber: 4, instruction: 'Sauté mushrooms and pearl onions in butter; fold into stew for final 10 minutes to finish with a glossy sheen.', durationMinutes: 10 }
    ]
  }
];
