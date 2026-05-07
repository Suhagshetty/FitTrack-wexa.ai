"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import Link from "next/link";

const links = ["About Us", "Features", "How It Works", "Pricing", "FAQ"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.08_0.01_20/0.95)] backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[var(--orange)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span
              className="text-xl font-bold tracking-wider text-white uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              FitTrack
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm text-white/70 hover:text-[var(--orange)] transition-colors duration-200 font-medium tracking-wide"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/onboarding"
              className="text-sm text-white/70 hover:text-white transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/auth/onboarding"
              className="px-5 py-2 bg-[var(--orange)] hover:bg-[var(--orange-bright)] text-white text-sm font-bold rounded-full transition-all duration-200 hover:scale-105"
            >
              Free Trial
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-[oklch(0.08_0.01_20)] flex flex-col pt-20 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-2xl font-bold uppercase tracking-widest text-white/80 hover:text-[var(--orange)] transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto mb-12">
              <Link
                href="/auth/onboarding"
                className="block w-full py-4 bg-[var(--orange)] text-white text-center font-bold text-lg rounded-2xl"
                onClick={() => setMenuOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
