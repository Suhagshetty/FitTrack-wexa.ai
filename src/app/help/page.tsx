"use client";
import { motion } from "framer-motion";
import {
  Search,
  ChevronRight,
  BookOpen,
  CreditCard,
  Settings,
  Users,
  Zap,
  Shield,
} from "lucide-react";

const categories = [
  {
    icon: Zap,
    label: "Getting Started",
    count: 12,
    color: "text-[var(--orange)]",
  },
  {
    icon: Settings,
    label: "Account & Settings",
    count: 18,
    color: "text-blue-400",
  },
  {
    icon: CreditCard,
    label: "Billing & Plans",
    count: 9,
    color: "text-green-400",
  },
  {
    icon: BookOpen,
    label: "Workouts & Programs",
    count: 24,
    color: "text-purple-400",
  },
  { icon: Users, label: "Community", count: 8, color: "text-yellow-400" },
  {
    icon: Shield,
    label: "Privacy & Security",
    count: 11,
    color: "text-red-400",
  },
];

const popular = [
  { q: "How do I create an account?", cat: "Getting Started" },
  { q: "How do I reset my password?", cat: "Account & Settings" },
  { q: "How do I cancel my subscription?", cat: "Billing & Plans" },
  { q: "How do I track a custom workout?", cat: "Workouts & Programs" },
  { q: "How do I connect my Apple Watch or Garmin?", cat: "Integrations" },
  { q: "How do I export my workout data?", cat: "Account & Settings" },
  { q: "Why isn't my progress syncing?", cat: "Technical" },
  { q: "How do I join a challenge?", cat: "Community" },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.08_0.01_20)] text-white">
      {/* Hero */}
      <section className="relative px-6 py-32 text-center overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
            style={{
              background:
                "radial-gradient(circle, oklch(0.65 0.22 35) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--orange)] uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            Help Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-black uppercase mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            How can we <span className="text-[var(--orange)]">help?</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full bg-white/[0.06] border border-white/15 rounded-2xl pl-14 pr-6 py-5 text-white placeholder-white/30 focus:outline-none focus:border-[var(--orange)]/60 transition-colors text-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl font-black uppercase mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Browse by Category
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 text-left hover:border-[var(--orange)]/50 transition-all group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--orange)]/10 transition-colors">
                  <cat.icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                <div>
                  <div className="font-bold">{cat.label}</div>
                  <div className="text-white/40 text-sm">
                    {cat.count} articles
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-white/30 ml-auto group-hover:text-[var(--orange)] transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl font-black uppercase mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Popular Questions
          </h2>
          <div className="space-y-3">
            {popular.map((item, i) => (
              <motion.button
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="w-full border border-white/10 bg-white/[0.03] rounded-2xl p-5 flex items-center justify-between hover:border-[var(--orange)]/50 hover:bg-white/[0.05] transition-all group text-left"
              >
                <div>
                  <span className="text-[var(--orange)] text-xs uppercase tracking-wider font-bold mr-3">
                    {item.cat}
                  </span>
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {item.q}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-[var(--orange)] flex-shrink-0 ml-4 transition-colors" />
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 border border-white/10 bg-white/[0.03] rounded-3xl p-10 text-center">
            <h3
              className="text-3xl font-black uppercase mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Still need help?
            </h3>
            <p className="text-white/60 mb-8">
              Our support team is ready to assist you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--orange)] hover:bg-[var(--orange-bright)] text-white font-bold rounded-full transition-all hover:scale-105"
            >
              Contact Support <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
