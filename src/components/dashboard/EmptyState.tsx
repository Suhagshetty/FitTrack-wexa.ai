"use client";

import { motion } from "framer-motion";
import { Dumbbell, BarChart2, Utensils, Users, Plus } from "lucide-react";

interface EmptyStateProps {
  type: "workouts" | "nutrition" | "progress" | "community";
  onAction?: () => void;
}

const config = {
  workouts: {
    icon: Dumbbell,
    emoji: "💪",
    title: "No Workouts Yet",
    description:
      "You haven't logged any workouts. Start your first session and crush your goals!",
    action: "Start First Workout",
    color: "var(--orange)",
    glow: "oklch(0.65 0.22 35 / 0.2)",
  },
  nutrition: {
    icon: Utensils,
    emoji: "🥗",
    title: "No Meals Logged",
    description:
      "Track your nutrition to fuel your performance. Log your first meal to get started.",
    action: "Log a Meal",
    color: "oklch(0.65 0.18 160)",
    glow: "oklch(0.65 0.18 160 / 0.2)",
  },
  progress: {
    icon: BarChart2,
    emoji: "📈",
    title: "No Progress Data",
    description:
      "Complete workouts and log meals to see your progress charts and analytics here.",
    action: "Log First Workout",
    color: "oklch(0.60 0.20 260)",
    glow: "oklch(0.60 0.20 260 / 0.2)",
  },
  community: {
    icon: Users,
    emoji: "👥",
    title: "Join the Community",
    description:
      "Connect with 27K+ athletes, share your progress, and stay motivated together.",
    action: "Explore Community",
    color: "oklch(0.75 0.18 85)",
    glow: "oklch(0.75 0.18 85 / 0.2)",
  },
};

export function EmptyState({ type, onAction }: EmptyStateProps) {
  const c = config[type];
  const Icon = c.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-20 px-8 text-center"
    >
      {/* Illustration */}
      <div className="relative mb-8">
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full blur-2xl scale-150"
          style={{ background: c.glow }}
        />
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed"
          style={{ borderColor: `${c.color}40`, margin: "-16px" }}
        />
        {/* Icon circle */}
        <div
          className="relative w-24 h-24 rounded-3xl flex items-center justify-center border"
          style={{
            background: `${c.glow}`,
            borderColor: `${c.color}40`,
          }}
        >
          <span className="text-4xl">{c.emoji}</span>
        </div>

        {/* Floating dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: c.color,
              top: `${20 + i * 30}%`,
              right: i % 2 === 0 ? "-24px" : "auto",
              left: i % 2 === 1 ? "-24px" : "auto",
            }}
            animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-black uppercase text-white mb-3"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {c.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white/40 text-sm leading-relaxed max-w-xs mb-8"
      >
        {c.description}
      </motion.p>

      {onAction && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onAction}
          className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white"
          style={{
            background: `linear-gradient(135deg, ${c.color}, ${c.color})`,
            boxShadow: `0 0 24px ${c.glow}`,
          }}
        >
          <Plus className="w-4 h-4" />
          {c.action}
        </motion.button>
      )}
    </motion.div>
  );
}
