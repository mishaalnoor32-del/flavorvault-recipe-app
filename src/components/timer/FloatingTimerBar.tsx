import React from 'react';
import {
  Play,
  Pause,
  Maximize2,
  X,
  Plus,
  Bell,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { useRecipe } from '../../context/RecipeContext';

interface FloatingTimerBarProps {
  onOpenModal: () => void;
}

export const FloatingTimerBar: React.FC<FloatingTimerBarProps> = ({ onOpenModal }) => {
  const {
    activeTimer,
    pauseTimer,
    resumeTimer,
    addTimeToTimer,
    stopTimer,
    selectedRecipe,
    isStepCompleted,
    toggleStepCompleted,
    showToast
  } = useRecipe();

  if (!activeTimer) return null;

  const minutes = Math.floor(activeTimer.remainingSeconds / 60);
  const seconds = activeTimer.remainingSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const progressPercent = activeTimer.totalSeconds > 0
    ? Math.max(0, Math.min(100, Math.round(((activeTimer.totalSeconds - activeTimer.remainingSeconds) / activeTimer.totalSeconds) * 100)))
    : 100;

  const isStepDone = selectedRecipe
    ? isStepCompleted(selectedRecipe.id, activeTimer.stepNumber)
    : false;

  const handleQuickMarkComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedRecipe && !isStepDone) {
      toggleStepCompleted(selectedRecipe.id, activeTimer.stepNumber);
      showToast(`Step ${activeTimer.stepNumber} marked complete! 🎉`);
    }
  };

  return (
    <div
      id="floating-timer-bar"
      className="fixed bottom-[76px] left-0 right-0 z-30 px-3 py-1 pointer-events-none"
    >
      <div className="max-w-md mx-auto pointer-events-auto">
        <div
          onClick={onOpenModal}
          className={`relative overflow-hidden rounded-2xl border shadow-xl backdrop-blur-xl transition-all cursor-pointer ${
            activeTimer.isFinished
              ? 'bg-emerald-950/90 border-emerald-500/50 shadow-emerald-900/30 animate-pulse'
              : activeTimer.isRunning
              ? 'bg-[#181B20]/95 border-orange-500/40 shadow-black/60'
              : 'bg-[#181B20]/95 border-amber-500/30 shadow-black/60'
          }`}
        >
          {/* Top Progress Line */}
          <div className="w-full bg-black/40 h-1">
            <div
              className={`h-full transition-all duration-300 ${
                activeTimer.isFinished
                  ? 'bg-emerald-400'
                  : activeTimer.isRunning
                  ? 'bg-gradient-to-r from-orange-500 to-amber-400'
                  : 'bg-amber-500'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="p-3 flex items-center justify-between gap-3">
            {/* Step info & Countdown */}
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  activeTimer.isFinished
                    ? 'bg-emerald-500 text-white animate-bounce'
                    : activeTimer.isRunning
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                }`}
              >
                {activeTimer.isFinished ? (
                  <Bell className="w-4 h-4 animate-pulse" />
                ) : (
                  <Clock className="w-4 h-4" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/15 px-1.5 py-0.5 rounded">
                    Step {activeTimer.stepNumber}
                  </span>
                  <span className="text-[11px] font-medium text-zinc-300 truncate">
                    {activeTimer.stepInstruction}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span
                    className={`font-mono text-xs font-black tracking-tight ${
                      activeTimer.isFinished
                        ? 'text-emerald-400'
                        : activeTimer.isRunning
                        ? 'text-white'
                        : 'text-amber-400'
                    }`}
                  >
                    {activeTimer.isFinished ? "TIME'S UP!" : timeFormatted}
                  </span>
                  <span className="text-[10px] text-zinc-400">
                    {activeTimer.isFinished
                      ? '• Tap to complete'
                      : activeTimer.isRunning
                      ? `(${progressPercent}%)`
                      : '• Paused'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div
              className="flex items-center gap-1.5 flex-shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              {activeTimer.isFinished ? (
                <button
                  onClick={handleQuickMarkComplete}
                  className="px-2.5 py-1.5 rounded-xl bg-emerald-500 text-white text-[11px] font-bold flex items-center gap-1 hover:bg-emerald-400 transition-colors shadow-sm"
                  title="Mark Step Complete"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Done
                </button>
              ) : (
                <>
                  <button
                    onClick={() => addTimeToTimer(60)}
                    className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-bold text-orange-400 transition-colors"
                    title="Add 1 minute"
                  >
                    +1m
                  </button>

                  {activeTimer.isRunning ? (
                    <button
                      onClick={pauseTimer}
                      className="p-2 rounded-xl bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30 transition-colors"
                      title="Pause Timer"
                    >
                      <Pause className="w-3.5 h-3.5 fill-amber-400" />
                    </button>
                  ) : (
                    <button
                      onClick={resumeTimer}
                      className="p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                      title="Resume Timer"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                    </button>
                  )}
                </>
              )}

              <button
                onClick={onOpenModal}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors border border-white/5"
                title="Expand Full Timer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={stopTimer}
                className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-colors border border-white/5"
                title="Dismiss Timer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
