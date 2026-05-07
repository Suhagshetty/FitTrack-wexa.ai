"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useAuthStore } from "@/store";
import type { FitnessGoal } from "@/types";

const goals: {
  value: FitnessGoal;
  emoji: string;
  title: string;
  desc: string;
  color: string;
}[] = [
  {
    value: "lose_weight",
    emoji: "🔥",
    title: "Lose Weight",
    desc: "Burn fat, boost metabolism",
    color: "from-orange-500 to-red-600",
  },
  {
    value: "build_muscle",
    emoji: "💪",
    title: "Build Muscle",
    desc: "Gain strength & mass",
    color: "from-blue-500 to-indigo-600",
  },
  {
    value: "stay_active",
    emoji: "🏃",
    title: "Stay Active",
    desc: "Maintain fitness & energy",
    color: "from-emerald-500 to-teal-600",
  },
  {
    value: "improve_flexibility",
    emoji: "🧘",
    title: "Improve Flexibility",
    desc: "Stretch, recover, move better",
    color: "from-violet-500 to-purple-600",
  },
  {
    value: "eat_healthier",
    emoji: "🥗",
    title: "Eat Healthier",
    desc: "Nutrition & mindful eating",
    color: "from-lime-500 to-green-600",
  },
  {
    value: "reduce_stress",
    emoji: "🧠",
    title: "Reduce Stress",
    desc: "Mindfulness & recovery",
    color: "from-pink-500 to-rose-600",
  },
];

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
}

export function Step3FitnessGoals({ onNext, onBack }: Step3Props) {
  const { updateOnboarding } = useAuthStore();
  const [selected, setSelected] = useState<FitnessGoal[]>([]);

  const toggle = (goal: FitnessGoal) => {
    setSelected((prev) =>
      prev.includes(goal)
        ? prev.filter((g) => g !== goal)
        : prev.length < 3
          ? [...prev, goal]
          : prev,
    );
  };

  const handleContinue = () => {
    updateOnboarding({ goals: selected });
    onNext();
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2
          className="text-3xl lg:text-4xl font-black uppercase text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Your Fitness <span className="text-[var(--orange)]">Goals</span>
        </h2>
        <p className="text-white/50 text-sm">
          Pick up to{" "}
          <span className="text-[var(--orange)] font-bold">3 goals</span> that
          matter most
        </p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{
              backgroundColor:
                selected.length >= i
                  ? "oklch(0.65 0.22 35)"
                  : "oklch(0.20 0.01 20)",
              borderColor:
                selected.length >= i
                  ? "oklch(0.65 0.22 35)"
                  : "oklch(0.30 0.01 20)",
            }}
            className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-black text-white"
          >
            {selected.length >= i ? "✓" : i}
          </motion.div>
        ))}
        <span className="text-white/40 text-xs ml-1">
          {selected.length}/3 selected
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {goals.map((goal, i) => {
          const isSelected = selected.includes(goal.value);
          const isDisabled = !isSelected && selected.length >= 3;
          return (
            <motion.button
              key={goal.value}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => !isDisabled && toggle(goal.value)}
              disabled={isDisabled}
              className={`relative p-4 rounded-2xl border-2 text-left transition-all duration-200 overflow-hidden ${
                isSelected
                  ? "border-[var(--orange)] bg-[var(--orange)]/15"
                  : isDisabled
                    ? "border-white/5 bg-white/2 opacity-40 cursor-not-allowed"
                    : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/8"
              }`}
            >
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${goal.color}`}
                />
              )}
              <div className="text-3xl mb-2">{goal.emoji}</div>
              <h3 className="text-sm font-bold text-white mb-0.5">
                {goal.title}
              </h3>
              <p className="text-[11px] text-white/40 leading-tight">
                {goal.desc}
              </p>
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[var(--orange)] flex items-center justify-center"
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <div className="flex gap-3 mt-6">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3.5 rounded-xl border border-white/15 text-white/60 font-bold text-sm hover:border-white/30 hover:text-white transition-all duration-200"
        >
          ← Back
        </button>
        <motion.button
          type="button"
          onClick={handleContinue}
          disabled={selected.length === 0}
          whileTap={{ scale: 0.98 }}
          className="flex-[2] py-3.5 rounded-xl font-bold text-base text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background:
              selected.length > 0
                ? "linear-gradient(135deg, var(--orange), var(--orange-bright))"
                : "oklch(0.25 0.01 20)",
            boxShadow:
              selected.length > 0
                ? "0 0 30px oklch(0.65 0.22 35 / 0.3)"
                : "none",
          }}
        >
          Continue →
        </motion.button>
      </div>
    </div>
  );
}
