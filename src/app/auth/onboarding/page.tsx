"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Link from "next/link";
import { StepIndicator } from "@/components/auth/StepIndicator";
import { StepWrapper } from "@/components/auth/StepWrapper";
import { Step1CreateAccount } from "@/components/auth/Step1CreateAccount";
import { Step2PersonalDetails } from "@/components/auth/Step2PersonalDetails";
import { Step3FitnessGoals } from "@/components/auth/Step3FitnessGoals";
import { Step4ActivityLevel } from "@/components/auth/Step4ActivityLevel";
import { Step5ProfileSetup } from "@/components/auth/Step5ProfileSetup";

const TOTAL_STEPS = 5;

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const router = useRouter();

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };
  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };
  const goSkip = () => {
    if (step === TOTAL_STEPS) {
      router.push("/dashboard");
      return;
    }
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(0.08 0.01 20)" }}
    >
      {/* Background effects */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.20 0.08 35 / 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.65 0.22 35) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.22 35) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-[var(--orange)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap className="w-3.5 h-3.5 text-white fill-white" />
          </div>
          <span
            className="text-base font-black tracking-wider text-white uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            FitTrack
          </span>
        </Link>
        <Link
          href="/"
          className="text-xs text-white/30 hover:text-white/60 transition-colors"
        >
          ← Back to home
        </Link>
      </header>

      <div className="relative z-10 flex flex-1 overflow-hidden">
        {/* Left panel — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:flex lg:w-2/5 xl:w-1/2 flex-col justify-between p-12 border-r border-white/5 relative overflow-hidden"
        >
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{
              background:
                "radial-gradient(circle, oklch(0.65 0.22 35), transparent)",
            }}
          />

          <div>
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--orange)]/30 bg-[var(--orange)]/10 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] animate-pulse" />
                <span className="text-[var(--orange)] text-xs font-bold tracking-widest uppercase">
                  Onboarding
                </span>
              </div>

              {step === 1 && (
                <LeftPanel
                  headline="Join 27K+ Athletes"
                  sub="Build strength, lose weight, and crush every goal — all in one place."
                  stats={[
                    { val: "27K+", label: "Active Members" },
                    { val: "98%", label: "Goal Achievement" },
                    { val: "4.9★", label: "App Rating" },
                  ]}
                />
              )}
              {step === 2 && (
                <LeftPanel
                  headline="Personalized For You"
                  sub="Every plan is built around your body and lifestyle. No cookie-cutter routines."
                  stats={[
                    { val: "500+", label: "Exercise Library" },
                    { val: "AI", label: "Adaptive Coaching" },
                    { val: "∞", label: "Custom Plans" },
                  ]}
                />
              )}
              {step === 3 && (
                <LeftPanel
                  headline="Your Goals, Your Rules"
                  sub="Whether it's weight loss or marathon prep — we build the perfect plan around your targets."
                  stats={[
                    { val: "6", label: "Goal Categories" },
                    { val: "100%", label: "Personalized" },
                    { val: "Day 1", label: "Results Visible" },
                  ]}
                />
              )}
              {step === 4 && (
                <LeftPanel
                  headline="Every Level Welcome"
                  sub="From first-timers to pro athletes. FitTrack scales with your fitness level."
                  stats={[
                    { val: "5", label: "Activity Levels" },
                    { val: "Smart", label: "Plan Adaptation" },
                    { val: "60+", label: "Weekly Classes" },
                  ]}
                />
              )}
              {step === 5 && (
                <LeftPanel
                  headline="You're Almost There!"
                  sub="Set up your profile and step into a community that will push you further than ever."
                  stats={[
                    { val: "🎉", label: "Last Step" },
                    { val: "Free", label: "14-Day Trial" },
                    { val: "Now", label: "Start Today" },
                  ]}
                />
              )}
            </motion.div>
          </div>

          {/* Testimonial */}
          <motion.div
            key={`q-${step}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-5 rounded-2xl border border-white/8 bg-white/3"
          >
            <p className="text-white/60 text-sm leading-relaxed italic mb-3">
              &ldquo;FitTrack helped me lose 28 lbs in 4 months. The AI coach is
              insane — it feels like having a PT in your pocket.&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-xs font-black text-white">
                MJ
              </div>
              <div>
                <p className="text-white/70 text-xs font-bold">Marcus J.</p>
                <p className="text-[var(--orange)] text-[10px]">
                  Lost 28 lbs · 4 months
                </p>
              </div>
              <div className="ml-auto text-[var(--orange)] text-xs">★★★★★</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right panel — form */}
        <div className="flex-1 flex flex-col min-w-0">
          <StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} />
          <div className="flex-1 overflow-y-auto px-6 pb-8">
            <div className="max-w-md mx-auto w-full">
              <StepWrapper stepKey={step} direction={direction}>
                {step === 1 && <Step1CreateAccount onNext={goNext} />}
                {step === 2 && (
                  <Step2PersonalDetails onNext={goNext} onBack={goBack} />
                )}
                {step === 3 && (
                  <Step3FitnessGoals onNext={goNext} onBack={goBack} />
                )}
                {step === 4 && (
                  <Step4ActivityLevel
                    onNext={goNext}
                    onBack={goBack}
                    onSkip={goSkip}
                  />
                )}
                {step === 5 && (
                  <Step5ProfileSetup onBack={goBack} onSkip={goSkip} />
                )}
              </StepWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftPanel({
  headline,
  sub,
  stats,
}: {
  headline: string;
  sub: string;
  stats: { val: string; label: string }[];
}) {
  return (
    <div>
      <h2
        className="text-4xl xl:text-5xl font-black uppercase text-white leading-tight mb-4"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {headline.split(" ").map((word, i) => (
          <span key={i} className={i === 0 ? "text-[var(--orange)]" : ""}>
            {word}{" "}
          </span>
        ))}
      </h2>
      <p className="text-white/50 text-sm leading-relaxed mb-10">{sub}</p>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center p-3 rounded-xl bg-white/4 border border-white/8"
          >
            <div
              className="text-2xl font-black text-[var(--orange)] mb-1"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {s.val}
            </div>
            <div className="text-white/35 text-[10px] font-medium">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
