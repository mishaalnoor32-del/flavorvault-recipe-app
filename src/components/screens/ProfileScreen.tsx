import React, { useState } from 'react';
import {
  User,
  Heart,
  Bookmark,
  Settings,
  Moon,
  Sun,
  Bell,
  Scale,
  RotateCcw,
  Clock,
  Star,
  Sparkles,
  Edit3,
  Trash2,
  Check,
  X,
  ArrowRight
} from 'lucide-react';
import { useRecipe } from '../../context/RecipeContext';
import { PWAInstallButton } from '../pwa/PWAInstallButton';

export const ProfileScreen: React.FC = () => {
  const {
    userProfile,
    updateUserProfile,
    recipes,
    favorites,
    savedRecipes,
    toggleFavorite,
    toggleSaved,
    viewRecipeDetail,
    setActiveScreen,
    showToast
  } = useRecipe();

  const [activeTab, setActiveTab] = useState<'saved' | 'favorites' | 'settings'>('saved');
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(userProfile.name);

  const favoritedList = recipes.filter(r => favorites.includes(r.id));
  const savedList = recipes.filter(r => savedRecipes.includes(r.id));

  const handleSaveName = () => {
    const trimmed = nameInput.trim();
    if (trimmed) {
      updateUserProfile({ name: trimmed });
      setIsEditingName(false);
      showToast(`Welcome, ${trimmed}!`);
    }
  };

  return (
    <div id="profile-screen" className="w-full flex-1 pb-24">
      {/* Top Header */}
      <header className="px-5 pt-4 pb-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">My Profile</h1>
          <p className="text-xs text-zinc-400">Personalized recipe collection & favorites</p>
        </div>
        <div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full text-[11px] text-orange-400 font-semibold">
          <span>{savedRecipes.length} Saved</span>
          <span>•</span>
          <span>{favorites.length} Favs</span>
        </div>
      </header>

      {/* User Name & Personalization Card (No Default Cook Profile) */}
      <div className="px-5 my-3">
        <div className="bg-[#1E2228] border border-white/10 rounded-3xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-center gap-3.5">
            {/* User Avatar Circle */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white text-xl font-extrabold shadow-md shadow-orange-500/25 flex-shrink-0">
              {userProfile.name.trim() ? (
                userProfile.name.trim().charAt(0).toUpperCase()
              ) : (
                <User className="w-6 h-6 text-white" />
              )}
            </div>

            {/* Name / Edit Section */}
            <div className="flex-1 min-w-0">
              {userProfile.name && !isEditingName ? (
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-white truncate">
                      {userProfile.name}
                    </h2>
                    <button
                      id="btn-trigger-edit-name"
                      onClick={() => {
                        setNameInput(userProfile.name);
                        setIsEditingName(true);
                      }}
                      className="text-zinc-400 hover:text-orange-400 p-1 rounded-lg hover:bg-white/5 transition-colors"
                      title="Edit Name"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-orange-400" />
                    </button>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Personal Recipe Collection
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <input
                      id="input-user-name"
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="Enter your name..."
                      className="w-full text-xs bg-black/40 border border-orange-500/40 rounded-xl px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500"
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveName();
                        if (e.key === 'Escape' && userProfile.name) setIsEditingName(false);
                      }}
                    />
                    <button
                      id="btn-save-name"
                      onClick={handleSaveName}
                      className="px-3 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-colors flex items-center gap-1 flex-shrink-0"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Save
                    </button>
                    {userProfile.name && (
                      <button
                        onClick={() => {
                          setNameInput(userProfile.name);
                          setIsEditingName(false);
                        }}
                        className="p-2 rounded-xl text-zinc-400 hover:text-white flex-shrink-0"
                        title="Cancel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  {!userProfile.name && (
                    <p className="text-[11px] text-zinc-400">
                      Add your name to personalize your recipe book
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Quick Counter Shortcuts */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-white/5 text-center">
            <button
              id="btn-shortcut-saved"
              onClick={() => setActiveTab('saved')}
              className={`p-2.5 rounded-2xl border transition-all ${
                activeTab === 'saved'
                  ? 'bg-orange-500/15 border-orange-500/40 text-orange-400 shadow-sm'
                  : 'bg-black/20 border-white/5 text-zinc-300 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <Bookmark className="w-4 h-4 text-amber-400" />
                <span className="text-base font-extrabold text-white">
                  {savedRecipes.length}
                </span>
              </div>
              <span className="block text-[11px] text-zinc-400 font-medium">
                Saved Recipes
              </span>
            </button>

            <button
              id="btn-shortcut-favorites"
              onClick={() => setActiveTab('favorites')}
              className={`p-2.5 rounded-2xl border transition-all ${
                activeTab === 'favorites'
                  ? 'bg-orange-500/15 border-orange-500/40 text-orange-400 shadow-sm'
                  : 'bg-black/20 border-white/5 text-zinc-300 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <Heart className="w-4 h-4 fill-orange-500 text-orange-500" />
                <span className="text-base font-extrabold text-white">
                  {favorites.length}
                </span>
              </div>
              <span className="block text-[11px] text-zinc-400 font-medium">
                Favorite Recipes
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Segment Tabs */}
      <div className="px-5 mt-3">
        <div className="grid grid-cols-3 bg-[#1E2228] p-1 rounded-2xl border border-white/10">
          <button
            id="profile-tab-saved"
            onClick={() => setActiveTab('saved')}
            className={`py-2 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'saved'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            Saved ({savedList.length})
          </button>
          <button
            id="profile-tab-favorites"
            onClick={() => setActiveTab('favorites')}
            className={`py-2 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'favorites'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            Favorites ({favoritedList.length})
          </button>
          <button
            id="profile-tab-settings"
            onClick={() => setActiveTab('settings')}
            className={`py-2 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'settings'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            Settings
          </button>
        </div>
      </div>

      {/* TAB 1: SAVED RECIPES */}
      {activeTab === 'saved' && (
        <div className="px-5 mt-4 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
            <span className="font-semibold text-white">Your Saved Collection</span>
            <span>{savedList.length} items</span>
          </div>

          {savedList.length === 0 ? (
            <div className="py-12 text-center bg-[#1E2228] border border-white/5 rounded-3xl p-6">
              <Bookmark className="w-10 h-10 text-zinc-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-white">No Saved Recipes Yet</p>
              <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                Tap the bookmark icon on any recipe to save it here for quick meal planning.
              </p>
              <button
                id="btn-profile-browse-saved"
                onClick={() => setActiveScreen('home')}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
              >
                Explore Recipes
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            savedList.map(recipe => (
              <div
                key={recipe.id}
                id={`profile-saved-recipe-${recipe.id}`}
                className="bg-[#1E2228] border border-white/5 hover:border-orange-500/30 rounded-2xl p-3 flex items-center gap-3 group transition-all"
              >
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  onClick={() => viewRecipeDetail(recipe.id)}
                  className="w-16 h-16 rounded-xl object-cover cursor-pointer flex-shrink-0"
                />
                <div
                  onClick={() => viewRecipeDetail(recipe.id)}
                  className="flex-1 min-w-0 flex flex-col justify-between py-0.5 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold text-orange-400 uppercase">
                      {recipe.categoryLabel}
                    </span>
                    <h4 className="text-xs font-bold text-white truncate group-hover:text-orange-400">
                      {recipe.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-zinc-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-orange-400" />
                      {recipe.cookTimeMinutes}m
                    </span>
                    <span className="flex items-center gap-0.5 text-amber-400">
                      <Star className="w-2.5 h-2.5 fill-amber-400" />
                      {recipe.rating}
                    </span>
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                {/* Remove from saved button */}
                <button
                  id={`btn-unsave-${recipe.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaved(recipe.id);
                  }}
                  className="p-2 rounded-xl text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                  title="Remove from saved"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 2: FAVORITES */}
      {activeTab === 'favorites' && (
        <div className="px-5 mt-4 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
            <span className="font-semibold text-white">Your Favorite Dishes</span>
            <span>{favoritedList.length} items</span>
          </div>

          {favoritedList.length === 0 ? (
            <div className="py-12 text-center bg-[#1E2228] border border-white/5 rounded-3xl p-6">
              <Heart className="w-10 h-10 text-zinc-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-white">No Favorite Recipes Yet</p>
              <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                Tap the heart icon on any recipe to add your most-loved dishes here.
              </p>
              <button
                id="btn-profile-browse-favs"
                onClick={() => setActiveScreen('home')}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
              >
                Explore Recipes
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            favoritedList.map(recipe => (
              <div
                key={recipe.id}
                id={`profile-fav-recipe-${recipe.id}`}
                className="bg-[#1E2228] border border-white/5 hover:border-orange-500/30 rounded-2xl p-3 flex items-center gap-3 group transition-all"
              >
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  onClick={() => viewRecipeDetail(recipe.id)}
                  className="w-16 h-16 rounded-xl object-cover cursor-pointer flex-shrink-0"
                />
                <div
                  onClick={() => viewRecipeDetail(recipe.id)}
                  className="flex-1 min-w-0 flex flex-col justify-between py-0.5 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold text-orange-400 uppercase">
                      {recipe.categoryLabel}
                    </span>
                    <h4 className="text-xs font-bold text-white truncate group-hover:text-orange-400">
                      {recipe.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-zinc-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-orange-400" />
                      {recipe.cookTimeMinutes}m
                    </span>
                    <span className="flex items-center gap-0.5 text-amber-400">
                      <Star className="w-2.5 h-2.5 fill-amber-400" />
                      {recipe.rating}
                    </span>
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                {/* Remove from favorites button */}
                <button
                  id={`btn-unfav-${recipe.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(recipe.id);
                  }}
                  className="p-2 rounded-xl text-orange-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                  title="Remove from favorites"
                >
                  <Heart className="w-4 h-4 fill-orange-500" />
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 3: APP SETTINGS */}
      {activeTab === 'settings' && (
        <div className="px-5 mt-4 space-y-3">
          <div className="bg-[#1E2228] border border-white/10 rounded-3xl p-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Preferences & Display
            </h3>

            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                  {userProfile.darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Dark Mode</span>
                  <span className="text-[10px] text-zinc-400 block">
                    {userProfile.darkMode ? 'Obsidian Theme' : 'Light Theme'}
                  </span>
                </div>
              </div>

              <button
                id="btn-toggle-dark-mode"
                onClick={() => updateUserProfile({ darkMode: !userProfile.darkMode })}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                  userProfile.darkMode ? 'bg-orange-500 justify-end' : 'bg-zinc-700 justify-start'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-md" />
              </button>
            </div>

            {/* Notifications Toggle */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Cooking Notifications</span>
                  <span className="text-[10px] text-zinc-400 block">
                    Recipe timers and meal alerts
                  </span>
                </div>
              </div>

              <button
                id="btn-toggle-notifications"
                onClick={() => updateUserProfile({ notificationsEnabled: !userProfile.notificationsEnabled })}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                  userProfile.notificationsEnabled ? 'bg-orange-500 justify-end' : 'bg-zinc-700 justify-start'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-md" />
              </button>
            </div>

            {/* Measurement Units */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Units System</span>
                  <span className="text-[10px] text-zinc-400 block">
                    Grams & Milliliters vs Ounces & Cups
                  </span>
                </div>
              </div>

              <div className="flex bg-black/40 p-1 rounded-xl border border-white/10 text-[10px] font-bold">
                <button
                  onClick={() => updateUserProfile({ unitPreference: 'metric' })}
                  className={`px-2 py-1 rounded-lg transition-colors ${
                    userProfile.unitPreference === 'metric'
                      ? 'bg-orange-500 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Metric
                </button>
                <button
                  onClick={() => updateUserProfile({ unitPreference: 'imperial' })}
                  className={`px-2 py-1 rounded-lg transition-colors ${
                    userProfile.unitPreference === 'imperial'
                      ? 'bg-orange-500 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Imperial
                </button>
              </div>
            </div>
          </div>

          {/* Install as App / PWA */}
          <div className="pt-1">
            <PWAInstallButton variant="full" />
          </div>

          {/* Reset App State */}
          <div className="pt-2">
            <button
              id="btn-reset-app-data"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="w-full py-3 px-4 rounded-2xl bg-red-950/20 border border-red-500/30 text-red-400 text-xs font-bold flex items-center justify-center gap-2 hover:bg-red-950/40 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Saved Data to Factory Defaults
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

