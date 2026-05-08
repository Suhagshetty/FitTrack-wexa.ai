"use client";

import { motion } from "framer-motion";
import { mockWeeklyActivity } from "@/lib/mockData";
import { TrendingUp } from "lucide-react";

export function WeeklyChart() {
  const maxCalories = Math.max(...mockWeeklyActivity.map((d) => d.calories));
  const totalCalories = mockWeeklyActivity.reduce((s, d) => s + d.calories, 0);
  const totalMinutes = mockWeeklyActivity.reduce((s, d) => s + d.duration, 0);
  const activeDays = mockWeeklyActivity.filter((d) => d.active).length;
  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="rounded-2xl border border-white/8 p-6"
      style={{ background: "oklch(0.11 0.01 20)" }}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base font-black uppercase text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Weekly Activity
          </h3>
          <p className="text-white/40 text-xs mt-0.5">Calories burned per day</p>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2.5 py-1 rounded-full">
          <TrendingUp className="w-3 h-3" />
          {activeDays}/7 active days
        </div>
      </div>

      {/* Bars */}
      <div className="flex items-end gap-2 h-32 mb-3">
        {mockWeeklyActivity.map((day, i) => {
          const heightPct = maxCalories > 0 ? (day.calories / maxCalories) * 100 : 0;
          const isToday = i === dayIndex;

          return (
            <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
              <div className="relative w-full flex-1 flex items-end group">
                {day.calories > 0 && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[oklch(0.18_0.01_20)] border border-white/15 rounded-lg px-2 py-1 text-white text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    {day.calories} kcal · {day.duration}m
                  </div>
                )}
                <motion.div
                  className="w-full rounded-t-lg"
                  style={{
                    minHeight: "4px",
                    background: day.active
                      ? isToday
                        ? "linear-gradient(to top, oklch(0.65 0.22 35), oklch(0.75 0.24 38))"
                        : "linear-gradient(to top, oklch(0.50 0.18 35 / 0.7), oklch(0.60 0.20 35 / 0.5))"
                      : "oklch(0.20 0.01 20)",
                    boxShadow: isToday && day.active ? "0 0 16px oklch(0.65 0.22 35 / 0.5)" : "none",
                  }}
                  initial={{ height: "4px" }}
                  animate={{ height: `${Math.max(heightPct, day.active ? 8 : 4)}%` }}
                  transition={{ delay: i * 0.07 + 0.3, duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Day labels */}
      <div className="flex gap-2">
        {mockWeeklyActivity.map((day, i) => {
          const isToday = i === dayIndex;
          return (
            <div key={day.day} className="flex-1 text-center">
              <span className={`text-[10px] font-bold ${isToday ? "text-[var(--orange)]" : "text-white/25"}`}>
                {day.day}
              </span>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/8">
        <div className="text-center">
          <p className="text-lg font-black text-white tabular-nums" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {totalCalories.toLocaleString()}
          </p>
          <p className="text-white/30 text-[10px]">Total kcal</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-black text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
          </p>
          <p className="text-white/30 text-[10px]">Total time</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-black text-[var(--orange)]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {activeDays}/7
          </p>
          <p className="text-white/30 text-[10px]">Active days</p>
        </div>
      </div>
    </motion.div>
  );
}