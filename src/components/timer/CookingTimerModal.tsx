import React from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Plus,
  Minus,
  Volume2,
  VolumeX,
  CheckCircle2,
  Bell,
  Sparkles,
  Flame
} from 'lucide-react';
import { useRecipe } from '../../context/RecipeContext';
import { playTimerCompletionChime } from '../../utils/sound';

interface CookingTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookingTimerModal: React.FC<CookingTimerModalProps> = ({ isOpen, onClose }) => {
  const {
    activeTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    addTimeToTimer,
    stopTimer,
    toggleTimerSound,
    selectedRecipe,
    isStepCompleted,
    toggleStepCompleted,
    showToast
  } = useRecipe();

  if (!isOpen || !activeTimer) return null;

  const minutes = Math.floor(activeTimer.remainingSeconds / 60);
  const seconds = activeTimer.remainingSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const progressPercent = activeTimer.totalSeconds > 0
    ? Math.max(0, Math.min(100, Math.round(((activeTimer.totalSeconds - activeTimer.remainingSeconds) / activeTimer.totalSeconds) * 100)))
    : 100;

  // SVG circular ring geometry
  const radius = 96;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  const isStepDone = selectedRecipe
    ? isStepCompleted(selectedRecipe.id, activeTimer.stepNumber)
    : false;

  const handleMarkComplete = () => {
    if (selectedRecipe && !isStepDone) {
      toggleStepCompleted(selectedRecipe.id, activeTimer.stepNumber);
      showToast(`Step ${activeTimer.stepNumber} marked complete! 🎉`);
    }
  };

  return (
    <div
      id="cooking-timer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="cooking-timer-modal-container"
        className="w-full max-w-md bg-[#16191E] border-t sm:border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with dismiss & sound toggle */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Flame className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Cooking Timer
                <span className="text-[11px] font-semibold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                  Step {activeTimer.stepNumber}
                </span>
              </h3>
              <p className="text-[11px] text-zinc-400 truncate max-w-[200px]">
                {selectedRecipe?.title || 'Recipe'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTimerSound}
              className={`p-2 rounded-xl border transition-colors ${
                activeTimer.soundEnabled
                  ? 'bg-white/5 border-white/10 text-orange-400 hover:bg-white/10'
                  : 'bg-white/5 border-white/10 text-zinc-500 hover:bg-white/10'
              }`}
              title={activeTimer.soundEnabled ? 'Mute Chime' : 'Unmute Chime'}
            >
              {activeTimer.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step instruction snippet */}
        <div className="mt-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
          <p className="text-xs text-zinc-300 leading-relaxed italic">
            "{activeTimer.stepInstruction}"
          </p>
        </div>

        {/* Main Circular Countdown Display */}
        <div className="my-6 flex flex-col items-center justify-center">
          <div className="relative w-60 h-60 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 220 220">
              {/* Background circle */}
              <circle
                cx="110"
                cy="110"
                r={radius}
                className="text-zinc-800"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
              />
              {/* Animated Progress ring */}
              <circle
                cx="110"
                cy="110"
                r={radius}
                className={`transition-all duration-300 ${
                  activeTimer.isFinished
                    ? 'text-emerald-500'
                    : activeTimer.isRunning
                    ? 'text-orange-500'
                    : 'text-amber-500'
                }`}
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>

            {/* Inner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              {activeTimer.isFinished ? (
                <div className="animate-bounce flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-1">
                    <Bell className="w-6 h-6 animate-pulse" />
                  </div>
                  <span className="text-lg font-black text-emerald-400">TIME'S UP!</span>
                  <span className="text-[11px] text-zinc-400 mt-0.5">Ready for next step</span>
                </div>
              ) : (
                <>
                  <span className="font-mono text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
                    {timeFormatted}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-400 mt-1 uppercase tracking-wider flex items-center gap-1.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        activeTimer.isRunning
                          ? 'bg-orange-500 animate-pulse'
                          : 'bg-amber-400'
                      }`}
                    />
                    {activeTimer.isRunning ? 'Counting Down' : 'Timer Paused'}
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-1">
                    {progressPercent}% completed
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Quick Time Adjustment Buttons (+30s, +1m, +5m, -1m) */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => addTimeToTimer(-60)}
              disabled={activeTimer.remainingSeconds <= 60}
              className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              -1 min
            </button>
            <button
              onClick={() => addTimeToTimer(30)}
              className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-zinc-300 transition-colors"
            >
              +30s
            </button>
            <button
              onClick={() => addTimeToTimer(60)}
              className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-orange-400 transition-colors"
            >
              +1 min
            </button>
            <button
              onClick={() => addTimeToTimer(300)}
              className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-orange-400 transition-colors"
            >
              +5 min
            </button>
          </div>
        </div>

        {/* Primary Controls: Play/Pause, Reset, Stop */}
        <div className="flex items-center justify-center gap-4 pt-2 pb-4">
          <button
            onClick={resetTimer}
            className="p-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center"
            title="Reset to initial duration"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          {activeTimer.isFinished ? (
            <button
              onClick={() => {
                resetTimer();
                resumeTimer();
              }}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-500/30 hover:opacity-95 transition-all active:scale-95 flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Restart Timer
            </button>
          ) : activeTimer.isRunning ? (
            <button
              id="btn-modal-pause-timer"
              onClick={pauseTimer}
              className="px-8 py-3.5 rounded-2xl bg-amber-500 text-black font-bold text-sm shadow-lg shadow-amber-500/30 hover:bg-amber-400 transition-all active:scale-95 flex items-center gap-2"
            >
              <Pause className="w-5 h-5 fill-black" />
              Pause
            </button>
          ) : (
            <button
              id="btn-modal-resume-timer"
              onClick={resumeTimer}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-500/30 hover:opacity-95 transition-all active:scale-95 flex items-center gap-2"
            >
              <Play className="w-5 h-5 fill-white" />
              Resume
            </button>
          )}

          <button
            onClick={() => {
              stopTimer();
              onClose();
            }}
            className="p-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-400 hover:text-red-400 hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center"
            title="Cancel & Dismiss Timer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Completion Action Button */}
        {selectedRecipe && (
          <div className="mt-2 pt-3 border-t border-white/10">
            <button
              onClick={handleMarkComplete}
              className={`w-full py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                isStepDone
                  ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-400'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 active:scale-98'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isStepDone ? `Step ${activeTimer.stepNumber} Completed ✓` : `Mark Step ${activeTimer.stepNumber} as Complete`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
