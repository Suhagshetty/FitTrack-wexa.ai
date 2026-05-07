"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, LogOut, User, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useThemeStore } from "@/store"; // ← uses Zustand store

const links = [
  { label: "About Us", id: "about-us" },
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ← replaces local useState(true) — now synced with ThemeProvider + persisted
  const { theme, toggleTheme } = useThemeStore();
  const dark = theme === "dark";

  const { data: session, status } = useSession();

  // NO manual useEffect for dark class — ThemeProvider in layout.tsx handles it

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          {/* LOGO — scrolls to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-[var(--orange)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span
              className="text-xl font-bold tracking-wider text-white uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              FitTrack
            </span>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-white/70 hover:text-[var(--orange)] transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* RIGHT: dark toggle + auth */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark mode toggle — calls toggleTheme from store */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:border-[var(--orange)]/60 hover:bg-[var(--orange)]/10 text-white/70 hover:text-[var(--orange)] transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Auth */}
            {status === "loading" ? null : session ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors font-medium"
                >
                  <User className="w-4 h-4" />
                  {session.user?.name?.split(" ")[0]}
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-2 px-5 py-2 border border-white/20 hover:border-[var(--orange)] text-white text-sm font-bold rounded-full transition-all duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* MOBILE: dark toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/70 transition-all"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              className="text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE DRAWER */}
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
                <motion.button
                  key={link.id}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-2xl font-bold uppercase tracking-widest text-white/80 hover:text-[var(--orange)] transition-colors text-left"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  onClick={() => {
                    scrollToSection(link.id);
                    setMenuOpen(false);
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto mb-12">
              {session ? (
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="block w-full py-4 border border-white/20 text-white text-center font-bold text-lg rounded-2xl"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/auth/onboarding"
                  className="block w-full py-4 bg-[var(--orange)] text-white text-center font-bold text-lg rounded-2xl"
                  onClick={() => setMenuOpen(false)}
                >
                  Start Free Trial
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
