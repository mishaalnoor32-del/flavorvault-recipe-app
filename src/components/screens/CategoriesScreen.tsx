import React, { useState } from 'react';
import { Search, Clock, Star, Heart, Flame, SlidersHorizontal } from 'lucide-react';
import { useRecipe } from '../../context/RecipeContext';
import { CATEGORIES } from '../../data/recipes';
import { CategoryId } from '../../types';

export const CategoriesScreen: React.FC = () => {
  const {
    recipes,
    selectedCategory,
    setSelectedCategory,
    viewRecipeDetail,
    favorites,
    toggleFavorite
  } = useRecipe();

  const [localSearch, setLocalSearch] = useState('');
  const [filterDuration, setFilterDuration] = useState<'all' | 'quick' | 'under45'>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<'all' | 'Easy' | 'Medium' | 'Hard'>('all');

  const activeCategoryObj = CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];

  const filtered = recipes.filter(r => {
    const matchCat = selectedCategory === 'all' || r.category === selectedCategory;
    const matchSearch =
      r.title.toLowerCase().includes(localSearch.toLowerCase()) ||
      r.tags.some(t => t.toLowerCase().includes(localSearch.toLowerCase())) ||
      r.categoryLabel.toLowerCase().includes(localSearch.toLowerCase());
    
    let matchTime = true;
    if (filterDuration === 'quick') matchTime = (r.prepTimeMinutes + r.cookTimeMinutes) <= 30;
    if (filterDuration === 'under45') matchTime = (r.prepTimeMinutes + r.cookTimeMinutes) <= 45;

    let matchDiff = true;
    if (filterDifficulty !== 'all') matchDiff = r.difficulty === filterDifficulty;

    return matchCat && matchSearch && matchTime && matchDiff;
  });

  return (
    <div id="categories-screen" className="w-full flex-1 pb-24">
      {/* Screen Header */}
      <header className="px-5 pt-4 pb-2">
        <h1 className="text-2xl font-bold text-white tracking-tight">Explore Categories</h1>
        <p className="text-xs text-zinc-400">Discover recipes curated by culinary traditions</p>
      </header>

      {/* Category Pills Navigation */}
      <div className="px-5 my-2">
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-tab-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id as CategoryId)}
                className={`flex-shrink-0 px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                    : 'bg-[#1E2228] text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Category Hero Card */}
      <div className="px-5 my-3">
        <div className="relative rounded-3xl overflow-hidden p-5 border border-white/10 bg-[#1E2228] shadow-lg">
          <div
            className="absolute inset-0 opacity-25 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeCategoryObj.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#1A1D21]/90 to-transparent" />
          
          <div className="relative z-10 max-w-xs">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-orange-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">
              <Flame className="w-3 h-3" />
              {activeCategoryObj.name} Collection
            </span>
            <h2 className="text-lg font-bold text-white mt-1">
              {activeCategoryObj.name === 'All Recipes' ? 'All Global Creations' : activeCategoryObj.name}
            </h2>
            <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
              {activeCategoryObj.description}
            </p>
            <span className="inline-block mt-2 text-[11px] font-semibold text-orange-400">
              {recipes.filter(r => selectedCategory === 'all' || r.category === selectedCategory).length} recipes available
            </span>
          </div>
        </div>
      </div>

      {/* Search & Quick Filter Bar */}
      <div className="px-5 space-y-2">
        <div className="relative flex items-center bg-[#1E2228] border border-white/10 rounded-2xl px-3.5 py-2.5 shadow-inner">
          <Search className="w-4 h-4 text-zinc-400 mr-2 flex-shrink-0" />
          <input
            id="category-search-input"
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder={`Filter ${activeCategoryObj.name} by name or ingredients...`}
            className="w-full bg-transparent text-xs text-white placeholder:text-zinc-500 focus:outline-none"
          />
          {localSearch && (
            <button
              onClick={() => setLocalSearch('')}
              className="text-[10px] text-zinc-400 hover:text-white px-2 py-0.5 rounded-full bg-zinc-800"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Filter Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3" />
            Sort:
          </span>
          <button
            onClick={() => setFilterDuration(prev => (prev === 'quick' ? 'all' : 'quick'))}
            className={`text-[11px] font-medium px-2.5 py-1 rounded-xl transition-all ${
              filterDuration === 'quick'
                ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                : 'bg-[#1E2228] text-zinc-400 border border-white/5'
            }`}
          >
            ⚡ Under 30m
          </button>
          <button
            onClick={() => setFilterDuration(prev => (prev === 'under45' ? 'all' : 'under45'))}
            className={`text-[11px] font-medium px-2.5 py-1 rounded-xl transition-all ${
              filterDuration === 'under45'
                ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                : 'bg-[#1E2228] text-zinc-400 border border-white/5'
            }`}
          >
            🕒 Under 45m
          </button>
          <button
            onClick={() => setFilterDifficulty(prev => (prev === 'Easy' ? 'all' : 'Easy'))}
            className={`text-[11px] font-medium px-2.5 py-1 rounded-xl transition-all ${
              filterDifficulty === 'Easy'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-[#1E2228] text-zinc-400 border border-white/5'
            }`}
          >
            🌱 Beginner Friendly
          </button>
        </div>
      </div>

      {/* Recipe Cards List */}
      <section className="px-5 mt-4">
        {filtered.length === 0 ? (
          <div className="py-12 text-center bg-[#1E2228] border border-white/10 rounded-2xl p-6">
            <p className="text-sm font-semibold text-zinc-300">No dishes match selected filters</p>
            <button
              onClick={() => {
                setLocalSearch('');
                setFilterDuration('all');
                setFilterDifficulty('all');
              }}
              className="mt-3 text-xs font-semibold px-4 py-2 rounded-xl bg-orange-500 text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((recipe) => {
              const isFav = favorites.includes(recipe.id);
              return (
                <article
                  key={recipe.id}
                  id={`listing-card-${recipe.id}`}
                  onClick={() => viewRecipeDetail(recipe.id)}
                  className="bg-[#1E2228] border border-white/5 rounded-3xl overflow-hidden shadow-md hover:border-orange-500/40 transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  {/* Food Picture Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-black/40">
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
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-black/60 backdrop-blur-md text-orange-400 border border-white/15">
                        {recipe.categoryLabel}
                      </span>
                    </div>

                    {/* Favorite Button */}
                    <button
                      id={`btn-fav-listing-${recipe.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(recipe.id);
                      }}
                      aria-label="Toggle Favorite"
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/80 transition-all active:scale-90"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isFav ? 'fill-orange-500 text-orange-500' : 'text-white'
                        }`}
                      />
                    </button>

                    {/* Rating Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 text-white text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{recipe.rating}</span>
                      <span className="text-zinc-400 text-[10px]">({recipe.reviewsCount})</span>
                    </div>

                    {/* Difficulty Pill */}
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-zinc-300 text-[10px] font-medium border border-white/10">
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-orange-400 transition-colors">
                        {recipe.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                        {recipe.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                      <span className="flex items-center gap-1 font-semibold text-orange-400">
                        <Clock className="w-3.5 h-3.5" />
                        {recipe.cookTimeMinutes} min cook
                      </span>
                      <span className="text-zinc-400 text-[11px]">
                        {recipe.servings} Servings • {recipe.calories} kcal
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
