"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  ArrowRight,
  ExternalLink,
  GitBranch,
  Globe,
} from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.08 0.01 20)" }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.25 0.12 35 / 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.65 0.22 35) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.22 35) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 bg-[var(--orange)] rounded-2xl flex items-center justify-center mx-auto mb-8"
          style={{ boxShadow: "0 0 60px oklch(0.65 0.22 35 / 0.5)" }}
        >
          <Zap className="w-8 h-8 text-white fill-white" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Ready To <span className="text-[var(--orange)]">Transform</span>
          <br />
          Your Body?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-lg mb-10 max-w-lg mx-auto"
        >
          Join 27,000+ athletes already crushing their goals. Start your free
          trial today — no card required.
        </motion.p>

        {/* Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-xl bg-white/8 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--orange)]/60 transition-colors text-sm"
          />

          <button className="flex items-center justify-center gap-2 px-6 py-4 bg-[var(--orange)] hover:bg-orange-500 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-white/30 text-xs"
        >
          Free 14-day trial · No credit card · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "/changelog" },
    { label: "Roadmap", href: "/roadmap" },
  ],

  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],

  Support: [
    { label: "Help Center", href: "/help" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
    { label: "Status", href: "/status" },
  ],

  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-t border-white/8 py-16"
      style={{ background: "oklch(0.07 0.01 20)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--orange)] rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>

              <span
                className="text-lg font-black tracking-wider text-white uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                FitTrack
              </span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6">
              The premium platform for athletes who refuse to settle.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/suhagshetty07/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--orange)]/20 hover:border-[var(--orange)]/40 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-white/60" />
              </a>

              <a
                href="https://github.com/Suhagshetty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--orange)]/20 hover:border-[var(--orange)]/40 transition-all"
              >
                <GitBranch className="w-4 h-4 text-white/60" />
              </a>

              <a
                href="https://suhagxyz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--orange)]/20 hover:border-[var(--orange)]/40 transition-all"
              >
                <Globe className="w-4 h-4 text-white/60" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-widest">
                {category}
              </h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 text-sm hover:text-[var(--orange)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            © 2026 FitTrack. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-white/25 text-sm">
            <Mail className="w-4 h-4" />
            suhagshetty07@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
}
