"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus J.",
    role: "Lost 28 lbs in 4 months",
    avatar: "MJ",
    rating: 5,
    text: "FitTrack completely changed my relationship with exercise. The AI-adapted plans kept me challenged without burning out. First time I've ever stuck to a routine past 3 weeks.",
    color: "from-orange-600 to-red-700",
  },
  {
    name: "Priya S.",
    role: "Marathon runner",
    avatar: "PS",
    rating: 5,
    text: "The nutrition tracking paired with workout logs is unmatched. I qualified for my first marathon 6 months after signing up. The community kept me accountable every single day.",
    color: "from-violet-600 to-purple-700",
  },
  {
    name: "Derek W.",
    role: "Gained 18 lbs muscle",
    avatar: "DW",
    rating: 5,
    text: "Been lifting for 5 years and felt plateaued. FitTrack's progress analytics showed me what I was missing. Hit 3 personal records in the first month using their plan.",
    color: "from-teal-600 to-emerald-700",
  },
  {
    name: "Sofia R.",
    role: "Yoga & strength blend",
    avatar: "SR",
    rating: 5,
    text: "I love how it handles both yoga AND weightlifting in one place. The flexibility tracking is something no other app does. Honestly feels like having a personal trainer 24/7.",
    color: "from-amber-600 to-yellow-700",
  },
  {
    name: "James T.",
    role: "Certified PT",
    avatar: "JT",
    rating: 5,
    text: "I recommend FitTrack to all my clients now. The data visibility is incredible — I can actually see what's working and adjust in real time. Game changer for coaching.",
    color: "from-blue-600 to-cyan-700",
  },
  {
    name: "Aisha M.",
    role: "HIIT specialist",
    avatar: "AM",
    rating: 5,
    text: "Signed up on a whim and haven't looked back. My streak is at 147 days and I've never felt stronger. The gamification elements actually make me want to show up.",
    color: "from-rose-600 to-pink-700",
  },
];

export function Testimonials() {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{ background: "oklch(0.08 0.01 20)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--orange)] text-sm font-bold tracking-widest uppercase mb-4"
          >
            Real People, Real Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-black uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            What Members <span className="text-[var(--orange)]">Say</span>
          </motion.h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              className="break-inside-avoid rounded-2xl border border-white/8 bg-[oklch(0.11_0.01_20)] p-6 hover:border-[var(--orange)]/25 transition-all duration-300"
            >
              <Quote className="w-6 h-6 text-[var(--orange)]/30 mb-4" />
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-bold">{t.name}</p>
                  <p className="text-[var(--orange)] text-xs font-medium">
                    {t.role}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3 h-3 fill-[var(--orange)] text-[var(--orange)]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, ease: "easeOut" }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10"
        >
          {[
            { val: "4.9/5", label: "App Store Rating" },
            { val: "27K+", label: "Active Members" },
            { val: "98%", label: "Goal Achievement Rate" },
            { val: "#1", label: "Fitness App 2024" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="text-2xl font-black text-[var(--orange)]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item.val}
              </div>
              <div className="text-white/40 text-xs">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
