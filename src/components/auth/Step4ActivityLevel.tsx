"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store";
import type { ActivityLevel } from "@/types";

const levels: {
  value: ActivityLevel;
  emoji: string;
  title: string;
  subtitle: string;
  desc: string;
  intensity: number;
}[] = [
  {
    value: "sedentary",
    emoji: "🪑",
    title: "Sedentary",
    subtitle: "Desk job / little exercise",
    desc: "Mostly sitting, occasional walking",
    intensity: 1,
  },
  {
    value: "lightly_active",
    emoji: "🚶",
    title: "Lightly Active",
    subtitle: "1–2x per week",
    desc: "Light exercise or sports a couple times",
    intensity: 2,
  },
  {
    value: "moderately_active",
    emoji: "🏃",
    title: "Moderately Active",
    subtitle: "3–4x per week",
    desc: "Moderate exercise most days",
    intensity: 3,
  },
  {
    value: "very_active",
    emoji: "💪",
    title: "Very Active",
    subtitle: "5+ times per week",
    desc: "Hard exercise or sports daily",
    intensity: 4,
  },
  {
    value: "athlete",
    emoji: "🏅",
    title: "Athlete",
    subtitle: "Twice daily / pro level",
    desc: "Very hard daily training or physical job",
    intensity: 5,
  },
];

interface Step4Props {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export function Step4ActivityLevel({ onNext, onBack, onSkip }: Step4Props) {
  const { updateOnboarding } = useAuthStore();
  const [selected, setSelected] = useState<ActivityLevel | null>(null);

  const handleContinue = () => {
    if (!selected) return;
    updateOnboarding({ activityLevel: selected });
    onNext();
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2
          className="text-3xl lg:text-4xl font-black uppercase text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Activity <span className="text-[var(--orange)]">Level</span>
        </h2>
        <p className="text-white/50 text-sm">
          How active are you on a typical week?
        </p>
      </div>

      <div className="space-y-2.5">
        {levels.map((level, i) => {
          const isSelected = selected === level.value;
          return (
            <motion.button
              key={level.value}
              type="button"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelected(level.value)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                isSelected
                  ? "border-[var(--orange)] bg-[var(--orange)]/12"
                  : "border-white/10 bg-white/4 hover:border-white/25 hover:bg-white/7"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-200 ${isSelected ? "bg-[var(--orange)]/25" : "bg-white/5"}`}
              >
                {level.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className={`text-sm font-bold ${isSelected ? "text-white" : "text-white/80"}`}
                  >
                    {level.title}
                  </span>
                  <span className="text-xs text-white/30">·</span>
                  <span className="text-xs text-white/40">
                    {level.subtitle}
                  </span>
                </div>
                <p className="text-xs text-white/40 truncate">{level.desc}</p>
              </div>
              <div className="flex gap-0.5 flex-shrink-0 items-end">
                {[1, 2, 3, 4, 5].map((bar) => (
                  <motion.div
                    key={bar}
                    animate={{
                      backgroundColor:
                        bar <= level.intensity
                          ? isSelected
                            ? "oklch(0.65 0.22 35)"
                            : "oklch(0.55 0.15 35)"
                          : "oklch(0.22 0.01 20)",
                    }}
                    className="w-1.5 rounded-full transition-colors duration-200"
                    style={{ height: `${8 + bar * 4}px` }}
                  />
                ))}
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${isSelected ? "border-[var(--orange)] bg-[var(--orange)]" : "border-white/20"}`}
              >
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-white"
                  />
                )}
              </div>
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
          disabled={!selected}
          whileTap={{ scale: 0.98 }}
          className="flex-[2] py-3.5 rounded-xl font-bold text-base text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: selected
              ? "linear-gradient(135deg, var(--orange), var(--orange-bright))"
              : "oklch(0.25 0.01 20)",
            boxShadow: selected ? "0 0 30px oklch(0.65 0.22 35 / 0.3)" : "none",
          }}
        >
          Continue →
        </motion.button>
      </div>
      <div className="text-center mt-4">
        <button
          type="button"
          onClick={onSkip}
          className="text-white/30 text-sm hover:text-white/60 transition-colors underline underline-offset-2"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
