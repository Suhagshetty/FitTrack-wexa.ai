"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Play } from "lucide-react";
import { mockExercises } from "@/lib/mockData";
import type { WorkoutExercise } from "@/types";

export function TodayWorkout() {
  const [exercises, setExercises] = useState<WorkoutExercise[]>(mockExercises);

  const toggle = (id: string) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, done: !ex.done } : ex)),
    );
  };

  const doneCount = exercises.filter((e) => e.done).length;
  const progress = (doneCount / exercises.length) * 100;
  const allDone = doneCount === exercises.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.5 }}
      className="rounded-2xl border border-white/8 overflow-hidden"
      style={{ background: "oklch(0.11 0.01 20)" }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-white/6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🦵</span>
              <h3
                className="text-base font-black uppercase text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Leg Day
              </h3>
              <span className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded-full border border-white/8">
                Today
              </span>
            </div>
            <p className="text-white/40 text-xs">
              {exercises.length} exercises · Est. 55 min
            </p>
          </div>
          <div className="text-right">
            <div
              className={`text-2xl font-black tabular-nums ${allDone ? "text-emerald-400" : "text-white"}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {doneCount}/{exercises.length}
            </div>
            <p className="text-white/30 text-[10px]">completed</p>
          </div>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              background: allDone
                ? "linear-gradient(90deg, #10b981, #34d399)"
                : "linear-gradient(90deg, var(--orange), var(--orange-bright))",
            }}
          />
        </div>
      </div>

      {/* Exercise list */}
      <div className="px-4 py-2">
        {exercises.map((ex, i) => (
          <motion.div
            key={ex.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            onClick={() => toggle(ex.id)}
            className={`flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all duration-200 group ${
              ex.done
                ? "bg-emerald-500/8 hover:bg-emerald-500/12"
                : "hover:bg-white/5"
            }`}
          >
            <motion.div
              animate={{ scale: ex.done ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {ex.done ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-white/25 group-hover:text-white/50 flex-shrink-0 transition-colors" />
              )}
            </motion.div>
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-semibold transition-all duration-200 ${ex.done ? "text-white/40 line-through" : "text-white"}`}
              >
                {ex.name}
              </p>
              <p className="text-white/30 text-xs">
                {ex.sets} sets × {ex.reps} reps
              </p>
            </div>
            {ex.done && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-emerald-400 text-[10px] font-bold bg-emerald-400/10 px-2 py-0.5 rounded-full"
              >
                Done ✓
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 pt-2">
        <AnimatePresence mode="wait">
          {allDone ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full py-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-sm text-center"
            >
              🎉 Workout Complete! Amazing work!
            </motion.div>
          ) : (
            <motion.button
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, var(--orange), var(--orange-bright))",
                boxShadow: "0 0 20px oklch(0.65 0.22 35 / 0.3)",
              }}
            >
              <Play className="w-4 h-4 fill-current" />
              {doneCount > 0 ? "Continue Workout" : "Start Workout"}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
