export type CategoryId = 'all' | 'breakfast' | 'desi' | 'italian' | 'non-desi' | 'junk-food' | 'drinks' | 'desserts';

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  notes?: string;
}

export interface CookingStep {
  stepNumber: number;
  instruction: string;
  durationMinutes?: number;
  tip?: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: Exclude<CategoryId, 'all'>;
  categoryLabel: string;
  imageUrl: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  rating: number;
  reviewsCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  calories: number;
  description: string;
  featured: boolean;
  tags: string[];
  ingredients: Ingredient[];
  steps: CookingStep[];
}

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  iconName: string;
  imageUrl: string;
  count: number;
  description: string;
  accentColor: string;
}

export interface UserProfile {
  name: string;
  email: string;
  bio: string;
  avatarUrl: string;
  recipesCooked: number;
  favoritesCount: number;
  savedCollectionsCount: number;
  darkMode: boolean;
  notificationsEnabled: boolean;
  unitPreference: 'metric' | 'imperial';
}

export interface CookingTimerState {
  recipeId: string;
  stepNumber: number;
  stepInstruction: string;
  totalSeconds: number;
  remainingSeconds: number;
  isRunning: boolean;
  isFinished: boolean;
  soundEnabled: boolean;
}
