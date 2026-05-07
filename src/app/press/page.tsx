"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const coverage = [
  {
    outlet: "TechCrunch",
    headline: "FitTrack raises $12M to bring AI coaching to everyday athletes",
    date: "Oct 2024",
    emoji: "📰",
  },
  {
    outlet: "Forbes",
    headline: "The 30 Most Promising Fitness Tech Startups of 2024",
    date: "Sep 2024",
    emoji: "📊",
  },
  {
    outlet: "Wired",
    headline: "How FitTrack is using AI to replace your personal trainer",
    date: "Aug 2024",
    emoji: "⚡",
  },
  {
    outlet: "Men's Health",
    headline: "We tested 10 fitness apps — FitTrack blew the rest away",
    date: "Jul 2024",
    emoji: "🏆",
  },
  {
    outlet: "The Verge",
    headline: "FitTrack's new AI coach knows your body better than you do",
    date: "Jun 2024",
    emoji: "🤖",
  },
  {
    outlet: "Business Insider",
    headline:
      "This startup wants to give every athlete access to elite coaching",
    date: "May 2024",
    emoji: "💼",
  },
];

const stats = [
  ["$12M", "Series A Raised"],
  ["50K+", "Active Users"],
  ["4.9★", "App Store Rating"],
  ["2022", "Founded"],
];

const assets = [
  {
    name: "Brand Logo Pack",
    desc: "SVG, PNG, dark & light variants",
    size: "2.4 MB",
  },
  {
    name: "Product Screenshots",
    desc: "High-res app screenshots",
    size: "18 MB",
  },
  { name: "Founder Photos", desc: "Press-ready headshots", size: "8 MB" },
  {
    name: "Brand Guidelines",
    desc: "Colors, typography, usage rules",
    size: "4 MB",
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.08_0.01_20)] text-white">
      {/* Hero */}
      <section className="relative px-6 py-32 overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
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
            Press & Media
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-black uppercase leading-[0.9] mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            FitTrack in the <span className="text-[var(--orange)]">news.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-xl max-w-2xl mb-10"
          >
            For press inquiries, interview requests, or media assets — reach out
            to our team.
          </motion.p>
          <motion.a
            href="mailto:press@fittrack.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--orange)] hover:bg-[var(--orange-bright)] text-white font-bold rounded-full transition-all hover:scale-105"
          >
            press@fittrack.com <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(([val, label]) => (
            <div key={label} className="text-center">
              <div
                className="text-5xl font-black text-[var(--orange)]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {val}
              </div>
              <div className="text-white/50 text-sm mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="px-6 py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-5xl font-black uppercase mb-14"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Media Coverage
          </h2>
          <div className="space-y-4">
            {coverage.map((item, i) => (
              <motion.div
                key={item.headline}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 flex items-center gap-6 hover:border-[var(--orange)]/50 transition-all group cursor-pointer"
              >
                <span className="text-4xl">{item.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[var(--orange)] font-bold text-sm">
                      {item.outlet}
                    </span>
                    <span className="text-white/30 text-sm">·</span>
                    <span className="text-white/40 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-[var(--orange)] transition-colors leading-snug">
                    {item.headline}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-[var(--orange)] flex-shrink-0 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-5xl font-black uppercase mb-14"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Press Kit
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {assets.map((asset, i) => (
              <motion.button
                key={asset.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 flex items-center justify-between hover:border-[var(--orange)]/50 transition-all group text-left"
              >
                <div>
                  <h3 className="font-bold text-lg group-hover:text-[var(--orange)] transition-colors">
                    {asset.name}
                  </h3>
                  <p className="text-white/50 text-sm">{asset.desc}</p>
                  <p className="text-white/30 text-xs mt-1">{asset.size}</p>
                </div>
                <div className="px-4 py-2 border border-white/20 group-hover:border-[var(--orange)] group-hover:text-[var(--orange)] rounded-xl text-sm font-bold transition-all">
                  Download
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
