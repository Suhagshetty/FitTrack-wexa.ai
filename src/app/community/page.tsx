"use client";
import { motion } from "framer-motion";
import { Users, Flame, Trophy, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Daily Challenges",
    desc: "Compete in 24-hour fitness challenges with thousands of athletes worldwide.",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    desc: "See where you rank globally, by city, or among your friends.",
  },
  {
    icon: MessageCircle,
    title: "Athlete Forums",
    desc: "Get real advice from real athletes — training, nutrition, recovery, and mindset.",
  },
  {
    icon: Users,
    title: "Training Groups",
    desc: "Find your tribe. Join groups by sport, goal, experience level, or location.",
  },
];

const challenges = [
  {
    name: "30-Day Strength Build",
    participants: "12,400",
    emoji: "🏋️",
    status: "Active",
  },
  {
    name: "5K Every Day Challenge",
    participants: "8,200",
    emoji: "🏃",
    status: "Active",
  },
  {
    name: "Zero Sugar November",
    participants: "21,000",
    emoji: "🥗",
    status: "Upcoming",
  },
  {
    name: "100 Pull-ups in 30 Days",
    participants: "5,600",
    emoji: "💪",
    status: "Active",
  },
];

const testimonials = [
  {
    name: "Alex R.",
    quote:
      "The community kept me accountable when I wanted to quit. I lost 18kg in 6 months.",
    emoji: "🧑🏽",
  },
  {
    name: "Sarah K.",
    quote:
      "Found my training partner here. We've been running together for 8 months now.",
    emoji: "👩🏻",
  },
  {
    name: "James O.",
    quote:
      "The leaderboards are addictive. I've never trained this consistently in my life.",
    emoji: "👨🏿",
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.08_0.01_20)] text-white">
      {/* Hero */}
      <section className="relative px-6 py-32 overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.22 35) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--orange)] uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            Community
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-black uppercase leading-[0.9] mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Train together.
            <br />
            <span className="text-[var(--orange)]">Win together.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-xl leading-relaxed max-w-2xl mb-10"
          >
            Join 50,000+ athletes sharing workouts, competing in challenges, and
            pushing each other to new limits every single day.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="px-8 py-4 bg-[var(--orange)] hover:bg-[var(--orange-bright)] text-white font-bold rounded-full transition-all hover:scale-105"
          >
            Join the Community
          </motion.button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 hover:border-[var(--orange)]/40 transition-colors"
            >
              <f.icon className="w-8 h-8 text-[var(--orange)] mb-4" />
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Active Challenges */}
      <section className="px-6 py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--orange)] uppercase tracking-widest text-sm font-bold mb-4">
            Live Now
          </p>
          <h2
            className="text-5xl font-black uppercase mb-14"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Active Challenges.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {challenges.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 flex items-center justify-between hover:border-[var(--orange)]/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{c.emoji}</span>
                  <div>
                    <h3 className="font-bold text-lg">{c.name}</h3>
                    <p className="text-white/50 text-sm">
                      {c.participants} participants
                    </p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${c.status === "Active" ? "bg-green-500/15 text-green-400" : "bg-[var(--orange)]/15 text-[var(--orange)]"}`}
                >
                  {c.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-5xl font-black uppercase mb-14"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Real athletes. Real results.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6"
              >
                <p className="text-white/70 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{t.emoji}</span>
                  <span className="font-bold">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
