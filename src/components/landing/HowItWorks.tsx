"use client";

import { motion } from "framer-motion";
import { UserPlus, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Sign Up",
    desc: "Create your account in under 2 minutes. Tell us about yourself and we'll tailor everything to you.",
  },
  {
    num: "02",
    icon: Target,
    title: "Set Goals",
    desc: "Choose what you're chasing — weight loss, muscle gain, endurance. We build your personalized plan.",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Track Progress",
    desc: "Log workouts, meals, and milestones. Watch your transformation unfold in real-time analytics.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.10 0.01 20)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--orange)]/3 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--orange)] text-sm font-bold tracking-widest uppercase mb-4"
          >
            Simple Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-black uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            How It <span className="text-[var(--orange)]">Works</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting line between steps */}
          <div className="hidden md:block absolute top-[68px] left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-px">
            <motion.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(to right, var(--orange), oklch(0.65 0.22 35 / 0.2), var(--orange))",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15 + 0.2,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle with icon */}
                <div className="relative mb-8">
                  <div
                    className="w-20 h-20 rounded-full border-2 border-[var(--orange)] bg-[oklch(0.08_0.01_20)] flex items-center justify-center z-10 relative group hover:bg-[var(--orange)] transition-colors duration-300"
                    style={{
                      boxShadow: "0 0 0 8px oklch(0.65 0.22 35 / 0.08)",
                    }}
                  >
                    <step.icon className="w-8 h-8 text-[var(--orange)] group-hover:text-white transition-colors" />
                  </div>
                  {/* Ghost number */}
                  <span
                    className="absolute -top-2 -right-2 text-[60px] font-black leading-none select-none pointer-events-none"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: "oklch(0.65 0.22 35 / 0.12)",
                      zIndex: 0,
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  className="text-2xl font-black uppercase text-white mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <a
            href="/auth/onboarding"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[var(--orange)] hover:bg-[var(--orange-bright)] text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_oklch(0.65_0.22_35/0.4)]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            GET STARTED FREE →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
