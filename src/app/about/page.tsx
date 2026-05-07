"use client";
import { motion } from "framer-motion";

const stats = [
  ["50K+", "Active Athletes"],
  ["120+", "Workout Programs"],
  ["98%", "User Satisfaction"],
  ["4.9★", "App Store Rating"],
];

const team = [
  { name: "Marcus Reid", role: "CEO & Co-founder", emoji: "🏋️" },
  { name: "Priya Nair", role: "Head of Product", emoji: "🚀" },
  { name: "Jordan Cole", role: "Lead AI Engineer", emoji: "🤖" },
  { name: "Sofia Mendez", role: "Head of Design", emoji: "🎨" },
];

const values = [
  { title: "Performance First", desc: "Every feature we build is designed to make you faster, stronger, and more consistent." },
  { title: "Data-Driven", desc: "We use AI and real science — not trends — to give you insights that actually move the needle." },
  { title: "Built for Everyone", desc: "From first-time gym-goers to elite competitors. FitTrack scales with your ambition." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.08_0.01_20)] text-white">
      {/* Hero */}
      <section className="relative px-6 py-32 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.22 35) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-[var(--orange)] uppercase tracking-[0.3em] text-sm font-bold mb-4">
            About FitTrack
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Built for athletes<br />
            <span className="text-[var(--orange)]">who refuse</span><br />
            to settle.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/60 text-xl leading-relaxed max-w-2xl">
            FitTrack was born in 2022 from one simple belief — that every athlete deserves elite-level tools.
            We combine AI-powered insights, personalized programming, and a world-class community to help you
            train smarter, recover faster, and achieve what you once thought was impossible.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 border-y border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(([value, label], i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center">
              <div className="text-5xl font-black text-[var(--orange)]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{value}</div>
              <div className="text-white/50 mt-2 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[var(--orange)] uppercase tracking-widest text-sm font-bold mb-4">Our Mission</p>
            <h2 className="text-5xl font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Democratize elite athletic performance.
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Professional athletes have always had access to world-class coaches, nutritionists, and sports scientists.
              We're leveling the playing field — giving every motivated person on the planet access to that same
              intelligence, powered by AI and backed by sports science.
            </p>
          </div>
          <div className="space-y-4">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 hover:border-[var(--orange)]/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--orange)] mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--orange)] uppercase tracking-widest text-sm font-bold mb-4">The Team</p>
          <h2 className="text-5xl font-black uppercase mb-14" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            People behind the platform.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 text-center hover:border-[var(--orange)]/40 transition-colors">
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-white/50 text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}