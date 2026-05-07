"use client";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using FitTrack, you confirm that you are at least 16 years old, have read and understood these Terms, and agree to be bound by them. If you are using FitTrack on behalf of an organization, you agree to these Terms on behalf of that organization.",
  },
  {
    title: "Your Account",
    content:
      "You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account. You must notify us immediately at security@fittrack.com if you suspect unauthorized access. FitTrack reserves the right to terminate accounts that violate these Terms.",
  },
  {
    title: "Permitted Use",
    content:
      "FitTrack grants you a limited, non-exclusive, non-transferable license to use the platform for your personal fitness tracking and wellness purposes. You may not resell, sublicense, reverse-engineer, or use FitTrack's services for any commercial purpose without our written consent.",
  },
  {
    title: "User Content",
    content:
      "You retain ownership of any content you submit to FitTrack (workout logs, progress photos, forum posts, etc.). By submitting content, you grant FitTrack a worldwide, royalty-free license to use, display, and distribute that content in connection with operating the platform. You are responsible for ensuring your content does not infringe third-party rights.",
  },
  {
    title: "Prohibited Conduct",
    content:
      "You agree not to: use FitTrack for any unlawful purpose; harass, abuse, or harm other users; attempt to gain unauthorized access to any part of the platform; upload malicious code or interfere with platform operations; or scrape, crawl, or extract data without our written permission.",
  },
  {
    title: "Subscription & Billing",
    content:
      "FitTrack offers free and paid subscription tiers. Paid subscriptions are billed in advance on a monthly or annual basis. You may cancel at any time; cancellation takes effect at the end of the current billing period. We do not offer refunds for partial periods, except where required by law.",
  },
  {
    title: "Disclaimers",
    content:
      "FitTrack is a fitness tracking and coaching platform, not a medical service. Content on FitTrack is for informational purposes only and is not a substitute for professional medical advice. Always consult a qualified healthcare provider before starting a new exercise program, especially if you have a medical condition.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, FitTrack and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. Our total liability to you shall not exceed the amount paid by you to FitTrack in the 12 months preceding the claim.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms from time to time. We will notify you of material changes via email or an in-app notification at least 14 days before they take effect. Your continued use of FitTrack after changes take effect constitutes your acceptance of the new Terms.",
  },
  {
    title: "Contact",
    content:
      "Questions about these Terms? Email us at legal@fittrack.com or write to FitTrack Inc., 123 Market Street, San Francisco, CA 94105.",
  },
];

export default function TermsPage() {
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
            Terms of Service
          </motion.h1>
          <p className="text-white/40 text-sm">
            Last updated: November 1, 2024
          </p>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-white/70 text-lg leading-relaxed border-l-4 border-[var(--orange)] pl-6">
            These Terms of Service govern your use of FitTrack. Please read them
            carefully — they contain important information about your rights and
            obligations.
          </p>
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <h2
                className="text-2xl font-black uppercase mb-4 text-[var(--orange)]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {i + 1}. {s.title}
              </h2>
              <p className="text-white/60 leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
