import { Recipe } from '../../types';

export const DESI_RECIPES: Recipe[] = [
  {
    id: 'desi-biryani',
    title: 'Hyderabadi Dum Chicken Biryani',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    servings: 4,
    rating: 4.9,
    reviewsCount: 342,
    difficulty: 'Medium',
    calories: 620,
    description: 'Fragrant aged Basmati rice layered with spiced marinated chicken, caramelized onions, saffron milk, and fresh mint sealed under slow steam (Dum).',
    featured: true,
    tags: ['Aromatic', 'Spicy', 'Signature Dum', 'Traditional'],
    ingredients: [
      { id: 'b1', name: 'Bone-in Chicken thighs & drumsticks', amount: 800, unit: 'g', notes: 'Cut into medium pieces' },
      { id: 'b2', name: 'Aged Long Grain Basmati Rice', amount: 500, unit: 'g', notes: 'Soaked for 30 minutes' },
      { id: 'b3', name: 'Greek Yogurt or Dahi', amount: 200, unit: 'g', notes: 'Whisked smooth' },
      { id: 'b4', name: 'Fried Onions (Birista)', amount: 1.5, unit: 'cups', notes: 'Golden and crispy' },
      { id: 'b5', name: 'Ginger-Garlic Paste', amount: 2, unit: 'tbsp' },
      { id: 'b6', name: 'Biryani Garam Masala', amount: 1.5, unit: 'tbsp' },
      { id: 'b7', name: 'Saffron strands infused in warm milk', amount: 4, unit: 'tbsp' },
      { id: 'b8', name: 'Pure Desi Ghee', amount: 3, unit: 'tbsp' },
      { id: 'b9', name: 'Fresh Mint & Cilantro Leaves', amount: 1, unit: 'cup', notes: 'Finely chopped' },
      { id: 'b10', name: 'Kashmiri Chili Powder', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Marinate chicken with whisked yogurt, ginger-garlic paste, red chili, biryani masala, half the fried onions, mint, cilantro, and salt for at least 30 minutes.', durationMinutes: 30, tip: 'Overnight marinade makes the chicken exceptionally tender.' },
      { stepNumber: 2, instruction: 'Boil water with whole spices (cinnamon, cloves, cardamom, bay leaf). Add drained soaked basmati rice and parboil to 70% doneness (about 5-6 mins). Drain well.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'In a heavy-bottomed handi, sear the marinated chicken on medium heat for 8 minutes until partially cooked.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Layer the parboiled rice over the chicken evenly. Drizzle saffron milk, remaining fried onions, chopped herbs, and melted ghee over top.', durationMinutes: 5 },
      { stepNumber: 5, instruction: 'Seal the pot tightly with aluminum foil and lid. Cook on high for 5 minutes, then reduce to lowest heat on a tawa (griddle) for 20 minutes.', durationMinutes: 25, tip: 'Do not lift the lid immediately; let it rest for 10 minutes before gently fluffing.' }
    ]
  },
  {
    id: 'desi-karahi',
    title: 'Shinwari Peshawari Mutton Karahi',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    servings: 4,
    rating: 4.8,
    reviewsCount: 219,
    difficulty: 'Medium',
    calories: 540,
    description: 'Authentic minimalist Pashtun mutton stew cooked in a wok with fresh vine-ripened tomatoes, ginger juliennes, green chilies, and cracked black pepper.',
    featured: true,
    tags: ['Rich Gravy', 'Tender Meat', 'Classic Pashtun'],
    ingredients: [
      { id: 'k1', name: 'Tender Mutton/Lamb pieces', amount: 750, unit: 'g', notes: 'With bone for maximum flavor' },
      { id: 'k2', name: 'Ripe Red Tomatoes', amount: 6, unit: 'pcs', notes: 'Halved' },
      { id: 'k3', name: 'Fresh Ginger Juliennes', amount: 3, unit: 'tbsp' },
      { id: 'k4', name: 'Fresh Green Chilies', amount: 5, unit: 'pcs', notes: 'Slit lengthwise' },
      { id: 'k5', name: 'Cracked Black Pepper', amount: 1.5, unit: 'tsp', notes: 'Freshly coarse ground' },
      { id: 'k6', name: 'Pure Cooking Oil / Animal Fat', amount: 0.5, unit: 'cup' },
      { id: 'k7', name: 'Sea Salt', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat oil in a heavy cast-iron wok (karahi). Add mutton and salt, frying on high flame until browned.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Cover with 1 cup of water, lower flame and simmer for 25 minutes until mutton becomes tender.', durationMinutes: 25 },
      { stepNumber: 3, instruction: 'Place halved tomatoes skin-side up over the meat. Cover for 5 minutes until skins soften, then peel skins off using tongs.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Mash tomatoes directly into the gravy on high flame (bhunai) until oil separates from the masala.', durationMinutes: 8 },
      { stepNumber: 5, instruction: 'Finish with crushed black pepper, fresh ginger juliennes, and green chilies. Serve sizzling with hot tandoori naan.', durationMinutes: 2 }
    ]
  },
  {
    id: 'desi-butter-chicken',
    title: 'Murgh Makhani (Butter Chicken)',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 25,
    cookTimeMinutes: 30,
    servings: 4,
    rating: 4.9,
    reviewsCount: 412,
    difficulty: 'Easy',
    calories: 580,
    description: 'Tandoori-spiced char-grilled chicken bites gently simmered in a velvety tomato, cashew, butter, and kasuri methi cream sauce.',
    featured: false,
    tags: ['Velvety', 'Mild Spice', 'Crowd Favorite'],
    ingredients: [
      { id: 'bc1', name: 'Boneless Chicken Breast or Thighs', amount: 600, unit: 'g', notes: 'Bite-sized cubes' },
      { id: 'bc2', name: 'Tomato Puree', amount: 400, unit: 'g' },
      { id: 'bc3', name: 'Cashew Nut Paste', amount: 50, unit: 'g', notes: 'Soaked and blended' },
      { id: 'bc4', name: 'Unsalted Butter', amount: 60, unit: 'g' },
      { id: 'bc5', name: 'Heavy Cream', amount: 100, unit: 'ml' },
      { id: 'bc6', name: 'Kasuri Methi (Dried Fenugreek)', amount: 1, unit: 'tbsp' },
      { id: 'bc7', name: 'Kashmiri Chili & Garam Masala', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Marinate chicken in yogurt, lemon juice, chili, and ginger-garlic paste for 20 minutes.', durationMinutes: 20 },
      { stepNumber: 2, instruction: 'Sear chicken cubes in a smoking hot pan with 1 tbsp butter until slightly charred edges appear.', durationMinutes: 8 },
      { stepNumber: 3, instruction: 'In a saucepan, cook tomato puree, cashew paste, and butter with aromatics until glossy and thickened.', durationMinutes: 10 },
      { stepNumber: 4, instruction: 'Add chicken pieces into sauce, pour fresh cream, and gently fold in crushed kasuri methi.', durationMinutes: 5 }
    ]
  },
  {
    id: 'desi-nihari',
    title: 'Slow-Simmered Shahi Beef Nihari',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 60,
    servings: 5,
    rating: 4.8,
    reviewsCount: 180,
    difficulty: 'Hard',
    calories: 650,
    description: 'A royal slow-cooked beef shank stew loaded with bone marrow, pipli spice, fennel, and thickened with roasted atta flour.',
    featured: false,
    tags: ['Slow Cooked', 'Marrow', 'Royal Heritage'],
    ingredients: [
      { id: 'n1', name: 'Beef Shank (Bong) with Bone Marrow', amount: 1000, unit: 'g' },
      { id: 'n2', name: 'Nihari Spice Blend (Fennel, Mace, Star Anise)', amount: 2.5, unit: 'tbsp' },
      { id: 'n3', name: 'Whole Wheat Flour (Atta)', amount: 4, unit: 'tbsp', notes: 'Lightly roasted' },
      { id: 'n4', name: 'Ghee or Mustard Oil', amount: 0.5, unit: 'cup' },
      { id: 'n5', name: 'Lemon Wedges & Ginger matchsticks', amount: 1, unit: 'serving' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Brown beef shanks in hot ghee with onion and ginger garlic paste until caramelized.', durationMinutes: 12 },
      { stepNumber: 2, instruction: 'Add nihari spice blend, coat thoroughly, and add 5 cups of water. Simmer on low heat for 45-60 mins until meat falls apart.', durationMinutes: 45 },
      { stepNumber: 3, instruction: 'Dissolve roasted wheat flour in water to make a smooth slurry; whisk gradually into stew to thicken to silken consistency.', durationMinutes: 6 },
      { stepNumber: 4, instruction: 'Garnish with fragrant ghee tarka, lemon juice, green chilies, and julienne ginger.', durationMinutes: 3 }
    ]
  },
  {
    id: 'desi-seekh-kebab',
    title: 'Charred Mughlai Beef Seekh Kebabs',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-seekh-kebab.jpg",
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    servings: 4,
    rating: 4.9,
    reviewsCount: 275,
    difficulty: 'Medium',
    calories: 410,
    description: 'Juicy spiced minced beef kebabs blended with raw papaya, fried onions, roasted gram flour, and grilled over red-hot coals with mint chutney.',
    featured: false,
    tags: ['Charcoal Grilled', 'Smoky', 'Melt-in-Mouth', 'Street Legend'],
    ingredients: [
      { id: 'sk1', name: 'Finely Minced Beef (20% fat)', amount: 600, unit: 'g' },
      { id: 'sk2', name: 'Finely Chopped Onion', amount: 1, unit: 'cup', notes: 'Squeezed dry of liquid' },
      { id: 'sk3', name: 'Roasted Gram Flour (Besan)', amount: 2, unit: 'tbsp' },
      { id: 'sk4', name: 'Ginger-Garlic-Green Chili Paste', amount: 2, unit: 'tbsp' },
      { id: 'sk5', name: 'Crushed Coriander & Cumin Seeds', amount: 1.5, unit: 'tbsp' },
      { id: 'sk6', name: 'Garam Masala & Chaat Masala', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Knead minced beef with all spices, roasted besan, and onions vigorously for 8 minutes to develop stickiness.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Shape the mince onto flat metal skewers using moist hands into elongated kebabs.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Grill over coals or broil on high heat, turning frequently and brushing with melted butter until charred.', durationMinutes: 12 },
      { stepNumber: 4, instruction: 'Slide gently off skewers and serve with onion rings, lemon wedges, and fresh mint raita.', durationMinutes: 2 }
    ]
  },
  {
    id: 'desi-palak-paneer',
    title: 'Dhaba Style Creamy Palak Paneer',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-palak-paneer.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 3,
    rating: 4.8,
    reviewsCount: 195,
    difficulty: 'Easy',
    calories: 390,
    description: 'Golden-seared fresh paneer cubes folded into a vibrant, garlicky pureed spinach sauce tempered with cumin, kasuri methi, and fresh cream.',
    featured: false,
    tags: ['Vegetarian', 'Nutrient Rich', 'Vibrant Greens', 'Homestyle'],
    ingredients: [
      { id: 'pp1', name: 'Fresh Paneer Cubes', amount: 350, unit: 'g' },
      { id: 'pp2', name: 'Fresh Baby Spinach (Palak)', amount: 500, unit: 'g', notes: 'Blanched and iced' },
      { id: 'pp3', name: 'Minced Garlic Cloves', amount: 6, unit: 'cloves' },
      { id: 'pp4', name: 'Heavy Cream or Malai', amount: 3, unit: 'tbsp' },
      { id: 'pp5', name: 'Kasuri Methi & Garam Masala', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Blanch spinach leaves in boiling water for 2 minutes, shock in ice water, and puree with green chilies.', durationMinutes: 6 },
      { stepNumber: 2, instruction: 'Lightly pan-fry paneer cubes in ghee until golden.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Sauté chopped onions, ginger, and garlic in ghee until fragrant; pour spinach puree and simmer.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Fold in paneer, finish with a swirl of heavy cream, kasuri methi, and a pinch of garam masala.', durationMinutes: 3 }
    ]
  },
  {
    id: 'desi-haleem',
    title: 'Royal Shahi Mutton & Lentil Haleem',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-haleem.jpg",
    prepTimeMinutes: 30,
    cookTimeMinutes: 75,
    servings: 6,
    rating: 4.9,
    reviewsCount: 310,
    difficulty: 'Hard',
    calories: 590,
    description: 'Slow-pounded porridge of boneless mutton, broken wheat, barley, and five heritage lentils cooked for hours into a silken savory masterpiece.',
    featured: false,
    tags: ['Rich & Velvety', 'Slow Simmered', 'Festive Special', 'Pounded Meat'],
    ingredients: [
      { id: 'hl1', name: 'Boneless Mutton or Veal', amount: 750, unit: 'g' },
      { id: 'hl2', name: 'Broken Wheat (Dalia) & Pearl Barley', amount: 1, unit: 'cup' },
      { id: 'hl3', name: 'Mixed Lentils (Chana, Masoor, Moong, Mash)', amount: 1, unit: 'cup' },
      { id: 'hl4', name: 'Pure Desi Ghee for Tarka', amount: 0.5, unit: 'cup' },
      { id: 'hl5', name: 'Crispy Fried Onions, Julienne Ginger & Mint for garnish', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Soak broken wheat, barley, and lentils overnight. Boil with turmeric and salt until mushy; blend coarse.', durationMinutes: 30 },
      { stepNumber: 2, instruction: 'Cook mutton with spices and water until meat is so tender it pulls apart with a wooden spoon.', durationMinutes: 40 },
      { stepNumber: 3, instruction: 'Combine cooked meat and pureed lentils; use a wooden masher (ghota) to pound continuously for 20 minutes until sticky and stretchy.', durationMinutes: 20 },
      { stepNumber: 4, instruction: 'Pour sizzling ghee tarka over top and garnish with mint, fried onions, and lemon juice.', durationMinutes: 5 }
    ]
  },
  {
    id: 'desi-rogan-josh',
    title: 'Kashmiri Mutton Rogan Josh',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-rogan-josh.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    servings: 4,
    rating: 4.8,
    reviewsCount: 228,
    difficulty: 'Medium',
    calories: 560,
    description: 'Tender lamb cuts braised in aromatic yogurt gravy colored naturally with Kashmiri chili and infused with ratanjot bark, fennel powder, and dried ginger.',
    featured: false,
    tags: ['Kashmiri Wazwan', 'Aromatic Gravy', 'Fennel & Ginger'],
    ingredients: [
      { id: 'rj1', name: 'Bone-in Lamb shoulder cuts', amount: 750, unit: 'g' },
      { id: 'rj2', name: 'Kashmiri Red Chili Powder', amount: 2, unit: 'tbsp', notes: 'Gives bright red hue without scorching heat' },
      { id: 'rj3', name: 'Saunth (Dried Ginger Powder) & Saunf (Fennel)', amount: 1.5, unit: 'tbsp' },
      { id: 'rj4', name: 'Whisked Greek Yogurt', amount: 1, unit: 'cup' },
      { id: 'rj5', name: 'Mustard Oil / Ghee', amount: 4, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat mustard oil until smoking, cool slightly, then sear lamb cuts with whole spices (cloves, cardamom, cinnamon).', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Whisk yogurt with Kashmiri chili powder, fennel powder, and dried ginger; pour into lamb on low heat.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Add water, cover tightly, and simmer on gentle heat for 40 minutes until meat is succulent.', durationMinutes: 40 },
      { stepNumber: 4, instruction: 'Uncover, reduce gravy until ghee floats to the surface, and serve hot with steamed basmati.', durationMinutes: 5 }
    ]
  },
  {
    id: 'desi-chicken-tikka',
    title: 'Tandoori Char-Grilled Chicken Tikka',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-chicken-tikka.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 18,
    servings: 3,
    rating: 4.9,
    reviewsCount: 380,
    difficulty: 'Easy',
    calories: 420,
    description: 'Juicy skewered boneless chicken chunks marinated in hung curd, roasted mustard oil, kasuri methi, and Kashmiri spices, charred over smoking coals.',
    featured: false,
    tags: ['Tandoori Spiced', 'Smoky Char', 'High Protein', 'Appetizer'],
    ingredients: [
      { id: 'ct1', name: 'Boneless Chicken Thighs', amount: 650, unit: 'g', notes: 'Cut into 2-inch chunks' },
      { id: 'ct2', name: 'Thick Hung Curd', amount: 1, unit: 'cup' },
      { id: 'ct3', name: 'Raw Mustard Oil', amount: 2, unit: 'tbsp' },
      { id: 'ct4', name: 'Ginger-Garlic Paste & Lemon Juice', amount: 2, unit: 'tbsp' },
      { id: 'ct5', name: 'Tandoori Spice Blend & Chaat Masala', amount: 1.5, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'First marinade: rub chicken with lemon juice, salt, and ginger-garlic paste for 15 mins.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Second marinade: whisk hung curd with mustard oil and tandoori spices; coat chicken thoroughly.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Thread onto skewers and roast on a hot grill or air fryer at 220°C for 15-18 mins with melted butter baste.', durationMinutes: 18 },
      { stepNumber: 4, instruction: 'Dust with spicy chaat masala and squeeze fresh lemon juice before serving.', durationMinutes: 2 }
    ]
  },
  {
    id: 'desi-dal-makhani',
    title: 'Slow-Cooked Amritsari Dal Makhani',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-dal-makhani.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 60,
    servings: 4,
    rating: 4.9,
    reviewsCount: 315,
    difficulty: 'Medium',
    calories: 460,
    description: 'Whole black urad dal and red kidney beans simmered overnight with butter, cream, and roasted tomato passata into a silken, smoky comfort stew.',
    featured: false,
    tags: ['Vegetarian', 'Slow Simmered', 'Creamy', 'Punjabi Classic'],
    ingredients: [
      { id: 'dm1', name: 'Whole Black Urad Dal', amount: 1.5, unit: 'cups', notes: 'Soaked overnight' },
      { id: 'dm2', name: 'Red Kidney Beans (Rajma)', amount: 0.5, unit: 'cup', notes: 'Soaked overnight' },
      { id: 'dm3', name: 'Pure Butter (Makhan)', amount: 80, unit: 'g' },
      { id: 'dm4', name: 'Fresh Tomato Puree', amount: 300, unit: 'g' },
      { id: 'dm5', name: 'Heavy Cream', amount: 60, unit: 'ml' },
      { id: 'dm6', name: 'Kasuri Methi & Garam Masala', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Pressure cook soaked black dal and rajma with salt and whole spices until completely tender and mashable.', durationMinutes: 30 },
      { stepNumber: 2, instruction: 'Cook tomato puree with ginger-garlic paste and butter until the sauce is deep red and glossy.', durationMinutes: 12 },
      { stepNumber: 3, instruction: 'Combine dal with tomato gravy, add plenty of butter, and simmer on gentle low flame for 45 minutes, stirring often.', durationMinutes: 45 },
      { stepNumber: 4, instruction: 'Finish with heavy cream, toasted kasuri methi, and an optional smoking charcoal infusion (dhungar).', durationMinutes: 5 }
    ]
  },
  {
    id: 'desi-chana-masala',
    title: 'Pindi Spicy Chana Masala',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-chana-masala.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 4,
    rating: 4.8,
    reviewsCount: 190,
    difficulty: 'Easy',
    calories: 360,
    description: 'Tender chickpeas boiled with black tea leaves for a dark signature hue, tossed with pomegranate seeds (anardana), dry mango powder, and carom seeds.',
    featured: false,
    tags: ['Tangy & Spicy', 'Anardana Flavored', 'Vegan Protein', 'Bhatura Pairing'],
    ingredients: [
      { id: 'cm1', name: 'White Chickpeas (Kabuli Chana)', amount: 2, unit: 'cups', notes: 'Soaked and cooked soft' },
      { id: 'cm2', name: 'Dried Pomegranate Seeds (Anardana)', amount: 1.5, unit: 'tbsp', notes: 'Coarsely ground' },
      { id: 'cm3', name: 'Amchur (Dry Mango Powder)', amount: 1, unit: 'tbsp' },
      { id: 'cm4', name: 'Roasted Cumin & Coriander Powder', amount: 1.5, unit: 'tbsp' },
      { id: 'cm5', name: 'Green Chilies & Ginger matchsticks', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Boil soaked chickpeas with a black tea bag and whole spices until tender and dark in color.', durationMinutes: 20 },
      { stepNumber: 2, instruction: 'In hot ghee, sauté ginger juliennes, green chilies, and add dry roasted spices with crushed anardana.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Add cooked chickpeas with a splash of chickpea broth; mash a ladle of chana to thicken gravy naturally.', durationMinutes: 10 },
      { stepNumber: 4, instruction: 'Garnish with fresh coriander leaves and serve with puffed bhature or naan.', durationMinutes: 2 }
    ]
  },
  {
    id: 'desi-chapli-kebab',
    title: 'Peshawari Crisp Fried Chapli Kebabs',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-chapli-kebab.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    rating: 4.9,
    reviewsCount: 360,
    difficulty: 'Medium',
    calories: 510,
    description: 'Traditional flat minced beef patties kneaded with crushed pomegranate seeds, chopped green chilies, coriander seeds, and fried in pure fat with a tomato slice center.',
    featured: false,
    tags: ['Crispy Crust', 'Juicy Interior', 'Pashtun Street Food'],
    ingredients: [
      { id: 'ck1', name: 'Coarse Minced Beef with Fat', amount: 700, unit: 'g' },
      { id: 'ck2', name: 'Makai ka Atta (Fine Cornmeal)', amount: 3, unit: 'tbsp' },
      { id: 'ck3', name: 'Crushed Coriander Seeds & Anardana', amount: 2, unit: 'tbsp' },
      { id: 'ck4', name: 'Finely Chopped Red Onions & Tomatoes', amount: 1, unit: 'cup' },
      { id: 'ck5', name: 'Tomato Slices for pressing on patties', amount: 6, unit: 'slices' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Mix beef mince with cornmeal, crushed spices, chopped onions, green chilies, and an egg thoroughly with your palm.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Flatten generous balls of mince into thin wide patties between sheets of parchment paper.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Press a fresh round tomato slice firmly onto the center of each patty.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Shallow fry on a flat tawa in hot oil or ghee until outer edges are deeply crispy and meat is succulent.', durationMinutes: 8 }
    ]
  },
  {
    id: 'desi-malai-kofta',
    title: 'Shahi Cashew Stuffed Malai Kofta',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 30,
    cookTimeMinutes: 25,
    servings: 4,
    rating: 4.8,
    reviewsCount: 198,
    difficulty: 'Medium',
    calories: 530,
    description: 'Melt-in-your-mouth paneer and potato dumplings stuffed with golden raisins and toasted cashews, served in a rich cashew-saffron gravy.',
    featured: false,
    tags: ['Royal Mughlai', 'Vegetarian Luxury', 'Rich Cashew Sauce'],
    ingredients: [
      { id: 'mk1', name: 'Grated Paneer & Boiled Mashed Potatoes', amount: 300, unit: 'g' },
      { id: 'mk2', name: 'Chopped Cashews & Golden Raisins', amount: 3, unit: 'tbsp', notes: 'For stuffing' },
      { id: 'mk3', name: 'Cashew Paste & Poppy Seed Puree', amount: 0.5, unit: 'cup' },
      { id: 'mk4', name: 'Tomato-Onion Puree', amount: 1.5, unit: 'cups' },
      { id: 'mk5', name: 'Fresh Cream & Saffron Strands', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Knead paneer, potato, and cornstarch into smooth dough; stuff small portions with chopped nuts and shape into round koftas.', durationMinutes: 12 },
      { stepNumber: 2, instruction: 'Deep fry koftas on medium flame until golden brown and drain gently.', durationMinutes: 8 },
      { stepNumber: 3, instruction: 'Simmer tomato-onion puree with cashew paste, cardamom, butter, and cream until thick and glossy.', durationMinutes: 15 },
      { stepNumber: 4, instruction: 'Place warm koftas in a serving dish and pour the velvety hot gravy over right before serving.', durationMinutes: 3 }
    ]
  },
  {
    id: 'desi-chicken-korma',
    title: 'Royal Degi Chicken Korma',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    servings: 4,
    rating: 4.9,
    reviewsCount: 290,
    difficulty: 'Medium',
    calories: 590,
    description: 'Wedding-style chicken curry featuring a grainy caramelized onion (birista) and yogurt gravy infused with mace, nutmeg, and kewra water.',
    featured: false,
    tags: ['Wedding Special', 'Grainy Gravy', 'Kewra Infused', 'Mughlai'],
    ingredients: [
      { id: 'ckm1', name: 'Bone-in Chicken pieces', amount: 800, unit: 'g' },
      { id: 'ckm2', name: 'Crispy Fried Brown Onions (Birista)', amount: 1.5, unit: 'cups', notes: 'Crushed with fingers' },
      { id: 'ckm3', name: 'Whisked Thick Yogurt', amount: 1.5, unit: 'cups' },
      { id: 'ckm4', name: 'Mace (Javitri) & Nutmeg Powder', amount: 0.5, unit: 'tsp' },
      { id: 'ckm5', name: 'Pure Desi Ghee & Kewra Essence', amount: 4, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Heat ghee in a handi; add whole spices (cardamom, cloves) and sear chicken pieces until white.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'Stir in ginger-garlic paste, coriander powder, Kashmiri chili, and whisked yogurt on low heat.', durationMinutes: 10 },
      { stepNumber: 3, instruction: 'Crush crispy fried onions by hand and stir into gravy; simmer covered for 15 minutes as sauce turns grainy (danedar).', durationMinutes: 15 },
      { stepNumber: 4, instruction: 'Sprinkle ground mace, nutmeg, and a few drops of aromatic kewra water. Rest 10 mins before serving.', durationMinutes: 3 }
    ]
  },
  {
    id: 'desi-prawn-masala',
    title: 'Coastal Goan Spiced Prawn Masala',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 3,
    rating: 4.8,
    reviewsCount: 165,
    difficulty: 'Easy',
    calories: 380,
    description: 'Plump tiger prawns simmered in a tangy coastal coconut and kokum reduction with roasted byadgi chilies, curry leaves, and mustard seeds.',
    featured: false,
    tags: ['Coastal Seafood', 'Tangy Kokum', 'Coconut Milk', 'Quick 30 Min'],
    ingredients: [
      { id: 'pm1', name: 'Jumbo Tiger Prawns (shelled & deveined)', amount: 500, unit: 'g' },
      { id: 'pm2', name: 'Thick Coconut Milk', amount: 1, unit: 'cup' },
      { id: 'pm3', name: 'Kokum Petals or Tamarind Pulp', amount: 4, unit: 'pcs' },
      { id: 'pm4', name: 'Fresh Curry Leaves & Mustard Seeds', amount: 1, unit: 'tbsp' },
      { id: 'pm5', name: 'Goan Coastal Spice Paste', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Marinate prawns with turmeric, sea salt, and lemon juice for 10 minutes.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Splutter mustard seeds and curry leaves in coconut oil; sauté finely chopped onions and spice paste.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Pour in coconut milk and soaked kokum water; simmer into a fragrant golden sauce.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Slide in prawns and cook gently for only 4-5 minutes until plump and curled. Serve with steamed rice.', durationMinutes: 5 }
    ]
  },
  {
    id: 'desi-aloo-gobi',
    title: 'Homestyle Roasted Aloo Gobi Adraki',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-aloo-gobi.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 4,
    rating: 4.7,
    reviewsCount: 180,
    difficulty: 'Easy',
    calories: 280,
    description: 'Tender cauliflower florets and gold potatoes pan-roasted with fresh ginger juliennes, cumin seeds, turmeric, and fresh cilantro.',
    featured: false,
    tags: ['Homestyle Comfort', 'Vegan', 'Ginger Infused', 'Everyday Classic'],
    ingredients: [
      { id: 'ag1', name: 'Fresh Cauliflower Florets (Gobi)', amount: 1, unit: 'head' },
      { id: 'ag2', name: 'Gold Potatoes, cubed', amount: 3, unit: 'pcs' },
      { id: 'ag3', name: 'Fresh Ginger Juliennes (Adrak)', amount: 3, unit: 'tbsp' },
      { id: 'ag4', name: 'Cumin Seeds & Turmeric Powder', amount: 1.5, unit: 'tsp' },
      { id: 'ag5', name: 'Amchur & Garam Masala', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Sauté cumin seeds and ginger juliennes in mustard oil until aromatic.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Add potato cubes, turmeric, and salt; cover and cook for 8 minutes on medium flame.', durationMinutes: 8 },
      { stepNumber: 3, instruction: 'Add cauliflower florets and sliced green chilies; stir fry on medium-high to roast edges golden.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Dust with amchur and garam masala, then toss with chopped cilantro.', durationMinutes: 2 }
    ]
  },
  {
    id: 'desi-mutton-pulao',
    title: 'Degi Yakhni Mutton Pulao',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-mutton-pulao.jpg",
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    servings: 4,
    rating: 4.9,
    reviewsCount: 260,
    difficulty: 'Medium',
    calories: 580,
    description: 'Long-grain Basmati rice cooked in an intensely flavorful mutton bone broth (yakhni) infused with coriander seeds, fennel, and whole cloves.',
    featured: false,
    tags: ['Yakhni Broth', 'Mutton Pulao', 'Fragrant & Subtle', 'Celebration'],
    ingredients: [
      { id: 'mp1', name: 'Bone-in Mutton cuts', amount: 750, unit: 'g' },
      { id: 'mp2', name: 'Aged Long-Grain Basmati Rice', amount: 500, unit: 'g', notes: 'Soaked for 30 mins' },
      { id: 'mp3', name: 'Whole Fennel & Coriander Seeds', amount: 2, unit: 'tbsp', notes: 'Tied in a spice pouch' },
      { id: 'mp4', name: 'Thin Sliced Onions', amount: 2, unit: 'pcs', notes: 'Fried golden' },
      { id: 'mp5', name: 'Ghee & Green Cardamoms', amount: 4, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Boil mutton with whole spice pouch, ginger, garlic, onion, and salt to prepare rich yakhni broth.', durationMinutes: 35 },
      { stepNumber: 2, instruction: 'Strain yakhni and reserve; separate mutton pieces.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Fry onions in ghee until light golden; add cooked mutton and fry for 5 minutes with yogurt.', durationMinutes: 6 },
      { stepNumber: 4, instruction: 'Add soaked rice, pour strained yakhni broth, and cook until water absorbs; steam (dum) on low for 15 minutes.', durationMinutes: 20 }
    ]
  },
  {
    id: 'desi-baingan-bharta',
    title: 'Smoky Charred Baingan Bharta',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80",
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 3,
    rating: 4.7,
    reviewsCount: 150,
    difficulty: 'Easy',
    calories: 240,
    description: 'Large purple eggplant roasted directly over an open flame until blackened, then mashed and stir-fried with mustard oil, peas, and tomatoes.',
    featured: false,
    tags: ['Smoky Fire-Roasted', 'Vegan', 'Rustic Village Style', 'Gluten Free'],
    ingredients: [
      { id: 'bb1', name: 'Large Purple Eggplant (Bharta Baingan)', amount: 2, unit: 'pcs' },
      { id: 'bb2', name: 'Green Peas (Matar)', amount: 0.5, unit: 'cup' },
      { id: 'bb3', name: 'Chopped Onions & Ripe Tomatoes', amount: 1.5, unit: 'cups' },
      { id: 'bb4', name: 'Pure Mustard Oil', amount: 3, unit: 'tbsp' },
      { id: 'bb5', name: 'Garlic cloves inserted into eggplant before roasting', amount: 4, unit: 'cloves' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Make slits in eggplant, insert garlic cloves, and roast directly on stovetop flame until skin is charred and flesh is tender.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Cool, peel away burnt skin, and mash roasted flesh with a fork.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Heat mustard oil, sauté onions, green chilies, and tomatoes with red chili and cumin.', durationMinutes: 6 },
      { stepNumber: 4, instruction: 'Add mashed eggplant and green peas; stir fry on high flame for 8 minutes until smoky and fragrant.', durationMinutes: 8 }
    ]
  },
  {
    id: 'desi-fish-amritsari',
    title: 'Crispy Carom Ajwain Amritsari Fish',
    category: 'desi',
    categoryLabel: 'Desi Cuisine',
    imageUrl: "/recipes/desi-fish-amritsari.jpg",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 3,
    rating: 4.8,
    reviewsCount: 210,
    difficulty: 'Easy',
    calories: 360,
    description: 'Fresh white fish fillets marinated in carom seeds (ajwain), ginger-garlic, crushed chilies, coated in chickpea batter and deep-fried to crisp perfection.',
    featured: false,
    tags: ['Crisp Batter', 'Ajwain Infused', 'Punjabi Street Snack', 'Golden Fried'],
    ingredients: [
      { id: 'af1', name: 'Firm White Fish Fillets (Sole/Cod)', amount: 500, unit: 'g', notes: 'Cut into strips' },
      { id: 'af2', name: 'Gram Flour (Besan) & Rice Flour', amount: 1, unit: 'cup' },
      { id: 'af3', name: 'Ajwain (Carom Seeds)', amount: 1, unit: 'tbsp', notes: 'Crushed in palms' },
      { id: 'af4', name: 'Ginger-Garlic Paste & Lemon Juice', amount: 2, unit: 'tbsp' },
      { id: 'af5', name: 'Chaat Masala for finishing', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Marinate fish pieces in lemon juice, garlic, ajwain, red chili, and salt for 15 minutes.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Dust with besan and rice flour; sprinkle a few drops of water so the coating clings lightly.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Deep fry in medium-hot oil for 4-5 minutes until golden and crisp.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Drain and immediately toss with tangy chaat masala and mint chutney.', durationMinutes: 2 }
    ]
  }
];
