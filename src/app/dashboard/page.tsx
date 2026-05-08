"use client";

import { useState } from "react";
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

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div
      className="flex min-h-screen"
      style={{ background: "oklch(0.08 0.01 20)" }}
    >
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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
              className="flex-1 p-6 space-y-6 overflow-y-auto"
            >
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
            </motion.main>
          )}

          {activeTab !== "dashboard" && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {activeTab === "workouts" && "💪"}
                  {activeTab === "nutrition" && "🥗"}
                  {activeTab === "progress" && "📈"}
                  {activeTab === "community" && "👥"}
                  {activeTab === "settings" && "⚙️"}
                </div>
                <h2
                  className="text-3xl font-black uppercase text-white mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h2>
                <p className="text-white/30 text-sm">Coming soon</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <BottomTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
