"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 27, suffix: "K+", label: "Members" },
  { value: 60, suffix: "+", label: "Weekly Classes" },
  { value: 117, suffix: "+", label: "Expert Trainers" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "oklch(0.10 0.01 20)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[var(--orange)]/3 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--orange)] text-sm font-bold tracking-widest uppercase mb-4"
        >
          About Us
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl lg:text-6xl font-black uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Your <span className="text-[var(--orange)]">Fitness</span> Journey
            Starts Here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-white/50 text-base leading-relaxed lg:pt-4"
          >
            At FitTrack, we are dedicated to helping you unlock your full
            fitness potential. With top-tier equipment, expert trainers, and a
            welcoming community, we provide the perfect environment to push your
            limits and achieve your goals.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <div
                className="text-4xl lg:text-5xl font-black text-[var(--orange)] mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-white/40 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Video card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-16 relative rounded-2xl overflow-hidden h-72 lg:h-[400px] group cursor-pointer"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.20 0.08 35), oklch(0.10 0.03 20))",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 30px, oklch(0.65 0.22 35 / 0.1) 30px, oklch(0.65 0.22 35 / 0.1) 31px)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Floating icons */}
          {["🏋️", "🥊", "🚴", "🧘"].map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${15 + i * 22}%`,
                top: `${25 + (i % 2) * 30}%`,
                opacity: 0.3,
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5 + i * 0.4,
                ease: "easeInOut",
              }}
            >
              {icon}
            </motion.div>
          ))}

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-[var(--orange)] group-hover:border-[var(--orange)] transition-all duration-300"
            >
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1" />
            </motion.div>
          </div>

          <div className="absolute bottom-4 left-6">
            <p className="text-white/40 text-sm">Watch our facility tour</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
