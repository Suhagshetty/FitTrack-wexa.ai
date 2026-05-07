"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@fittrack.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MessageCircle,
    label: "Live Chat",
    value: "Available in-app",
    sub: "Mon–Fri, 9am–6pm EST",
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "24/7 Help Center",
    sub: "Always-on documentation",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "San Francisco, CA",
    sub: "Remote-first team",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.08_0.01_20)] text-white">
      {/* Header */}
      <section className="relative px-6 py-32 overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.22 35) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--orange)] uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-black uppercase leading-[0.9]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Let's <span className="text-[var(--orange)]">talk.</span>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl font-black uppercase mb-8"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Send us a message
            </h2>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/50 text-sm mb-2 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Marcus"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[var(--orange)]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-sm mb-2 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Reid"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[var(--orange)]/60 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/50 text-sm mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[var(--orange)]/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/50 text-sm mb-2 block">
                  Topic
                </label>
                <select className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white/70 focus:outline-none focus:border-[var(--orange)]/60 transition-colors appearance-none">
                  <option value="">Select a topic</option>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing</option>
                  <option>Partnership</option>
                  <option>Press & Media</option>
                </select>
              </div>
              <div>
                <label className="text-white/50 text-sm mb-2 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[var(--orange)]/60 transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 bg-[var(--orange)] hover:bg-[var(--orange-bright)] text-white font-bold rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_oklch(0.65_0.22_35/0.4)]">
                Send Message →
              </button>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2
              className="text-3xl font-black uppercase mb-8"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Contact info
            </h2>
            {contactInfo.map((info, i) => (
              <div
                key={info.label}
                className="flex items-start gap-5 border border-white/10 bg-white/[0.03] rounded-2xl p-6 hover:border-[var(--orange)]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--orange)]/15 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-[var(--orange)]" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">{info.label}</p>
                  <p className="font-bold text-lg">{info.value}</p>
                  <p className="text-white/40 text-sm">{info.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
