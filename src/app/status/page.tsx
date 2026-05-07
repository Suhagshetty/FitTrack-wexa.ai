"use client";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const systems = [
  { name: "API & Core Platform", status: "operational", uptime: "99.98%" },
  { name: "Web Application", status: "operational", uptime: "99.99%" },
  {
    name: "Mobile Apps (iOS & Android)",
    status: "operational",
    uptime: "99.97%",
  },
  { name: "AI Coaching Engine", status: "operational", uptime: "99.95%" },
  { name: "Workout Sync & Tracking", status: "operational", uptime: "99.98%" },
  { name: "Authentication & Accounts", status: "operational", uptime: "100%" },
  { name: "Payment Processing", status: "operational", uptime: "100%" },
  { name: "Push Notifications", status: "degraded", uptime: "98.12%" },
  { name: "Wearable Integrations", status: "operational", uptime: "99.91%" },
  { name: "CDN & Media Delivery", status: "operational", uptime: "99.99%" },
];

const incidents = [
  {
    date: "Oct 28, 2024",
    title: "Push Notification Delays",
    status: "Investigating",
    severity: "minor",
    updates: [
      {
        time: "14:32 UTC",
        msg: "We are investigating reports of delayed push notifications on Android devices.",
      },
      {
        time: "15:01 UTC",
        msg: "Issue identified — third-party notification provider experiencing elevated latency.",
      },
      {
        time: "15:44 UTC",
        msg: "Notifications are beginning to recover. Monitoring closely.",
      },
    ],
  },
  {
    date: "Oct 15, 2024",
    title: "Resolved: Workout Sync Delays",
    status: "Resolved",
    severity: "resolved",
    updates: [
      {
        time: "09:15 UTC",
        msg: "Some users reported delays in workout data syncing.",
      },
      {
        time: "10:03 UTC",
        msg: "Database query optimization deployed. Sync times returning to normal.",
      },
      {
        time: "10:30 UTC",
        msg: "All systems operating normally. Incident resolved.",
      },
    ],
  },
];

const uptimeData = [
  "99.98%",
  "99.97%",
  "100%",
  "99.99%",
  "99.96%",
  "100%",
  "99.98%",
  "99.99%",
  "100%",
  "99.97%",
  "99.98%",
  "99.99%",
];
const months = [
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
];

export default function StatusPage() {
  const allOperational = systems.every((s) => s.status === "operational");
  const hasDegraded = systems.some((s) => s.status === "degraded");

  return (
    <main className="min-h-screen bg-[oklch(0.08_0.01_20)] text-white">
      {/* Hero */}
      <section className="relative px-6 py-32 border-b border-white/10 overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
          style={{
            background: `radial-gradient(circle, ${hasDegraded ? "oklch(0.75 0.18 90)" : "oklch(0.65 0.22 35)"} 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--orange)] uppercase tracking-[0.3em] text-sm font-bold mb-6"
          >
            System Status
          </motion.p>

          {/* Overall status banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-4 px-8 py-5 rounded-2xl border mb-8 ${
              hasDegraded
                ? "bg-yellow-500/10 border-yellow-500/30"
                : "bg-green-500/10 border-green-500/30"
            }`}
          >
            {hasDegraded ? (
              <AlertCircle className="w-8 h-8 text-yellow-400" />
            ) : (
              <CheckCircle className="w-8 h-8 text-green-400" />
            )}
            <div>
              <div
                className={`text-2xl font-black ${hasDegraded ? "text-yellow-400" : "text-green-400"}`}
              >
                {hasDegraded
                  ? "Partial Service Degradation"
                  : "All Systems Operational"}
              </div>
              <div className="text-white/50 text-sm">
                Last checked: just now
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-black uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            FitTrack Status
          </motion.h1>
        </div>
      </section>

      {/* Systems */}
      <section className="px-6 py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl font-black uppercase mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            System Health
          </h2>
          <div className="space-y-3">
            {systems.map((system, i) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-white/10 bg-white/[0.03] rounded-xl px-6 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${system.status === "operational" ? "bg-green-400" : system.status === "degraded" ? "bg-yellow-400 animate-pulse" : "bg-red-400"}`}
                  />
                  <span className="font-medium">{system.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-white/40 text-sm">
                    {system.uptime} uptime
                  </span>
                  <span
                    className={`text-sm font-semibold capitalize ${system.status === "operational" ? "text-green-400" : system.status === "degraded" ? "text-yellow-400" : "text-red-400"}`}
                  >
                    {system.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime History */}
      <section className="px-6 py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl font-black uppercase mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            12-Month Uptime
          </h2>
          <div className="grid grid-cols-12 gap-2">
            {uptimeData.map((uptime, i) => (
              <div key={i} className="text-center">
                <div
                  className={`h-16 rounded-lg mb-2 ${uptime === "100%" ? "bg-green-500/30" : "bg-green-500/20"}`}
                />
                <div className="text-white/40 text-xs">{months[i]}</div>
                <div className="text-green-400 text-xs font-bold">{uptime}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl font-black uppercase mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Incident History
          </h2>
          <div className="space-y-6">
            {incidents.map((incident, i) => (
              <motion.div
                key={incident.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border rounded-2xl p-6 ${incident.severity === "resolved" ? "border-white/10 bg-white/[0.03]" : "border-yellow-500/30 bg-yellow-500/5"}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-white/40 text-sm mb-1">
                      {incident.date}
                    </div>
                    <h3 className="text-xl font-bold">{incident.title}</h3>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${incident.severity === "resolved" ? "bg-green-500/15 text-green-400" : "bg-yellow-500/15 text-yellow-400"}`}
                  >
                    {incident.status}
                  </span>
                </div>
                <div className="space-y-3">
                  {incident.updates.map((update) => (
                    <div key={update.time} className="flex gap-4">
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Clock className="w-3.5 h-3.5 text-white/30" />
                        <span className="text-white/40 text-xs font-mono">
                          {update.time}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm">{update.msg}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
