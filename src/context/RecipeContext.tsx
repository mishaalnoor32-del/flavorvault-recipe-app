import React, { createContext, useContext, useState, useEffect } from 'react';
import { Recipe, CategoryId, UserProfile, CookingTimerState } from '../types';
import { RECIPES } from '../data/recipes';
import { playTimerCompletionChime, playTimerTickSound } from '../utils/sound';

export type ScreenType = 'home' | 'categories' | 'favorites' | 'profile' | 'detail';

interface RecipeContextType {
  recipes: Recipe[];
  selectedCategory: CategoryId;
  setSelectedCategory: (cat: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeScreen: ScreenType;
  setActiveScreen: (screen: ScreenType) => void;
  selectedRecipeId: string | null;
  selectedRecipe: Recipe | null;
  viewRecipeDetail: (id: string) => void;
  goBack: () => void;
  
  // Favorites & Saved
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  savedRecipes: string[];
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
  
  // Interactive Checklist
  checkedIngredients: Record<string, string[]>;
  toggleIngredientCheck: (recipeId: string, ingredientId: string) => void;
  isIngredientChecked: (recipeId: string, ingredientId: string) => boolean;
  completedSteps: Record<string, number[]>;
  toggleStepCompleted: (recipeId: string, stepNumber: number) => void;
  isStepCompleted: (recipeId: string, stepNumber: number) => boolean;
  resetRecipeChecklist: (recipeId: string) => void;
  
  // Cooking Timer
  activeTimer: CookingTimerState | null;
  startStepTimer: (recipeId: string, stepNumber: number, stepInstruction: string, durationMinutes?: number) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  resetTimer: () => void;
  addTimeToTimer: (secondsToAdd: number) => void;
  stopTimer: () => void;
  toggleTimerSound: () => void;

  // Servings dynamic calculation
  servingsMultiplier: number;
  setServingsMultiplier: (multiplier: number) => void;
  
  // User Profile
  userProfile: UserProfile;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  
  // Toast
  toast: string | null;
  showToast: (msg: string) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

const DEFAULT_USER: UserProfile = {
  name: '',
  email: '',
  bio: '',
  avatarUrl: '',
  recipesCooked: 0,
  favoritesCount: 0,
  savedCollectionsCount: 0,
  darkMode: true,
  notificationsEnabled: true,
  unitPreference: 'metric'
};

const INITIAL_FAVORITES: string[] = [];
const INITIAL_SAVED: string[] = [];

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [recipes] = useState<Recipe[]>(RECIPES);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeScreen, setActiveScreen] = useState<ScreenType>('home');
  const [screenHistory, setScreenHistory] = useState<ScreenType[]>(['home']);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  
  // LocalStorage-backed state with clean keys (no mock cook profile)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      localStorage.removeItem('flavorvault_favorites');
      const saved = localStorage.getItem('recipebook_favorites_v1');
      return saved ? JSON.parse(saved) : INITIAL_FAVORITES;
    } catch {
      return INITIAL_FAVORITES;
    }
  });

  const [savedRecipes, setSavedRecipes] = useState<string[]>(() => {
    try {
      localStorage.removeItem('flavorvault_saved');
      const saved = localStorage.getItem('recipebook_saved_v1');
      return saved ? JSON.parse(saved) : INITIAL_SAVED;
    } catch {
      return INITIAL_SAVED;
    }
  });

  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, string[]>>(() => {
    try {
      const saved = localStorage.getItem('recipebook_checked_ingredients');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [completedSteps, setCompletedSteps] = useState<Record<string, number[]>>(() => {
    try {
      const saved = localStorage.getItem('recipebook_completed_steps');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      localStorage.removeItem('flavorvault_user_profile');
      const saved = localStorage.getItem('recipebook_user_profile_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name === 'Mishaal Noor' || parsed.email === 'mishaalnoor32@gmail.com') {
          return DEFAULT_USER;
        }
        return parsed;
      }
      return DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  const [servingsMultiplier, setServingsMultiplier] = useState<number>(1);
  const [toast, setToast] = useState<string | null>(null);

  // Cooking Timer State
  const [activeTimer, setActiveTimer] = useState<CookingTimerState | null>(null);
  const [timerEndTime, setTimerEndTime] = useState<number | null>(null);

  // Cooking Timer Countdown Tick
  useEffect(() => {
    if (!activeTimer || !activeTimer.isRunning || !timerEndTime) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, Math.ceil((timerEndTime - now) / 1000));

      if (diff <= 0) {
        setActiveTimer(prev => {
          if (!prev || prev.isFinished) return prev;
          if (prev.soundEnabled) {
            playTimerCompletionChime();
          }
          return {
            ...prev,
            remainingSeconds: 0,
            isRunning: false,
            isFinished: true
          };
        });
        setTimerEndTime(null);
        showToast(`🔔 Step ${activeTimer.stepNumber} timer complete!`);
      } else {
        setActiveTimer(prev => (prev ? { ...prev, remainingSeconds: diff } : null));
      }
    }, 250);

    return () => clearInterval(interval);
  }, [activeTimer?.isRunning, timerEndTime, activeTimer?.soundEnabled, activeTimer?.stepNumber]);

  const startStepTimer = (
    recipeId: string,
    stepNumber: number,
    stepInstruction: string,
    durationMinutes?: number
  ) => {
    playTimerTickSound();
    const duration = durationMinutes && durationMinutes > 0 ? durationMinutes : 5;
    const totalSeconds = Math.max(10, Math.round(duration * 60));
    const endTime = Date.now() + totalSeconds * 1000;

    setActiveTimer({
      recipeId,
      stepNumber,
      stepInstruction,
      totalSeconds,
      remainingSeconds: totalSeconds,
      isRunning: true,
      isFinished: false,
      soundEnabled: true
    });
    setTimerEndTime(endTime);
    showToast(`⏱️ Started ${Math.round(totalSeconds / 60)}m timer for Step ${stepNumber}`);
  };

  const pauseTimer = () => {
    playTimerTickSound();
    setActiveTimer(prev => (prev ? { ...prev, isRunning: false } : null));
    setTimerEndTime(null);
  };

  const resumeTimer = () => {
    if (!activeTimer) return;
    playTimerTickSound();
    const endTime = Date.now() + activeTimer.remainingSeconds * 1000;
    setTimerEndTime(endTime);
    setActiveTimer(prev => (prev ? { ...prev, isRunning: true, isFinished: false } : null));
  };

  const resetTimer = () => {
    if (!activeTimer) return;
    playTimerTickSound();
    const endTime = activeTimer.isRunning ? Date.now() + activeTimer.totalSeconds * 1000 : null;
    setTimerEndTime(endTime);
    setActiveTimer(prev =>
      prev
        ? {
            ...prev,
            remainingSeconds: prev.totalSeconds,
            isFinished: false
          }
        : null
    );
  };

  const addTimeToTimer = (secondsToAdd: number) => {
    if (!activeTimer) return;
    playTimerTickSound();
    setActiveTimer(prev => {
      if (!prev) return null;
      const newRemaining = Math.max(0, prev.remainingSeconds + secondsToAdd);
      const newTotal = Math.max(prev.totalSeconds, newRemaining);
      if (prev.isRunning) {
        setTimerEndTime(Date.now() + newRemaining * 1000);
      }
      return {
        ...prev,
        remainingSeconds: newRemaining,
        totalSeconds: newTotal,
        isFinished: newRemaining > 0 ? false : prev.isFinished
      };
    });
    const label =
      secondsToAdd > 0
        ? `+${secondsToAdd >= 60 ? `${Math.round(secondsToAdd / 60)}m` : `${secondsToAdd}s`}`
        : `${secondsToAdd}s`;
    showToast(`${label} added to timer`);
  };

  const stopTimer = () => {
    playTimerTickSound();
    setActiveTimer(null);
    setTimerEndTime(null);
  };

  const toggleTimerSound = () => {
    setActiveTimer(prev => (prev ? { ...prev, soundEnabled: !prev.soundEnabled } : null));
  };

  // Sync favorites & saved
  useEffect(() => {
    try {
      localStorage.setItem('recipebook_favorites_v1', JSON.stringify(favorites));
      setUserProfile(prev => ({ ...prev, favoritesCount: favorites.length }));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('recipebook_saved_v1', JSON.stringify(savedRecipes));
      setUserProfile(prev => ({ ...prev, savedCollectionsCount: savedRecipes.length }));
    } catch (e) {
      console.error(e);
    }
  }, [savedRecipes]);

  useEffect(() => {
    try {
      localStorage.setItem('recipebook_checked_ingredients', JSON.stringify(checkedIngredients));
    } catch (e) {
      console.error(e);
    }
  }, [checkedIngredients]);

  useEffect(() => {
    try {
      localStorage.setItem('recipebook_completed_steps', JSON.stringify(completedSteps));
    } catch (e) {
      console.error(e);
    }
  }, [completedSteps]);

  useEffect(() => {
    try {
      localStorage.setItem('recipebook_user_profile_v1', JSON.stringify(userProfile));
    } catch (e) {
      console.error(e);
    }
  }, [userProfile]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(prev => (prev === msg ? null : prev));
    }, 2800);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const isFav = prev.includes(id);
      const recipe = recipes.find(r => r.id === id);
      const name = recipe ? recipe.title : 'Recipe';
      if (isFav) {
        showToast(`Removed "${name}" from Favorites`);
        return prev.filter(item => item !== id);
      } else {
        showToast(`Saved "${name}" to Favorites ❤️`);
        return [...prev, id];
      }
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const toggleSaved = (id: string) => {
    setSavedRecipes(prev => {
      const isS = prev.includes(id);
      const recipe = recipes.find(r => r.id === id);
      const name = recipe ? recipe.title : 'Recipe';
      if (isS) {
        showToast(`Removed from Saved Collection`);
        return prev.filter(item => item !== id);
      } else {
        showToast(`Added "${name}" to Saved Collection 🔖`);
        return [...prev, id];
      }
    });
  };

  const isSaved = (id: string) => savedRecipes.includes(id);

  const toggleIngredientCheck = (recipeId: string, ingredientId: string) => {
    setCheckedIngredients(prev => {
      const currentList = prev[recipeId] || [];
      const isChecked = currentList.includes(ingredientId);
      const updated = isChecked
        ? currentList.filter(id => id !== ingredientId)
        : [...currentList, ingredientId];
      return { ...prev, [recipeId]: updated };
    });
  };

  const isIngredientChecked = (recipeId: string, ingredientId: string) => {
    return (checkedIngredients[recipeId] || []).includes(ingredientId);
  };

  const toggleStepCompleted = (recipeId: string, stepNumber: number) => {
    setCompletedSteps(prev => {
      const currentList = prev[recipeId] || [];
      const isDone = currentList.includes(stepNumber);
      const updated = isDone
        ? currentList.filter(n => n !== stepNumber)
        : [...currentList, stepNumber];
      return { ...prev, [recipeId]: updated };
    });
  };

  const isStepCompleted = (recipeId: string, stepNumber: number) => {
    return (completedSteps[recipeId] || []).includes(stepNumber);
  };

  const resetRecipeChecklist = (recipeId: string) => {
    setCheckedIngredients(prev => ({ ...prev, [recipeId]: [] }));
    setCompletedSteps(prev => ({ ...prev, [recipeId]: [] }));
    showToast('Checklist reset for fresh cooking session!');
  };

  const viewRecipeDetail = (id: string) => {
    setSelectedRecipeId(id);
    setServingsMultiplier(1);
    setScreenHistory(prev => [...prev, activeScreen]);
    setActiveScreen('detail');
  };

  const goBack = () => {
    if (activeScreen === 'detail') {
      const last = screenHistory[screenHistory.length - 1] || 'home';
      setScreenHistory(prev => prev.slice(0, -1));
      setActiveScreen(last);
      setSelectedRecipeId(null);
    } else {
      setActiveScreen('home');
    }
  };

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
    showToast('Profile preferences updated');
  };

  const selectedRecipe = recipes.find(r => r.id === selectedRecipeId) || null;

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        activeScreen,
        setActiveScreen: (screen) => {
          if (screen !== 'detail') setSelectedRecipeId(null);
          setActiveScreen(screen);
        },
        selectedRecipeId,
        selectedRecipe,
        viewRecipeDetail,
        goBack,
        favorites,
        toggleFavorite,
        isFavorite,
        savedRecipes,
        toggleSaved,
        isSaved,
        checkedIngredients,
        toggleIngredientCheck,
        isIngredientChecked,
        completedSteps,
        toggleStepCompleted,
        isStepCompleted,
        resetRecipeChecklist,
        activeTimer,
        startStepTimer,
        pauseTimer,
        resumeTimer,
        resetTimer,
        addTimeToTimer,
        stopTimer,
        toggleTimerSound,
        servingsMultiplier,
        setServingsMultiplier,
        userProfile,
        updateUserProfile,
        toast,
        showToast
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipe must be used within a RecipeProvider');
  }
  return context;
};
