"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featured = {
  title: "The Science of Progressive Overload: Why Most People Do It Wrong",
  category: "Training",
  readTime: "8 min read",
  desc: "Progressive overload is the cornerstone of every successful training program. But misunderstanding how to apply it is the #1 reason athletes plateau. We break down the exact method elite coaches use.",
  emoji: "🏆",
};

const posts = [
  {
    title: "How Elite Athletes Stay Consistent Year-Round",
    category: "Training",
    readTime: "6 min",
    emoji: "🎯",
    desc: "Consistency beats intensity every time. Here's the mental and physical framework top athletes use to never miss.",
  },
  {
    title: "Recovery Techniques That Actually Work in 2025",
    category: "Recovery",
    readTime: "5 min",
    emoji: "💤",
    desc: "Ice baths, red light therapy, sleep optimization — we separate the science from the hype.",
  },
  {
    title: "Nutrition Habits For Peak Athletic Performance",
    category: "Nutrition",
    readTime: "7 min",
    emoji: "🥗",
    desc: "What you eat before, during, and after training can make or break your results. Here's the complete framework.",
  },
  {
    title: "Zone 2 Cardio: The Most Underrated Training Tool",
    category: "Cardio",
    readTime: "5 min",
    emoji: "❤️",
    desc: "Why every serious strength athlete should be doing more slow cardio — and exactly how to program it.",
  },
  {
    title: "How to Build a Home Gym for Under $500",
    category: "Equipment",
    readTime: "4 min",
    emoji: "🏠",
    desc: "You don't need a fancy gym. Here's the minimal setup that lets you train seriously from home.",
  },
  {
    title: "Sleep: The Most Powerful Performance Drug",
    category: "Recovery",
    readTime: "6 min",
    emoji: "🌙",
    desc: "No supplement stack comes close to what optimized sleep does for strength, muscle, and mental performance.",
  },
];

const categories = [
  "All",
  "Training",
  "Nutrition",
  "Recovery",
  "Cardio",
  "Equipment",
  "Mindset",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.08_0.01_20)] text-white">
      {/* Header */}
      <section className="relative px-6 py-32 overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.22 35) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--orange)] uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            FitTrack Journal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-black uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Train Smarter.
            <br />
            <span className="text-[var(--orange)]">Read Better.</span>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-14">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  i === 0
                    ? "bg-[var(--orange)] border-[var(--orange)] text-white"
                    : "border-white/15 text-white/60 hover:border-[var(--orange)]/50 hover:text-[var(--orange)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/[0.03] rounded-3xl p-10 mb-10 hover:border-[var(--orange)]/40 transition-all group cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="text-8xl">{featured.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[var(--orange)] text-xs uppercase tracking-widest font-bold">
                    {featured.category}
                  </span>
                  <span className="text-white/30 text-xs">·</span>
                  <span className="text-white/40 text-xs">
                    {featured.readTime}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[var(--orange)]/15 text-[var(--orange)] text-xs font-bold">
                    Featured
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-black leading-tight mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {featured.title}
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  {featured.desc}
                </p>
                <button className="flex items-center gap-2 text-[var(--orange)] font-bold group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 hover:border-[var(--orange)]/50 transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-5">{post.emoji}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--orange)] text-xs uppercase tracking-wider font-bold">
                    {post.category}
                  </span>
                  <span className="text-white/30 text-xs">
                    · {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold leading-snug mb-3 group-hover:text-[var(--orange)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  {post.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
