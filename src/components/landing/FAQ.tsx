"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is FitTrack?",
    answer:
      "FitTrack is an all-in-one fitness platform designed to help you train smarter, stay consistent, and achieve your goals with personalized workout plans and performance tracking.",
  },
  {
    question: "Can beginners use FitTrack?",
    answer:
      "Absolutely. FitTrack is built for every fitness level — from complete beginners to professional athletes.",
  },
  {
    question: "Do I need gym equipment?",
    answer:
      "No. We provide bodyweight workouts, home workouts, and gym-based programs depending on your preference and setup.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. Every user gets a free 14-day trial with full access to all premium features.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no contracts or hidden fees. You can cancel your subscription anytime directly from your dashboard.",
  },
  {
    question: "Does FitTrack support nutrition tracking?",
    answer:
      "Yes. You can track calories, macros, hydration, and meal consistency directly inside the app.",
  },
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-28 overflow-hidden"
      style={{
        background: "oklch(0.08 0.01 20)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at top right, oklch(0.65 0.22 35 / 0.3), transparent 45%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--orange)] uppercase tracking-[0.3em] text-sm font-bold mb-4">
            FAQ
          </p>

          <h2
            className="text-5xl lg:text-7xl font-black uppercase leading-none text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Frequently Asked
            <br />
            <span className="text-[var(--orange)]">Questions</span>
          </h2>

          <p className="text-white/50 text-lg max-w-2xl mx-auto mt-6">
            Everything you need to know about FitTrack, memberships, workouts,
            and getting started.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[var(--orange)] bg-[var(--orange)]/5"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3
                    className="text-xl font-bold text-white uppercase tracking-wide"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                    }}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-[var(--orange)] text-white"
                        : "bg-white/5 text-white/50"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-white/60 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
