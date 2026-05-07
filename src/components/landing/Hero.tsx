"use client";

import { motion } from "framer-motion";
import { Play, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

const tags = [
  "Personal Training",
  "Strength",
  "Group Classes",
  "Swimming",
  "Cardio Equipment",
  "Functional Workouts",
];

export function Hero() {
  return (
    <section
      id="about-us"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 70% 40%, oklch(0.25 0.12 35 / 0.6) 0%, oklch(0.08 0.01 20) 60%)",
      }}
    >
      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      {/* Orange glow orbs */}
      <div
        className="pointer-events-none absolute top-1/4 right-[15%] w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.22 35) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-[5%] w-64 h-64 rounded-full blur-2xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.22 35) 0%, transparent 70%)",
        }}
      />

      {/* Right side vertical lines */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.01_20)] via-transparent to-transparent z-10" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-r border-white/5"
            style={{ right: `${i * 80}px`, top: 0, bottom: 0 }}
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.1 * i, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex items-center justify-between">
          {/* LEFT: Text content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--orange)]/30 bg-[var(--orange)]/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--orange)] animate-pulse" />
              <span className="text-[var(--orange)] text-xs font-bold tracking-widest uppercase">
                #1 Fitness Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.92] uppercase tracking-tight mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Push Your
              <br />
              <span className="text-[var(--orange)]">Limits</span>
              <br />
              With Us
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-md"
            >
              From beginner to advanced, experience workouts designed to help
              you achieve peak performance and exceed your fitness goals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/auth/onboarding"
                className="group flex items-center gap-2 px-8 py-4 bg-[var(--orange)] hover:bg-[var(--orange-bright)] text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_oklch(0.65_0.22_35/0.5)]"
              >
                Join Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-3 px-6 py-4 text-white font-semibold hover:text-[var(--orange)] transition-colors group">
                <span className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 group-hover:border-[var(--orange)]/50 group-hover:bg-[var(--orange)]/10 transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                Watch Video
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {["🧑🏽", "👩🏻", "👨🏿", "+"].map((a, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[oklch(0.08_0.01_20)] bg-[oklch(0.2_0.05_35)] flex items-center justify-center text-xs font-bold text-white"
                  >
                    {a}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[var(--orange)] text-[var(--orange)]"
                    />
                  ))}
                </div>
                <p className="text-white/50 text-xs mt-0.5">
                  1.7k+ verified reviews
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Bodybuilder with 3D breakout effect */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block flex-shrink-0"
            style={{ width: "540px", height: "660px" }}
          >
            {/* Arrow button — top right corner, sits above card */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4, ease: "backOut" }}
              className="absolute top-2 right-0 w-16 h-16 rounded-2xl flex items-center justify-center z-30 cursor-pointer hover:scale-110 transition-transform"
              style={{
                background: "var(--orange)",
                boxShadow: "0 8px 24px oklch(0.55 0.22 35 / 0.5)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            {/* THE ORANGE CARD — the "frame" the guy breaks out of */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="absolute rounded-3xl"
              style={{
                background: "var(--orange)",
                bottom: "0px",
                left: "30px",
                right: "24px",
                top: "80px",
                /* Subtle 3D tilt */
                transform: "perspective(1200px) rotateY(-5deg) rotateX(3deg)",
                transformOrigin: "center bottom",
                /* Rich layered shadow for depth */
                boxShadow:
                  "0 50px 100px -20px oklch(0.5 0.22 35 / 0.6), 0 30px 60px -10px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              {/* Grain texture on card */}
              <div
                className="absolute inset-0 rounded-3xl opacity-[0.07]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  backgroundSize: "128px",
                }}
              />
              {/* Bottom fade so feet look grounded */}
              <div className="absolute bottom-0 left-0 right-0 h-32 rounded-b-3xl bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* AMBIENT GLOW behind the figure */}
            <div
              className="absolute z-10 rounded-full blur-3xl pointer-events-none"
              style={{
                background: "oklch(0.65 0.22 35 / 0.4)",
                width: "320px",
                height: "420px",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            {/* THE BODYBUILDER — overflows the card top and bottom = breakout */}
            <motion.img
              src="/body1.png"
              alt="Fitness trainer"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.55, ease: "easeOut" }}
              className="absolute z-20 object-contain object-bottom select-none"
              style={{
                bottom: "-30px" /* feet hang below the card */,
                left: "-10px",
                right: "-10px",
                height: "115%" /* taller than card = head breaks out the top */,
                width: "calc(100% + 20px)",
                /* Heavy drop-shadow so he looks lifted in front of the card */
                filter:
                  "drop-shadow(-16px 24px 40px rgba(0,0,0,0.85)) drop-shadow(0 -6px 20px rgba(0,0,0,0.4))",
                transform: "perspective(1200px) rotateY(-2deg)",
              }}
            />
          </motion.div>
        </div>

        {/* Category tags */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-white/10"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.07, ease: "easeOut" }}
              className="px-4 py-2 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:border-[var(--orange)]/50 hover:text-[var(--orange)] hover:bg-[var(--orange)]/5 transition-all cursor-pointer"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[var(--orange)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
