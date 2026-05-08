"use client";

import { motion } from "framer-motion";
import { Play, UtensilsCrossed, TrendingUp, Plus } from "lucide-react";
import { mockRecentWorkouts } from "@/lib/mockData";

const actions = [
  {
    label: "Start Workout",
    icon: Play,
    gradient: "from-orange-500 to-orange-700",
    glow: "oklch(0.65 0.22 35 / 0.4)",
    primary: true,
  },
  {
    label: "Log Meal",
    icon: UtensilsCrossed,
    gradient: "from-emerald-500 to-teal-600",
    glow: "oklch(0.65 0.18 160 / 0.3)",
    primary: false,
  },
  {
    label: "View Progress",
    icon: TrendingUp,
    gradient: "from-blue-500 to-indigo-600",
    glow: "oklch(0.60 0.20 260 / 0.3)",
    primary: false,
  },
  {
    label: "Log Activity",
    icon: Plus,
    gradient: "from-violet-500 to-purple-600",
    glow: "oklch(0.60 0.18 290 / 0.3)",
    primary: false,
  },
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="rounded-2xl border border-white/8 p-5"
      style={{ background: "oklch(0.11 0.01 20)" }}
    >
      <h3
        className="text-base font-black uppercase text-white mb-4"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-2.5">
        {actions.map((action, i) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.07 }}
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -2 }}
            className={`flex items-center gap-2.5 p-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 ${action.primary ? "col-span-2" : ""}`}
            style={{
              background: `linear-gradient(135deg, ${action.gradient.replace("from-", "").split(" ")[0]}, ${action.gradient.split("to-")[1]})`,
              boxShadow: `0 0 20px ${action.glow}`,
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <action.icon
                className={`w-4 h-4 text-white ${action.primary ? "fill-current" : ""}`}
              />
            </div>
            {action.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export function RecentWorkouts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.5 }}
      className="rounded-2xl border border-white/8 p-5"
      style={{ background: "oklch(0.11 0.01 20)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3
          className="text-base font-black uppercase text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Recent Workouts
        </h3>
        <button className="text-[var(--orange)] text-xs font-bold hover:underline">
          View All
        </button>
      </div>
      <div className="space-y-2">
        {mockRecentWorkouts.map((workout, i) => (
          <motion.div
            key={workout.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/4 border border-white/6 hover:border-white/15 transition-all duration-200 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-xl flex-shrink-0">
              {workout.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">
                {workout.name}
              </p>
              <p className="text-white/30 text-xs">
                {workout.date} · {workout.duration}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-bold text-[var(--orange)]">
                {workout.calories}
              </p>
              <p className="text-white/25 text-[10px]">kcal</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
