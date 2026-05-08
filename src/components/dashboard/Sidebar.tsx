"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { navItems } from "@/lib/mockData";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

export function Sidebar({
  activeTab,
  setActiveTab,
  collapsed,
  setCollapsed,
}: SidebarProps) {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="hidden md:flex flex-col h-screen sticky top-0 border-r border-white/8 overflow-hidden flex-shrink-0"
      style={{ background: "oklch(0.09 0.01 20)" }}
    >
      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-white/8 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-8 h-8 bg-[var(--orange)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="text-base font-black tracking-wider text-white uppercase whitespace-nowrap"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                FitTrack
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileTap={{ scale: 0.97 }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? "bg-[var(--orange)]/15 text-white"
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[var(--orange)] rounded-full"
                />
              )}
              <span className="text-lg flex-shrink-0">{item.emoji}</span>
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                    className={`text-sm font-medium whitespace-nowrap ${isActive ? "text-white" : ""}`}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Tooltip when collapsed */}
              {collapsed && (
                <div className="absolute left-full ml-3 px-2 py-1 bg-[oklch(0.18_0.01_20)] border border-white/10 rounded-lg text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  {item.label}
                </div>
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* User + logout + collapse */}
      <div className="px-3 py-4 border-t border-white/8 space-y-2 flex-shrink-0">
        <div
          className={`flex items-center gap-3 px-2 py-2 rounded-xl ${!collapsed ? "bg-white/4" : ""}`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xs font-black flex-shrink-0 overflow-hidden">
            {user?.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              (user?.fullName?.[0] || "A").toUpperCase()
            )}
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                className="flex-1 min-w-0"
              >
                <p className="text-white text-xs font-bold truncate">
                  {user?.fullName || "Athlete"}
                </p>
                <p className="text-white/30 text-[10px] truncate">
                  @{user?.username || "user"}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                className="text-xs whitespace-nowrap"
              >
                Log Out
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-white/20 hover:text-white/60 hover:bg-white/5 transition-all duration-200"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-xs">Collapse</span>
            </>
          )}
        </button>
      </div>
    </motion.aside>
  );
}
