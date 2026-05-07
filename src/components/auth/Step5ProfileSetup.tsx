"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Bell, Dumbbell, BarChart2, Zap } from "lucide-react";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

const schema = z.object({
  username: z
    .string()
    .min(3, "Min 3 characters")
    .max(20, "Max 20 characters")
    .regex(/^[a-z0-9_]+$/, "Lowercase, numbers and _ only"),
  bio: z.string().max(120, "Max 120 characters").optional(),
});

type FormData = z.infer<typeof schema>;

interface Step5Props {
  onBack: () => void;
  onSkip: () => void;
}

export function Step5ProfileSetup({ onBack, onSkip }: Step5Props) {
  const { updateOnboarding, setUser, onboardingData } = useAuthStore();
  const router = useRouter();
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [notifications, setNotifications] = useState({
    workoutReminders: true,
    progressUpdates: true,
    weeklyReport: false,
  });
  const fileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const bioValue = watch("bio", "");

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => setAvatarPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, []);

  const fireConfetti = () => {
    const colors = ["#e05c1a", "#ff8c42", "#ffffff", "#ffd700"];
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors });
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 100,
        origin: { y: 0.5, x: 0.2 },
        colors,
        angle: 60,
      });
      confetti({
        particleCount: 60,
        spread: 100,
        origin: { y: 0.5, x: 0.8 },
        colors,
        angle: 120,
      });
    }, 200);
  };

  const onSubmit = (data: FormData) => {
    updateOnboarding({
      username: data.username,
      bio: data.bio || "",
      avatarUrl: avatarPreview || "",
      notifications,
    });
    setUser({
      id: crypto.randomUUID(),
      fullName: onboardingData.fullName || "Athlete",
      email: onboardingData.email || "",
      username: data.username,
      bio: data.bio,
      avatarUrl: avatarPreview || "",
      goals: onboardingData.goals || [],
      activityLevel: onboardingData.activityLevel || "moderately_active",
      createdAt: new Date().toISOString(),
    });
    setIsComplete(true);
    fireConfetti();
  };

  useEffect(() => {
    if (isComplete) {
      const t = setTimeout(() => router.push("/dashboard"), 2800);
      return () => clearTimeout(t);
    }
  }, [isComplete, router]);

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col items-center justify-center py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 rounded-full bg-[var(--orange)]/20 border-4 border-[var(--orange)] flex items-center justify-center mb-6"
          style={{ boxShadow: "0 0 60px oklch(0.65 0.22 35 / 0.5)" }}
        >
          <Zap className="w-10 h-10 text-[var(--orange)] fill-[var(--orange)]" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-4xl font-black uppercase text-white mb-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Welcome to <span className="text-[var(--orange)]">FitTrack!</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/50 text-base mb-8 max-w-xs"
        >
          Your fitness journey starts now. Let&apos;s crush those goals together
          🔥
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex items-center gap-2 text-white/30 text-sm"
        >
          <div className="w-4 h-4 rounded-full border-2 border-[var(--orange)] border-t-transparent animate-spin" />
          Taking you to your dashboard...
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2
          className="text-3xl lg:text-4xl font-black uppercase text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Profile <span className="text-[var(--orange)]">Setup</span>
        </h2>
        <p className="text-white/50 text-sm">
          Almost there! Set up your public profile
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Avatar upload */}
        <div className="flex flex-col items-center gap-3">
          <div
            className={`relative w-24 h-24 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden ${
              isDragging
                ? "border-[var(--orange)] bg-[var(--orange)]/15 scale-105"
                : avatarPreview
                  ? "border-[var(--orange)]"
                  : "border-white/20 bg-white/5 hover:border-[var(--orange)]/50"
            }`}
            onClick={() => fileRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
          >
            <AnimatePresence mode="wait">
              {avatarPreview ? (
                <motion.img
                  key="preview"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={avatarPreview}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-1 text-white/30"
                >
                  <Upload className="w-6 h-6" />
                  <span className="text-[10px]">Upload</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="text-white/30 text-xs text-center">
            Drag & drop or click · JPG, PNG, GIF
          </p>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              e.target.files?.[0] && handleFile(e.target.files[0])
            }
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-1.5">
            Username
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm font-bold">
              @
            </span>
            <input
              {...register("username")}
              type="text"
              placeholder="your_username"
              className={`w-full pl-8 pr-4 py-3.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-white/25 focus:outline-none focus:bg-white/8 transition-all duration-200 ${errors.username ? "border-red-500/60" : "border-white/10 focus:border-[var(--orange)]/60"}`}
            />
          </div>
          {errors.username && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              ⚠ {errors.username.message}
            </motion.p>
          )}
        </div>

        {/* Bio */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-white/60 uppercase tracking-wider">
              Bio{" "}
              <span className="text-white/25 normal-case font-normal">
                (optional)
              </span>
            </label>
            <span className="text-xs text-white/25">
              {(bioValue || "").length}/120
            </span>
          </div>
          <textarea
            {...register("bio")}
            rows={3}
            placeholder="Tell us about your fitness journey..."
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--orange)]/60 text-white text-sm placeholder:text-white/25 focus:outline-none focus:bg-white/8 transition-all duration-200 resize-none"
          />
          {errors.bio && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              ⚠ {errors.bio.message}
            </motion.p>
          )}
        </div>

        {/* Notification toggles */}
        <div>
          <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-3">
            Notifications
          </label>
          <div className="space-y-2.5">
            {[
              {
                key: "workoutReminders",
                icon: Dumbbell,
                label: "Workout Reminders",
                desc: "Daily push to stay on track",
              },
              {
                key: "progressUpdates",
                icon: BarChart2,
                label: "Progress Updates",
                desc: "Weekly summary of your gains",
              },
              {
                key: "weeklyReport",
                icon: Bell,
                label: "Weekly Report",
                desc: "Full analytics every Sunday",
              },
            ].map(({ key, icon: Icon, label, desc }) => (
              <div
                key={key}
                className="flex items-center justify-between p-3 rounded-xl bg-white/4 border border-white/8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--orange)]/15 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[var(--orange)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{label}</p>
                    <p className="text-xs text-white/35">{desc}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      [key]: !prev[key as keyof typeof prev],
                    }))
                  }
                  className={`relative w-11 h-6 rounded-full transition-all duration-300 flex-shrink-0 ${notifications[key as keyof typeof notifications] ? "bg-[var(--orange)]" : "bg-white/15"}`}
                >
                  <motion.div
                    animate={{
                      x: notifications[key as keyof typeof notifications]
                        ? 20
                        : 2,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-3.5 rounded-xl border border-white/15 text-white/60 font-bold text-sm hover:border-white/30 hover:text-white transition-all duration-200"
          >
            ← Back
          </button>
          <motion.button
            type="submit"
            disabled={!isValid}
            whileTap={{ scale: 0.98 }}
            className="flex-[2] py-3.5 rounded-xl font-bold text-base text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{
              background: isValid
                ? "linear-gradient(135deg, var(--orange), var(--orange-bright))"
                : "oklch(0.25 0.01 20)",
              boxShadow: isValid
                ? "0 0 30px oklch(0.65 0.22 35 / 0.3)"
                : "none",
            }}
          >
            <Zap className="w-4 h-4 fill-current" />
            Complete Setup
          </motion.button>
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={onSkip}
            className="text-white/30 text-sm hover:text-white/60 transition-colors underline underline-offset-2"
          >
            Skip for now
          </button>
        </div>
      </form>
    </div>
  );
}
