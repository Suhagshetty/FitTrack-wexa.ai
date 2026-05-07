"use client";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Trash2, Download, RefreshCw } from "lucide-react";

const rights = [
  {
    icon: Eye,
    title: "Right to Access",
    desc: "Request a complete copy of all personal data FitTrack holds about you at any time.",
  },
  {
    icon: RefreshCw,
    title: "Right to Rectification",
    desc: "Correct any inaccurate or incomplete personal data we hold about you.",
  },
  {
    icon: Trash2,
    title: "Right to Erasure",
    desc: "Request deletion of your personal data ('right to be forgotten'). We'll action this within 30 days.",
  },
  {
    icon: Lock,
    title: "Right to Restrict Processing",
    desc: "Ask us to stop processing your data while keeping it stored (e.g. during a dispute).",
  },
  {
    icon: Download,
    title: "Right to Portability",
    desc: "Receive your data in a structured, machine-readable format to transfer to another service.",
  },
  {
    icon: Shield,
    title: "Right to Object",
    desc: "Object to processing based on legitimate interests or for direct marketing purposes.",
  },
];

const measures = [
  "TLS 1.3 encryption for all data in transit",
  "AES-256 encryption for data at rest",
  "Regular third-party penetration testing",
  "Strict role-based access controls",
  "Annual employee data privacy training",
  "72-hour breach notification policy",
  "Data minimization — we only collect what we need",
  "EU data stored in EU-based data centers",
];

export default function GDPRPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.08_0.01_20)] text-white">
      <section className="relative px-6 py-32 border-b border-white/10 overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.22 35) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--orange)] uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-black uppercase mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            GDPR Compliance
          </motion.h1>
          <p className="text-white/40 text-sm">
            Last updated: November 1, 2024
          </p>
        </div>
      </section>

      <section className="px-6 py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/70 text-lg leading-relaxed border-l-4 border-[var(--orange)] pl-6 mb-16">
            FitTrack is fully compliant with the EU General Data Protection
            Regulation (GDPR). We believe privacy is a fundamental right, not a
            checkbox — and we've built our platform with that principle at its
            core.
          </p>
          <h2
            className="text-4xl font-black uppercase mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Your Rights Under GDPR
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {rights.map((right, i) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 hover:border-[var(--orange)]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--orange)]/15 flex items-center justify-center mb-4">
                  <right.icon className="w-5 h-5 text-[var(--orange)]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{right.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {right.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-black uppercase mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Technical Safeguards
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {measures.map((m, i) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] rounded-xl px-5 py-4"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--orange)] flex-shrink-0" />
                <span className="text-white/70 text-sm">{m}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 border border-white/10 bg-white/[0.03] rounded-2xl p-8">
            <h3
              className="text-2xl font-black uppercase mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Exercise Your Rights
            </h3>
            <p className="text-white/60 leading-relaxed mb-4">
              To submit a GDPR request — access, rectification, erasure,
              portability, or objection — email our Data Protection Officer at{" "}
              <span className="text-[var(--orange)]">dpo@fittrack.com</span>. We
              will respond within 30 days.
            </p>
            <p className="text-white/60 leading-relaxed">
              You also have the right to lodge a complaint with your national
              data protection authority if you believe we have not handled your
              data in compliance with GDPR.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
