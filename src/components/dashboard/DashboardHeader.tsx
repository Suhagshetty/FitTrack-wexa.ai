"use client";

import { motion } from "framer-motion";
import { Bell, Sun, Moon, Menu } from "lucide-react";
import { useAuthStore, useThemeStore } from "@/store";

interface DashboardHeaderProps {
  onMenuOpen: () => void;
}

export function DashboardHeader({ onMenuOpen }: DashboardHeaderProps) {
  const { user } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/8 flex-shrink-0">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white/40 text-xs font-medium mb-0.5">{today}</p>
        <h1
          className="text-xl lg:text-2xl font-black uppercase text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {greeting},{" "}
          <span className="text-[var(--orange)]">
            {user?.fullName?.split(" ")[0] || "Athlete"} 👋
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>

        {/* Notification bell */}
        <button className="relative w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--orange)] rounded-full border border-[oklch(0.09_0.01_20)]" />
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-xl overflow-hidden border-2 border-[var(--orange)]/40 flex-shrink-0">
          {user?.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-sm font-black">
              {(user?.fullName?.[0] || "A").toUpperCase()}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={onMenuOpen}
          className="md:hidden w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50"
        >
          <Menu className="w-4 h-4" />
        </button>
      </motion.div>
    </header>
  );
}
