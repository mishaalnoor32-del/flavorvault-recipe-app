import React from 'react';
import { Search, Flame, Clock, Star, Heart, ArrowRight, Sparkles, UtensilsCrossed, User } from 'lucide-react';
import { useRecipe } from '../../context/RecipeContext';
import { CATEGORIES } from '../../data/recipes';
import { CategoryId } from '../../types';
import { PWAInstallButton } from '../pwa/PWAInstallButton';

export const HomeScreen: React.FC = () => {
  const {
    recipes,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    viewRecipeDetail,
    favorites,
    toggleFavorite,
    setActiveScreen,
    userProfile
  } = useRecipe();

  const featuredRecipes = recipes.filter(r => r.featured);

  // Filter recipes based on search and selected category
  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="home-screen" className="w-full flex-1 pb-24">
      {/* App Bar / Top Header */}
      <header className="px-5 pt-4 pb-3 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1.5 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
              <UtensilsCrossed className="w-4 h-4 text-orange-500" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-orange-400">
              Recipe Book
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight mt-1">
            {userProfile.name ? `Hello, ${userProfile.name.split(' ')[0]} 👋` : 'Welcome 👋'}
          </h1>
          <p className="text-xs text-zinc-400">
            {userProfile.name
              ? 'What appetizing dish are we creating today?'
              : 'Discover recipes & save your personal favorites'}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <PWAInstallButton variant="compact" />
          <button
            id="btn-header-profile"
            onClick={() => setActiveScreen('profile')}
            className="relative group p-0.5 rounded-full ring-2 ring-orange-500/40 hover:ring-orange-500 bg-[#1E2228] transition-all focus:outline-none"
            title="Open Profile"
          >
            {userProfile.name ? (
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white text-sm font-bold shadow-md">
                {userProfile.name.trim().charAt(0).toUpperCase()}
              </div>
            ) : (
              <div className="w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <User className="w-4 h-4" />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-5 my-2">
        <div className="relative flex items-center bg-[#1E2228] border border-white/10 rounded-2xl px-4 py-3 shadow-inner focus-within:border-orange-500/60 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all">
          <Search className="w-5 h-5 text-zinc-400 mr-3 flex-shrink-0" />
          <input
            id="search-input-home"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Biryani, Pasta, Burger, Ramen..."
            className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-zinc-400 hover:text-white px-2 py-0.5 rounded-full bg-zinc-800"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Horizontal Category Selector */}
      <section className="mt-4">
        <div className="px-5 flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-orange-400" />
            Categories
          </h2>
          <button
            id="btn-see-all-categories"
            onClick={() => setActiveScreen('categories')}
            className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-0.5"
          >
            See All <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex gap-3 px-5 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                id={`category-chip-${category.id}`}
                onClick={() => {
                  setSelectedCategory(category.id as CategoryId);
                }}
                className={`flex-shrink-0 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border transition-all duration-200 group ${
                  isSelected
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-transparent shadow-lg shadow-orange-500/25 scale-[1.02]'
                    : 'bg-[#1E2228] text-zinc-300 border-white/5 hover:border-white/15 hover:bg-[#252A32]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center ${
                    isSelected ? 'ring-2 ring-white/50' : 'bg-black/20'
                  }`}
                >
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold whitespace-nowrap leading-tight">
                    {category.name}
                  </span>
                  <span
                    className={`block text-[10px] ${
                      isSelected ? 'text-orange-100' : 'text-zinc-500'
                    }`}
                  >
                    {category.id === 'all' ? `${recipes.length} dishes` : `${category.count} items`}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured Recipes Carousel */}
      {selectedCategory === 'all' && !searchQuery && (
        <section className="mt-5">
          <div className="px-5 flex items-center justify-between mb-3">
            <div>
              <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-500" />
                Featured Creations
              </h2>
              <p className="text-[11px] text-zinc-400">Handpicked chef specials for tonight</p>
            </div>
          </div>

          <div className="flex gap-4 px-5 overflow-x-auto no-scrollbar pb-2">
            {featuredRecipes.map((recipe) => {
              const isFav = favorites.includes(recipe.id);
              return (
                <div
                  key={recipe.id}
                  id={`featured-card-${recipe.id}`}
                  className="flex-shrink-0 w-72 bg-[#1E2228] border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-orange-500/40 transition-all duration-300 group cursor-pointer"
                  onClick={() => viewRecipeDetail(recipe.id)}
                >
                  {/* Card Image Container */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2228] via-transparent to-black/30" />

                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-black/60 backdrop-blur-md text-orange-400 border border-white/15">
                      {recipe.categoryLabel}
                    </span>

                    {/* Favorite Button */}
                    <button
                      id={`btn-fav-featured-${recipe.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(recipe.id);
                      }}
                      aria-label="Toggle Favorite"
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/80 transition-all active:scale-90"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFav ? 'fill-orange-500 text-orange-500' : 'text-white'
                        }`}
                      />
                    </button>

                    {/* Rating pill */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 text-white text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{recipe.rating}</span>
                      <span className="text-zinc-400 text-[10px]">({recipe.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-orange-400 transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {recipe.description}
                    </p>

                    <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-medium">
                      <span className="flex items-center gap-1 text-orange-400">
                        <Clock className="w-3.5 h-3.5" />
                        {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
                      </span>
                      <span className="text-zinc-300 px-2 py-0.5 rounded-md bg-white/5 text-[11px]">
                        {recipe.difficulty}
                      </span>
                      <span className="text-zinc-400 text-[11px]">
                        {recipe.calories} kcal
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Popular Dishes / Recipe Grid */}
      <section className="mt-6 px-5">
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              {searchQuery
                ? `Results for "${searchQuery}"`
                : selectedCategory === 'all'
                ? 'Popular Dishes'
                : `${CATEGORIES.find(c => c.id === selectedCategory)?.name} Recipes`}
            </h2>
            <span className="text-xs text-zinc-400">
              {filteredRecipes.length} delicious {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
            </span>
          </div>
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="py-12 text-center bg-[#1E2228] border border-white/10 rounded-3xl p-6">
            <UtensilsCrossed className="w-12 h-12 text-zinc-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-zinc-300">No dishes matched your search</p>
            <p className="text-xs text-zinc-500 mt-1">Try searching for Biryani, Pizza, Tacos, or Burgers</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-semibold px-4 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredRecipes.map((recipe) => {
              const isFav = favorites.includes(recipe.id);
              return (
                <div
                  key={recipe.id}
                  id={`recipe-card-${recipe.id}`}
                  onClick={() => viewRecipeDetail(recipe.id)}
                  className="bg-[#1E2228] border border-white/5 hover:border-orange-500/30 rounded-2xl overflow-hidden p-3 flex gap-3 group cursor-pointer transition-all duration-200 hover:bg-[#242931]"
                >
                  {/* Food Picture */}
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-black/30">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1 right-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(recipe.id);
                        }}
                        aria-label="Toggle Favorite"
                        className="p-1 rounded-full bg-black/60 backdrop-blur-sm text-white"
                      >
                        <Heart
                          className={`w-3 h-3 ${
                            isFav ? 'fill-orange-500 text-orange-500' : 'text-zinc-300'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                          {recipe.categoryLabel}
                        </span>
                        <div className="flex items-center gap-0.5 text-[11px] font-semibold text-amber-400">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{recipe.rating}</span>
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white line-clamp-1 mt-0.5 group-hover:text-orange-400 transition-colors">
                        {recipe.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-zinc-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-400" />
                        {recipe.cookTimeMinutes}m cook
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 text-[10px] font-medium">
                        {recipe.servings} Servings
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
