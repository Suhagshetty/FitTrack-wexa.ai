"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const perks = [
  {
    emoji: "🌍",
    title: "Remote-First",
    desc: "Work from anywhere in the world. We're async by default.",
  },
  {
    emoji: "💰",
    title: "Competitive Pay",
    desc: "Top-of-market salaries + meaningful equity from day one.",
  },
  {
    emoji: "🏋️",
    title: "Fitness Stipend",
    desc: "$150/month toward gym, equipment, or fitness apps.",
  },
  {
    emoji: "📚",
    title: "Learning Budget",
    desc: "$2,000/year for courses, books, and conferences.",
  },
  {
    emoji: "🏖️",
    title: "Unlimited PTO",
    desc: "We trust you to do great work and take the rest you need.",
  },
  {
    emoji: "🏥",
    title: "Full Health Cover",
    desc: "Medical, dental, and vision for you and your family.",
  },
];

const jobs = [
  {
    title: "Senior Frontend Developer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    level: "Senior",
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    type: "Full-time",
    location: "Remote",
    level: "Mid–Senior",
  },
  {
    title: "AI / ML Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    level: "Senior",
  },
  {
    title: "Fitness Content Strategist",
    dept: "Marketing",
    type: "Full-time",
    location: "Remote",
    level: "Mid",
  },
  {
    title: "Backend Engineer (Node / Python)",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    level: "Senior",
  },
  {
    title: "Growth Marketing Manager",
    dept: "Marketing",
    type: "Full-time",
    location: "Remote",
    level: "Mid–Senior",
  },
];

export default function CareersPage() {
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
            Careers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-black uppercase leading-[0.9] mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Build the future
            <br />
            of <span className="text-[var(--orange)]">fitness tech.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-xl leading-relaxed max-w-2xl"
          >
            We're a small, ambitious team on a mission to democratize elite
            athletic performance. If you're obsessed with craft, love sport, and
            want your work to matter — we want to meet you.
          </motion.p>
        </div>
      </section>

      {/* Perks */}
      <section className="px-6 py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--orange)] uppercase tracking-widest text-sm font-bold mb-4">
            Why FitTrack
          </p>
          <h2
            className="text-5xl font-black uppercase mb-14"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            More than a job.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 hover:border-[var(--orange)]/40 transition-colors"
              >
                <div className="text-4xl mb-4">{perk.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{perk.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {perk.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--orange)] uppercase tracking-widest text-sm font-bold mb-4">
            Open Roles
          </p>
          <h2
            className="text-5xl font-black uppercase mb-14"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Join the team.
          </h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[var(--orange)]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[var(--orange)] text-xs uppercase tracking-wider font-bold">
                      {job.dept}
                    </span>
                    <span className="text-white/30 text-xs">·</span>
                    <span className="flex items-center gap-1 text-white/40 text-xs">
                      <Clock className="w-3 h-3" />
                      {job.type}
                    </span>
                    <span className="text-white/30 text-xs">·</span>
                    <span className="flex items-center gap-1 text-white/40 text-xs">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-[var(--orange)] transition-colors">
                    {job.title}
                  </h3>
                  <span className="text-white/40 text-sm">{job.level}</span>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-[var(--orange)] hover:bg-[var(--orange-bright)] text-white font-bold rounded-xl transition-all hover:scale-105 whitespace-nowrap">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
