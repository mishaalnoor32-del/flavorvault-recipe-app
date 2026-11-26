import React, { useState } from 'react';
import {
  ArrowLeft,
  Heart,
  Share2,
  Clock,
  Users,
  Flame,
  Star,
  CheckCircle2,
  Circle,
  RotateCcw,
  Sparkles,
  Plus,
  Minus,
  ChefHat,
  Bookmark,
  Timer,
  Play,
  Pause,
  Maximize2,
  Bell,
  X
} from 'lucide-react';
import { useRecipe } from '../../context/RecipeContext';
import { FloatingTimerBar } from '../timer/FloatingTimerBar';
import { CookingTimerModal } from '../timer/CookingTimerModal';

export const RecipeDetailScreen: React.FC = () => {
  const {
    selectedRecipe,
    goBack,
    favorites,
    toggleFavorite,
    savedRecipes,
    toggleSaved,
    isIngredientChecked,
    toggleIngredientCheck,
    isStepCompleted,
    toggleStepCompleted,
    resetRecipeChecklist,
    showToast,
    activeTimer,
    startStepTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    addTimeToTimer,
    stopTimer
  } = useRecipe();

  const [servingsMultiplier, setServingsMultiplier] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const [isTimerModalOpen, setIsTimerModalOpen] = useState<boolean>(false);

  if (!selectedRecipe) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <p className="text-zinc-400">Recipe not found.</p>
        <button
          onClick={goBack}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-xl text-sm font-semibold"
        >
          Go Back
        </button>
      </div>
    );
  }

  const isFav = favorites.includes(selectedRecipe.id);
  const isS = savedRecipes.includes(selectedRecipe.id);

  // Scaled servings
  const currentServings = Math.max(1, Math.round(selectedRecipe.servings * servingsMultiplier));
  const scaleFactor = currentServings / selectedRecipe.servings;

  // Ingredient progress calculation
  const totalIngredients = selectedRecipe.ingredients.length;
  const checkedIngredientsCount = selectedRecipe.ingredients.filter(ing =>
    isIngredientChecked(selectedRecipe.id, ing.id)
  ).length;
  const ingredientProgressPercent = Math.round(
    (checkedIngredientsCount / (totalIngredients || 1)) * 100
  );

  // Step progress
  const totalSteps = selectedRecipe.steps.length;
  const completedStepsCount = selectedRecipe.steps.filter(step =>
    isStepCompleted(selectedRecipe.id, step.stepNumber)
  ).length;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${selectedRecipe.title} on FlavorVault - ${window.location.href}`);
      showToast('Recipe link copied to clipboard! 📋');
    } else {
      showToast('Ready to share recipe! 📋');
    }
  };

  const formatAmount = (amt: number, factor: number) => {
    const val = amt * factor;
    // Format nicely: e.g. 0.5 -> 1/2 or decimal up to 1 decimal place
    if (val === 0.5) return '½';
    if (val === 0.25) return '¼';
    if (val === 0.75) return '¾';
    if (val === 1.5) return '1 ½';
    if (Number.isInteger(val)) return val.toString();
    return val.toFixed(1).replace(/\.0$/, '');
  };

  return (
    <div id="recipe-detail-screen" className="w-full flex-1 pb-28 relative">
      {/* Hero Image Container */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
        <img
          src={selectedRecipe.imageUrl}
          alt={selectedRecipe.title}
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80';
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-black/60" />

        {/* Top App Bar Over Hero */}
        <div className="absolute top-4 left-0 right-0 px-4 flex items-center justify-between z-20">
          <button
            id="btn-detail-back"
            onClick={goBack}
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-transform active:scale-95 border border-white/15"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <button
              id="btn-detail-share"
              onClick={handleShare}
              className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-transform active:scale-95 border border-white/15"
              aria-label="Share Recipe"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              id="btn-detail-bookmark"
              onClick={() => toggleSaved(selectedRecipe.id)}
              className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-transform active:scale-95 border border-white/15"
              aria-label="Bookmark Recipe"
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isS ? 'fill-amber-400 text-amber-400' : 'text-white'
                }`}
              />
            </button>
            <button
              id="btn-detail-favorite-toggle"
              onClick={() => toggleFavorite(selectedRecipe.id)}
              className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-transform active:scale-95 border border-white/15"
              aria-label="Favorite Recipe"
            >
              <Heart
                className={`w-4 h-4 transition-all duration-300 ${
                  isFav ? 'fill-orange-500 text-orange-500 scale-110' : 'text-white'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Category badge and Rating on image */}
        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500 text-white shadow-md">
            {selectedRecipe.categoryLabel}
          </span>
          <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/15 text-white text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{selectedRecipe.rating}</span>
            <span className="text-zinc-400 font-normal">({selectedRecipe.reviewsCount} reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-5 pt-3">
        <h1 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
          {selectedRecipe.title}
        </h1>
        <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
          {selectedRecipe.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {selectedRecipe.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-orange-300 border border-white/10"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Metadata Row Card (Flutter Material 3 style) */}
        <div className="mt-5 p-4 rounded-3xl bg-[#1E2228] border border-white/10 shadow-lg grid grid-cols-4 divide-x divide-white/10 text-center">
          <div className="px-1">
            <div className="w-8 h-8 mx-auto rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-400 mb-1">
              <Clock className="w-4 h-4" />
            </div>
            <span className="block text-[10px] uppercase font-semibold text-zinc-400">Prep Time</span>
            <span className="block text-xs font-bold text-white mt-0.5">
              {selectedRecipe.prepTimeMinutes}m
            </span>
          </div>

          <div className="px-1">
            <div className="w-8 h-8 mx-auto rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 mb-1">
              <Flame className="w-4 h-4" />
            </div>
            <span className="block text-[10px] uppercase font-semibold text-zinc-400">Cook Time</span>
            <span className="block text-xs font-bold text-white mt-0.5">
              {selectedRecipe.cookTimeMinutes}m
            </span>
          </div>

          <div className="px-1">
            <div className="w-8 h-8 mx-auto rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 mb-1">
              <Users className="w-4 h-4" />
            </div>
            <span className="block text-[10px] uppercase font-semibold text-zinc-400">Servings</span>
            <span className="block text-xs font-bold text-white mt-0.5">
              {currentServings} Ppl
            </span>
          </div>

          <div className="px-1">
            <div className="w-8 h-8 mx-auto rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 mb-1">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="block text-[10px] uppercase font-semibold text-zinc-400">Calories</span>
            <span className="block text-xs font-bold text-white mt-0.5">
              {selectedRecipe.calories}
            </span>
          </div>
        </div>

        {/* Dynamic Servings Scaler */}
        <div className="mt-4 p-3.5 rounded-2xl bg-[#1A1D21] border border-white/5 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <ChefHat className="w-4 h-4 text-orange-500" />
              Adjust Serving Size
            </span>
            <span className="text-[10px] text-zinc-400 block">
              Ingredient quantities update automatically
            </span>
          </div>

          <div className="flex items-center gap-3 bg-[#242931] px-2 py-1 rounded-xl border border-white/10">
            <button
              onClick={() => setServingsMultiplier(prev => Math.max(0.5, prev - 0.5))}
              className="p-1 rounded-lg hover:bg-white/10 text-zinc-300 disabled:opacity-40"
              disabled={servingsMultiplier <= 0.5}
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-bold text-orange-400 min-w-[32px] text-center">
              {currentServings}
            </span>
            <button
              onClick={() => setServingsMultiplier(prev => Math.min(3, prev + 0.5))}
              className="p-1 rounded-lg hover:bg-white/10 text-zinc-300"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Segmented Tabs: Ingredients vs Instructions */}
        <div className="mt-6">
          <div className="grid grid-cols-2 bg-[#1E2228] p-1 rounded-2xl border border-white/10">
            <button
              id="tab-ingredients"
              onClick={() => setActiveTab('ingredients')}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'ingredients'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Ingredients ({totalIngredients})
            </button>
            <button
              id="tab-instructions"
              onClick={() => setActiveTab('instructions')}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'instructions'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Instructions ({totalSteps} Steps)
            </button>
          </div>
        </div>

        {/* TAB 1: INGREDIENTS CHECKLIST */}
        {activeTab === 'ingredients' && (
          <div className="mt-4 space-y-3">
            {/* Checklist Progress Bar */}
            <div className="bg-[#1E2228] border border-white/5 rounded-2xl p-3.5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-zinc-300">
                  Prep Progress: {checkedIngredientsCount} of {totalIngredients} ready
                </span>
                <span className="font-bold text-orange-400">
                  {ingredientProgressPercent}%
                </span>
              </div>
              <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-orange-500 to-amber-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${ingredientProgressPercent}%` }}
                />
              </div>

              {checkedIngredientsCount > 0 && (
                <div className="mt-2 text-right">
                  <button
                    onClick={() => resetRecipeChecklist(selectedRecipe.id)}
                    className="text-[10px] text-zinc-400 hover:text-orange-400 inline-flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset checklist
                  </button>
                </div>
              )}
            </div>

            {/* Checklist items */}
            <div className="space-y-2">
              {selectedRecipe.ingredients.map((ing) => {
                const isChecked = isIngredientChecked(selectedRecipe.id, ing.id);
                return (
                  <div
                    key={ing.id}
                    id={`ingredient-row-${ing.id}`}
                    onClick={() => toggleIngredientCheck(selectedRecipe.id, ing.id)}
                    className={`p-3 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      isChecked
                        ? 'bg-emerald-950/20 border-emerald-500/30 text-zinc-400'
                        : 'bg-[#1E2228] border-white/5 hover:border-orange-500/30 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0 mr-2">
                      <div className="flex-shrink-0">
                        {isChecked ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                        ) : (
                          <Circle className="w-5 h-5 text-zinc-500" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`text-xs font-semibold leading-snug ${
                            isChecked ? 'line-through text-zinc-500' : 'text-zinc-100'
                          }`}
                        >
                          {ing.name}
                        </p>
                        {ing.notes && (
                          <p className="text-[10px] text-zinc-400 mt-0.5">
                            {ing.notes}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-right bg-white/5 px-2.5 py-1 rounded-xl border border-white/5">
                      <span className="text-xs font-bold text-orange-400">
                        {formatAmount(ing.amount, scaleFactor)}
                      </span>
                      <span className="text-[10px] text-zinc-400 ml-1">
                        {ing.unit}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: STEP-BY-STEP INSTRUCTIONS */}
        {activeTab === 'instructions' && (
          <div className="mt-4 space-y-3.5">
            <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
              <span>{completedStepsCount} of {totalSteps} steps completed</span>
              <span className="text-[10px] text-zinc-500">Tap step card to mark complete</span>
            </div>

            {selectedRecipe.steps.map((step) => {
              const isDone = isStepCompleted(selectedRecipe.id, step.stepNumber);
              const isThisStepTimerActive =
                activeTimer?.recipeId === selectedRecipe.id &&
                activeTimer?.stepNumber === step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  id={`instruction-step-${step.stepNumber}`}
                  onClick={() => toggleStepCompleted(selectedRecipe.id, step.stepNumber)}
                  className={`p-4 rounded-3xl border transition-all duration-200 cursor-pointer ${
                    isDone
                      ? 'bg-emerald-950/20 border-emerald-500/30'
                      : isThisStepTimerActive
                      ? 'bg-[#21252C] border-orange-500/60 shadow-lg shadow-orange-500/10'
                      : 'bg-[#1E2228] border-white/5 hover:border-orange-500/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                          isDone
                            ? 'bg-emerald-500 text-white'
                            : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        }`}
                      >
                        {isDone ? '✓' : step.stepNumber}
                      </span>
                      <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                        Step {step.stepNumber}
                      </span>
                    </div>

                    {step.durationMinutes && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded-lg border border-white/5">
                        <Clock className="w-3 h-3 text-orange-400" />
                        ~{step.durationMinutes} min
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-xs mt-3 leading-relaxed ${
                      isDone ? 'text-zinc-400 line-through' : 'text-zinc-200'
                    }`}
                  >
                    {step.instruction}
                  </p>

                  {step.tip && (
                    <div className="mt-3 p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[11px] text-orange-200 leading-snug">
                        <strong className="text-orange-400">Chef's Secret:</strong> {step.tip}
                      </p>
                    </div>
                  )}

                  {/* Interactive Cooking Timer Trigger / Active Display */}
                  {isThisStepTimerActive && activeTimer ? (
                    <div
                      id={`step-timer-active-${step.stepNumber}`}
                      onClick={(e) => e.stopPropagation()}
                      className={`mt-3.5 p-3 rounded-2xl border transition-all ${
                        activeTimer.isFinished
                          ? 'bg-emerald-950/40 border-emerald-500/40'
                          : activeTimer.isRunning
                          ? 'bg-orange-500/10 border-orange-500/30'
                          : 'bg-amber-500/10 border-amber-500/30'
                      }`}
                    >
                      {/* Micro progress line */}
                      <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden mb-2.5">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            activeTimer.isFinished
                              ? 'bg-emerald-400'
                              : activeTimer.isRunning
                              ? 'bg-gradient-to-r from-orange-500 to-amber-400'
                              : 'bg-amber-400'
                          }`}
                          style={{
                            width: `${
                              activeTimer.totalSeconds > 0
                                ? Math.max(
                                    0,
                                    Math.min(
                                      100,
                                      Math.round(
                                        ((activeTimer.totalSeconds - activeTimer.remainingSeconds) /
                                          activeTimer.totalSeconds) *
                                          100
                                      )
                                    )
                                  )
                                : 100
                            }%`
                          }}
                        />
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                              activeTimer.isFinished
                                ? 'bg-emerald-500 text-white animate-bounce'
                                : activeTimer.isRunning
                                ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            }`}
                          >
                            {activeTimer.isFinished ? (
                              <Bell className="w-3.5 h-3.5" />
                            ) : (
                              <Timer className="w-3.5 h-3.5" />
                            )}
                          </div>
                          <div>
                            <span className="font-mono text-sm font-extrabold text-white tracking-tight">
                              {activeTimer.isFinished
                                ? "TIME'S UP!"
                                : `${Math.floor(activeTimer.remainingSeconds / 60)
                                    .toString()
                                    .padStart(2, '0')}:${(activeTimer.remainingSeconds % 60)
                                    .toString()
                                    .padStart(2, '0')}`}
                            </span>
                            <span className="text-[10px] text-zinc-400 ml-1.5">
                              {activeTimer.isFinished
                                ? '• Ready'
                                : activeTimer.isRunning
                                ? '• Active'
                                : '• Paused'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {activeTimer.isFinished ? (
                            <>
                              <button
                                id={`btn-step-timer-complete-${step.stepNumber}`}
                                onClick={() => {
                                  if (!isDone) toggleStepCompleted(selectedRecipe.id, step.stepNumber);
                                  showToast(`Step ${step.stepNumber} complete! 🎉`);
                                }}
                                className="px-2.5 py-1 rounded-xl bg-emerald-500 text-white text-[10px] font-bold flex items-center gap-1 shadow-sm hover:bg-emerald-400 transition-colors"
                              >
                                <CheckCircle2 className="w-3 h-3" /> Done
                              </button>
                              <button
                                onClick={resetTimer}
                                className="p-1.5 rounded-lg bg-white/10 text-zinc-300 hover:text-white transition-colors"
                                title="Repeat Timer"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => addTimeToTimer(60)}
                                className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-[10px] font-bold text-orange-400 transition-colors"
                                title="Add 1 minute"
                              >
                                +1m
                              </button>
                              {activeTimer.isRunning ? (
                                <button
                                  id={`btn-step-pause-${step.stepNumber}`}
                                  onClick={pauseTimer}
                                  className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30 transition-colors"
                                  title="Pause"
                                >
                                  <Pause className="w-3.5 h-3.5 fill-amber-400" />
                                </button>
                              ) : (
                                <button
                                  id={`btn-step-resume-${step.stepNumber}`}
                                  onClick={resumeTimer}
                                  className="p-1.5 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                                  title="Resume"
                                >
                                  <Play className="w-3.5 h-3.5 fill-white" />
                                </button>
                              )}
                              <button
                                onClick={resetTimer}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                                title="Reset"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setIsTimerModalOpen(true)}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                                title="Expand Full Timer"
                              >
                                <Maximize2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={stopTimer}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-colors"
                                title="Dismiss Timer"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-white/5">
                      <button
                        id={`btn-start-timer-step-${step.stepNumber}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          const duration = step.durationMinutes || 5;
                          startStepTimer(selectedRecipe.id, step.stepNumber, step.instruction, duration);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/25 hover:border-orange-500/40 text-orange-400 text-xs font-semibold transition-all active:scale-95"
                        title={`Start ${step.durationMinutes || 5} min timer for this step`}
                      >
                        <Timer className="w-3.5 h-3.5 text-orange-400" />
                        <span>Start {step.durationMinutes ? `${step.durationMinutes}m` : '5m'} Timer</span>
                      </button>

                      <span className="text-[10px] text-zinc-500">
                        {isDone ? 'Step Completed ✓' : 'Tap card to mark done'}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Persistent Floating Timer Bar when a timer is active */}
      <FloatingTimerBar onOpenModal={() => setIsTimerModalOpen(true)} />

      {/* Full Screen / Sheet Cooking Timer Modal */}
      <CookingTimerModal
        isOpen={isTimerModalOpen}
        onClose={() => setIsTimerModalOpen(false)}
      />

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] bg-[#1A1D21]/95 backdrop-blur-md border-t border-white/10 z-30">
        <div className="w-full max-w-3xl mx-auto flex items-center gap-3">
          <button
            id="btn-save-to-favorites-bottom"
            onClick={() => toggleFavorite(selectedRecipe.id)}
            className={`flex-1 py-3.5 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg active:scale-98 ${
              isFav
                ? 'bg-orange-600 text-white shadow-orange-600/30'
                : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-orange-500/30 hover:opacity-95'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
            {isFav ? 'Favorited in FlavorVault' : 'Save to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
};
