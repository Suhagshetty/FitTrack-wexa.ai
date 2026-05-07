"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: 0,
    period: "forever",
    desc: "Perfect to get started",
    features: [
      "3 workout plans",
      "Basic progress tracking",
      "Community access",
      "7-day meal planner",
      "Mobile app access",
    ],
    missing: [
      "Advanced analytics",
      "AI coaching",
      "Unlimited plans",
      "Priority support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: 12,
    period: "month",
    desc: "For serious athletes",
    features: [
      "Unlimited workout plans",
      "AI-adaptive coaching",
      "Advanced analytics",
      "Full nutrition tracking",
      "1200+ recipes",
      "Progress photos",
      "Priority support",
    ],
    missing: ["1-on-1 coaching", "Custom branding"],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Elite",
    price: 29,
    period: "month",
    desc: "For teams & coaches",
    features: [
      "Everything in Pro",
      "1-on-1 video coaching",
      "Custom client plans",
      "White-label option",
      "Team dashboard",
      "API access",
      "Dedicated account manager",
    ],
    missing: [],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.10 0.01 20)" }}
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full rounded-full blur-3xl opacity-5"
        style={{
          background: "radial-gradient(circle, var(--orange), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--orange)] text-sm font-bold tracking-widest uppercase mb-4"
          >
            Simple Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-black uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Choose Your <span className="text-[var(--orange)]">Plan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="text-white/40 mt-4"
          >
            Start free. Upgrade when you&apos;re ready. No hidden fees.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-[var(--orange)] border-2 border-[var(--orange)] md:scale-[1.04]"
                  : "bg-[oklch(0.11_0.01_20)] border border-white/8 hover:border-white/20 transition-colors"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-white rounded-full">
                  <Zap className="w-3.5 h-3.5 text-[var(--orange)] fill-[var(--orange)]" />
                  <span className="text-[var(--orange)] text-xs font-black uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name + price */}
              <div className="mb-6">
                <p
                  className={`text-sm font-bold tracking-widest uppercase mb-1 ${plan.popular ? "text-white/70" : "text-[var(--orange)]"}`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className="text-6xl font-black leading-none text-white"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`pb-2 text-sm ${plan.popular ? "text-white/70" : "text-white/40"}`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm ${plan.popular ? "text-white/80" : "text-white/40"}`}
                >
                  {plan.desc}
                </p>
              </div>

              {/* CTA */}
              <a
                href="/auth/onboarding"
                className={`w-full py-3 rounded-xl font-bold text-center text-sm transition-all duration-300 mb-8 block ${
                  plan.popular
                    ? "bg-white text-[var(--orange)] hover:bg-white/90"
                    : "bg-white/8 text-white hover:bg-white/15 border border-white/10"
                }`}
              >
                {plan.cta}
              </a>

              {/* Feature list */}
              <div className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${plan.popular ? "bg-white/20" : "bg-[var(--orange)]/15"}`}
                    >
                      <Check
                        className={`w-3 h-3 ${plan.popular ? "text-white" : "text-[var(--orange)]"}`}
                      />
                    </div>
                    <span
                      className={`text-sm ${plan.popular ? "text-white/90" : "text-white/60"}`}
                    >
                      {f}
                    </span>
                  </div>
                ))}
                {plan.missing.map((f) => (
                  <div key={f} className="flex items-center gap-3 opacity-30">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 bg-white/5 flex items-center justify-center">
                      <div className="w-2 h-px bg-white/40" />
                    </div>
                    <span className="text-sm text-white/30 line-through">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, ease: "easeOut" }}
          className="text-center text-white/30 text-sm mt-8"
        >
          All plans include a 14-day free trial. Cancel anytime, no questions
          asked.
        </motion.p>
      </div>
    </section>
  );
}
