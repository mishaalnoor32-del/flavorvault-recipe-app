import React from 'react';
import { Home, Compass, Heart, User } from 'lucide-react';
import { useRecipe, ScreenType } from '../../context/RecipeContext';

export const BottomNav: React.FC = () => {
  const { activeScreen, setActiveScreen, favorites } = useRecipe();

  const navItems: { id: ScreenType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'categories', label: 'Explore', icon: Compass },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav
      id="flutter-bottom-nav-bar"
      aria-label="Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 w-full bg-[#1A1D21]/95 backdrop-blur-md border-t border-white/10 px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] transition-all"
    >
      <div className="w-full max-w-3xl mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeScreen === item.id || (activeScreen === 'detail' && item.id === 'home');
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              id={`nav-tab-${item.id}`}
              onClick={() => setActiveScreen(item.id)}
              className="relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 group focus:outline-none"
            >
              {/* Material 3 active pill pill indicator */}
              <div
                className={`flex items-center justify-center px-4 py-1 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-orange-500/20 text-orange-400 scale-105'
                    : 'text-zinc-400 hover:text-zinc-200 group-hover:bg-white/5'
                }`}
              >
                <div className="relative">
                  <Icon
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isActive ? 'stroke-[2.5px] scale-110 text-orange-500' : 'stroke-[1.8px]'
                    }`}
                  />
                  {item.id === 'favorites' && favorites.length > 0 && (
                    <span className="absolute -top-1.5 -right-2.5 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[16px] text-center shadow-md">
                      {favorites.length}
                    </span>
                  )}
                </div>
              </div>
              <span
                className={`text-[11px] mt-0.5 tracking-tight font-medium transition-colors duration-200 ${
                  isActive ? 'text-orange-400 font-semibold' : 'text-zinc-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
