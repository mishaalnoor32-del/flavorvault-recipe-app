import React from 'react';
import { Sparkles } from 'lucide-react';
import { RecipeProvider, useRecipe } from './context/RecipeContext';
import { BottomNav } from './components/common/BottomNav';
import { HomeScreen } from './components/screens/HomeScreen';
import { CategoriesScreen } from './components/screens/CategoriesScreen';
import { FavoritesScreen } from './components/screens/FavoritesScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { RecipeDetailScreen } from './components/screens/RecipeDetailScreen';
import { OfflineIndicator } from './components/pwa/OfflineIndicator';

const AppContent: React.FC = () => {
  const { activeScreen, toast } = useRecipe();

  return (
    <div className="w-full min-h-dvh bg-[#121417] text-zinc-100 flex flex-col relative">
      <OfflineIndicator />

      <main className="w-full flex-1 flex flex-col relative">
        {activeScreen === 'home' && <HomeScreen />}
        {activeScreen === 'categories' && <CategoriesScreen />}
        {activeScreen === 'favorites' && <FavoritesScreen />}
        {activeScreen === 'profile' && <ProfileScreen />}
        {activeScreen === 'detail' && <RecipeDetailScreen />}
      </main>

      {/* Persistent Bottom Nav - rendered on all main screens */}
      {activeScreen !== 'detail' && <BottomNav />}

      {/* Floating Toast Notification */}
      {toast && (
        <div
          id="flavorvault-toast-notification"
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-[#1E2228] text-white text-xs font-semibold border border-orange-500/40 shadow-2xl shadow-orange-500/20 flex items-center gap-2 max-w-[90vw]"
        >
          <Sparkles className="w-4 h-4 text-orange-400 flex-shrink-0" />
          <span className="truncate">{toast}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <RecipeProvider>
      <AppContent />
    </RecipeProvider>
  );
}

