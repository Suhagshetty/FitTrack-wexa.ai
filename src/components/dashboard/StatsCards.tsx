"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Flame, Dumbbell, Zap, Target } from "lucide-react";
import { mockStats } from "@/lib/mockData";

function CountUp({
  target,
  duration = 1500,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const cards = [
  {
    title: "Calories Burned",
    value: mockStats.caloriesBurned,
    unit: "kcal",
    icon: Flame,
    gradient: "from-orange-500 to-red-600",
    change: "+12%",
    changePos: true,
    bg: "oklch(0.20 0.08 35 / 0.2)",
    border: "oklch(0.65 0.22 35 / 0.3)",
    isPercent: false,
  },
  {
    title: "Workouts This Week",
    value: mockStats.workoutsThisWeek,
    unit: "/ 5 goal",
    icon: Dumbbell,
    gradient: "from-blue-500 to-indigo-600",
    change: "+1 vs last",
    changePos: true,
    bg: "oklch(0.18 0.10 260 / 0.2)",
    border: "oklch(0.60 0.20 260 / 0.3)",
    isPercent: false,
  },
  {
    title: "Streak Days",
    value: mockStats.streakDays,
    unit: "days 🔥",
    icon: Zap,
    gradient: "from-amber-400 to-yellow-600",
    change: "Personal best!",
    changePos: true,
    bg: "oklch(0.20 0.10 85 / 0.2)",
    border: "oklch(0.75 0.18 85 / 0.3)",
    isPercent: false,
  },
  {
    title: "Goal Progress",
    value: mockStats.goalProgress,
    unit: "%",
    icon: Target,
    gradient: "from-emerald-500 to-teal-600",
    change: "+8% this week",
    changePos: true,
    bg: "oklch(0.18 0.10 160 / 0.2)",
    border: "oklch(0.65 0.18 160 / 0.3)",
    isPercent: true,
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
          className="relative rounded-2xl p-5 border overflow-hidden"
          style={{ background: card.bg, borderColor: card.border }}
        >
          <div
            className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-30 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, var(--orange), transparent)`,
            }}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <div
                className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center`}
              >
                <card.icon className="w-4 h-4 text-white" />
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${card.changePos ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"}`}
              >
                {card.change}
              </span>
            </div>

            <div
              className="text-3xl font-black text-white mb-0.5 tabular-nums"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <CountUp target={card.value} />
            </div>
            <p className="text-white/40 text-xs font-medium">{card.unit}</p>
            <p className="text-white/50 text-[11px] mt-1">{card.title}</p>

            {card.isPercent && (
              <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${card.value}%` }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
