import { Recipe, CategoryInfo } from '../types';
import { BREAKFAST_RECIPES } from './recipes/breakfast';
import { DESI_RECIPES } from './recipes/desi';
import { ITALIAN_RECIPES } from './recipes/italian';
import { NON_DESI_RECIPES } from './recipes/nonDesi';
import { JUNK_FOOD_RECIPES } from './recipes/junkFood';
import { DRINK_RECIPES } from './recipes/drinks';
import { DESSERT_RECIPES } from './recipes/desserts';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    name: 'All Recipes',
    iconName: 'UtensilsCrossed',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
    count: 133,
    description: 'Explore our full culinary collection across 7 categories',
    accentColor: '#FF6B35'
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    iconName: 'Coffee',
    imageUrl: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80',
    count: 19,
    description: 'Cloud soufflé pancakes, shakshuka, halwa puri, Belgian waffles & artisan toasts',
    accentColor: '#F59E0B'
  },
  {
    id: 'desi',
    name: 'Desi',
    iconName: 'Flame',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80',
    count: 19,
    description: 'Aromatic Dum Biryanis, Butter Chicken, Nihari, Rogan Josh & Tandoori feasts',
    accentColor: '#EA580C'
  },
  {
    id: 'italian',
    name: 'Italian',
    iconName: 'Pizza',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80',
    count: 19,
    description: 'Handmade pastas, Neapolitan pizzas, creamy risottos, carbonara & gnocchi',
    accentColor: '#16A34A'
  },
  {
    id: 'non-desi',
    name: 'Non-Desi',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80',
    count: 19,
    description: 'Global wonders from Tokyo ramen and Birria tacos to Pad Thai and Beef Pho',
    accentColor: '#2563EB'
  },
  {
    id: 'junk-food',
    name: 'Junk Food',
    iconName: 'Burger',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    count: 19,
    description: 'Smash burgers, loaded truffle fries, Nashville hot tenders & mozzarella sticks',
    accentColor: '#D97706'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    iconName: 'CupSoda',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80',
    count: 19,
    description: 'Matcha lattes, Karak chai, Alphonso mango lassi, cold brews & mocktails',
    accentColor: '#06B6D4'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    iconName: 'Cake',
    imageUrl: '/recipes/desserts-cat.jpg',
    count: 19,
    description: 'Venetian tiramisu, Belgian lava cake, Baklava, Crème Brûlée & Shahi Gulab Jamun',
    accentColor: '#EC4899'
  }
];

export const RECIPES: Recipe[] = [
  ...BREAKFAST_RECIPES,
  ...DESI_RECIPES,
  ...ITALIAN_RECIPES,
  ...NON_DESI_RECIPES,
  ...JUNK_FOOD_RECIPES,
  ...DRINK_RECIPES,
  ...DESSERT_RECIPES,
];

export {
  BREAKFAST_RECIPES,
  DESI_RECIPES,
  ITALIAN_RECIPES,
  NON_DESI_RECIPES,
  JUNK_FOOD_RECIPES,
  DRINK_RECIPES,
  DESSERT_RECIPES
};
