"use client";

import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  Utensils,
  Dumbbell,
  Flame,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "AI-Adapted Plans",
    desc: "Workouts that auto-adjust based on performance, fatigue, and streaks—so you keep progressing without burning out.",
    icon: Brain,
  },
  {
    title: "Progress Analytics",
    desc: "See what’s working with clean charts for volume, PRs, body stats, and consistency—updated every session.",
    icon: BarChart3,
  },
  {
    title: "Nutrition Tracking",
    desc: "Log meals fast, plan ahead, and stay on target with macro insights that pair with your training load.",
    icon: Utensils,
  },
  {
    title: "Workout Library",
    desc: "Strength, cardio, mobility, and functional training—built to fit beginners through advanced athletes.",
    icon: Dumbbell,
  },
  {
    title: "Streaks & Motivation",
    desc: "Simple gamification that keeps you showing up: streaks, milestones, and weekly goals you can actually hit.",
    icon: Flame,
  },
  {
    title: "Mobile-First",
    desc: "Track anywhere with an interface that’s built for speed on the go—no clutter, no friction.",
    icon: Smartphone,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.08 0.01 20)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[var(--orange)]/3 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--orange)] text-sm font-bold tracking-widest uppercase mb-4"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-black uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Built To <span className="text-[var(--orange)]">Win</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="text-white/50 mt-4 max-w-2xl mx-auto"
          >
            Everything you need to train smarter, stay consistent, and track
            real results—without juggling five different apps.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              className="rounded-2xl border border-white/8 bg-[oklch(0.11_0.01_20)] p-7 hover:border-[var(--orange)]/25 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.65 0.22 35 / 0.25), oklch(0.65 0.22 35 / 0.08))",
                  boxShadow: "0 0 40px oklch(0.65 0.22 35 / 0.12)",
                }}
              >
                <f.icon className="w-6 h-6 text-[var(--orange)]" />
              </div>
              <h3
                className="text-2xl font-black uppercase text-white mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
