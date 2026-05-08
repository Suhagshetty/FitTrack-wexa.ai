"use client";

import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import {
  Zap,
  Menu,
  X,
  LogOut,
  User,
  Sun,
  Moon,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useThemeStore, useAuthStore } from "@/store";

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

  const { theme, toggleTheme } = useThemeStore();
  const dark = theme === "dark";

  const { data: session, status } = useSession();
  const { user } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Logged in if NextAuth session OR Zustand store user exists
  const isLoggedIn = !!session || !!user;
  const displayName =
    session?.user?.name?.split(" ")[0] ||
    user?.fullName?.split(" ")[0] ||
    "Dashboard";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      const section = document.getElementById(id);
      if (section)
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const scrollToTop = () => {
    setMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const handleSignOut = () => {
    useAuthStore.getState().clearUser?.();
    signOut({ callbackUrl: "/" });
  };

  return (
    <>
      <m.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-background)]/95 backdrop-blur-xl border-b border-[var(--color-border)] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* LOGO */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-[var(--orange)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span
              className="text-xl font-bold tracking-wider text-[var(--color-foreground)] uppercase"
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
                onClick={() => handleNavClick(link.id)}
                className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--orange)] transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--orange)]/60 hover:bg-[var(--orange)]/10 text-[var(--color-muted-foreground)] hover:text-[var(--orange)] transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                  <m.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4" />
                  </m.span>
                ) : (
                  <m.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4" />
                  </m.span>
                )}
              </AnimatePresence>
            </button>

            {/* Auth */}
            {status === "loading" ? null : isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--orange)] transition-colors font-medium"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  {displayName}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-5 py-2 border border-[var(--color-border)] hover:border-[var(--orange)] text-[var(--color-foreground)] text-sm font-bold rounded-full transition-all duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/onboarding"
                  className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors font-medium"
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

          {/* MOBILE: theme + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted-foreground)] transition-all"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              className="text-[var(--color-foreground)]"
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
      </m.header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-[var(--color-background)] flex flex-col pt-20 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {links.map((link, i) => (
                <m.button
                  key={link.id}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-2xl font-bold uppercase tracking-widest text-[var(--color-muted-foreground)] hover:text-[var(--orange)] transition-colors text-left"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </m.button>
              ))}

              {isLoggedIn && (
                <m.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <Link
                    href="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-2xl font-bold uppercase tracking-widest text-[var(--orange)]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    <LayoutDashboard className="w-6 h-6" />
                    Dashboard
                  </Link>
                </m.div>
              )}
            </nav>

            <div className="mt-auto mb-12 flex flex-col gap-3">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full py-4 bg-[var(--orange)] text-white text-center font-bold text-lg rounded-2xl"
                  >
                    Go to Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full py-4 border border-[var(--color-border)] text-[var(--color-foreground)] text-center font-bold text-lg rounded-2xl"
                  >
                    Sign Out
                  </button>
                </>
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
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
