"use client";

import { motion } from "framer-motion";
import { navItems } from "@/lib/mockData";

interface BottomTabBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const mobileNav = navItems.slice(0, 5);

export function BottomTabBar({ activeTab, setActiveTab }: BottomTabBarProps) {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/8 px-2"
      style={{
        background: "oklch(0.09 0.01 20/0.98)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="flex items-center justify-around py-2">
        {mobileNav.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl relative transition-all duration-200"
            >
              {isActive && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="absolute inset-0 bg-[var(--orange)]/15 rounded-xl"
                />
              )}
              <span
                className={`text-xl relative z-10 transition-transform duration-200 ${isActive ? "scale-110" : "opacity-40"}`}
              >
                {item.emoji}
              </span>
              <span
                className={`text-[10px] font-medium relative z-10 transition-colors duration-200 ${isActive ? "text-[var(--orange)]" : "text-white/30"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
