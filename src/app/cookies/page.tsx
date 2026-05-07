// ── COOKIES PAGE ─────────────────────────────────────────────
// Save as: src/app/cookies/page.tsx

"use client";
import { motion } from "framer-motion";

const cookieTypes = [
  {
    name: "Essential Cookies",
    required: true,
    desc: "These cookies are necessary for FitTrack to function. They enable core features like authentication, security, and session management. You cannot opt out of these.",
  },
  {
    name: "Analytics Cookies",
    required: false,
    desc: "We use analytics cookies (via PostHog) to understand how users interact with FitTrack — which features are used most, where users drop off, and how we can improve. All data is anonymized.",
  },
  {
    name: "Preference Cookies",
    required: false,
    desc: "These cookies remember your settings and preferences — like your dark/light mode choice, language, and unit system (kg vs lbs) — so you don't have to set them every visit.",
  },
  {
    name: "Marketing Cookies",
    required: false,
    desc: "With your consent, we may use cookies to show you relevant FitTrack content on other platforms. We do not sell your data to advertisers.",
  },
];

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.08_0.01_20)] text-white">
      <section className="relative px-6 py-32 border-b border-white/10 overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.22 35) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--orange)] uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-black uppercase mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Cookies Policy
          </motion.h1>
          <p className="text-white/40 text-sm">
            Last updated: November 1, 2024
          </p>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-white/70 text-lg leading-relaxed border-l-4 border-[var(--orange)] pl-6">
            Cookies are small text files stored on your device when you visit
            FitTrack. We use them to keep you logged in, remember your
            preferences, and understand how you use our platform so we can make
            it better.
          </p>
          <div className="space-y-5">
            {cookieTypes.map((cookie, i) => (
              <motion.div
                key={cookie.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{cookie.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${cookie.required ? "bg-[var(--orange)]/15 text-[var(--orange)]" : "bg-white/10 text-white/50"}`}
                  >
                    {cookie.required ? "Required" : "Optional"}
                  </span>
                </div>
                <p className="text-white/60 leading-relaxed">{cookie.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">
              Managing Your Cookie Preferences
            </h3>
            <p className="text-white/60 leading-relaxed mb-4">
              You can manage non-essential cookies at any time via your account
              settings under Privacy → Cookie Preferences. You can also control
              cookies through your browser settings, though this may affect
              platform functionality.
            </p>
            <p className="text-white/60 leading-relaxed">
              Questions? Email us at privacy@fittrack.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
