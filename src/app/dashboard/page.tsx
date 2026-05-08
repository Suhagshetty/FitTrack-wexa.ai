"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { BottomTabBar } from "@/components/dashboard/BottomTabBar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { WeeklyChart } from "@/components/dashboard/WeeklyChart";
import { TodayWorkout } from "@/components/dashboard/TodayWorkout";
import {
  QuickActions,
  RecentWorkouts,
} from "@/components/dashboard/QuickActions";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";
import { EmptyState } from "@/components/dashboard/EmptyState";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  // Reset loading when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab !== "dashboard") setLoading(false);
  };

  const tabEmoji: Record<string, string> = {
    workouts: "💪",
    nutrition: "🥗",
    progress: "📈",
    community: "👥",
    settings: "⚙️",
  };

  const tabToEmptyType: Record<
    string,
    "workouts" | "nutrition" | "progress" | "community"
  > = {
    workouts: "workouts",
    nutrition: "nutrition",
    progress: "progress",
    community: "community",
  };

  return (
    <div
      className="flex min-h-screen"
      style={{ background: "oklch(0.08 0.01 20)" }}
      role="application"
      aria-label="FitTrack Dashboard"
    >
      <Sidebar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <div className="flex-1 flex flex-col min-w-0 min-h-screen pb-20 md:pb-0">
        <DashboardHeader
          onMenuOpen={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && (
            <motion.main
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              aria-label="Dashboard overview"
              role="main"
            >
              {loading ? (
                <DashboardSkeleton />
              ) : (
                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                  <StatsCards />
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="xl:col-span-2 space-y-6">
                      <WeeklyChart />
                      <RecentWorkouts />
                    </div>
                    <div className="space-y-6">
                      <QuickActions />
                      <TodayWorkout />
                    </div>
                  </div>
                </div>
              )}
            </motion.main>
          )}

          {activeTab === "settings" && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex items-center justify-center"
              role="main"
              aria-label="Settings"
            >
              <div className="text-center">
                <div className="text-6xl mb-4" aria-hidden="true">
                  ⚙️
                </div>
                <h2
                  className="text-3xl font-black uppercase text-white mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Settings
                </h2>
                <p className="text-white/30 text-sm">Coming soon</p>
              </div>
            </motion.div>
          )}

          {activeTab !== "dashboard" && activeTab !== "settings" && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
              role="main"
              aria-label={`${activeTab} section`}
            >
              <EmptyState
                type={tabToEmptyType[activeTab] || "workouts"}
                onAction={() => handleTabChange("dashboard")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <BottomTabBar activeTab={activeTab} setActiveTab={handleTabChange} />
    </div>
  );
}
