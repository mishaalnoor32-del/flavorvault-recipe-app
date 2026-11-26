import { Recipe } from '../../types';

export const ITALIAN_RECIPES: Recipe[] = [
  {
    id: 'it-fettuccine',
    title: 'Creamy Truffle Fettuccine Alfredo',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 2,
    rating: 4.9,
    reviewsCount: 288,
    difficulty: 'Easy',
    calories: 590,
    description: 'Fresh egg fettuccine tossed in a decadent emulsion of melted European butter, aged Parmigiano-Reggiano, crushed black pepper, and white truffle essence.',
    featured: true,
    tags: ['Silky Sauce', 'Vegetarian', 'Parmigiano-Reggiano'],
    ingredients: [
      { id: 'f1', name: 'Fresh Egg Fettuccine Pasta', amount: 250, unit: 'g' },
      { id: 'f2', name: 'Aged Parmigiano-Reggiano (24-Month)', amount: 120, unit: 'g', notes: 'Freshly microplaned' },
      { id: 'f3', name: 'Cultured European Butter', amount: 60, unit: 'g', notes: 'Room temperature' },
      { id: 'f4', name: 'Starchy Pasta Cooking Water', amount: 0.5, unit: 'cup', notes: 'Reserved from pot' },
      { id: 'f5', name: 'White Truffle Oil', amount: 1, unit: 'tsp', notes: 'Finishing drizzle' },
      { id: 'f6', name: 'Cracked Tellicherry Pepper', amount: 0.5, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Bring a large pot of salted water to a rolling boil. Drop fresh fettuccine and cook for just 3 to 4 minutes until al dente.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'In a wide warmed skillet, melt butter over gentle low heat. Add a splash of starchy pasta water.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Transfer pasta directly into skillet. Remove from heat immediately, sprinkle finely grated Parmigiano in batches while tossing vigorously.', durationMinutes: 4, tip: 'Tossing off the heat prevents cheese from clumping.' },
      { stepNumber: 4, instruction: 'Finish with a delicate drizzle of white truffle oil and fresh cracked black pepper.', durationMinutes: 1 }
    ]
  },
  {
    id: 'it-pizza',
    title: 'Artisanal Neapolitan Margherita Pizza',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 3,
    rating: 4.8,
    reviewsCount: 310,
    difficulty: 'Medium',
    calories: 480,
    description: 'Wood-fired sourdough crust topped with sweet San Marzano tomato passata, fresh buffalo mozzarella, fragrant basil leaves, and extra virgin olive oil.',
    featured: true,
    tags: ['Crispy & Airy Crust', 'San Marzano', 'Wood-Fired'],
    ingredients: [
      { id: 'pz1', name: 'Fermented Pizza Dough Ball (Tipo 00)', amount: 300, unit: 'g' },
      { id: 'pz2', name: 'DOP San Marzano Tomatoes', amount: 150, unit: 'g', notes: 'Hand-crushed with sea salt' },
      { id: 'pz3', name: 'Fresh Buffalo Mozzarella (Fior di Latte)', amount: 130, unit: 'g', notes: 'Drained and torn' },
      { id: 'pz4', name: 'Fresh Sweet Basil Leaves', amount: 8, unit: 'pcs' },
      { id: 'pz5', name: 'Cold-Pressed Extra Virgin Olive Oil', amount: 1.5, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Preheat pizza stone or steel at 250°C (480°F) for at least 45 minutes.', durationMinutes: 45 },
      { stepNumber: 2, instruction: 'Stretch fermented dough by hand from center outward, preserving the airy outer crust.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Spread crushed San Marzano sauce sparingly; distribute torn mozzarella pieces evenly.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Bake for 7-9 minutes until crust is puffed with leopard-spot charring and cheese melts in bubbling pools.', durationMinutes: 8 },
      { stepNumber: 5, instruction: 'Scatter fresh basil immediately and finish with a swirl of extra virgin olive oil.', durationMinutes: 1 }
    ]
  },
  {
    id: 'it-lasagna',
    title: 'Classic Layered Bolognese Lasagna',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    servings: 6,
    rating: 4.9,
    reviewsCount: 195,
    difficulty: 'Hard',
    calories: 680,
    description: 'Eight luscious layers of fresh pasta sheets, slow-simmered beef ragù alla Bolognese, silky nutmeg béchamel, and golden gratinated Parmigiano.',
    featured: false,
    tags: ['Comfort Food', 'Slow Ragù', 'Nutmeg Béchamel'],
    ingredients: [
      { id: 'ls1', name: 'Lasagna Pasta Sheets', amount: 12, unit: 'sheets' },
      { id: 'ls2', name: 'Beef Ragù Bolognese', amount: 500, unit: 'g' },
      { id: 'ls3', name: 'Béchamel White Sauce with Nutmeg', amount: 400, unit: 'ml' },
      { id: 'ls4', name: 'Grated Mozzarella & Parmigiano', amount: 200, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Prepare baking dish with a base coating of silky béchamel sauce.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Layer pasta sheets, rich beef ragù, béchamel, and grated cheese. Repeat for 4 layers.', durationMinutes: 15 },
      { stepNumber: 3, instruction: 'Cover with foil and bake at 190°C for 25 minutes, then uncover for 15 minutes until golden brown.', durationMinutes: 40 }
    ]
  },
  {
    id: 'it-risotto',
    title: 'Wild Forest Mushroom & Truffle Risotto',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 3,
    rating: 4.7,
    reviewsCount: 140,
    difficulty: 'Medium',
    calories: 490,
    description: 'Carnaroli rice slowly stirred with hot vegetable broth, pan-seared Porcini and Cremini mushrooms, white wine, and butter mantecatura.',
    featured: false,
    tags: ['Creamy Texture', 'Earthy Porcini', 'Carnaroli Rice'],
    ingredients: [
      { id: 'rs1', name: 'Carnaroli or Arborio Rice', amount: 250, unit: 'g' },
      { id: 'rs2', name: 'Wild Mushrooms (Porcini & Cremini)', amount: 200, unit: 'g' },
      { id: 'rs3', name: 'Warm Vegetable/Chicken Broth', amount: 900, unit: 'ml' },
      { id: 'rs4', name: 'Dry White Wine', amount: 80, unit: 'ml' },
      { id: 'rs5', name: 'Cold Butter & Parmigiano', amount: 50, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Sauté sliced wild mushrooms in butter and thyme until golden; set half aside for garnish.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Toast rice grains dry in pan for 2 mins, deglaze with wine, then gradually add warm broth ladle by ladle.', durationMinutes: 18 },
      { stepNumber: 3, instruction: 'Beat in cold butter and parmigiano vigorously (all’onda) to create a glossy emulsion.', durationMinutes: 3 }
    ]
  },
  {
    id: 'it-carbonara',
    title: 'Authentic Roman Spaghetti alla Carbonara',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 2,
    rating: 5.0,
    reviewsCount: 420,
    difficulty: 'Medium',
    calories: 580,
    description: 'Crispy cured guanciale pork jowl, fresh farm egg yolks, aged Pecorino Romano, and cracked black pepper coating bronze-die spaghetti without cream.',
    featured: false,
    tags: ['Roman Heritage', 'No Cream', 'Crisp Guanciale', 'Pecorino Romano'],
    ingredients: [
      { id: 'cb1', name: 'Bronze-Die Spaghetti', amount: 250, unit: 'g' },
      { id: 'cb2', name: 'Cured Guanciale (pork jowl)', amount: 120, unit: 'g', notes: 'Cut into lardons' },
      { id: 'cb3', name: 'Fresh Egg Yolks', amount: 4, unit: 'pcs' },
      { id: 'cb4', name: 'Pecorino Romano DOP', amount: 60, unit: 'g', notes: 'Finely grated' },
      { id: 'cb5', name: 'Coarsely Ground Black Pepper', amount: 1.5, unit: 'tsp', notes: 'Toasted in dry skillet' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Render guanciale lardons in a skillet over medium-low heat until browned and crisp on the outside; remove skillet from flame.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'In a bowl, whisk egg yolks with grated Pecorino Romano and cracked black pepper into a thick golden paste.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Boil spaghetti in salted water until al dente; transfer directly to the pan with guanciale fat with a splash of pasta water.', durationMinutes: 9 },
      { stepNumber: 4, instruction: 'Pour in the egg-pecorino mixture off the heat, tossing quickly to create a glossy creamy sauce without scrambling.', durationMinutes: 3 }
    ]
  },
  {
    id: 'it-arrabbiata',
    title: 'Penne all’Arrabbiata Piccante',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 3,
    rating: 4.8,
    reviewsCount: 230,
    difficulty: 'Easy',
    calories: 430,
    description: 'Ridged penne rigate coated in an angry fiery tomato sauce infused with thinly sliced garlic cloves, dried red pepper flakes, and fresh Italian parsley.',
    featured: false,
    tags: ['Spicy Piccante', 'Roman Classic', 'Vegan Friendly', 'Quick Pasta'],
    ingredients: [
      { id: 'ar1', name: 'Penne Rigate Pasta', amount: 300, unit: 'g' },
      { id: 'ar2', name: 'San Marzano Peeled Tomatoes', amount: 400, unit: 'g', notes: 'Crushed' },
      { id: 'ar3', name: 'Fresh Garlic Cloves', amount: 5, unit: 'cloves', notes: 'Thinly sliced' },
      { id: 'ar4', name: 'Dried Peperoncino / Red Chili Flakes', amount: 1.5, unit: 'tsp' },
      { id: 'ar5', name: 'Extra Virgin Olive Oil & Fresh Parsley', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Gently fry sliced garlic and chili flakes in abundant olive oil over medium heat until garlic turns pale golden.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Add crushed San Marzano tomatoes and a pinch of salt; simmer for 12 minutes until reduced and aromatic.', durationMinutes: 12 },
      { stepNumber: 3, instruction: 'Cook penne in salted water until al dente; toss directly in the sauce with chopped flat-leaf parsley.', durationMinutes: 3 }
    ]
  },
  {
    id: 'it-osso-buco',
    title: 'Osso Buco alla Milanese with Fresh Gremolata',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "/recipes/it-osso-buco.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 75,
    servings: 4,
    rating: 4.9,
    reviewsCount: 165,
    difficulty: 'Hard',
    calories: 620,
    description: 'Tender cross-cut veal shanks with marrow braised with dry white wine, mirepoix vegetables, and rich veal stock, topped with zesty lemon gremolata.',
    featured: false,
    tags: ['Lombardy Heritage', 'Slow Braised', 'Bone Marrow', 'Zesty Gremolata'],
    ingredients: [
      { id: 'ob1', name: 'Cross-cut Veal Shanks with marrow', amount: 4, unit: 'pcs' },
      { id: 'ob2', name: 'Dry White Wine (Pinot Grigio)', amount: 1, unit: 'cup' },
      { id: 'ob3', name: 'Carrots, Celery & Yellow Onion (Soffritto)', amount: 1.5, unit: 'cups' },
      { id: 'ob4', name: 'Rich Veal or Beef Stock', amount: 2, unit: 'cups' },
      { id: 'ob5', name: 'Fresh Gremolata (Lemon Zest, Parsley, Minced Garlic)', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Dredge veal shanks in flour and brown deeply on both sides in butter and olive oil.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Sauté soffritto vegetables; deglaze pot with white wine, scraping up browned fond.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Return shanks to pot, add stock and herbs, cover and braise gently on low for 75 mins until meat pulls easily.', durationMinutes: 75 },
      { stepNumber: 4, instruction: 'Sprinkle fresh lemon zest-garlic gremolata right before serving over saffron risotto.', durationMinutes: 2 }
    ]
  },
  {
    id: 'it-seafood-linguine',
    title: 'Linguine ai Frutti di Mare',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 3,
    rating: 4.9,
    reviewsCount: 245,
    difficulty: 'Medium',
    calories: 510,
    description: 'Bronze-cut linguine tossed with littleneck clams, Mediterranean mussels, calamari, and sweet tiger prawns in a garlic, white wine, and cherry tomato brodetto.',
    featured: false,
    tags: ['Coastal Seafood', 'White Wine Brodetto', 'Fresh Shellfish', 'Naples Classic'],
    ingredients: [
      { id: 'sf1', name: 'Bronze-Cut Linguine Pasta', amount: 300, unit: 'g' },
      { id: 'sf2', name: 'Fresh Clams & Blue Mussels', amount: 400, unit: 'g', notes: 'Scrubbed' },
      { id: 'sf3', name: 'Tiger Prawns & Tender Calamari Rings', amount: 250, unit: 'g' },
      { id: 'sf4', name: 'Crisp Dry White Wine', amount: 0.5, unit: 'cup' },
      { id: 'sf5', name: 'Sweet Cherry Tomatoes & Garlic', amount: 1.5, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat olive oil with sliced garlic and peperoncino. Add clams and mussels with white wine; cover until shells pop open.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Add cherry tomatoes, prawns, and calamari; simmer for 3 minutes until seafood is tender.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Transfer cooked linguine pasta directly into seafood broth; toss on high flame with chopped parsley and olive oil.', durationMinutes: 3 }
    ]
  },
  {
    id: 'it-gnocchi-sorrentina',
    title: 'Baked Potato Gnocchi alla Sorrentina',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "/recipes/it-gnocchi-sorrentina.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    servings: 4,
    rating: 4.8,
    reviewsCount: 185,
    difficulty: 'Easy',
    calories: 520,
    description: 'Pillow-soft potato gnocchi baked in terracotta dishes with sweet tomato basil passata, stringy bubbling Fior di Latte mozzarella, and aged Parmesan.',
    featured: false,
    tags: ['Melted Mozzarella', 'Pillow Gnocchi', 'Sorrento Sunshine', 'Comfort Baked'],
    ingredients: [
      { id: 'gn1', name: 'Fresh Potato Gnocchi', amount: 500, unit: 'g' },
      { id: 'gn2', name: 'Fresh Fior di Latte Mozzarella', amount: 200, unit: 'g', notes: 'Diced' },
      { id: 'gn3', name: 'Tomato Basil Passata Sauce', amount: 450, unit: 'g' },
      { id: 'gn4', name: 'Parmigiano-Reggiano', amount: 50, unit: 'g' },
      { id: 'gn5', name: 'Fresh Sweet Basil Sprigs', amount: 6, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Boil gnocchi in salted water; as soon as they float to the surface (about 2 mins), skim out with slotted spoon.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Toss hot gnocchi in warm tomato sauce with fresh basil and half the mozzarella.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Transfer to an oven dish, top with remaining mozzarella and grated parmigiano; bake at 200°C for 15 minutes until bubbly and golden.', durationMinutes: 15 }
    ]
  },
  {
    id: 'it-chicken-parm',
    title: 'Golden Crispy Chicken Parmigiana',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    servings: 3,
    rating: 4.9,
    reviewsCount: 340,
    difficulty: 'Medium',
    calories: 640,
    description: 'Pan-fried parmesan-herb crusted chicken cutlets topped with rich garlic marinara sauce, melted whole milk mozzarella, and fresh basil leaves.',
    featured: false,
    tags: ['Crispy Cutlet', 'Melted Provolone', 'Family Favorite', 'Herb Crusted'],
    ingredients: [
      { id: 'cp1', name: 'Chicken Breasts', amount: 3, unit: 'pcs', notes: 'Pounded thin' },
      { id: 'cp2', name: 'Seasoned Italian Breadcrumbs & Panko', amount: 1.5, unit: 'cups' },
      { id: 'cp3', name: 'Grated Parmigiano & Fresh Mozzarella', amount: 180, unit: 'g' },
      { id: 'cp4', name: 'Classic Garlic Herb Marinara Sauce', amount: 1.5, unit: 'cups' },
      { id: 'cp5', name: 'Eggs & Flour for dredging', amount: 2, unit: 'eggs' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Dredge pounded chicken cutlets in flour, whisked egg, and seasoned breadcrumb-parmesan mixture.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Pan fry in olive oil over medium-high heat until deeply golden and crispy on both sides.', durationMinutes: 8 },
      { stepNumber: 3, instruction: 'Place cutlets in a baking tray; ladle warm marinara over centers, top generously with sliced mozzarella.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Broil at 220°C for 5-7 minutes until cheese is browned and bubbling.', durationMinutes: 7 }
    ]
  },
  {
    id: 'it-pesto-trofie',
    title: 'Ligurian Trofie al Pesto Genovese',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "/recipes/it-pesto-trofie.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 3,
    rating: 4.8,
    reviewsCount: 190,
    difficulty: 'Easy',
    calories: 460,
    description: 'Hand-twisted Ligurian trofie pasta boiled with baby potatoes and tender green beans, tossed with mortar-crushed basil, toasted pine nuts, garlic, and Parmigiano.',
    featured: false,
    tags: ['Fresh Basil', 'Ligurian Tradition', 'Pine Nuts', 'Vegetarian'],
    ingredients: [
      { id: 'pt1', name: 'Fresh Trofie Pasta', amount: 350, unit: 'g' },
      { id: 'pt2', name: 'Fresh Genovese Basil Leaves', amount: 3, unit: 'cups' },
      { id: 'pt3', name: 'Toasted Italian Pine Nuts', amount: 40, unit: 'g' },
      { id: 'pt4', name: 'Parmigiano-Reggiano & Pecorino Sardo', amount: 70, unit: 'g' },
      { id: 'pt5', name: 'Diced Yukon Gold Potatoes & Green Beans', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Pound garlic, pine nuts, basil, and salt in a mortar and pestle; swirl in olive oil and cheeses until emerald cream forms.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Boil diced potatoes and green beans directly in the pasta water; add trofie for the last 5 minutes.', durationMinutes: 8 },
      { stepNumber: 3, instruction: 'Drain and gently fold pesto into the warm pasta and vegetables off the heat with pasta water.', durationMinutes: 2 }
    ]
  },
  {
    id: 'it-veal-saltimbocca',
    title: 'Roman Veal Saltimbocca alla Romana',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "/recipes/it-veal-saltimbocca.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 3,
    rating: 4.8,
    reviewsCount: 140,
    difficulty: 'Medium',
    calories: 450,
    description: 'Thin escalopes of tender veal pinned with salty Prosciutto di Parma and fresh sage leaves, pan-seared in butter and deglazed with dry white wine.',
    featured: false,
    tags: ['Prosciutto di Parma', 'Fresh Sage', 'Roman Trattoria', 'Butter Wine Sauce'],
    ingredients: [
      { id: 'sb1', name: 'Thin Veal Cutlets (Escalopes)', amount: 6, unit: 'pcs' },
      { id: 'sb2', name: 'Prosciutto di Parma Slices', amount: 6, unit: 'slices' },
      { id: 'sb3', name: 'Fresh Sage Leaves', amount: 12, unit: 'leaves' },
      { id: 'sb4', name: 'Dry White Wine', amount: 0.5, unit: 'cup' },
      { id: 'sb5', name: 'Butter & Extra Virgin Olive Oil', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Lay prosciutto slice and two fresh sage leaves across each cutlet; secure firmly with a toothpick.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Lightly dust underside with flour; sear in foaming butter and oil for 2 minutes on prosciutto side, then flip for 1 minute.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Remove meat, pour white wine into skillet, and reduce with remaining butter into a glossy pan sauce to spoon over top.', durationMinutes: 3 }
    ]
  },
  {
    id: 'it-caprese-focaccia',
    title: 'Heirloom Caprese on Rosemary Sea Salt Focaccia',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "/recipes/it-caprese-focaccia.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    servings: 2,
    rating: 4.7,
    reviewsCount: 175,
    difficulty: 'Easy',
    calories: 380,
    description: 'Toasted artisan rosemary olive oil focaccia layered with colorful heirloom tomatoes, creamy Pugliese Burrata, basil leaves, and 12-year Modena balsamic drizzle.',
    featured: false,
    tags: ['Fresh Burrata', 'Heirloom Tomatoes', 'Modena Balsamic', 'Artisan Bread'],
    ingredients: [
      { id: 'cf1', name: 'Artisan Rosemary Focaccia Bread', amount: 2, unit: 'large squares' },
      { id: 'cf2', name: 'Fresh Creamy Burrata Cheese', amount: 200, unit: 'g' },
      { id: 'cf3', name: 'Mixed Heirloom Tomatoes', amount: 3, unit: 'pcs', notes: 'Thickly sliced' },
      { id: 'cf4', name: 'Aged Balsamic Glaze of Modena', amount: 1, unit: 'tbsp' },
      { id: 'cf5', name: 'Fresh Basil & Flaky Maldon Sea Salt', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Warm focaccia squares in a hot pan or oven until crispy on exterior while remaining soft inside.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Arrange sliced heirloom tomatoes over focaccia and season with flaky sea salt and cracked pepper.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Tear fresh Burrata open over the tomatoes so rich cream spills through; drizzle with aged balsamic and basil.', durationMinutes: 2 }
    ]
  },
  {
    id: 'it-bruschetta',
    title: 'Tuscan Bruschetta al Pomodoro & Roasted Garlic',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 12,
    cookTimeMinutes: 5,
    servings: 4,
    rating: 4.8,
    reviewsCount: 205,
    difficulty: 'Easy',
    calories: 220,
    description: 'Charred crusty rustic ciabatta rubbed with raw garlic cloves, piled with sweet vine tomatoes, extra virgin olive oil, oregano, and torn basil.',
    featured: false,
    tags: ['Garlic Rubbed', 'Tuscan Antipasto', 'Crisp Ciabatta', '15 Min'],
    ingredients: [
      { id: 'br1', name: 'Rustic Ciabatta or Sourdough Loaf', amount: 8, unit: 'slices' },
      { id: 'br2', name: 'Ripe Vine Campari Tomatoes', amount: 400, unit: 'g', notes: 'Diced small' },
      { id: 'br3', name: 'Raw Garlic Cloves', amount: 2, unit: 'cloves', notes: 'Halved for rubbing' },
      { id: 'br4', name: 'Cold-Pressed Tuscan Extra Virgin Olive Oil', amount: 3, unit: 'tbsp' },
      { id: 'br5', name: 'Fresh Basil Leaves & Sea Salt', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Toss diced tomatoes with olive oil, torn basil, salt, and black pepper; let macerate for 10 minutes.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Grill ciabatta slices over high heat until grill marks appear and edges are crunchy.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Immediately rub the rough toasted surface with the cut side of garlic cloves.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Spoon tomato mixture with juices over bread and serve instantly.', durationMinutes: 1 }
    ]
  },
  {
    id: 'it-minestrone',
    title: 'Hearty Tuscan Minestrone & Cannellini Beans',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "/recipes/it-minestrone.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    servings: 4,
    rating: 4.7,
    reviewsCount: 160,
    difficulty: 'Easy',
    calories: 290,
    description: 'Simmering vegetable soup packed with zucchini, Swiss chard, sweet carrots, creamy cannellini beans, and ditalini pasta in a parmigiano rind broth.',
    featured: false,
    tags: ['Rustic Vegetable', 'Cannellini Beans', 'Parmigiano Broth', 'Healthy Comfort'],
    ingredients: [
      { id: 'mn1', name: 'Cannellini White Beans', amount: 1.5, unit: 'cups', notes: 'Cooked' },
      { id: 'mn2', name: 'Ditalini or Small Shell Pasta', amount: 100, unit: 'g' },
      { id: 'mn3', name: 'Zucchini, Carrots, Celery & Potatoes', amount: 2, unit: 'cups', notes: 'Diced small' },
      { id: 'mn4', name: 'Crushed Tomatoes & Vegetable Broth', amount: 800, unit: 'ml' },
      { id: 'mn5', name: 'Parmigiano Cheese Rind', amount: 1, unit: 'pc', notes: 'Simmered in soup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Sauté mirepoix vegetables in olive oil until soft and sweet.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Add broth, tomatoes, herbs, and parmigiano rind; simmer on gentle low flame for 20 minutes.', durationMinutes: 20 },
      { stepNumber: 3, instruction: 'Add ditalini pasta and cannellini beans; cook until pasta is al dente and soup is rich.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Ladle into bowls with a drizzle of robust olive oil and grated parmesan.', durationMinutes: 2 }
    ]
  },
  {
    id: 'it-eggplant-parm',
    title: 'Classic Melanzane alla Parmigiana',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "/recipes/it-eggplant-parm.jpg",
    prepTimeMinutes: 25,
    cookTimeMinutes: 35,
    servings: 4,
    rating: 4.8,
    reviewsCount: 220,
    difficulty: 'Medium',
    calories: 480,
    description: 'Thin slices of pan-fried eggplant layered with homemade tomato basil sauce, melted mozzarella, and copious amounts of grated Parmigiano-Reggiano.',
    featured: false,
    tags: ['Baked Eggplant', 'Southern Italian', 'Vegetarian Delight', 'Melted Mozzarella'],
    ingredients: [
      { id: 'ep1', name: 'Globe Eggplants', amount: 3, unit: 'pcs', notes: 'Sliced 1/3-inch rounds' },
      { id: 'ep2', name: 'Fresh Mozzarella', amount: 250, unit: 'g', notes: 'Thinly sliced' },
      { id: 'ep3', name: 'San Marzano Tomato Sauce with Basil', amount: 3, unit: 'cups' },
      { id: 'ep4', name: 'Aged Parmigiano-Reggiano', amount: 100, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Salt eggplant slices for 20 minutes to draw out moisture; pat dry and lightly flour.', durationMinutes: 20 },
      { stepNumber: 2, instruction: 'Shallow fry in olive oil until tender and golden brown on both sides.', durationMinutes: 10 },
      { stepNumber: 3, instruction: 'Layer fried eggplant, tomato sauce, mozzarella, and parmesan in a baking dish.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Bake at 190°C for 25 minutes until bubbling and crusted with golden cheese.', durationMinutes: 25 }
    ]
  },
  {
    id: 'it-tagliatelle-ragu',
    title: 'Hand-Cut Tagliatelle al Ragù Tradizionale',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "/recipes/it-tagliatelle-ragu.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 60,
    servings: 4,
    rating: 4.9,
    reviewsCount: 310,
    difficulty: 'Medium',
    calories: 610,
    description: 'Silky golden egg tagliatelle ribbons ribbons coated in a true Bolognese meat sauce slow-cooked with beef, pancetta, milk, white wine, and tomato concentrate.',
    featured: false,
    tags: ['Bologna Signature', 'Egg Tagliatelle', 'Slow-Simmered Meat Sauce'],
    ingredients: [
      { id: 'tr1', name: 'Fresh Egg Tagliatelle Pasta', amount: 400, unit: 'g' },
      { id: 'tr2', name: 'Coarse Ground Beef & Pork/Pancetta', amount: 450, unit: 'g' },
      { id: 'tr3', name: 'Whole Milk', amount: 1, unit: 'cup' },
      { id: 'tr4', name: 'Dry White Wine & Tomato Paste', amount: 0.5, unit: 'cup' },
      { id: 'tr5', name: 'Carrot, Celery & Onion finely minced', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Brown ground meats and pancetta in butter with finely minced aromatics.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Add white wine and simmer until evaporated; pour whole milk and simmer until absorbed to tenderize meat.', durationMinutes: 15 },
      { stepNumber: 3, instruction: 'Stir in tomato paste and stock; simmer on lowest heat for 45 minutes until velvety.', durationMinutes: 45 },
      { stepNumber: 4, instruction: 'Boil fresh tagliatelle for 3 minutes, toss vigorously into ragù, and serve with parmigiano.', durationMinutes: 3 }
    ]
  },
  {
    id: 'it-cannelloni',
    title: 'Baked Spinach & Ricotta Cannelloni',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "/recipes/it-cannelloni.jpg",
    prepTimeMinutes: 25,
    cookTimeMinutes: 30,
    servings: 4,
    rating: 4.8,
    reviewsCount: 170,
    difficulty: 'Medium',
    calories: 510,
    description: 'Tender pasta tubes stuffed with fresh sheep milk ricotta, sautéed baby spinach, and nutmeg, baked under layers of velvety béchamel and marinara.',
    featured: false,
    tags: ['Creamy Ricotta', 'Nutmeg Béchamel', 'Baked Pasta', 'Vegetarian'],
    ingredients: [
      { id: 'cn1', name: 'Cannelloni Pasta Tubes', amount: 12, unit: 'tubes' },
      { id: 'cn2', name: 'Whole Milk Ricotta Cheese', amount: 400, unit: 'g' },
      { id: 'cn3', name: 'Cooked Spinach', amount: 250, unit: 'g', notes: 'Squeezed dry and chopped' },
      { id: 'cn4', name: 'Béchamel Sauce & Tomato Sauce', amount: 2, unit: 'cups' },
      { id: 'cn5', name: 'Fresh Grated Nutmeg & Parmigiano', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Mix ricotta, cooked chopped spinach, egg yolk, nutmeg, salt, and parmigiano in a bowl.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Pipe filling into cannelloni tubes using a pastry bag.', durationMinutes: 8 },
      { stepNumber: 3, instruction: 'Spread tomato sauce on bottom of baking dish; arrange filled tubes and coat with silky béchamel.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Bake at 190°C for 25-30 minutes until pasta is tender and top is golden brown.', durationMinutes: 30 }
    ]
  },
  {
    id: 'it-cacio-e-pepe',
    title: 'Roman Tonnarelli Cacio e Pepe',
    category: 'italian',
    categoryLabel: 'Italian Classics',
    imageUrl: "/recipes/it-cacio-e-pepe.jpg",
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    servings: 2,
    rating: 4.9,
    reviewsCount: 390,
    difficulty: 'Medium',
    calories: 460,
    description: 'Thick square tonnarelli pasta enveloped in a creamy pepper emulsion crafted entirely from freshly crushed peppercorns and finely grated Pecorino Romano.',
    featured: false,
    tags: ['Roman Minimalist', '3 Ingredients', 'Toasted Peppercorn', 'Pecorino Masterclass'],
    ingredients: [
      { id: 'cp1', name: 'Fresh Tonnarelli or Spaghetti', amount: 250, unit: 'g' },
      { id: 'cp2', name: 'Pecorino Romano DOP', amount: 140, unit: 'g', notes: 'Very finely grated' },
      { id: 'cp3', name: 'Whole Black Peppercorns', amount: 1, unit: 'tbsp', notes: 'Freshly cracked' },
      { id: 'cp4', name: 'Starchy Pasta Water', amount: 0.75, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Toast coarsely cracked black peppercorns in a dry skillet until fragrant; add half a ladle of pasta water to infuse.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'In a warm bowl, whisk grated Pecorino Romano with hot starchy pasta water to form a smooth thick paste.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Boil tonnarelli until al dente; transfer into the skillet with pepper broth.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Remove skillet completely from heat; vigorously toss pasta with the pecorino cream until silky without clumping.', durationMinutes: 2 }
    ]
  }
];
