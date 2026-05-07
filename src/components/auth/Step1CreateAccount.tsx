"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, User, Lock, Zap } from "lucide-react";
import { useAuthStore } from "@/store";

const schema = z
  .object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

interface Step1Props {
  onNext: () => void;
}

function getStrength(password: string): {
  score: number;
  label: string;
  color: string;
} {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score <= 1) return { score, label: "Weak", color: "#ef4444" };
  if (score <= 2) return { score, label: "Fair", color: "#f97316" };
  if (score <= 3) return { score, label: "Good", color: "#eab308" };
  if (score <= 4) return { score, label: "Strong", color: "#22c55e" };
  return { score, label: "Very Strong", color: "#16a34a" };
}

export function Step1CreateAccount({ onNext }: Step1Props) {
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { updateOnboarding } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const password = watch("password", "");
  const strength = getStrength(password);

  const onSubmit = (data: FormData) => {
    updateOnboarding({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });
    onNext();
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2
          className="text-3xl lg:text-4xl font-black uppercase text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Create Your <span className="text-[var(--orange)]">Account</span>
        </h2>
        <p className="text-white/50 text-sm">
          Join 27,000+ athletes already on FitTrack
        </p>
      </div>

      {/* Google OAuth */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/25 transition-all duration-200 mb-6"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </button>

      <div className="relative flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-white/30 text-xs font-medium">
          or continue with email
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-1.5">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              {...register("fullName")}
              type="text"
              placeholder="John Doe"
              className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-white/25 focus:outline-none focus:bg-white/8 transition-all duration-200 ${
                errors.fullName
                  ? "border-red-500/60"
                  : "border-white/10 focus:border-[var(--orange)]/60"
              }`}
            />
          </div>
          {errors.fullName && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              ⚠ {errors.fullName.message}
            </motion.p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
              className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-white/25 focus:outline-none focus:bg-white/8 transition-all duration-200 ${
                errors.email
                  ? "border-red-500/60"
                  : "border-white/10 focus:border-[var(--orange)]/60"
              }`}
            />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              ⚠ {errors.email.message}
            </motion.p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-1.5">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              {...register("password")}
              type={showPw ? "text" : "password"}
              placeholder="Min. 8 characters"
              className={`w-full pl-10 pr-12 py-3.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-white/25 focus:outline-none focus:bg-white/8 transition-all duration-200 ${
                errors.password
                  ? "border-red-500/60"
                  : "border-white/10 focus:border-[var(--orange)]/60"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            >
              {showPw ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>

          {password && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-2"
            >
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="flex-1 h-1 rounded-full"
                    animate={{
                      backgroundColor:
                        i <= strength.score
                          ? strength.color
                          : "oklch(0.25 0.01 20)",
                    }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  />
                ))}
              </div>
              <p
                className="text-xs font-medium"
                style={{ color: strength.color }}
              >
                {strength.label}
              </p>
            </motion.div>
          )}

          {errors.password && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              ⚠ {errors.password.message}
            </motion.p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-1.5">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              {...register("confirmPassword")}
              type={showConfirm ? "text" : "password"}
              placeholder="Repeat your password"
              className={`w-full pl-10 pr-12 py-3.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-white/25 focus:outline-none focus:bg-white/8 transition-all duration-200 ${
                errors.confirmPassword
                  ? "border-red-500/60"
                  : "border-white/10 focus:border-[var(--orange)]/60"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            >
              {showConfirm ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              ⚠ {errors.confirmPassword.message}
            </motion.p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={!isValid}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-xl font-bold text-base text-white transition-all duration-300 mt-2 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: isValid
              ? "linear-gradient(135deg, var(--orange), var(--orange-bright))"
              : "oklch(0.25 0.01 20)",
            boxShadow: isValid ? "0 0 30px oklch(0.65 0.22 35 / 0.35)" : "none",
          }}
        >
          <Zap className="w-4 h-4 fill-current" />
          Create Account
        </motion.button>

        <p className="text-center text-white/30 text-xs pt-1">
          Already have an account?{" "}
          <a
            href="#"
            className="text-[var(--orange)] hover:underline font-medium"
          >
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
