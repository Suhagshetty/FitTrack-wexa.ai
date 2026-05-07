// ── PRIVACY PAGE ──────────────────────────────────────────────────────────────
// Save as: src/app/privacy/page.tsx

"use client";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, complete your fitness profile, or contact us for support. This includes your name, email address, date of birth, fitness goals, workout data, and payment information.\n\nWe also automatically collect certain information when you use FitTrack, including device information, IP address, browser type, pages viewed, features used, and interactions with the platform.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to provide, maintain, and improve FitTrack — including personalizing your workout recommendations, generating AI-powered insights, and tracking your progress over time.\n\nWe may also use your information to communicate with you about product updates, send you marketing communications (with your consent), monitor and analyze usage patterns, and comply with legal obligations.`,
  },
  {
    title: "Data Sharing",
    content: `We do not sell your personal data. Ever. We may share your information with trusted third-party service providers who assist us in operating FitTrack (such as cloud hosting, payment processing, and analytics), but only under strict confidentiality agreements.\n\nWe may disclose your information if required by law, or if we believe disclosure is necessary to protect the rights, property, or safety of FitTrack, our users, or others.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal data for as long as your account is active or as needed to provide services. You may delete your account at any time, and we will delete your personal data within 30 days of account deletion, except where we are required to retain it for legal or compliance purposes.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, correct, or delete your personal data at any time via your account settings. You may also request a copy of all data we hold about you, opt out of marketing communications, and withdraw consent for data processing where consent is the legal basis.\n\nTo exercise any of these rights, contact us at privacy@fittrack.com.`,
  },
  {
    title: "Security",
    content: `We take security seriously. FitTrack uses industry-standard encryption (TLS 1.3) for data in transit, AES-256 encryption for data at rest, regular penetration testing, and strict access controls. Despite these measures, no system is 100% secure — we encourage you to use a strong, unique password and enable two-factor authentication.`,
  },
  {
    title: "Contact Us",
    content: `If you have questions about this Privacy Policy or how we handle your data, contact our Data Protection Officer at privacy@fittrack.com or write to us at FitTrack Inc., 123 Market Street, San Francisco, CA 94105.`,
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </motion.h1>
          <p className="text-white/40 text-sm">
            Last updated: November 1, 2024
          </p>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-white/70 text-lg leading-relaxed border-l-4 border-[var(--orange)] pl-6">
            At FitTrack, your privacy is fundamental — not an afterthought. This
            policy explains exactly what data we collect, why we collect it, and
            how you stay in control of it at all times.
          </p>
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h2
                className="text-2xl font-black uppercase mb-4 text-[var(--orange)]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {i + 1}. {s.title}
              </h2>
              {s.content.split("\n\n").map((para, j) => (
                <p key={j} className="text-white/60 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
