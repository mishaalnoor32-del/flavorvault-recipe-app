import React, { useState } from 'react';
import { Heart, Clock, Star, Trash2, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { useRecipe } from '../../context/RecipeContext';
import { CATEGORIES } from '../../data/recipes';
import { CategoryId } from '../../types';

export const FavoritesScreen: React.FC = () => {
  const {
    recipes,
    favorites,
    toggleFavorite,
    viewRecipeDetail,
    setActiveScreen
  } = useRecipe();

  const [filterCat, setFilterCat] = useState<CategoryId>('all');

  const favoritedRecipes = recipes.filter(r => favorites.includes(r.id));
  const displayedFavorites = favoritedRecipes.filter(r =>
    filterCat === 'all' ? true : r.category === filterCat
  );

  return (
    <div id="favorites-screen" className="w-full flex-1 pb-24">
      <header className="px-5 pt-4 pb-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Heart className="w-6 h-6 fill-orange-500 text-orange-500" />
            My Favorites
          </h1>
          <p className="text-xs text-zinc-400">
            {favoritedRecipes.length} saved {favoritedRecipes.length === 1 ? 'dish' : 'dishes'} in your favorites
          </p>
        </div>
      </header>

      {/* Category Filter Pills if favorites > 0 */}
      {favoritedRecipes.length > 0 && (
        <div className="px-5 my-2 flex gap-1.5 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilterCat(cat.id as CategoryId)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-xl capitalize whitespace-nowrap transition-all ${
                filterCat === cat.id
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-[#1E2228] text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.id === 'all' ? 'All Favorites' : cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Favorites List */}
      <div className="px-5 mt-3">
        {favoritedRecipes.length === 0 ? (
          <div className="py-16 text-center bg-[#1E2228] border border-white/10 rounded-3xl p-6 mt-4">
            <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center mx-auto mb-3">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-white">No Favorites Yet</h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
              Tap the heart icon on any recipe to save it here for quick access while cooking.
            </p>
            <button
              onClick={() => setActiveScreen('home')}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Explore Recipes
            </button>
          </div>
        ) : displayedFavorites.length === 0 ? (
          <div className="py-10 text-center bg-[#1E2228] border border-white/5 rounded-2xl p-4">
            <p className="text-xs text-zinc-400">No favorites found in this category.</p>
            <button
              onClick={() => setFilterCat('all')}
              className="mt-2 text-xs text-orange-400 font-semibold"
            >
              Show all favorites
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {displayedFavorites.map((recipe) => (
              <div
                key={recipe.id}
                id={`favorite-item-${recipe.id}`}
                onClick={() => viewRecipeDetail(recipe.id)}
                className="bg-[#1E2228] border border-white/5 hover:border-orange-500/30 rounded-2xl overflow-hidden p-3 flex gap-3.5 group cursor-pointer transition-all duration-200"
              >
                {/* Image */}
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-black/40">
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
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-black/70 text-amber-400 flex items-center gap-0.5">
                    <Star className="w-2.5 h-2.5 fill-amber-400" />
                    {recipe.rating}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                        {recipe.categoryLabel}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(recipe.id);
                        }}
                        title="Remove from favorites"
                        className="p-1 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-white/5 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-sm font-bold text-white line-clamp-1 mt-0.5 group-hover:text-orange-400 transition-colors">
                      {recipe.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                      {recipe.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                    <span className="flex items-center gap-1 text-zinc-300">
                      <Clock className="w-3 h-3 text-orange-400" />
                      {recipe.prepTimeMinutes + recipe.cookTimeMinutes}m total
                    </span>
                    <span className="text-orange-400 font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Cook Now <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
